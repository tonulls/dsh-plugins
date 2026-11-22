# `/ecc-unified-notifications-ops`

帮助统一管理 GitHub、Linear、桌面提醒、hooks 和已连接渠道的通知流程：路由、去重、升级处理和减少收件箱负担。

## 简单请求
```text
/ecc-unified-notifications-ops 为[团队/项目]提出通知去重和升级规则。
```
## 模板请求
```text
/ecc-unified-notifications-ops
通知来源：[GitHub/Linear/其他]
渠道和受众：[描述]
问题：[重复/噪声/遗漏]
升级限制：[条件]
制定路由方案；不要修改实际设置。
```
## 详细请求
```text
/ecc-unified-notifications-ops
为[团队/目标]设计统一通知 workflow。1) 仅清点提供的来源和规则。2) 确定去重键和信号优先级。3) 提出路由、负责人、升级时间窗口，以及防循环/降噪机制。4) 描述审计方式和遗漏/重复指标。不要登录账号、修改订阅/hooks/规则或未经单独确认发送通知。不要泄露 token。结果：方案、决策示例、未知设置和带确认点的安全实施计划。
```
