import { cp, mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const baseName = 'dsh-spec-kit-tonulls'
const sourceFiles = ['index.js', 'cordis.patch.yml', 'LICENSE', 'NOTICE.md', 'skills', 'package.template.json']
const variants = [
  {
    locale: 'ru', footer: '🛠️ Модифицировано с помощью Codex', suffix: 'ru', description: 'Spec Kit SDD skill for DSH (Russian plugin metadata)',
    skillDescription: 'Методология Spec-Driven Development: превратите запрос в проверяемую спецификацию, план, упорядоченные задачи, реализацию и сверку результата.',
    strings: {
      command: 'Включить или выключить навык Spec Kit для текущего Agent.',
      enabled: 'Навык Spec Kit включён для этого Agent.', disabled: 'Навык Spec Kit выключен для этого Agent.',
      unavailable: 'Переключатель Spec Kit для этого Agent ещё не готов.', usage: 'Формат: /dsh-spec-kit-tonulls on|off',
    },
    summary: 'Русский вариант DSH-плагина Spec Kit. Описание навыка и ответы команды локализованы; методология в SKILL.md остаётся на английском.',
    installTitle: "Установка в профиль `web`:", skillNote: "Текст навыка доступен на английском языке.", usageNote: "Автоматический выбор выключен по умолчанию. Включите его для текущего Agent командой `/dsh-spec-kit-tonulls on`; чтобы выключить, выполните `/dsh-spec-kit-tonulls off`. Навык также доступен напрямую: `/spec-kit`."
  },
  {
    locale: 'en', footer: '🛠️ Modified with Codex', suffix: 'en', description: 'Spec Kit SDD methodology skill for DeepSeek Harness',
    skillDescription: 'Spec-Driven Development methodology: turn a request into a verifiable specification, plan, ordered tasks, implementation, and convergence review.',
    strings: {
      command: 'Enable or disable the Spec Kit skill for the current Agent.',
      enabled: 'Spec Kit is enabled for this Agent.', disabled: 'Spec Kit is disabled for this Agent.',
      unavailable: 'The Spec Kit toggle is not ready for this Agent.', usage: 'Usage: /dsh-spec-kit-tonulls on|off',
    },
    summary: 'English DSH plugin variant for Spec Kit. Skill descriptions and command responses use English.',
    installTitle: "Install into the `web` profile:", skillNote: "The bundled skill content is in English.", usageNote: "Automatic selection is off by default. Use `/dsh-spec-kit-tonulls on` to enable it for the current Agent and `/dsh-spec-kit-tonulls off` to turn it off. Direct invocation is available with `/spec-kit`."
  },
  {
    locale: 'zh', footer: '🛠️ 使用 Codex 修改', suffix: 'zh', description: 'DSH Spec Kit 规格驱动开发技能（简体中文元数据）',
    skillDescription: 'Spec-Driven Development 方法论：将需求转化为可验证的规格、计划、有序任务、实现和收敛检查。',
    strings: {
      command: '为当前 Agent 启用或停用 Spec Kit 技能。',
      enabled: '已为当前 Agent 启用 Spec Kit。', disabled: '已为当前 Agent 停用 Spec Kit。',
      unavailable: '当前 Agent 的 Spec Kit 开关尚未就绪。', usage: '用法：/dsh-spec-kit-tonulls on|off',
    },
    summary: 'Spec Kit 的简体中文 DSH 插件版本。技能描述和命令响应使用简体中文，SKILL.md 方法说明使用英文。',
    installTitle: "安装到 `web` profile：", skillNote: "技能正文使用英文。", usageNote: "自动选择默认关闭。使用 `/dsh-spec-kit-tonulls on` 为当前 Agent 开启，使用 `/dsh-spec-kit-tonulls off` 关闭。也可直接调用 `/spec-kit`。"
  },
]

const template = JSON.parse(await readFile(path.join(root, 'package.template.json'), 'utf8'))
for (const variant of variants) {
  const name = `${baseName}-${variant.suffix}`
  const target = path.join(root, 'packages', name)
  await mkdir(target, { recursive: true })
  for (const file of sourceFiles) {
    if (file === 'package.template.json') continue
    await cp(path.join(root, file), path.join(target, file), { recursive: true, force: true })
  }
  const manifest = { ...template, name, version: '0.1.0', description: variant.description }
  await writeFile(path.join(target, 'package.json'), `${JSON.stringify(manifest, null, 2)}\n`)
  const patch = (await readFile(path.join(target, 'cordis.patch.yml'), 'utf8')).replaceAll(baseName, name)
  await writeFile(path.join(target, 'cordis.patch.yml'), patch)
  const localeSource = `export const locale = ${JSON.stringify(variant.locale)}\nexport const skillDescription = ${JSON.stringify(variant.skillDescription)}\nexport const strings = ${JSON.stringify(variant.strings, null, 2)}\n`
  await writeFile(path.join(target, 'locale.js'), localeSource)
  const repoPath = `/dsh-[name]-tonulls/dsh-spec-kit-tonulls/packages/${name}`
  const install = `dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:${repoPath}'`
  const readme = `# ${name}\n\n${variant.summary}\n\n${variant.installTitle}\n\n\`\`\`sh\n${install}\n\`\`\`\n\n${variant.skillNote}\n\n${variant.usageNote}\n\n${variant.footer}\n`
  await writeFile(path.join(target, 'README.md'), readme)
}
