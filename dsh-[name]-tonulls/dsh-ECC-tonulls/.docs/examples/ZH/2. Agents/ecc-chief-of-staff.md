# `/ecc-chief-of-staff` — 提示词示例

## 用途

帮助整理电子邮件、Slack、LINE 和 Messenger 消息：将其分为四个级别 `skip`、`info_only`、`meeting_info`、`action_required`，并拟写回复草稿。应明确区分分析与发送及后续操作。

## 1. 简短请求

```text
/ecc-chief-of-staff 整理这些消息，为每条分配 skip/info_only/meeting_info/action_required 之一，并在需要时提供回复草稿：{粘贴消息，不含机密}
```

## 2. 模板请求

```text
/ecc-chief-of-staff 整理 {email/Slack/LINE/Messenger} 中 {时间段} 的消息。背景和我的优先事项：{背景}。对每条消息注明 skip、info_only、meeting_info 或 action_required 类别、简要理由、截止时间/后续步骤，以及适用时的回复草稿。不要代我发送消息或作出承诺。
```

## 3. 详细请求

```text
/ecc-chief-of-staff 整理 {渠道} 中 {时间段} 内提供的消息。仅考虑以下用户背景：{优先事项、日程、允许的语气}。不要臆造事实、承诺或空闲时间。

1. 对每条消息提取发件人、主题、明确请求、截止时间和依赖项；若信息缺失，请指出。
2. 准确分配一个类别：skip（可忽略）、info_only（仅供参考）、meeting_info（会议相关信息）或 action_required（需要采取行动）。简要说明分类理由。
3. 对 `action_required`，仅在文本明确说明或可明确推断时，列出具体后续步骤和截止时间。对 `meeting_info`，提取日期/时间以及需要确认的问题；不要把未经确认的信息当作日程安排。
4. 在有帮助的地方分别拟写回复草稿；保留事实和语气，并用占位符标记未知字段。
5. 汇总优先行动，以及存在争议或信息不完整的消息。

格式：先提供“渠道/消息 | 类别 | 理由 | 操作/截止时间”表格，再列出草稿和问题。未经单独明确许可，不要发送消息、在任何渠道中回复或执行后续操作。最终结果中不要包含机密或无关个人信息。
```
