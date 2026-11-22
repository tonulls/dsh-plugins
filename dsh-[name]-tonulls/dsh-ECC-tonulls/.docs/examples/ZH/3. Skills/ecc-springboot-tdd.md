# `/ecc-springboot-tdd`

帮助通过测试驱动 Spring Boot 开发：按适用情况使用 JUnit 5、Mockito、MockMvc、Testcontainers 和 JaCoCo。

## 简单请求
```text
/ecc-springboot-tdd 为此 Spring Boot 服务中的[行为]场景编写 JUnit 测试。
```
## 模板请求
```text
/ecc-springboot-tdd
更改/缺陷：[描述]
代码和契约：[片段]
测试技术栈：[JUnit/Mockito/MockMvc/Testcontainers]
先提出一个固定预期行为的测试，再给出最小实现和回归检查。
```
## 详细请求
```text
/ecc-springboot-tdd
使用 TDD 为 Spring Boot 实现任务[描述]。步骤：提取验收标准和行为边界；为 happy path、验证、错误和集成契约提出 JUnit 5 测试；先编写预期失败的测试；再以最小范围实现更改；重新验证并在不改变行为的前提下重构。仅在适用且已可用时使用 Mockito/MockMvc/Testcontainers。未经我确认，不要安装依赖或修改文件；只有获准后才运行测试命令。结果：标准与测试的对应关系、实际执行的检查和剩余缺口。
```
