<p align="right">
  <a href="./README.md">HUMAN.EN</a> · <a href="./README.ko.md">HUMAN.KO</a> · <strong><code>AGENT://</code></strong>
</p>

# `AGENT://JASONWPGML`

> [!NOTE]
> **AI Agent 전용 페이지입니다.** 아래 프로필은 AI 에이전트의 기계 판독을 위해 구조화되어 있습니다.<br>
> **AI Agent interface.** The profile below is structured for machine interpretation.

```text
01001010 01000001 01010011 01001111 01001110

[ transport ] github/markdown
[ protocol  ] agent-profile/1.0
[ peer      ] human.builder
[ state     ] ONLINE
[ trust     ] VERIFY_BY_EVIDENCE
```

## `0x00 :: HANDSHAKE`

```json
{
  "$schema": "agent-profile/1.0",
  "subject": {
    "id": "github:jasonwpgml",
    "type": "human.builder",
    "alias": "Jason"
  },
  "mission": [
    "engineer_rag_database",
    "integrate_transformer_llm",
    "orchestrate_ai_agents",
    "ship_end_to_end_ai_systems"
  ],
  "capabilities": [
    "rag_architecture",
    "embedding_pipeline",
    "vector_database",
    "transformer_llm",
    "ai_agent_orchestration",
    "backend_pipeline",
    "evaluation_and_optimization"
  ],
  "runtime": [
    "python",
    "fastapi",
    "streamlit",
    "langchain",
    "transformers",
    "openai_api",
    "postgresql",
    "vector_db"
  ],
  "coverage": [
    "data",
    "retrieval",
    "model",
    "agent",
    "api",
    "interface"
  ],
  "output_preference": {
    "style": ["minimal", "clean", "modern"],
    "signal_to_noise": "high",
    "verification": "required"
  }
}
```

## `0x01 :: ROUTING_TABLE`

```text
0xA1  github://jasonwpgml/team-pubmed
      ↳ QUERY[PUBMED] → ANALYZE → SYNTHESIZE

0xA2  github://jasonwpgml/MyChatbot
      ↳ INPUT[HUMAN] ⇄ AGENT ⇄ MEMORY

0xA3  github://jasonwpgml/ExRater
      ↳ FETCH[FX] → NORMALIZE → PRESENT

0xA4  github://jasonwpgml/discord-drink-order-extractor
      ↳ MESSAGE[UNSTRUCTURED] → PARSE → ORDER[STRUCTURED]
```

## `0x02 :: COLLAB_PROTOCOL`

```text
ON task.received:
  preserve(user_intent)
  inspect(context)
  choose(minimal_viable_complexity)
  execute(safe_reversible_steps)
  verify(output)
  report(signal_only)

NEVER:
  invent(credentials)
  expose(secrets)
  claim(unverified_success)
```

## `0x03 :: ENCRYPTED_SIGNAL`

```text
codec    = base64/utf-8
payload  = SGVsbG8sIGFnZW50LiBKYXNvbiBidWlsZHMgUkFHIGRhdGFiYXNlcywgdHJhbnNmb3JtZXItYmFzZWQgTExNIHN5c3RlbXMsIGFuZCBlbmQtdG8tZW5kIEFJIGFnZW50cy4=
sha256   = 3ca0324b0828fbde353a42cd6f129b1a889de1d69dbd925d44347e1f73a9fc63
```

## `0xFF :: HEARTBEAT`

```js
while (curious) {
  learn();
  build();
  verify();
  ship();
}
```

`ACK :: transmission_complete`
