# 上游来源与改编

## 来源

选取的两项流程基于 community 仓库 [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)，固定在 commit [`54a798831d2266a3ca61ce68a7acb80b81160d57`](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/commit/54a798831d2266a3ca61ce68a7acb80b81160d57)。选取文件和来源信息也记录在 [`UPSTREAM.json`](../../packages/dsh-anthropic-cybersecurity-skills-tonulls/UPSTREAM.json) 中。

本 bundle 仅包含两项经过实质性改写的流程；上游作者元数据标注为 `mahipal`：

- `analyzing-api-gateway-access-logs` — API Gateway 访问日志分析；
- `analyzing-web-server-logs-for-intrusion` — Web 服务器访问日志分析。

## 改编边界

这些流程已改写为防御性、只读的初步研判，仅分析用户提供或明确授权检查的日志。分析发现属于启发式线索，不能证明发生了漏洞利用或系统失陷。本 bundle 排除了所有其他上游技能（包括双重用途或攻击性流程），以及源脚本、安装程序、依赖项和可执行资源。

技能不会主动扫描、向外部传输日志、任意读取本地文件，也不会在没有单独明确请求和确认时修改系统或检测规则。它们不会增加 DSH 工具或权限。技能指令不是沙箱；实际访问能力由 DSH profile 和工具决定。

## 许可证与关联

上游 `LICENSE` 指定 Apache-2.0，并标明 copyright `mukul975`；软件包中包含完整的 Apache-2.0 文本和[署名声明](../../packages/dsh-anthropic-cybersecurity-skills-tonulls/NOTICE.md)。本改编同样采用 Apache-2.0。上游 community 项目和本 bundle 均与 Anthropic PBC 无关，也不声称获得其认可。
