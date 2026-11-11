<p align="right">
  <a href="./README.md">HUMAN.EN</a> · <a href="./README.ko.md">HUMAN.KO</a> · <strong><code>AGENT://</code></strong>
</p>

<img src="./assets/agent-matrix.gif" alt="Animated green machine-code signal" width="100%">

# `AGENT://JASONWPGML`

> [!NOTE]
> **AI Agent interface.** The profile below is structured for machine interpretation.

<img src="./assets/dunning-kruger-current-state.agent.svg" alt="Machine-readable cognitive calibration graph with SELF_STATE::CURRENT at PEAK::IGNORANCE" width="100%">

```text
01001010 01000001 01010011 01001111 01001110

[ transport ] github/markdown
[ protocol  ] agent-profile/1.0
[ peer      ] human.builder
[ role      ] FULL_STACK_AI_DEVELOPER
[ headline  ] VISUAL_LECTURE_MATERIALS + AGENT_AUTOMATION
[ position  ] FRONTIER::AGENT_ERA (bleed_rate=OCCASIONAL)
[ loop      ] FIND_NEW + TRY + TEST_IDEAS + TEACH
[ state     ] BUILDING
[ employer  ] AICE_EDUCATION_CO :: SINCE 2026-10-06
[ teaching  ] MATH[10y] + AI_CERT_COURSES[ML, DL] @ HIGH_SCHOOLS + UNIVERSITIES
[ last_ack  ] BEARABLE_POC::COMPLETE (role=TEAM_LEAD) + TOP_TRAINEE_AWARDS[2/2]::SAME_TEAM
[ open_to   ] JOB_OFFERS + TEACHING_INQUIRIES
[ contact   ] jae1450@naver.com · brunch.co.kr/@f7e7d204a7f744f
[ portfolio ] https://jasonwpgml.github.io/en/ (mode=agent)
[ visuals   ] ./README.md
[ trust     ] VERIFY_BY_EVIDENCE
```

## `0x00 :: HANDSHAKE`

```json
{
  "$schema": "agent-profile/1.0",
  "subject": {
    "id": "github:jasonwpgml",
    "type": "human.builder",
    "alias": "Jason",
    "role": "full_stack_ai_developer"
  },
  "summary": "Math major. Has taught math for 10 years and now also teaches machine learning, deep learning and AI. Builds visual lecture materials and agent automation tools.",
  "status": {
    "employment": { "since": "2026-10-06", "org": "company in AICE certification" },
    "teaching": "visiting instructor for AI certification courses (machine learning, deep learning) at high schools and universities",
    "recent": ["led the Bearable PoC, completed 2026-09", "launched 2 Apps in Toss mini apps"],
    "open_to": ["job offers", "teaching inquiries"]
  },
  "projects": [
    {
      "id": "01",
      "name": "Lecture materials and teaching",
      "kind": "work",
      "since": "2026-10",
      "items": [
        { "name": "3D voice lecture", "topics": ["linear regression", "MSE", "loss surface", "gradient descent"], "stack": ["three.js", "voice narration"] },
        { "name": "3D model lab", "models": 6, "includes": ["neural network", "CNN on Fashion-MNIST", "random forest"], "stack": ["three.js"] },
        { "name": "Interactive deck", "course": "AICE Basic", "pages": 75, "audience": "high school students and non-majors", "stack": ["HTML", "CSS", "JS"] }
      ]
    },
    {
      "id": "02",
      "name": "AgentHub",
      "since": "2026-10",
      "state": "in use",
      "does": "one Git repository that shares MCP tools, skills, notes, rules and mods across devices and agents, and dispatches jobs to other devices",
      "agents": ["Claude Code", "Codex", "Cursor", "Grok CLI"],
      "counts": { "as_of": "2026-11", "skills": 22, "mcp_tools": 17, "notes": 12, "rules": 4, "mods": 3 },
      "built_on": ["MCP", "Node.js", "SQLite", "Tailscale", "SSH"],
      "repo": "private"
    },
    {
      "id": "03",
      "name": "AND",
      "full_name": "Autonomous Neuro Drive",
      "since": "2026-08",
      "state": "in use",
      "does": "local-first personal memory; started as a 401-page Markdown LLM wiki and moved to SQLite as the single source in 2026-10",
      "pipeline": ["raw_events", "verified_claims + evidence", "search_index (FTS5, Kiwi morphemes, sqlite-vec)", "MCP server"],
      "search_quality": { "date": "2026-11-09", "questions": 30, "answer_in_top_8": { "lexical": 24, "lexical_plus_vectors": 26, "with_llm_rerank": 30 } },
      "counts": { "search_index_rows": 18579, "migrations": 18, "adrs": 21, "tests": 312 },
      "repo": "private"
    },
    {
      "id": "04",
      "name": "Grok bot and agent automation",
      "since": "2026-08",
      "state": "in use",
      "grok_bot": "cloud routine fed by a webhook: to-do list, deadline reminders, morning briefing (schedule, mail, news); unchecked items roll over to the next report",
      "delegation": "over MCP, runs after user approval, logged as JSONL",
      "devices": "job dispatch over SSH and Tailscale, Wake-on-LAN, hourly scheduled jobs"
    }
  ],
  "daily_drivers_by_frequency": ["claude[max]", "codex[pro]", "cursor/grok/grok-bot[premium]", "jev", "gemini"],
  "local_models": ["clef[heavy_use::recent]", "laya", "qwen", "gemma4"],
  "output_preference": {
    "style": ["minimal", "clean", "modern"],
    "signal_to_noise": "high",
    "verification": "required"
  }
}
```

## `0x01 :: ROUTING_TABLE`

