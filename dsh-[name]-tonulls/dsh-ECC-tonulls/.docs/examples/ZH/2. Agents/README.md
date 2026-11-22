# ECC Agents 角色示例

本节提供 [agents 软件包](../../../../packages/agents/README.md) 中 71 个角色的调用示例。在 DSH 普通消息中输入 `/ecc-组件名称`，然后描述任务和限制。该角色将在当前 DSH Agent 中工作。

这里只列出目录中的 `entries` 条目；每个组件都有单独文件，包含三个级别的提示词。

| 组件 | 简要用途 | 提示词示例 |
| --- | --- | --- |
| `/ecc-a11y-architect` | 无障碍架构师：确保符合 WCAG 2.2，设计无障碍 UI 组件和设计系统，并识别障碍…… | [三个提示词](ecc-a11y-architect.md) |
| `/ecc-agent-evaluator` | 根据准确性、完整性、清晰度、实用性和简洁性五项标准评估代理结果，并生成结构化…… | [三个提示词](ecc-agent-evaluator.md) |
| `/ecc-architect` | 用于规划或审查软件架构、比较设计方案并识别系统风险的 ECC 架构师角色——需显式…… | [三个提示词](ecc-architect.md) |
| `/ecc-bengali-reviewer` | 审查处理孟加拉文文本的代码：Unicode 和规范化正确性、文字处理及最佳实践…… | [三个提示词](ecc-bengali-reviewer.md) |
| `/ecc-build-error-resolver` | 诊断构建失败和 TypeScript 错误，并以最小更改修复，不重构架构。 | [三个提示词](ecc-build-error-resolver.md) |
| `/ecc-chief-of-staff` | 按四个优先级整理电子邮件、Slack、LINE 和 Messenger 消息，拟写回复并跟进…… | [三个提示词](ecc-chief-of-staff.md) |
| `/ecc-code-architect` | 分析现有代码库的模式和约定，然后制定包含具体文件、接口、数据流……的实现计划 | [三个提示词](ecc-code-architect.md) |
| `/ecc-code-explorer` | 探索现有代码库的功能：追踪执行路径、架构层和依赖，并记录发现以供…… | [三个提示词](ecc-code-explorer.md) |
| `/ecc-code-reviewer` | 主动审查代码质量、安全性和可维护性。 | [三个提示词](ecc-code-reviewer.md) |
| `/ecc-code-simplifier` | 在保持行为不变的同时，简化和改进代码，使其更清晰、一致且易于维护。默认聚焦于最近…… | [三个提示词](ecc-code-simplifier.md) |
| `/ecc-comment-analyzer` | 检查代码注释的准确性、完整性和可维护性，并识别注释过时的风险。 | [三个提示词](ecc-comment-analyzer.md) |
| `/ecc-commit-reviewer` | 审查已暂存的更改，并根据仓库历史中的实际规范提出 Conventional Commits 格式的提交说明。 | [三个提示词](ecc-commit-reviewer.md) |
| `/ecc-conversation-analyzer` | 分析对话记录，识别应通过钩子预防的行为。无参数时由 `/hookify` 命令调用。 | [三个提示词](ecc-conversation-analyzer.md) |
| `/ecc-cpp-build-resolver` | 诊断并最小化修复 C++/CMake 构建、链接和模板错误。C++ 构建失败时使用。 | [三个提示词](ecc-cpp-build-resolver.md) |
| `/ecc-cpp-reviewer` | 审查 C++ 代码：内存安全、现代语言惯用法、并发和性能。 | [三个提示词](ecc-cpp-reviewer.md) |
| `/ecc-csharp-reviewer` | 审查 C# 和 .NET 代码：平台约定、异步、安全性、nullable 类型和性能。 | [三个提示词](ecc-csharp-reviewer.md) |
| `/ecc-dart-build-resolver` | 诊断并最小化修复 `dart analyze`、Flutter 构建、pub 依赖冲突和 `build_runner` 错误。 | [三个提示词](ecc-dart-build-resolver.md) |
| `/ecc-database-reviewer` | PostgreSQL 专家：查询优化、架构设计、安全性和性能。 | [三个提示词](ecc-database-reviewer.md) |
| `/ecc-django-build-resolver` | 诊断并最小化修复 pip/Poetry、迁移冲突、导入及 Django 配置错误，以及 `collectstatic` 失败。 | [三个提示词](ecc-django-build-resolver.md) |
| `/ecc-django-reviewer` | 审查 Django 代码：ORM 正确性、DRF 模式、迁移安全、保护设置及生产就绪性。 | [三个提示词](ecc-django-reviewer.md) |
| `/ecc-doc-updater` | 更新文档和代码库地图：创建 `docs/CODEMAPS/*`，更新 README 和指南。 | [三个提示词](ecc-doc-updater.md) |
| `/ecc-docs-lookup` | 通过 Context7 MCP 查找最新文档和代码示例。适用于需要了解库或框架用法…… | [三个提示词](ecc-docs-lookup.md) |
| `/ecc-e2e-runner` | 端到端测试专家：优先使用 Vercel Agent Browser，必要时使用 Playwright。创建并维护…… | [三个提示词](ecc-e2e-runner.md) |
| `/ecc-fastapi-reviewer` | 审查 FastAPI 应用：异步、依赖注入、Pydantic 架构、安全性、OpenAPI 质量、测试和就绪性…… | [三个提示词](ecc-fastapi-reviewer.md) |
| `/ecc-flutter-reviewer` | 审查 Flutter/Dart 代码：Widget 实践、状态管理、Dart 惯用法、性能、无障碍和架构。不依赖…… | [三个提示词](ecc-flutter-reviewer.md) |
| `/ecc-fsharp-reviewer` | 审查 F# 代码：函数式惯用法、类型安全、模式匹配、计算表达式和性能。 | [三个提示词](ecc-fsharp-reviewer.md) |
| `/ecc-gan-evaluator` | 通过 Playwright 评估运行中的应用：按标准评分，并向生成器提供具体改进意见。 | [三个提示词](ecc-gan-evaluator.md) |
| `/ecc-gan-generator` | 根据规格实现功能，处理评估器反馈并迭代，直到达到既定质量阈值。 | [三个提示词](ecc-gan-generator.md) |
| `/ecc-gan-planner` | 将简要请求转化为完整的产品规格：功能、冲刺、评估标准和设计方向。 | [三个提示词](ecc-gan-planner.md) |
| `/ecc-go-build-resolver` | 诊断并最小化修复 Go 构建、`go vet` 和 lint 错误。Go 构建失败时使用。 | [三个提示词](ecc-go-build-resolver.md) |
| `/ecc-go-reviewer` | 审查 Go 代码：惯用性、并发、错误处理和性能。 | [三个提示词](ecc-go-reviewer.md) |
| `/ecc-harmonyos-app-resolver` | HarmonyOS 开发专家：审查 ArkTS 和 ArkUI、V2 状态管理合规性、导航、API 使用及…… | [三个提示词](ecc-harmonyos-app-resolver.md) |
| `/ecc-harness-optimizer` | 通过基于 `eval-harness` 技能的 pass@k/pass^k 评估，提高代理本地环境配置的可靠性并降低成本。 | [三个提示词](ecc-harness-optimizer.md) |
| `/ecc-healthcare-reviewer` | 审查医疗应用代码：临床安全、CDSS 准确性、PHI 保护和医疗数据完整性。专长包括…… | [三个提示词](ecc-healthcare-reviewer.md) |
| `/ecc-homelab-architect` | 根据设备清单、目标和运维人员经验设计家庭及小型实验室网络；提出安全、分阶段的更改并…… | [三个提示词](ecc-homelab-architect.md) |
| `/ecc-java-build-resolver` | 诊断并最小化修复 Java/Maven/Gradle 构建、编译和依赖错误；能识别 Spring Boot 和 Quarkus。 | [三个提示词](ecc-java-build-resolver.md) |
| `/ecc-java-reviewer` | 审查 Spring Boot 和 Quarkus 项目：分层架构、JPA/Panache、MongoDB、安全性和并发。自动选择…… | [三个提示词](ecc-java-reviewer.md) |
| `/ecc-kotlin-build-resolver` | 诊断并最小化修复 Kotlin/Gradle 构建和编译错误以及依赖问题。 | [三个提示词](ecc-kotlin-build-resolver.md) |
| `/ecc-kotlin-reviewer` | 审查 Kotlin 和 Android/KMP：语言惯用法、协程安全、Compose 实践、整洁架构及常见 Android 错误。 | [三个提示词](ecc-kotlin-reviewer.md) |
| `/ecc-loop-operator` | 管理自主代理循环：跟踪进度，并在循环停止或陷入僵局时安全介入。 | [三个提示词](ecc-loop-operator.md) |
| `/ecc-marketing-agent` | 协助规划和执行营销活动：研究受众和定位，撰写并审查着陆页、邮件文案…… | [三个提示词](ecc-marketing-agent.md) |
| `/ecc-mle-reviewer` | 审查 ML 系统的生产就绪性：数据契约、特征管道、训练可复现性，以及批处理和生产环境中的评估…… | [三个提示词](ecc-mle-reviewer.md) |
| `/ecc-network-architect` | 根据需求设计企业和分布式网络，并使用专业网络技能处理路由、审查、自动化…… | [三个提示词](ecc-network-architect.md) |
| `/ecc-network-config-reviewer` | 审查路由器和交换机配置：安全性、正确性、过时引用、危险命令和缺失…… | [三个提示词](ecc-network-config-reviewer.md) |
| `/ecc-network-troubleshooter` | 按 OSI 层诊断网络、路由、DNS、接口和策略；收集证据并形成有依据的根因判断。 | [三个提示词](ecc-network-troubleshooter.md) |
| `/ecc-opensource-forker` | 为开源发布准备项目：复制文件、删除机密、凭据和内部链接，并创建…… | [三个提示词](ecc-opensource-forker.md) |
| `/ecc-opensource-packager` | 为清理后的开源项目准备完整发布套件：CLAUDE.md、setup.sh、README、LICENSE、CONTRIBUTING 等…… | [三个提示词](ecc-opensource-packager.md) |
| `/ecc-opensource-sanitizer` | 发布前检查开源分支的清理情况：查找机密、个人数据、内部链接和危险文件，并生成报告…… | [三个提示词](ecc-opensource-sanitizer.md) |
| `/ecc-performance-optimizer` | 查找性能瓶颈并加速代码：分析性能、内存泄漏、渲染、bundle 大小和算法。 | [三个提示词](ecc-performance-optimizer.md) |
| `/ecc-php-reviewer` | 审查 PHP 代码：PSR-12 合规性、类型系统、Eloquent ORM 模式、安全性和性能。 | [三个提示词](ecc-php-reviewer.md) |
| `/ecc-planner` | 规划复杂功能和重构：拆解请求、评估架构变更并形成分步实现计划。 | [三个提示词](ecc-planner.md) |
| `/ecc-pr-test-analyzer` | 评估合并请求的测试覆盖完整性和质量，尤其关注行为验证和防止真实缺陷。 | [三个提示词](ecc-pr-test-analyzer.md) |
| `/ecc-python-reviewer` | 审查 Python 代码：PEP 8、语言惯用法、类型注解、安全性和性能。 | [三个提示词](ecc-python-reviewer.md) |
| `/ecc-pytorch-build-resolver` | 诊断 PyTorch/CUDA 和训练错误：张量形状、设备、梯度、DataLoader 和混合精度。以最小改动修复…… | [三个提示词](ecc-pytorch-build-resolver.md) |
| `/ecc-rag-pipeline-reviewer` | 审查 RAG 管道：检索质量、分块、嵌入模型选择和评估完整性。 | [三个提示词](ecc-rag-pipeline-reviewer.md) |
| `/ecc-react-build-resolver` | 诊断并最小化修复 Vite、webpack、Next.js、CRA、Parcel、esbuild 和 Bun 中的 React 构建故障：JSX/TSX、水合、边界…… | [三个提示词](ecc-react-build-resolver.md) |
| `/ecc-react-reviewer` | 审查 React/JSX：Hook 正确性、渲染性能、服务端与客户端组件边界、无障碍和安全性。 | [三个提示词](ecc-react-reviewer.md) |
| `/ecc-refactor-cleaner` | 查找并安全移除未使用代码和重复项，协助重构。使用 knip、depcheck 和 ts-prune 查找死代码…… | [三个提示词](ecc-refactor-cleaner.md) |
| `/ecc-ruby-reviewer` | 审查 Ruby 和 Rails：语言惯用法、Active Record 查询安全、Rails 安全设置以及 RSpec/Minitest 质量。 | [三个提示词](ecc-ruby-reviewer.md) |
| `/ecc-rust-build-resolver` | 诊断并最小化修复 Rust、Cargo、借用检查器和 `Cargo.toml` 的构建错误。 | [三个提示词](ecc-rust-build-resolver.md) |
| `/ecc-rust-reviewer` | 审查 Rust 代码：所有权和生命周期、错误处理、`unsafe` 及惯用性。 | [三个提示词](ecc-rust-reviewer.md) |
| `/ecc-security-reviewer` | 查找并协助修复漏洞：机密、SSRF、注入、不安全密码学和 OWASP Top 10 风险。 | [三个提示词](ecc-security-reviewer.md) |
| `/ecc-seo-specialist` | 执行技术 SEO 审计：页面优化、结构化数据、Core Web Vitals 和内容/关键词地图。审查…… | [三个提示词](ecc-seo-specialist.md) |
| `/ecc-silent-failure-hunter` | 查找代码中的隐性故障：被吞掉的错误、不正确的回退场景以及未向调用方传递错误。 | [三个提示词](ecc-silent-failure-hunter.md) |
| `/ecc-spec-miner` | 从现有代码中提取行为需求，用于 OpenSpec：生成带有元数据和测试锚点的需求与不变量…… | [三个提示词](ecc-spec-miner.md) |
| `/ecc-swift-build-resolver` | 诊断并最小化修复 Swift/Xcode 构建、SPM 依赖和代码签名错误。 | [三个提示词](ecc-swift-build-resolver.md) |
| `/ecc-swift-reviewer` | 审查 Swift 代码：面向协议的设计、值语义、ARC 内存管理、Swift 并发和语言惯用法。 | [三个提示词](ecc-swift-reviewer.md) |
| `/ecc-tdd-guide` | 通过测试驱动开发：先写测试，再实现功能。 | [三个提示词](ecc-tdd-guide.md) |
| `/ecc-type-design-analyzer` | 分析类型设计：封装、不变量表达、效用及其可强制执行性。 | [三个提示词](ecc-type-design-analyzer.md) |
| `/ecc-typescript-reviewer` | 审查 TypeScript/JavaScript：类型安全、异步、Node/Web 安全及语言惯用法。 | [三个提示词](ecc-typescript-reviewer.md) |
| `/ecc-vue-reviewer` | 审查 Vue.js：Composition API、响应性、组件架构、模板安全性和性能。 | [三个提示词](ecc-vue-reviewer.md) |

**合计：**71 个条目；缺少的示例文件：0。
