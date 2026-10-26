#!/usr/bin/env node
// AI token usage card for the profile README.
//
// Token logs live on my own machine (~/.claude, ~/.codex, ~/.gemini, Cursor's
// usage cache, ...), so GitHub Actions can't see them. Run this locally:
//
//   node scripts/ai-usage.mjs            # read logs via tokscale, rewrite card + README
//   node scripts/ai-usage.mjs --commit   # same, then git commit + push
//   node scripts/ai-usage.mjs --input usage.json   # use a saved `tokscale models --json`
//
// Other machines: save their `tokscale models --json` output (or run tokscale
// here with `--home <copied home>`) into ~/.config/ai-usage/machines/<name>.json.
// Every file there is added on top of this machine's numbers on each run.
//
// Only aggregate totals (per tool, per model) are written to the repo.
// Nothing from prompts, sessions or project paths leaves the machine.

import { execSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const opt = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};

const CLIENTS = {
  claude: "Claude Code",
  codex: "Codex",
  cursor: "Cursor",
  gemini: "Gemini CLI",
  grok: "Grok",
  opencode: "OpenCode",
  amp: "Amp",
  droid: "Droid",
  qwen: "Qwen Code",
  kimi: "Kimi",
};
const PALETTE = ["#d97757", "#7aa2f7", "#9ece6a", "#bb9af7", "#e0af68", "#7dcfff", "#f7768e"];

const MACHINES = join(homedir(), ".config/ai-usage/machines");

function parseEntries(raw, source) {
  // tokscale may print a banner before the JSON; start at the first brace.
  const data = JSON.parse(raw.slice(raw.indexOf("{")));
  if (!Array.isArray(data.entries)) throw new Error(`${source}: expected \`entries\` in tokscale JSON`);
  return data.entries;
}

function loadEntries() {
  const input = opt("--input");
  const raw = input
    ? readFileSync(input, "utf8")
    : execSync("npx -y tokscale@latest models --json", {
        encoding: "utf8",
        maxBuffer: 256 * 1024 * 1024,
        stdio: ["ignore", "pipe", "inherit"],
      });
  const entries = parseEntries(raw, input || "tokscale");
  const others = existsSync(MACHINES) ? readdirSync(MACHINES).filter((f) => f.endsWith(".json")).sort() : [];
  for (const f of others) {
    const path = join(MACHINES, f);
    entries.push(...parseEntries(readFileSync(path, "utf8"), path));
    console.log(`+ ${f}`);
  }
  return entries;
}

// Reasoning tokens are already counted inside output for OpenAI-style usage,
// so they are left out of the total to avoid double counting.
const tokensOf = (e) =>
  (e.input || 0) + (e.output || 0) + (e.cacheRead || 0) + (e.cacheWrite || 0);

function aggregate(entries) {
  const byClient = new Map();
  const byModel = new Map();
  let tokens = 0, cost = 0, messages = 0;
  for (const e of entries) {
    const t = tokensOf(e);
    tokens += t;
    cost += e.cost || 0;
    messages += e.messageCount || 0;
    const c = CLIENTS[e.client] || e.client || "Other";
    byClient.set(c, (byClient.get(c) || 0) + t);
    const m = e.model || "unknown";
    byModel.set(m, (byModel.get(m) || 0) + t);
  }
  const sorted = (map) =>
    [...map].map(([name, t]) => ({ name, tokens: t })).filter((x) => x.tokens > 0)
      .sort((a, b) => b.tokens - a.tokens);
  return {
    // Local date (sv-SE formats as YYYY-MM-DD); toISOString would be UTC.
    updated: new Date().toLocaleDateString("sv-SE"),
    tokens,
    cost: Math.round(cost),
    messages,
    clients: sorted(byClient),
    models: sorted(byModel).slice(0, 5),
  };
}

function compact(n) {
  const units = [[1e12, "T"], [1e9, "B"], [1e6, "M"], [1e3, "K"]];
  for (const [v, u] of units) {
    if (n >= v) {
      const x = n / v;
      return `${x >= 100 ? x.toFixed(0) : x >= 10 ? x.toFixed(1) : x.toFixed(2)}${u}`;
    }
  }
  return String(n);
}
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

