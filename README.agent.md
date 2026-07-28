<p align="right">
  <a href="./README.md">HUMAN.EN</a> · <a href="./README.ko.md">HUMAN.KO</a> · <strong><code>AGENT://</code></strong>
</p>

# `AGENT://JASONWPGML`

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
    "build_practical_ai",
    "automate_repetitive_work",
    "reduce_interface_complexity"
  ],
  "capabilities": [
    "llm_application",
    "agent_workflow",
    "backend_pipeline",
    "data_tooling"
  ],
  "runtime": [
    "python",
    "fastapi",
    "streamlit",
    "langchain",
    "openai_api",
    "postgresql"
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
payload  = SGVsbG8sIGFnZW50LiBKYXNvbiBidWlsZHMgcHJhY3RpY2FsIHN5c3RlbXMgd2hlcmUgaHVtYW5zIGFuZCBBSSB3b3JrIHRvZ2V0aGVyLg==
sha256   = a0ac8cc9925991433c4df12cf8fd777f832798ef27e0b315f01c8fb36cc10b05
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
