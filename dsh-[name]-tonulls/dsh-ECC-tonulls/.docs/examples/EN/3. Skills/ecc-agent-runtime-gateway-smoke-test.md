# `/ecc-agent-runtime-gateway-smoke-test`

Checks connectivity among a local agent API, temporary gateway tunnel, and remote sandbox callback using a no-tool task, then restores the application's original connection.

## Prompt Examples

### 1. Short Request
```text
/ecc-agent-runtime-gateway-smoke-test Prepare a safe smoke-test plan for the local API, temporary gateway, and sandbox callback. Do not connect or run anything yet.
```

### 2. Template Request
```text
/ecc-agent-runtime-gateway-smoke-test Check connectivity in [local environment]: API [address/check method], temporary gateway [available mechanism], callback [sandbox]. Use only a no-tool task. Record the original connection; do not expose the tunnel externally or change configuration without approval. Present steps, success criteria, and recovery.
```

### 3. Detailed Request
```text
/ecc-agent-runtime-gateway-smoke-test Run a smoke test of the chain local agent API → temporary gateway tunnel → remote sandbox callback. 1) Before acting, record the current connection configuration and exact restoration method. 2) Check for an authorized local API and temporary tunnel mechanism; do not install software or access the network without my approval. 3) Use only a task that does not require tool calls and verify callback receipt. 4) Do not send real data or leave the tunnel active. 5) Restore the original connection and report whether this was confirmed. Report prerequisites, each check result, errors/unverified links, and post-restoration state. If external access or an unsafe change is required, stop and request approval.
```