function renderSvg(s) {
  const W = 1000, H = 330, X = 48, BAR_W = 520;
  const clients = s.clients.length > 6
    ? [...s.clients.slice(0, 5), { name: "Other", tokens: s.clients.slice(5).reduce((a, c) => a + c.tokens, 0) }]
    : s.clients;

  let x = X;
  const segs = clients.map((c, i) => {
    const w = s.tokens ? (c.tokens / s.tokens) * BAR_W : 0;
    const seg = `<rect class="seg" style="animation-delay:${0.15 + i * 0.12}s" x="${x.toFixed(1)}" y="196" width="${Math.max(w - 2, 0).toFixed(1)}" height="14" rx="3" fill="${PALETTE[i % PALETTE.length]}"/>`;
    x += w;
    return seg;
  }).join("\n    ");

  const legend = clients.map((c, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const lx = X + col * 270, ly = 246 + row * 26;
    const pct = s.tokens ? Math.round((c.tokens / s.tokens) * 100) : 0;
    const label = pct === 0 && c.tokens > 0 ? "<1%" : `${pct}%`;
    return `<g transform="translate(${lx} ${ly})"><rect width="10" height="10" y="-9" rx="2" fill="${PALETTE[i % PALETTE.length]}"/><text class="lg" x="18">${esc(c.name)}</text><text class="lg dim" x="250" text-anchor="end">${esc(label)}</text></g>`;
  }).join("\n    ");

  const top = s.models[0]?.tokens || 1;
  const models = s.models.map((m, i) => {
    const y = 104 + i * 42;
    const w = (m.tokens / top) * 300;
    return `<g transform="translate(640 ${y})"><text class="md">${esc(m.name)}</text><text class="md dim" x="312" text-anchor="end">${compact(m.tokens)}</text><rect y="10" width="312" height="4" rx="2" fill="#21262d"/><rect class="seg" style="animation-delay:${0.3 + i * 0.1}s" y="10" width="${w.toFixed(1)}" height="4" rx="2" fill="#8b949e"/></g>`;
  }).join("\n    ");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="t d">
  <title id="t">AI tokens used by Jason</title>
  <desc id="d">${compact(s.tokens)} tokens across ${esc(s.clients.map((c) => c.name).join(", "))}, as of ${s.updated}</desc>
  <!-- (c) 2026 Jason · github.com/jasonwpgml/jasonwpgml · CC BY 4.0 · generated by scripts/ai-usage.mjs -->
  <style>
    text { font-family: "Segoe UI", -apple-system, "Helvetica Neue", sans-serif; fill: #e6edf3; }
    .k { font-size: 14px; fill: #8b949e; letter-spacing: .08em; text-transform: uppercase; }
    .big { font-size: 64px; font-weight: 700; letter-spacing: -.02em; }
    .unit { font-size: 22px; fill: #8b949e; }
    .sub { font-size: 15px; fill: #8b949e; }
    .lg { font-size: 14px; }
    .md { font-size: 14px; font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; }
    .dim { fill: #8b949e; }
    .seg { transform-box: fill-box; transform-origin: left; animation: grow .9s cubic-bezier(.2,.7,.2,1) both; }
    @keyframes grow { from { transform: scaleX(0); } }
    @media (prefers-reduced-motion: reduce) { .seg { animation: none; } }
  </style>
  <rect width="${W}" height="${H}" rx="20" fill="#0d1117"/>
  <rect x=".5" y=".5" width="${W - 1}" height="${H - 1}" rx="19.5" fill="none" stroke="#30363d"/>
  <text class="k" x="${X}" y="58">Tokens through AI tools · all time</text>
  <text x="${X}" y="132"><tspan class="big">${compact(s.tokens)}</tspan><tspan class="unit" dx="10">tokens</tspan></text>
  <text class="sub" x="${X}" y="166">≈ $${s.cost.toLocaleString("en-US")} at API prices · ${s.messages.toLocaleString("en-US")} messages</text>
  <rect x="${X}" y="196" width="${BAR_W}" height="14" rx="3" fill="#21262d"/>
    ${segs}
    ${legend}
  <text class="k" x="640" y="58">Top models</text>
    ${models}
  <text class="sub" x="${W - 48}" y="${H - 22}" text-anchor="end" font-size="12">via tokscale · updated ${s.updated}</text>
</svg>
`;
}

function patchReadme(file, block) {
  const path = join(ROOT, file);
  const src = readFileSync(path, "utf8");
  const re = /(<!--START_SECTION:ai_usage-->)[\s\S]*?(<!--END_SECTION:ai_usage-->)/;
  if (!re.test(src)) throw new Error(`${file}: ai_usage markers not found`);
  writeFileSync(path, src.replace(re, `$1\n${block}\n$2`));
}

const stats = aggregate(loadEntries());
if (!stats.tokens) throw new Error("no token usage found — is tokscale reading your logs?");

writeFileSync(join(ROOT, "assets/ai-usage.json"), JSON.stringify(stats, null, 2) + "\n");
writeFileSync(join(ROOT, "assets/ai-usage.svg"), renderSvg(stats));

// The whole section lives between the markers, so the profile shows nothing
// until the first real run.
const tools = stats.clients.map((c) => c.name);
const list = (names, and) => names.length > 1 ? `${names.slice(0, -1).join(", ")}${and}${names.at(-1)}` : names[0];
const img = (alt) => `<img src="./assets/ai-usage.svg" alt="${alt}" width="100%">`;
const TOKSCALE = "[tokscale](https://github.com/junhoyeo/tokscale)";
patchReadme("README.md", `## Tokens I've burned

Everything ${list(tools, " and ")} have read and written for me, summed from local logs
with ${TOKSCALE}. Only the totals leave my machine.

${img(`${compact(stats.tokens)} tokens through AI coding tools, as of ${stats.updated}`)}
`);
patchReadme("README.ko.md", `## 지금까지 태운 토큰

AI 도구(${list(tools, ", ")})가 저 대신 읽고 쓴 토큰을 ${TOKSCALE}로 로컬 로그에서 합산했습니다.
밖으로 나가는 건 합계뿐입니다.

${img(`${stats.updated} 기준 AI 코딩 도구로 쓴 토큰 ${compact(stats.tokens)}`)}
`);

console.log(`${compact(stats.tokens)} tokens · ~$${stats.cost} · ${stats.clients.map((c) => c.name).join(", ")}`);

if (flag("--commit")) {
  const git = (cmd) => execSync(`git ${cmd}`, { cwd: ROOT, stdio: "inherit" });
  git("add assets/ai-usage.svg assets/ai-usage.json README.md README.ko.md");
  try {
    git(`commit -m "chore: update AI token usage (${stats.updated})"`);
    git("push");
  } catch {
    console.log("nothing to commit");
  }
}
