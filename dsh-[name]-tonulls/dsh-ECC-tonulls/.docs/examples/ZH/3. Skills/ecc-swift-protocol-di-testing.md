# `/ecc-swift-protocol-di-testing`

帮助通过精简的依赖注入协议测试 Swift 代码，在 Swift Testing 中替换文件系统、网络和外部 API。

## 简单请求
```text
/ecc-swift-protocol-di-testing 为此 Swift 外部依赖提出协议和测试 mock：[代码]
```
## 模板请求
```text
/ecc-swift-protocol-di-testing
组件：[描述]
外部依赖：[文件/网络/API]
所需场景：[成功/失败/重试]
展示精简协议和 Swift Testing 测试，不要调用真实服务。
```
## 详细请求
```text
/ecc-swift-protocol-di-testing
让使用[文件系统、网络或 API]的 Swift 函数/服务[描述]具备可测试性。1) 找出最小依赖边界。2) 提出精简协议和依赖注入方式，避免过度抽象。3) 设计可控制结果和错误的 mock/fake。4) 描述用于成功、失败和边界情况的 Swift Testing 测试。排除真实网络调用以及对用户文件的读写；未经确认，不要修改项目或添加依赖。结果：协议接口、测试示例、可验证不变量和限制。
```
