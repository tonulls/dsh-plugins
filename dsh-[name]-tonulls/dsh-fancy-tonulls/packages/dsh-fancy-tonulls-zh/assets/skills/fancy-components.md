---
name: fancy-components
description: 帮助评估适用于选定项目的具体 Fancy React 组件。
---

# Fancy Components 评估

当任务涉及选择、评估或规划集成 Fancy 中的具体组件时使用此 Skill；与 Fancy 无关的任务不要调用它。

1. 先确认使用场景和项目技术栈：React/Next.js 及 server/client 边界、React 版本、CSS/Tailwind、动画包、设计系统、支持的浏览器、无障碍与动效要求。
2. 首先判断是否确实需要第三方组件。没有 UX 目标时不要添加视觉效果，也不要默认替换既有设计系统。
3. 在 [GitHub 上游仓库](https://github.com/danielpetho/fancy)中定位确切组件及源码路径。检查其源码、`package.json`、导入依赖以及该组件本身的确切许可证；根目录 MIT 不能证明所有附带材料的许可。
4. 不复制组件、源码、README、示例、目录条目、图片或样式。只有核验许可证及项目需求后，才提出独立实现方案；来源或许可证有歧义时应停止并说明。
5. 将固定上游版本中的 peer/dependencies 和动画导入与目标项目进行核对。不要混用不同的 `motion` 或 `framer-motion` 包/版本，也不要假设组件可以原样粘贴。
6. 检查语义化 HTML、键盘与焦点行为、可访问名称和角色、响应式布局、SSR/hydration，以及适用时的无 JavaScript 行为。对于动画，检查 `prefers-reduced-motion`、禁用非必要动效的方式和实际性能。
7. 未经用户明确要求，不安装依赖、不运行上游生成器/脚本、不修改项目。添加依赖前解释其必要性并取得确认。
8. 提出最小化适配、测试和手动核验建议；提供准确的 GitHub 链接，并标明尚未核实的版本、许可证或场景。

审计 pin 只是快照。真实集成前须重新检查当前上游和目标项目文件。
