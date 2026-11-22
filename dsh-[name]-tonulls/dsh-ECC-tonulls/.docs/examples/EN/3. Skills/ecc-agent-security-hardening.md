# `/ecc-agent-security-hardening`

Provides defensive guidance for agent systems handling untrusted content, invoking tools, writing files, managing run identifiers, or operating with credentials. Not intended for general web application security or offensive testing.

## Prompt Examples

### 1. Short Request
```text
/ecc-agent-security-hardening Conduct a defensive analysis of trust boundaries and tool permissions in this agent runtime. Use confirmed evidence only; make no changes and perform no offensive testing.
```

### 2. Template Request
```text
/ecc-agent-security-hardening Review [agent runtime/tool gateway/memory service] in [path/description]. Consider untrusted input, tool calls, workspace writes, runtime identifiers, and credentials. Source/configuration review only; do not run exploits or modify files. Provide risks with evidence and mitigations.
```

### 3. Detailed Request
```text
/ecc-agent-security-hardening Conduct a bounded security analysis of [agent component]. 1) Trace untrusted content through source to the model, tools, filesystem, and memory services. 2) Check permission boundaries, argument validation, tenant isolation, run-identifier handling, and secret protection—only mechanisms relevant to the component. 3) Do not test with adversarial prompts, access external systems, or change code. 4) For each conclusion, state location and evidence, impact scenario, severity, and a specific defensive recommendation; mark unknowns as unverified. Do not generalize conclusions to ordinary web application security.
```
