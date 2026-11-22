import { cp, mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const baseName = 'dsh-gstack-tonulls'
const sourcePaths = ['src', 'assets', 'packages/skills/assets', 'packages/skills/LICENSE.upstream', 'cordis.patch.yml', 'LICENSES.md']
const template = JSON.parse(await readFile(path.join(root, 'package.template.json'), 'utf8'))
const variants = [
  {
    locale: 'ru', suffix: 'ru', description: 'GStack methodology skill bundle for DSH (Russian UI metadata)',
    skillDescription: 'Методология GStack для продуктового мышления, планирования разработки, ревью кода, исследования, статической проверки безопасности, QA и выпуска.',
    strings: { command: 'Включить или выключить методологию GStack для текущего Agent.', enabled: 'GStack включён для этого Agent.', disabled: 'GStack выключен для этого Agent.', unavailable: 'Переключатель GStack для этого Agent пока недоступен.', usage: 'Формат: /dsh-gstack-tonulls on|off' },
    summary: 'Русский вариант DSH-плагина GStack. Описания навыка и ответы команды локализованы; тело навыка — самостоятельная англоязычная DSH-адаптация.'
  },
  {
    locale: 'en', suffix: 'en', description: 'GStack methodology skill bundle for DSH (English UI metadata)',
    skillDescription: 'GStack methodology for product thinking, engineering plans, code review, investigation, evidence-scoped static security review, QA, and shipping.',
    strings: { command: 'Enable or disable the GStack methodology for the current Agent.', enabled: 'GStack is enabled for this Agent.', disabled: 'GStack is disabled for this Agent.', unavailable: 'The GStack toggle is not ready for this Agent.', usage: 'Usage: /dsh-gstack-tonulls on|off' },
    summary: 'English DSH plugin variant for GStack. Skill descriptions and command replies use English; the skill body is an independent English DSH adaptation.'
  },
  {
    locale: 'zh', suffix: 'zh', description: 'DSH GStack 方法论技能包（简体中文界面）',
    skillDescription: 'GStack 方法论：产品思维、工程规划、代码评审、调查、基于证据的静态安全审查、质量验证与发布。',
    strings: { command: '为当前 Agent 启用或停用 GStack 方法论。', enabled: '已为当前 Agent 启用 GStack。', disabled: '已为当前 Agent 停用 GStack。', unavailable: '当前 Agent 的 GStack 开关尚未就绪。', usage: '用法：/dsh-gstack-tonulls on|off' },
    summary: 'GStack 的简体中文 DSH 插件版本。技能说明和命令回复使用简体中文；技能正文是独立的英文 DSH 适配。'
  },
]

for (const variant of variants) {
  const name = `${baseName}-${variant.suffix}`
  const target = path.join(root, 'packages', name)
  await mkdir(target, { recursive: true })
  for (const source of sourcePaths) await cp(path.join(root, source), path.join(target, source), { recursive: true, force: true })
  const manifest = { ...template, name, version: '0.1.1', description: variant.description }
  manifest.files = (manifest.files || []).filter(file => file !== '.docs')
  await writeFile(path.join(target, 'package.json'), `${JSON.stringify(manifest, null, 2)}\n`)
  const patch = (await readFile(path.join(target, 'cordis.patch.yml'), 'utf8')).replaceAll(baseName, name)
  await writeFile(path.join(target, 'cordis.patch.yml'), patch)
  const localeSource = `export const locale = ${JSON.stringify(variant.locale)}\nexport const skillDescription = ${JSON.stringify(variant.skillDescription)}\nexport const strings = ${JSON.stringify(variant.strings, null, 2)}\n`
  await writeFile(path.join(target, 'src/locale.js'), localeSource)
  const install = `dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-gstack-tonulls/packages/${name}'`
  const readme = `# ${name}\n\n${variant.summary}\n\n\`\`\`sh\n${install}\n\`\`\`\n\nInstall exactly one language variant per DSH profile.\n`
  await writeFile(path.join(target, 'README.md'), readme)
}
