---
name: lenis-integration
description: 仅在用户明确请求时，为具体项目规划或审查 Lenis 平滑滚动集成。
---

# Lenis 集成

仅当用户明确要求规划、实现或审查 Lenis 集成时使用此 Skill。

1. 先确认滚动问题、框架、SSR 设置、目标浏览器和设备、嵌套滚动容器、模态框以及现有动画循环。确认确实需要平滑滚动；不要默认替换原生滚动。
2. 检查当前 [GitHub README](https://github.com/darkroomengineering/lenis)、版本、框架适配器、源码以及与目标项目的兼容性。`UPSTREAM.json` 中的 commit 只是审计快照，不保证最新。
3. 保留原生锚点链接、焦点、键盘行为、`position: sticky` 和预期的屏幕阅读器体验。不要禁用或绕过 `prefers-reduced-motion`；审计固定版本的文档将 `respectReducedMotion` 描述为默认启用，但须核实已安装版本的 API。
4. 每个滚动根最多创建一个 Lenis 实例和一个更新循环。选择 `autoRaf` 或自定义 `requestAnimationFrame`/兼容 ticker 之一，不能重复运行循环。组件卸载时移除监听器、停止自定义循环，并调用当前版本的清理/`destroy()` API。
5. 明确测试模态框、菜单和内部滚动区域中的嵌套滚动。固定 commit 的文档警告 `allowNestedScroll` 可能在每次滚动时增加工作量；核实当前替代方案并测量性能，不要盲目启用。
6. React/Next.js 项目只使用当前适配器和 GitHub 指引。在客户端生命周期中创建实例并正确清理，避免在模块级访问 `window`，并防止 SSR/hydration 不一致。
7. 测试常规滚动、锚点、sticky 元素、模态框、触控/触控板、减少动态效果偏好、尺寸变化、目标浏览器，并与不使用 Lenis 的结果比较。只有核实当前文档后，才考虑 iframe 等平台限制。
8. 不复制代码、文档文字、示例或图片；未经单独请求不得运行 `npm`、`pnpm`、`yarn`、`npx`、上游脚本或修改项目。安装前说明依赖变化并取得确认。
9. 提供最小可行的计划或修改及 GitHub 直接链接；区分已验证事实与假设，并说明尚未测试的内容。

审查 autoToggle 时，确认调用 destroy() 后根元素不再处理 transitionend。重复执行组件挂载和卸载。
