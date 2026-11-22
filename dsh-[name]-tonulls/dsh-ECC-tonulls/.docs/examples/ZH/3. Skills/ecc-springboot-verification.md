# `/ecc-springboot-verification`

分阶段验证 Spring Boot 项目：Maven/Gradle 构建、SpotBugs/PMD/Checkstyle 静态分析、测试和覆盖率、依赖/机密检查以及 diff 审查。

## 简单请求
```text
/ecc-springboot-verification 为此 Spring Boot 更改准备就绪报告；先检查可用的验证方式，不要修改任何内容。
```
## 模板请求
```text
/ecc-springboot-verification
更改：[分支/diff]
构建工具：[Maven/Gradle]
覆盖率/发布标准：[条件]
执行可用的验证阶段；未经确认，不要安装工具或修复文件；注明实际运行的内容。
```
## 详细请求
```text
/ecc-springboot-verification
为 Spring Boot 更改[描述]准备可审计的 readiness 报告。先确认可用命令和环境边界。然后分阶段检查：Maven/Gradle 构建；SpotBugs、PMD、Checkstyle；单元测试和可用的 Testcontainers 测试及 JaCoCo；安全分析依赖和机密泄露，但不要输出机密值；查看 diff。未经单独许可，不要访问网络、安装工具、部署或修改文件。如果命令需要外部数据库/机密或会更改状态，暂停并请求确认。报告需为每阶段列出 PASS/FAIL/BLOCKED/NOT RUN、准确命令和实际结果、限制及总体就绪评估。
```