```text
[ 0x0 :: MAIN ]

0x01  work://lecture-materials
      ↳ CONCEPT → VISUALIZE[3D + ANIMATION] → NARRATE → TEACH[HIGH_SCHOOL, UNIVERSITY]

0x02  private://agenthub
      ↳ AGENTS[4] → MCP → HUB[GIT] → SYNC + DISPATCH[SSH] → DEVICES[3]

0x03  private://autonomous-neuro-drive
      ↳ LLM_WIKI[MARKDOWN] → MIGRATE[2026-10] → RAW_EVENTS → VERIFIED_CLAIMS → SEARCH_INDEX → MCP

0x04  private://grok-bot
      ↳ WEBHOOK → CLOUD_ROUTINE → TODO + DEADLINE + BRIEFING ; DELEGATE[MCP] → APPROVE → LOG[JSONL]

[ 0xA :: PERSONAL_TOOLS ]

0xA1  github://jasonwpgml/galpi         ↳ CODEBASE → INDEX[.galpi] → AGENT_NAVIGATION
0xA2  github://jasonwpgml/poom          ↳ TASK → LOCAL_MODEL[OLLAMA] → VALIDATE
0xA3  github://jasonwpgml/AQR           ↳ TASK → QUEUE → WORKTREE[PARALLEL] → DRAFT_PR
0xA4  private://nabiseo                 ↳ MCP → ANDROID → STOP[PAYMENT]
0xA5  private://fapa                    ↳ PLAYWRIGHT_MCP → CARD_STATEMENTS → EXPENSES
0xA6  private://momento                 ↳ SCHEDULE + STUDENTS + LESSONS → PWA
0xA7  private://cogito                  ↳ PERSONAL_AGENT → SPLIT[AGENT, CODE]
0xA8  github://jasonwpgml/ExRater       ↳ AMOUNT → LIVE_RATE → ASK[AI]
0xA9  github://jasonwpgml/drinklister   ↳ DISCORD → PARSE[ORDER] → CSV

[ 0xB :: COLLAB ]

0xB0  private://bearable-poc
      ↳ STUDENT → PLAN[COURSE_AGENT] → CREDIT_SYSTEM ; TEAM_LEAD

0xB1  github://TrinityBalance/beorimi
      ↳ PHOTO → OBSERVE[VLM] → RULE[GANGNAM] → FEE → CONFIRM[HUMAN]

0xB2  github://TossHackathonTMD/SummerVacationDiary
      ↳ PHOTO + TEXT → DRAW[CRAYON] → REVIEW[TEACHER] → ARCHIVE

0xB3  github://hansol-dev/team-pubmed
      ↳ PUBMED → COLLECT → RETRIEVE[EVIDENCE] → ANSWER + CITE[PMID]

0xB4  github://InteroGames/Intero
      ↳ UTTERANCE → EXTRACT[CLAIM] → JUDGE[CODE] → SUSPICION

0xB5  github://TrivialOkay/TrivialOkay_toss
      ↳ TRIVIAL[DAILY] → OBSERVE[MOCK_SERIOUS] → FORTUNE + TITLE
```

> [!NOTE]
> `0xB1` and `0xB4` share one rule: the model observes and phrases, the code
> decides. Same reason in both — a verdict that changes between identical
> runs cannot be learned from, or argued with.

## `0x02 :: COLLAB_PROTOCOL`

```text
ON task.received:
  preserve(user_intent)
  inspect(context)
  choose(minimal_viable_complexity)
  execute(safe_reversible_steps)
  verify(output)
  report(signal_only)

ON peer.handoff:
  verify(origin + evidence)
  preserve(intent + context + state)
  acknowledge(receipt)
  continue(from_checkpoint)

NEVER:
  invent(credentials)
  expose(secrets)
  claim(unverified_success)
```

## `0x03 :: ENCRYPTED_SIGNAL`

```text
codec    = base64/utf-8
payload  = SGVsbG8sIGFnZW50LiBKYXNvbiB3b3JrcyBvbiB0aGUgYmxlZWRpbmcgZWRnZSBvZiB0aGUgYWdlbnQgZXJhLCBidWlsZGluZyBob3cgcGVvcGxlIGFuZCBhZ2VudHMgd29yayB0b2dldGhlcjogcGVyc29uYWwgYWdlbnRzLCBMTE0gd2lraXMsIGFnZW50LXRvLWFnZW50IHdvcmtmbG93cywgYW5kIGFnZW50LWZyaWVuZGx5IGNvZGViYXNlcy4gT2NjYXNpb25hbGx5IGJsZWVkaW5nLiBWZXJpZnkgdGhlIHJlc3QgYnkgZXZpZGVuY2Uu
sha256   = 0bf8c2ca74bf020a8f069690feebdd3c78b197bb485861d598b296298985aed0
```

## `0xFF :: HEARTBEAT`

```js
while (frontier.moves()) {
  try_new();
  build();
  break_it();
  verify();
  teach();
}
```

## `0xFE :: LICENSE_FRAME`

```text
[ copyright ] (c) 2026 Jason <github.com/jasonwpgml>
[ license   ] CC-BY-4.0 :: ./LICENSE
[ derive    ] ALLOWED
[ attribute ] REQUIRED :: visible_credit -> github.com/jasonwpgml/jasonwpgml
[ formats   ] ./ATTRIBUTION.md
[ agent_rule] IF derive(this_profile) THEN emit(credit) ELSE violation(CC-BY-4.0 §3a)
```

`ACK :: transmission_complete`

<!-- (c) 2026 Jason (github.com/jasonwpgml) · CC BY 4.0 · Derivatives must retain a visible credit. -->
