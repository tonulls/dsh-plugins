# `ecc-iterative-retrieval`

**命令：** `/ecc-iterative-retrieval`

**用途：**逐步完善上下文检索的模式，用于解决子 Agent 上下文不足的问题。适用于需要通过多轮补充子 Agent 上下文的场景。

## 提示词

### 1. 简短请求

> /ecc-iterative-retrieval 帮我为 Agent 子任务补充所需上下文。

### 2. 带上下文的模板

> /ecc-iterative-retrieval 子任务：[描述]，已知背景：[数据]，缺口：[问题]。提出下一条范围明确的检索请求。

### 3. 详细请求

> /ecc-iterative-retrieval 为子任务[描述]规划迭代式上下文获取。先列出缺失事实，制定下一轮最小化检索请求/路径，然后定义停止标准；检索范围仅限获准文件。不要泄露机密或运行命令。为执行者输出上下文包和剩余缺口。
