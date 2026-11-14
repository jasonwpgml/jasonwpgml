<p align="center">
  <a href="https://jasonwpgml.github.io/en/"><img src="./assets/jason-banner.svg" alt="Jason profile banner" width="100%" /></a>
</p>

<p align="center">
  2026 portfolio: <a href="https://jasonwpgml.github.io/en/">jasonwpgml.github.io</a>
</p>

<p align="right">
  <strong>English</strong> · <a href="./README.ko.md">한국어</a> · <a href="./README.agent.md"><code>AGENT://</code></a>
</p>

# Jason

**Visual lecture materials and agent automation**

I’m Jason, an explorer at the frontier of knowledge.<br>
Every day I look for new technology, try it myself, and test the ideas that come from it.<br>
I majored in math and have been teaching for 10 years. Besides math, I now also teach machine learning, deep learning and AI.

Job offers and teaching inquiries are both welcome.<br>
[jae1450@naver.com](mailto:jae1450@naver.com) · [Brunch](https://brunch.co.kr/@f7e7d204a7f744f) · [Portfolio](https://jasonwpgml.github.io/en/) · [Projects below](#projects)

## News

- **2026.10.06** Joined an AICE education company; teaching ML and DL certification courses
- **2026.09** Bearable PoC completed (team lead)
- **2026.07 – 08** Two Apps in Toss mini apps launched

## Where I think I am

<img src="./assets/dunning-kruger-current-state.en.svg" alt="Dunning–Kruger curve with a red marker placing my current state at the summit of Mount Stupid" width="100%">

## What I reach for

**Daily drivers**, most-used first:
`Claude (Max)` → `Codex (Pro)` → `Cursor / Grok / grok-bot (Premium)` → `jev` → `Gemini`

**Running locally:** `clef` (using this one a lot lately) · `laya` · `Qwen` · `Gemma 4`

**Building with:** `MCP` · `LangGraph` · `LangChain` · `OpenAI API` · `Transformers` · `RAG` · `pgvector` · `Multi-agent Systems` · `Long-term Memory` · `Event Store` · `Data Provenance` · `Streamlit`

**Interests:** `Context sharing and handoff between agents` · `Agent-friendly codebases` · `LLM wikis` · `Raw records, event stores, search indexes` · `Local vs. cloud boundaries` · `New models and agent tools`

<p>
  <img src="https://skillicons.dev/icons?i=python,fastapi,postgres,sqlite,nodejs,typescript,react,vite,supabase,docker,git,githubactions" alt="Python, FastAPI, PostgreSQL, SQLite, Node.js, TypeScript, React, Vite, Supabase, Docker, Git, and GitHub Actions" />
</p>

<!--START_SECTION:ai_usage-->
## Tokens I've burned

Everything Claude Code, Codex, Cursor and Grok have read and written for me, summed from local logs
with [tokscale](https://github.com/junhoyeo/tokscale). Only the totals leave my machine.

<img src="./assets/ai-usage.svg" alt="11.6B tokens through AI coding tools, as of 2026-11-14" width="100%">

<!--END_SECTION:ai_usage-->

## Contributions

![GitHub profile 3D contributions](./profile-3d-contrib/profile-night-rainbow.svg)

## Projects

### 01 Lecture materials and teaching

AI education company · Course materials, teaching · AI certification courses at high schools and universities · 2026.10 –

#### 3D voice lecture

<img src="./assets/lecture-3d-gradient.webp" alt="Gradient descent scene from the 3D linear regression lecture. Over a purple loss surface, the update rule subtracts learning rate times gradient from the current W and b." width="100%">

<sub>Gradient descent: updating W and b on the loss surface</sub>

`Linear regression` `MSE` `Loss surface` `Gradient descent` `three.js` `Voice narration`

#### 3D model lab

<table>
  <tr>
    <td width="33%"><img src="./assets/lecture-neural.webp" alt="3D neural network lab. Nodes and links run from 8 inputs through three hidden layers to a predicted house price of 148,756 dollars." width="100%"></td>
    <td width="33%"><img src="./assets/lecture-cnn.webp" alt="3D CNN lab. A 28 by 28 clothing image passes through convolution and pooling layers into 10 class probabilities." width="100%"></td>
    <td width="33%"><img src="./assets/lecture-forest.webp" alt="3D random forest view. 32 trees stand in rows, each with its prediction path marked in blue." width="100%"></td>
  </tr>
  <tr>
    <td><sub>Neural network: forward and backward pass</sub></td>
    <td><sub>CNN: filters and feature maps</sub></td>
    <td><sub>Random forest: the average of 32 trees</sub></td>
  </tr>
</table>

`6 models` `Trained on real data` `Fashion-MNIST` `Step-through calculation` `three.js`

#### Interactive deck

<table>
  <tr>
    <td width="50%"><img src="./assets/lecture-datatype.webp" alt="Data type slide. A horizontal tree splits data into numeric, string, categorical and boolean types with example values." width="100%"></td>
    <td width="50%"><img src="./assets/lecture-scaling.webp" alt="Scaling slide. Scatter plots before and after normalization sit side by side, tracking how point B moves." width="100%"></td>
  </tr>
  <tr>
    <td><sub>Data type tree</sub></td>
    <td><sub>Before and after scaling</sub></td>
  </tr>
</table>

`AICE Basic` `For high school students and non-majors` `75 pages` `Step-by-step animation` `HTML, CSS, JS` `Apple Pencil annotation`

### 02 AgentHub

Personal project · In use · 2026.10 –

<img src="./assets/agenthub.en.svg" alt="AgentHub architecture. Claude Code, Codex, Cursor and Grok CLI connect to AgentHub over MCP. AgentHub reaches the MacBook, the Samsung laptop and the desktop through Git sync and SSH job dispatch." width="100%">

`MCP` `Agent Skills` `Node.js` `SQLite` `Tailscale` `SSH` `REST, OpenAPI`

<img src="./assets/agenthub-discovery.webp" alt="Agent Hub screen for importing installed items. A left menu lists dashboard, tools, skills and MCP servers; the center shows search results for the reduce-ai-cliches skill and where it is installed for Codex and Claude Code." width="100%">

<sub>Searching installed skills and tools</sub>

`Web admin screen` `Skill search and sharing` `One-time link login` `Private repo`

### 03 AND

Autonomous Neuro Drive · In use · 2026.08 –

<img src="./assets/and.en.svg" alt="How AND changed. A 401-page Markdown LLM wiki became a single SQLite source in October 2026. Verified claims and evidence are extracted from raw records, pass through a unified search index, and are served by an MCP server. The wiki remains as a derived view." width="100%">

`Local-first` `SQLite` `FTS5` `sqlite-vec` `Kiwi morphological analysis` `Ollama` `MCP`

<img src="./assets/and-quality.en.svg" alt="AND search quality. Questions with a correct answer in the top 8, out of 30: lexical 24, lexical plus vectors 26, with LLM reranking 30. 18,579 search index rows, 18 migrations, 21 ADRs, 312 tests." width="100%">

`Hybrid search` `snowflake-arctic-embed2` `Abstains when there is no answer` `Private repo`

### 04 Grok bot and agent automation

Personal automation · In use · 2026.08 –

<img src="./assets/grokbot.en.svg" alt="Grok bot connections. To-dos from coding agents and AgentHub alerts reach the Grok bot cloud routine through a webhook, and the bot sends out the to-do list, deadline reminders and a morning briefing. Jobs are delegated over MCP and the results come back." width="100%">

`MCP` `Webhook` `Cloud agent` `Approval gate` `JSONL delegation log`

<img src="./assets/dispatch.en.svg" alt="Job dispatch across devices. The MacBook sends jobs to the Samsung laptop and the desktop over SSH and Tailscale and collects the results. The Samsung laptop wakes the desktop with Wake-on-LAN and hands it GPU work. Below, one hour of scheduled jobs." width="100%">

`agent_dispatch` `Tailscale` `SSH` `Wake-on-LAN` `Task Scheduler`

### 05 Other projects

#### Team projects

| Project | Period, role | Keywords |
| --- | --- | --- |
| Bearable PoC | 2026.08 – 09<br>Team of 5, team lead | `Course-planning agent` `High school credit system` `Both top-trainee awards went to our team` `React` `Vite` `Vercel` · Company-linked, private repo |
| [Publium](https://github.com/hansol-dev/team-pubmed) | 2026.07<br>Team of 2, 8 days<br>Backend, search agent | `PubMed` `PMID citations` `FastAPI` `LangChain tool calling` `Supabase Postgres` · [Service](https://team-pubmed.vercel.app) |
| [Beorimi](https://github.com/TrinityBalance/beorimi) | 2026.08<br>Team of 3, 28 hours<br>Team lead, backend | `Multi-item VLM detection` `Structured Outputs` `Postgres queue` `Next.js` `Supabase` · [Service](https://frontend-delta-red-74.vercel.app/) |
| [My Summer Vacation Diary](https://github.com/TossHackathonTMD/SummerVacationDiary)<br>[Byeolil](https://github.com/TrivialOkay/TrivialOkay_toss) | 2026.07 – 08<br>Officially launched<br>Planning lead, team lead | `Apps in Toss mini apps` `Crayon picture diary` `Fortunes and titles` `React` `TypeScript` `three.js` |
| [Intero](https://github.com/InteroGames/Intero) | 2026.08 | `Interrogation game` `No dialogue options` `LLM reads statements, code decides` |

#### Personal tools

| Tool | Keywords |
| --- | --- |
| [Galpi](https://github.com/jasonwpgml/galpi) | `Code navigation for coding agents` `.galpi index` `Claude Code, Codex` `A/B experiments` |
| [Poom](https://github.com/jasonwpgml/poom) | `Local model delegation` `Ollama` `Result validation` |
| [AQR](https://github.com/jasonwpgml/AQR) | `AI task queue` `Priorities, dependencies` `Parallel git worktrees` `Draft PRs` |
| Nabiseo | `MCP` `Android automation` `Payment blocked` `Private` |
| FAPA | `Playwright MCP` `Card statement collection` `Expense tracking` `Private` |
| Momento | `Tutoring schedule PWA` `Tutor, student, guardian` `Solo build and operation` `Private` |
| cogito | `Personal AI agent` `Agent vs. code experiments` `Private` |
| [ExRater](https://github.com/jasonwpgml/ExRater) | `Live exchange rates` `Ask AI about rates` |
| [drinklister](https://github.com/jasonwpgml/drinklister) | `Discord drink orders` `Desktop GUI` `CSV export` |

## License

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](./LICENSE)

© 2026 Jason ([@jasonwpgml](https://github.com/jasonwpgml)). Original content in
this repo is licensed under [CC BY 4.0](./LICENSE) — reuse and adapt freely, but
**keep a visible credit** that your work is based on this repository. Ready-made
credit snippets live in [ATTRIBUTION.md](./ATTRIBUTION.md).

<!-- profile-readme-refresh -->
<!-- © 2026 Jason (github.com/jasonwpgml) · CC BY 4.0 · If you adapt this profile, keep this notice or an equivalent credit. -->
