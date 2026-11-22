# ECC Skills 示例

本节列出 [skills 软件包](../../../../packages/skills/README.md) 中 236 项技能的调用示例。在 DSH 普通消息中输入 `/ecc-组件名称`，然后描述任务和限制。该技能会显式加载到当前 DSH Agent，并在当前项目上下文中执行。

这里只列出目录中的 `entries` 条目；每个组件都有单独文件，其中包含三个级别的提示词。

| 组件 | 简要用途 | 提示词示例 |
| --- | --- | --- |
| `/ecc-accessibility` | 按 WCAG 2.2 AA 为 Web、iOS 和 Android 设计、实现及审计无障碍界面。 | [三个提示词](ecc-accessibility.md) |
| `/ecc-agent-architecture-audit` | 诊断 Agent/LLM 应用的架构层、记忆、工具使用、循环和渲染问题。 | [三个提示词](ecc-agent-architecture-audit.md) |
| `/ecc-agent-eval` | 根据成功率、成本、耗时和稳定性比较编码 Agent。 | [三个提示词](ecc-agent-eval.md) |
| `/ecc-agent-harness-construction` | 设计 Agent 动作空间、工具和观察格式，以提升成功率。 | [三个提示词](ecc-agent-harness-construction.md) |
| `/ecc-agent-introspection-debugging` | 记录、诊断并受控恢复 Agent 启动故障，生成自检报告。 | [三个提示词](ecc-agent-introspection-debugging.md) |
| `/ecc-agent-runtime-gateway-smoke-test` | 以无工具任务检查本地 Agent API、gateway 隧道和远程沙箱 callback。 | [三个提示词](ecc-agent-runtime-gateway-smoke-test.md) |
| `/ecc-agent-security-hardening` | 加固处理不可信数据、调用工具或管理凭据的 Agent 系统。 | [三个提示词](ecc-agent-security-hardening.md) |
| `/ecc-agent-sort` | 为仓库规划 ECC 安装配置，将功能分配到 DAILY 或 LIBRARY。 | [三个提示词](ecc-agent-sort.md) |
| `/ecc-agentic-engineering` | 评估、分解并按模型成本分配由 Agent 执行的工程任务。 | [三个提示词](ecc-agentic-engineering.md) |
| `/ecc-ai-first-engineering` | 为主要由 AI Agent 编写代码的团队设计工程工作模式。 | [三个提示词](ecc-ai-first-engineering.md) |
| `/ecc-ai-regression-testing` | 设计 AI 开发场景的隔离 API 回归、错误验证和……测试策略。 | [三个提示词](ecc-ai-regression-testing.md) |
| `/ecc-android-clean-architecture` | 为 Android/Kotlin Multiplatform 设计模块、依赖、用例和仓库等整洁架构。 | [三个提示词](ecc-android-clean-architecture.md) |
| `/ecc-api-connector-builder` | 遵循仓库现有集成模式创建 API 连接器或提供方。 | [三个提示词](ecc-api-connector-builder.md) |
| `/ecc-api-design` | 设计 REST 资源、状态码、分页、过滤、错误、版本和速率限制。 | [三个提示词](ecc-api-design.md) |
| `/ecc-architecture-decision-records` | 在 `docs/adr/` 记录带背景、方案、后果和索引的编号 ADR。 | [三个提示词](ecc-architecture-decision-records.md) |
| `/ecc-article-writing` | 按示例或指定风格撰写文章、指南、帖子、教程和长篇内容。 | [三个提示词](ecc-article-writing.md) |
| `/ecc-automation-audit-ops` | 清点 ECC 自动化并发现任务、hooks 和连接器的重叠。 | [三个提示词](ecc-automation-audit-ops.md) |
| `/ecc-backend-patterns` | 提供服务端架构、API、数据库、Node.js、Express 和 Next.js 路由模式。 | [三个提示词](ecc-backend-patterns.md) |
| `/ecc-benchmark` | 测量 Web Vitals、页面大小、API 延迟和……的基线与回归。 | [三个提示词](ecc-benchmark.md) |
| `/ecc-benchmark-methodology` | 以九项加权维度对选定竞争者作证据支持的对比评估。 | [三个提示词](ecc-benchmark-methodology.md) |
| `/ecc-benchmark-optimization-loop` | 通过基线、单一假设和基准测试构建可衡量的性能优化循环。 | [三个提示词](ecc-benchmark-optimization-loop.md) |
| `/ecc-bengali-nlp` | 处理孟加拉语文本：Unicode、文字识别、分词、合字和…… | [三个提示词](ecc-bengali-nlp.md) |
| `/ecc-blender-motion-state-inspection` | 检查角色、骨骼、姿势、动画迁移、接地、注视和动作匹配。 | [三个提示词](ecc-blender-motion-state-inspection.md) |
| `/ecc-brand-discovery` | 通过可跨会话延续的八模块访谈梳理品牌定位和受众。 | [三个提示词](ecc-brand-discovery.md) |
| `/ecc-brand-voice` | 从真实文本提取风格档案，并用于内容和沟通。 | [三个提示词](ecc-brand-voice.md) |
| `/ecc-brownfield-retrospective` | 将 ECC 工程流程回溯应用于既有项目，重建状态和决策。 | [三个提示词](ecc-brownfield-retrospective.md) |
| `/ecc-browser-qa` | 通过浏览器 MCP（Chrome、Playwright、Puppeteer）自动检查部署后的 UI。 | [三个提示词](ecc-browser-qa.md) |
| `/ecc-bun-runtime` | 评估 Bun/Node 选择、迁移、包管理、构建、测试和 Vercel 支持。 | [三个提示词](ecc-bun-runtime.md) |
| `/ecc-carrier-relationship-management` | 管理整车、零担和多式联运承运商，包括 FMCSA 核查和运价谈判。 | [三个提示词](ecc-carrier-relationship-management.md) |
| `/ecc-change-impact` | 在修改代码、数据、接口或项目文档前后分析影响。 | [三个提示词](ecc-change-impact.md) |
| `/ecc-cisco-ios-patterns` | 提供 Cisco IOS/IOS-XE 状态检查、配置层级、ACL 和接口实践。 | [三个提示词](ecc-cisco-ios-patterns.md) |
| `/ecc-click-path-audit` | 追踪每个控件的完整状态变更流程，发现端到端交互故障。 | [三个提示词](ecc-click-path-audit.md) |
| `/ecc-clickhouse-io` | 提供 ClickHouse 架构、查询优化和高性能分析数据处理实践。 | [三个提示词](ecc-clickhouse-io.md) |
| `/ecc-code-tour` | 创建含真实文件和行号锚点、面向受众的 `.tour` 代码导览。 | [三个提示词](ecc-code-tour.md) |
| `/ecc-codebase-onboarding` | 研究陌生代码库并编写架构图、入口点、约定和入门指南。 | [三个提示词](ecc-codebase-onboarding.md) |
| `/ecc-coding-standards` | 提供命名、可读性、不可变性和质量检查等通用编码规范。 | [三个提示词](ecc-coding-standards.md) |
| `/ecc-competitive-platform-analysis` | 在基准比较前识别、分类并筛选竞争者，界定竞争范围。 | [三个提示词](ecc-competitive-platform-analysis.md) |
| `/ecc-competitive-report-structure` | 将竞争者档案整理成市场地图、分层和决策报告。 | [三个提示词](ecc-competitive-report-structure.md) |
| `/ecc-compose-multiplatform-patterns` | 提供 KMP/Jetpack Compose 的状态、导航、主题和性能模式。 | [三个提示词](ecc-compose-multiplatform-patterns.md) |
| `/ecc-connections-optimizer` | 优化 X/LinkedIn 联系网络，并按步骤审查删除和关系拓展建议。 | [三个提示词](ecc-connections-optimizer.md) |
| `/ecc-content-engine` | 为 X、LinkedIn、TikTok、YouTube、邮件等构建原生内容系统。 | [三个提示词](ecc-content-engine.md) |
| `/ecc-content-hash-cache-pattern` | 按 SHA-256 内容缓存重处理结果，支持跨路径复用和自动失效。 | [三个提示词](ecc-content-hash-cache-pattern.md) |
| `/ecc-context-and-decisions` | 将稳定领域背景写入精简 CONTEXT.md，并记录难以逆转的决策。 | [三个提示词](ecc-context-and-decisions.md) |
| `/ecc-context-budget` | 使用内置 token 计数器检查上下文预算，避免扫描文件。 | [三个提示词](ecc-context-budget.md) |
| `/ecc-contract-first` | 以可机器验证的契约协调客户端、服务端或跨服务开发。 | [三个提示词](ecc-contract-first.md) |
| `/ecc-conventional-commit-review` | 审查暂存更改并按 Conventional Commits 规范撰写提交消息。 | [三个提示词](ecc-conventional-commit-review.md) |
| `/ecc-cost-aware-llm-pipeline` | 根据任务复杂度、预算、重试和缓存优化 LLM API 成本。 | [三个提示词](ecc-cost-aware-llm-pipeline.md) |
| `/ecc-council` | 从四种视角讨论含糊决策、取舍和正反方案。 | [三个提示词](ecc-council.md) |
| `/ecc-cpp-coding-standards` | 依据 C++ Core Guidelines 提供 C++ 编码标准。 | [三个提示词](ecc-cpp-coding-standards.md) |
| `/ecc-cpp-testing` | 编写或修复 C++ 测试、配置 GoogleTest/CTest 并诊断不稳定测试。 | [三个提示词](ecc-cpp-testing.md) |
| `/ecc-csharp-testing` | 提供 xUnit、FluentAssertions、mock、集成测试和测试套件组织实践。 | [三个提示词](ecc-csharp-testing.md) |
| `/ecc-customer-billing-ops` | 处理订阅、退款、流失分析、付款门户恢复和定价分析。 | [三个提示词](ecc-customer-billing-ops.md) |
| `/ecc-customs-trade-compliance` | 处理 HS/HTS 分类、商业发票和进口申报等贸易合规任务。 | [三个提示词](ecc-customs-trade-compliance.md) |
| `/ecc-dart-flutter-patterns` | 提供 Dart/Flutter null 安全、Freezed 状态、异步和架构实践。 | [三个提示词](ecc-dart-flutter-patterns.md) |
| `/ecc-dashboard-builder` | 为 Grafana、SigNoz 等创建回答实际运维问题的仪表板。 | [三个提示词](ecc-dashboard-builder.md) |
| `/ecc-data-throughput-accelerator` | 诊断并加速数据导入、回填、导出、ETL、传输和……流程。 | [三个提示词](ecc-data-throughput-accelerator.md) |
| `/ecc-database-migrations` | 设计安全可逆的数据库迁移，包括零停机 expand-contract。 | [三个提示词](ecc-database-migrations.md) |
| `/ecc-defi-amm-security` | 审查 Solidity AMM、流动性池和 swap 的重入、CEI、捐赠/通胀等风险。 | [三个提示词](ecc-defi-amm-security.md) |
| `/ecc-deployment-patterns` | 提供部署、CI/CD、Docker、健康检查、回滚和发布准备模式。 | [三个提示词](ecc-deployment-patterns.md) |
| `/ecc-design-system` | 从代码库提取设计令牌，或审查产品界面的一致性。 | [三个提示词](ecc-design-system.md) |
| `/ecc-django-celery` | 提供 Django/Celery 任务、beat 排期、重试、canvas 和监控实践。 | [三个提示词](ecc-django-celery.md) |
| `/ecc-django-patterns` | 提供 Django、DRF、ORM、缓存、信号和 middleware 架构模式。 | [三个提示词](ecc-django-patterns.md) |
| `/ecc-django-security` | 审查 Django 身份验证、授权、CSRF、SQLi、XSS 和部署安全。 | [三个提示词](ecc-django-security.md) |
| `/ecc-django-tdd` | 使用 pytest-django、factory_boy、mock 和覆盖率进行 Django TDD。 | [三个提示词](ecc-django-tdd.md) |
| `/ecc-django-verification` | 验证 Django 环境、mypy/ruff/black、迁移安全和 pytest 覆盖率。 | [三个提示词](ecc-django-verification.md) |
| `/ecc-docker-patterns` | 提供 Docker/Compose 本地开发、安全安装、容器网络和编排模式。 | [三个提示词](ecc-docker-patterns.md) |
| `/ecc-dotnet-patterns` | 提供 C#/.NET 约定、依赖注入、async/await 和可维护性实践。 | [三个提示词](ecc-dotnet-patterns.md) |
| `/ecc-dynamic-workflow-mode` | 为任务设计 Agent 专属运行模式、评估检查点及可复用技能。 | [三个提示词](ecc-dynamic-workflow-mode.md) |
| `/ecc-ecc-recipes` | 根据工作流程选择并排序 ECC 命令，并设定停止条件。 | [三个提示词](ecc-ecc-recipes.md) |
| `/ecc-email-ops` | 以证据为基础处理收件箱、草拟邮件、验证发送和后续步骤。 | [三个提示词](ecc-email-ops.md) |
| `/ecc-energy-procurement` | 为商业/工业场所采购电力和天然气，优化费率并降低峰值费用。 | [三个提示词](ecc-energy-procurement.md) |
| `/ecc-enterprise-agent-ops` | 管理长生命周期或云端 Agent 的启动、暂停、停止和重启等运行操作。 | [三个提示词](ecc-enterprise-agent-ops.md) |
| `/ecc-error-handling` | 提供 TypeScript、Python 和 Go 的类型化错误、边界、重试和熔断实践。 | [三个提示词](ecc-error-handling.md) |
| `/ecc-esign-field-placement` | 通过浏览器自动化在电子签署页面精准放置签名、日期和文本字段。 | [三个提示词](ecc-esign-field-placement.md) |
| `/ecc-evm-token-decimals` | 防止 EVM token 精度错误，按链运行时获取并缓存 decimals。 | [三个提示词](ecc-evm-token-decimals.md) |
| `/ecc-fastapi-patterns` | 提供 FastAPI 项目结构、Pydantic v2、依赖注入、异步、鉴权和……实践。 | [三个提示词](ecc-fastapi-patterns.md) |
| `/ecc-finance-billing-ops` | 以数据驱动方式检查收入、定价、退款、团队计费和实际收费模式。 | [三个提示词](ecc-finance-billing-ops.md) |
| `/ecc-flutter-dart-code-review` | 按独立于库的清单审查 Flutter/Dart widgets、状态和……代码。 | [三个提示词](ecc-flutter-dart-code-review.md) |
| `/ecc-foundation-models-on-device` | 使用 Apple FoundationModels 在设备端生成文本并执行 `@Generable` 受控生成。 | [三个提示词](ecc-foundation-models-on-device.md) |
| `/ecc-frontend-a11y` | 提供 React/Next.js 的语义 HTML、ARIA、键盘、焦点和屏幕阅读器实践。 | [三个提示词](ecc-frontend-a11y.md) |
| `/ecc-frontend-patterns` | 提供 React/Next.js 客户端状态、性能和 UI 开发实践。 | [三个提示词](ecc-frontend-patterns.md) |
| `/ecc-frontend-slides` | 从头创建动画 HTML 演示文稿，或将 PowerPoint 转换为网页演示。 | [三个提示词](ecc-frontend-slides.md) |
| `/ecc-fsharp-testing` | 提供 xUnit、FsUnit、Unquote、FsCheck 属性和集成测试实践。 | [三个提示词](ecc-fsharp-testing.md) |
| `/ecc-generating-python-installer` | 构建 Windows 商用 Python 安装包：Nuitka 编译、体积分析和 Inno Setup。 | [三个提示词](ecc-generating-python-installer.md) |
| `/ecc-golang-patterns` | 提供可靠、高效、可维护应用的惯用 Go 实践。 | [三个提示词](ecc-golang-patterns.md) |
| `/ecc-golang-testing` | 提供 Go 表驱动/子测试、基准、fuzz、覆盖率和 TDD 实践。 | [三个提示词](ecc-golang-testing.md) |
| `/ecc-google-workspace-ops` | 将 Drive、Docs、Sheets 和 Slides 作为统一工作空间处理计划和共享材料。 | [三个提示词](ecc-google-workspace-ops.md) |
| `/ecc-growth-log` | 从已完成工作中记录可复用经验、根因和识别信号。 | [三个提示词](ecc-growth-log.md) |
| `/ecc-healthcare-cdss-patterns` | 提供 CDSS 临床安全、药物/剂量检查和临床评分实现实践。 | [三个提示词](ecc-healthcare-cdss-patterns.md) |
| `/ecc-healthcare-emr-patterns` | 提供 EMR/EHR 临床安全、接诊、处方、CDSS 集成和……实践。 | [三个提示词](ecc-healthcare-emr-patterns.md) |
| `/ecc-healthcare-eval-harness` | 评估医疗应用的 CDSS 准确性、PHI 泄露和临床安全发布风险。 | [三个提示词](ecc-healthcare-eval-harness.md) |
| `/ecc-healthcare-phi-compliance` | 管理医疗 PHI/PII 分类、行级访问、防篡改审计日志和……合规。 | [三个提示词](ecc-healthcare-phi-compliance.md) |
| `/ecc-hermes-imports` | 将 Hermes 操作员本地工作流转换为经过验证的 ECC 技能和发行物。 | [三个提示词](ecc-hermes-imports.md) |
| `/ecc-hexagonal-architecture` | 设计或重构 Ports & Adapters，明确领域边界、依赖反转和可测试编排。 | [三个提示词](ecc-hexagonal-architecture.md) |
| `/ecc-hipaa-compliance` | 处理明确涉及 HIPAA 的医疗隐私和安全任务。 | [三个提示词](ecc-hipaa-compliance.md) |
| `/ecc-homelab-network-readiness` | 检查家庭实验室 VLAN、DNS 过滤和远程访问的部署准备情况。 | [三个提示词](ecc-homelab-network-readiness.md) |
| `/ecc-homelab-network-setup` | 规划家庭网络的网关、交换机、Wi-Fi、IP/DHCP、DNS 和布线。 | [三个提示词](ecc-homelab-network-setup.md) |
| `/ecc-homelab-vlan-segmentation` | 使用 UniFi、pfSense/OPNsense、MikroTik 隔离 IoT、访客、可信设备和服务器。 | [三个提示词](ecc-homelab-vlan-segmentation.md) |
| `/ecc-intent-driven-development` | 将含糊或重要的产品/工程更改转化为清晰、可测试的验收标准。 | [三个提示词](ecc-intent-driven-development.md) |
| `/ecc-inventory-demand-planning` | 为多门店零售预测需求、执行 ABC/XYZ 分类并优化安全库存。 | [三个提示词](ecc-inventory-demand-planning.md) |
| `/ecc-investor-materials` | 创建和更新融资演示、单页材料、投资备忘录、申请及财务模型。 | [三个提示词](ecc-investor-materials.md) |
| `/ecc-investor-outreach` | 准备融资冷邮件、暖介绍、跟进、投资人更新及沟通内容。 | [三个提示词](ecc-investor-outreach.md) |
| `/ecc-iterative-retrieval` | 通过逐步细化上下文检索，弥补子 Agent 上下文不足。 | [三个提示词](ecc-iterative-retrieval.md) |
| `/ecc-java-coding-standards` | 提供 Spring Boot/Quarkus Java 命名、不可变性、Optional、Stream、异常和 CDI 规范。 | [三个提示词](ecc-java-coding-standards.md) |
| `/ecc-jpa-patterns` | 提供 Spring JPA/Hibernate 实体、查询、事务、审计、索引、分页和连接池实践。 | [三个提示词](ecc-jpa-patterns.md) |
| `/ecc-kotlin-coroutines-flows` | 提供 Android/KMP 结构化并发、Flow、StateFlow 和错误处理实践。 | [三个提示词](ecc-kotlin-coroutines-flows.md) |
| `/ecc-kotlin-exposed-patterns` | 提供 Exposed DSL/DAO、事务、HikariCP、Flyway 和 repository 模式。 | [三个提示词](ecc-kotlin-exposed-patterns.md) |
| `/ecc-kotlin-ktor-patterns` | 提供 Ktor 路由、插件、认证、Koin、序列化、WebSocket 和……模式。 | [三个提示词](ecc-kotlin-ktor-patterns.md) |
| `/ecc-kotlin-patterns` | 提供 Kotlin 惯用实践：协程、null 安全和可维护应用设计。 | [三个提示词](ecc-kotlin-patterns.md) |
| `/ecc-kotlin-testing` | 使用 Kotest、MockK、协程、属性测试和 Kover 进行 Kotlin TDD。 | [三个提示词](ecc-kotlin-testing.md) |
| `/ecc-kubernetes-patterns` | 提供 Kubernetes 工作负载、RBAC、探针、扩缩容、ConfigMap/Secret 和 kubectl 调试实践。 | [三个提示词](ecc-kubernetes-patterns.md) |
| `/ecc-laravel-patterns` | 提供 Laravel 路由、控制器、Eloquent、服务层、队列、事件、缓存和 API 资源模式。 | [三个提示词](ecc-laravel-patterns.md) |
| `/ecc-laravel-security` | 审查 Laravel 认证、授权、Eloquent、CSRF、XSS、API 和部署安全。 | [三个提示词](ecc-laravel-security.md) |
| `/ecc-laravel-tdd` | 使用 PHPUnit/Pest、工厂、HTTP、Sanctum、mock 和覆盖率测试 Laravel。 | [三个提示词](ecc-laravel-tdd.md) |
| `/ecc-laravel-verification` | 分阶段验证 Laravel 环境、lint、静态分析、测试、安全和部署准备。 | [三个提示词](ecc-laravel-verification.md) |
| `/ecc-latency-critical-systems` | 诊断并优化实时仪表板、市场数据流、Agent 流程及执行网关的延迟。 | [三个提示词](ecc-latency-critical-systems.md) |
| `/ecc-lead-intelligence` | 基于信号评估线索并准备个性化营销联系内容。 | [三个提示词](ecc-lead-intelligence.md) |
| `/ecc-liquid-glass-design` | 为 iOS 26 SwiftUI/UIKit/WidgetKit 设计动态 Liquid Glass 界面效果。 | [三个提示词](ecc-liquid-glass-design.md) |
| `/ecc-living-docs-governance` | 为长期项目维护文档权威来源、职责和 Agent 上下文入口。 | [三个提示词](ecc-living-docs-governance.md) |
| `/ecc-llm-trading-agent-security` | 审查交易 Agent 的 prompt injection、限额、模拟、MEV 和密钥安全。 | [三个提示词](ecc-llm-trading-agent-security.md) |
| `/ecc-logistics-exception-management` | 处理货运延误、损坏、丢失、短缺和承运商争议的升级流程。 | [三个提示词](ecc-logistics-exception-management.md) |
| `/ecc-loop-design-check` | 设计 Agent 执行循环并检查无限循环、Goodhart 指标操纵和错误提交。 | [三个提示词](ecc-loop-design-check.md) |
| `/ecc-make-interfaces-feel-better` | 用间距、字体、边框、阴影、动画、点击区、图标和状态改善 UI。 | [三个提示词](ecc-make-interfaces-feel-better.md) |
| `/ecc-market-research` | 开展带来源的市场、竞争、投资和行业研究，为商业决策提供依据。 | [三个提示词](ecc-market-research.md) |
| `/ecc-marketing-campaign` | 规划多渠道营销活动、受众、定位、文案、日历和指标。 | [三个提示词](ecc-marketing-campaign.md) |
| `/ecc-mcp-dependency-review` | 静态检查 MCP 配置中的可变包引用，不启动 MCP 服务器。 | [三个提示词](ecc-mcp-dependency-review.md) |
| `/ecc-messages-ops` | 依据提供的消息核查上下文并准备回复，保护验证码和个人信息。 | [三个提示词](ecc-messages-ops.md) |
| `/ecc-ml-adoption-playbook` | 规划现有非 ML 项目的 ML 问题、数据、架构和基线模型。 | [三个提示词](ecc-ml-adoption-playbook.md) |
| `/ecc-mle-workflow` | 设计可复现的 ML 数据、训练、评估、部署、监控和回滚流程。 | [三个提示词](ecc-mle-workflow.md) |
| `/ecc-module-regression` | 通过 REGRESSION.md 和验收命令管理大型仓库的跨模块回归风险。 | [三个提示词](ecc-module-regression.md) |
| `/ecc-motion-advanced` | 提供 React/Next.js Motion 手势、拖动、文本/SVG 和 useAnimate 技巧。 | [三个提示词](ecc-motion-advanced.md) |
| `/ecc-motion-foundations` | 为 React/Next.js 建立动效令牌、弹簧、性能、reduced motion 和 SSR 规范。 | [三个提示词](ecc-motion-foundations.md) |
| `/ecc-motion-patterns` | 提供按钮、模态框、toast、页面过渡和无障碍动效模式。 | [三个提示词](ecc-motion-patterns.md) |
| `/ecc-mybatis-patterns` | 提供 MyBatis mapper、SQL、映射、事务、分页和动态查询安全实践。 | [三个提示词](ecc-mybatis-patterns.md) |
| `/ecc-mysql-patterns` | 提供 MySQL/MariaDB 架构、索引、事务、复制、连接池和延迟诊断实践。 | [三个提示词](ecc-mysql-patterns.md) |
| `/ecc-nasiko-control-plane` | 通过 ECC 安全管理 Nasiko CLI 状态、安装、版本固定和卸载。 | [三个提示词](ecc-nasiko-control-plane.md) |
| `/ecc-nestjs-patterns` | 提供 NestJS 模块、控制器、providers、DTO、guards 和配置模式。 | [三个提示词](ecc-nestjs-patterns.md) |
| `/ecc-netmiko-ssh-automation` | 以受限并发和只读采集为主设计安全 Netmiko 网络自动化。 | [三个提示词](ecc-netmiko-ssh-automation.md) |
| `/ecc-network-bgp-diagnostics` | 只读诊断 BGP 邻居、路由交换、前缀策略和 AS path。 | [三个提示词](ecc-network-bgp-diagnostics.md) |
| `/ecc-network-config-validation` | 部署前检查路由器/交换机危险命令、地址冲突和安全配置。 | [三个提示词](ecc-network-config-validation.md) |
| `/ecc-network-interface-health` | 根据 CRC、丢包、链路抖动和 speed/duplex 诊断网络接口。 | [三个提示词](ecc-network-interface-health.md) |
| `/ecc-nextjs-turbopack` | 提供 Next.js 16+/Turbopack 增量构建、缓存、HMR 和迁移建议。 | [三个提示词](ecc-nextjs-turbopack.md) |
| `/ecc-nodejs-keccak256` | 防止将 NIST SHA3-256 与 Ethereum Keccak-256 混淆。 | [三个提示词](ecc-nodejs-keccak256.md) |
| `/ecc-nuxt4-patterns` | 提供 Nuxt 4 安全 hydration、SSR 获取、route rules 和延迟加载实践。 | [三个提示词](ecc-nuxt4-patterns.md) |
| `/ecc-openclaw-persona-forge` | 创建 OpenClaw Agent 身份、SOUL.md 草案、角色边界和头像提示。 | [三个提示词](ecc-openclaw-persona-forge.md) |
| `/ecc-orch-add-feature` | 编排新功能的研究、计划、TDD 实现、验证和独立审批点。 | [三个提示词](ecc-orch-add-feature.md) |
| `/ecc-orch-build-mvp` | 将 MVP 规格拆为垂直切片并分阶段构建验证。 | [三个提示词](ecc-orch-build-mvp.md) |
| `/ecc-orch-change-feature` | 在新需求下协调功能测试、实现、审查和更改授权。 | [三个提示词](ecc-orch-change-feature.md) |
| `/ecc-orch-fix-defect` | 通过回归测试复现缺陷，最小修复并审查结果。 | [三个提示词](ecc-orch-fix-defect.md) |
| `/ecc-orch-pipeline` | 说明 Research–Plan–TDD–Review–Commit 通用流程及其审批 gate。 | [三个提示词](ecc-orch-pipeline.md) |
| `/ecc-orch-refine-code` | 在保持行为和测试通过的前提下规划重构，提交需另行确认。 | [三个提示词](ecc-orch-refine-code.md) |
| `/ecc-parallel-execution-optimizer` | 将任务拆分为隔离写入边界的依赖图和并行执行流。 | [三个提示词](ecc-parallel-execution-optimizer.md) |
| `/ecc-perl-patterns` | 提供现代 Perl 5.36+ 惯用写法、错误处理和仓库约定。 | [三个提示词](ecc-perl-patterns.md) |
| `/ecc-perl-security` | 审查 Perl taint、输入、进程执行、DBI、XSS/SQLi/CSRF 风险。 | [三个提示词](ecc-perl-security.md) |
| `/ecc-perl-testing` | 使用 Test2::V0/Test::More、prove、mock、覆盖率和 TDD 测试 Perl。 | [三个提示词](ecc-perl-testing.md) |
| `/ecc-plan-orchestrate` | 将多步计划拆解，并为各步骤匹配有文档依据的 ECC 命令。 | [三个提示词](ecc-plan-orchestrate.md) |
| `/ecc-postgres-patterns` | 提供 PostgreSQL 查询、架构、索引、数据完整性和 RLS 实践。 | [三个提示词](ecc-postgres-patterns.md) |
| `/ecc-prediction-market-oracle-research` | 研究预测市场作为产品数据源或预言机信号的概率和集成限制。 | [三个提示词](ecc-prediction-market-oracle-research.md) |
| `/ecc-prediction-market-risk-review` | 审查预测市场、组合、oracle 和交易 Agent 的合规/执行风险。 | [三个提示词](ecc-prediction-market-risk-review.md) |
| `/ecc-prisma-patterns` | 提供 Prisma 架构、查询、事务和连接限制实践并指出常见陷阱。 | [三个提示词](ecc-prisma-patterns.md) |
| `/ecc-product-capability` | 将 PRD 和产品讨论转为带不变量、接口和验收标准的实施计划。 | [三个提示词](ecc-product-capability.md) |
| `/ecc-product-lens` | 在开发前通过 PMF、用户旅程、ICE 和 go/no-go 分析验证产品依据。 | [三个提示词](ecc-product-lens.md) |
| `/ecc-production-audit` | 仅根据本地证据评估应用的生产就绪度和故障风险。 | [三个提示词](ecc-production-audit.md) |
| `/ecc-production-scheduling` | 优化生产排程、生产线平衡、SMED 换型、OEE 和瓶颈。 | [三个提示词](ecc-production-scheduling.md) |
| `/ecc-project-flow-ops` | 协调 GitHub 与 Linear 的 issue、PR、backlog 和公开/内部边界。 | [三个提示词](ecc-project-flow-ops.md) |
| `/ecc-prompt-caching-strategy` | 调整 LLM 提示词结构，提高缓存命中并降低成本和延迟。 | [三个提示词](ecc-prompt-caching-strategy.md) |
| `/ecc-prompt-optimizer` | 改进提示词草稿并选择合适 ECC 命令/技能/Agent，不执行原任务。 | [三个提示词](ecc-prompt-optimizer.md) |
| `/ecc-python-patterns` | 提供 PEP 8、类型提示、Python 惯用法及稳健性实践。 | [三个提示词](ecc-python-patterns.md) |
| `/ecc-python-testing` | 使用 pytest/TDD、fixtures、mock、参数化和覆盖率测试 Python。 | [三个提示词](ecc-python-testing.md) |
| `/ecc-pytorch-patterns` | 提供可复现 PyTorch 训练、模型架构和数据加载实践。 | [三个提示词](ecc-pytorch-patterns.md) |
| `/ecc-quality-nonconformance` | 在受监管制造业中处理 NCR、根因、CAPA、SPC、AQL 和供应商质量。 | [三个提示词](ecc-quality-nonconformance.md) |
| `/ecc-quarkus-patterns` | 提供 Quarkus REST/CDI、Panache、Camel 和异步消息架构实践。 | [三个提示词](ecc-quarkus-patterns.md) |
| `/ecc-quarkus-security` | 审查 Quarkus JWT/OIDC、RBAC、验证、CORS、限流和机密管理。 | [三个提示词](ecc-quarkus-security.md) |
| `/ecc-quarkus-tdd` | 使用 JUnit、Mockito、REST Assured、Camel tests 和 JaCoCo 开展 Quarkus TDD。 | [三个提示词](ecc-quarkus-tdd.md) |
| `/ecc-quarkus-verification` | 验证 Quarkus 构建、静态分析、测试、安全、native build 和健康检查。 | [三个提示词](ecc-quarkus-verification.md) |
| `/ecc-rails-patterns` | 提供 Rails 7.1+/8 的控制器、ActiveRecord、任务、Hotwire 和 Solid 模式。 | [三个提示词](ecc-rails-patterns.md) |
| `/ecc-ralphinho-rfc-pipeline` | 将 RFC 拆为多 Agent 依赖图，经测试、rebase 队列和系统验证集成。 | [三个提示词](ecc-ralphinho-rfc-pipeline.md) |
| `/ecc-react-native-patterns` | 提供 React Native/Expo 导航、状态、TanStack Query、列表和安全存储实践。 | [三个提示词](ecc-react-native-patterns.md) |
| `/ecc-recursive-decision-ledger` | 记录递归试验、评分、证据和晋级 gate，禁止自动授权真实操作。 | [三个提示词](ecc-recursive-decision-ledger.md) |
| `/ecc-redis-patterns` | 提供 Redis 数据结构、缓存、分布式锁、限流、pub/sub 和连接管理。 | [三个提示词](ecc-redis-patterns.md) |
| `/ecc-regex-vs-llm-structured-text` | 设计 regex-first 结构化文本解析，以置信度筛出 LLM 边界案例。 | [三个提示词](ecc-regex-vs-llm-structured-text.md) |
| `/ecc-research-ops` | 基于新近事实和来源比较选项，并形成有证据支持的建议。 | [三个提示词](ecc-research-ops.md) |
| `/ecc-returns-reverse-logistics` | 规划退货授权、检查、处置、退款、欺诈迹象和保修处理。 | [三个提示词](ecc-returns-reverse-logistics.md) |
| `/ecc-rust-patterns` | 提供 Rust 所有权、错误、trait、并发和安全性能实践。 | [三个提示词](ecc-rust-patterns.md) |
| `/ecc-rust-testing` | 提供 Rust 单元、集成、异步、属性测试及 TDD 覆盖评估。 | [三个提示词](ecc-rust-testing.md) |
| `/ecc-santa-method` | 以双重独立对抗审查、修正复审和必要的人为升级把关交付物。 | [三个提示词](ecc-santa-method.md) |
| `/ecc-scientific-db-pubmed-database` | 构建 PubMed/NCBI 检索、MeSH 查询、PMID 查找和文献监测计划。 | [三个提示词](ecc-scientific-db-pubmed-database.md) |
| `/ecc-scientific-db-uspto-database` | 可复现查询 USPTO 专利、商标、TSDR 和权利转让官方记录。 | [三个提示词](ecc-scientific-db-uspto-database.md) |
| `/ecc-scientific-pkg-gget` | 使用 gget/ Python 查询基因组数据库、序列和富集信息。 | [三个提示词](ecc-scientific-pkg-gget.md) |
| `/ecc-scientific-thinking-literature-review` | 制定系统文献检索、筛选、证据综合和引文核验方案。 | [三个提示词](ecc-scientific-thinking-literature-review.md) |
| `/ecc-scientific-thinking-scholar-evaluation` | 按结构化标准评估科研论文、方法、证据和引文支持。 | [三个提示词](ecc-scientific-thinking-scholar-evaluation.md) |
| `/ecc-security-bounty-hunter` | 只读寻找有证据支持且可远程触达的漏洞，适于负责任披露。 | [三个提示词](ecc-security-bounty-hunter.md) |
| `/ecc-security-review` | 审查认证、输入、机密、API、支付及其他敏感功能安全。 | [三个提示词](ecc-security-review.md) |
| `/ecc-seo` | 审计技术/页面 SEO、结构化数据、Core Web Vitals 和主题关键词。 | [三个提示词](ecc-seo.md) |
| `/ecc-social-graph-ranker` | 对 X/LinkedIn 社交关系排序，发现暖介绍桥接关系和网络缺口。 | [三个提示词](ecc-social-graph-ranker.md) |
| `/ecc-springboot-patterns` | 提供 Spring Boot REST、分层服务、数据访问、缓存和异步架构。 | [三个提示词](ecc-springboot-patterns.md) |
| `/ecc-springboot-security` | 审查 Spring Security 认证、CSRF、验证、机密、标头和限流。 | [三个提示词](ecc-springboot-security.md) |
| `/ecc-springboot-tdd` | 使用 JUnit 5、Mockito、MockMvc、Testcontainers 和 JaCoCo 开展 TDD。 | [三个提示词](ecc-springboot-tdd.md) |
| `/ecc-springboot-verification` | 验证 Maven/Gradle、静态分析、测试覆盖率、依赖安全和 diff。 | [三个提示词](ecc-springboot-verification.md) |
| `/ecc-swift-actor-persistence` | 使用 Swift actors、内存缓存和文件存储构建线程安全持久化。 | [三个提示词](ecc-swift-actor-persistence.md) |
| `/ecc-swift-concurrency-6-2` | 解释 Swift 6.2 默认并发、`@concurrent` 和 isolated conformances。 | [三个提示词](ecc-swift-concurrency-6-2.md) |
| `/ecc-swift-protocol-di-testing` | 通过精简 DI 协议和 mock 测试 Swift 文件、网络及 API 依赖。 | [三个提示词](ecc-swift-protocol-di-testing.md) |
| `/ecc-swiftui-patterns` | 提供 SwiftUI `@Observable` 状态、视图组合、导航和性能实践。 | [三个提示词](ecc-swiftui-patterns.md) |
| `/ecc-tdd-workflow` | 通过 red-green-refactor、最小更改和覆盖评估推进 TDD。 | [三个提示词](ecc-tdd-workflow.md) |
| `/ecc-team-agent-orchestration` | 规划多 Agent 工作项、负责人、Kanban、分支隔离和合并 gate。 | [三个提示词](ecc-team-agent-orchestration.md) |
| `/ecc-terminal-ops` | 以可审计证据执行仓库命令、诊断 CI 并记录副作用。 | [三个提示词](ecc-terminal-ops.md) |
| `/ecc-test-collaboration` | 将需求、风险和契约映射到 TEST-ID、测试资产及可执行证据。 | [三个提示词](ecc-test-collaboration.md) |
| `/ecc-token-budget-advisor` | 估算 25/50/75/100% 回答深度的 token 预算并按选择作答。 | [三个提示词](ecc-token-budget-advisor.md) |
| `/ecc-ui-demo` | 使用 Playwright 录制带光标和 walkthrough 风格的 WebM 演示。 | [三个提示词](ecc-ui-demo.md) |
| `/ecc-uncloud` | 通过 `uc` 管理 Uncloud 服务、入口、路由、端口、机器和卷。 | [三个提示词](ecc-uncloud.md) |
| `/ecc-unified-notifications-ops` | 统一 GitHub、Linear、桌面和 hooks 通知的路由、去重与升级。 | [三个提示词](ecc-unified-notifications-ops.md) |
| `/ecc-verification-loop` | 通过构建、类型、lint、测试、安全和 diff 六阶段验证更改。 | [三个提示词](ecc-verification-loop.md) |
| `/ecc-visa-doc-translate` | 识别签证文件图像并生成带不确定标记的英文双语译件。 | [三个提示词](ecc-visa-doc-translate.md) |
| `/ecc-vite-patterns` | 提供 Vite 配置、HMR、代理、SSR、library mode 和构建实践。 | [三个提示词](ecc-vite-patterns.md) |
| `/ecc-vue-patterns` | 提供 Vue 3/Nuxt Composition API、响应性、Pinia、路由和 SSR 实践。 | [三个提示词](ecc-vue-patterns.md) |
| `/ecc-workspace-surface-audit` | 只读清点仓库、MCP、插件和环境配置，并推荐适用的 ECC 功能。 | [三个提示词](ecc-workspace-surface-audit.md) |

**合计：**236 项；缺少的示例文件：0。
