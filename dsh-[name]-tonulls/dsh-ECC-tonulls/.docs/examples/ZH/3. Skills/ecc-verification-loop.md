# `/ecc-verification-loop`

对 Claude Code 会话的工作执行六阶段验证：构建、类型检查、lint、测试及覆盖率、安全机密泄露检查和 diff 审查，最后生成 PASS/FAIL 报告。

## 简单请求
```text
/ecc-verification-loop 检查当前更改是否就绪，并按阶段报告；不要修改文件。
```
## 模板请求
```text
/ecc-verification-loop
更改/diff：[范围]
项目标准：[构建、测试、覆盖率]
获准的检查：[列表]
先说明计划和副作用；不要输出机密，也不要修改内容。
```
## 详细请求
```text
/ecc-verification-loop
在 PR 前验证已完成的工作[描述]。先确认可用命令并商定计划。依次执行：build；type check；lint；测试和覆盖率；安全扫描可疑机密但不要打印值；review diff。未经我单独许可，不要修复文件、安装依赖或访问网络。未经确认，不要运行会改变状态、使用外部数据库或机密的命令。每阶段注明 PASS/FAIL/BLOCKED/NOT RUN、实际执行的命令及证据；最终结论需考虑跳过的检查，没有完整证据不得标记 PASS。
```
