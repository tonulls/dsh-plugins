import { cp, mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const baseName = 'dsh-taste-skill-tonulls'
const sourcePaths = ['src', 'assets', 'packages/skills/assets', 'packages/skills/LICENSE.upstream', 'cordis.patch.yml', 'LICENSES.md']
const template = JSON.parse(await readFile(path.join(root, 'package.template.json'), 'utf8'))
const variants = [
  {
    locale: 'ru', suffix: 'ru', description: 'Taste frontend design skill for DSH (Russian UI metadata)',
    skillDescription: 'Навык визуального направления и контроля качества при создании, переработке и ревью веб-сайтов и интерфейсов приложений.',
    strings: { command: 'Включить или выключить доступность Taste Skill для текущего Agent.', enabled: 'Taste Skill включён для этого Agent.', disabled: 'Taste Skill выключен для этого Agent.', unavailable: 'Переключатель Taste Skill для этого Agent ещё не готов.', usage: 'Формат: /dsh-taste-skill-tonulls on|off' },
  },
  {
    locale: 'en', suffix: 'en', description: 'Taste frontend design skill for DSH (English UI metadata)',
    skillDescription: 'Art direction and visual quality workflow for creating, redesigning, and reviewing websites and application screens.',
    strings: { command: 'Enable or disable Taste Skill for the current Agent.', enabled: 'Taste Skill is enabled for this Agent.', disabled: 'Taste Skill is disabled for this Agent.', unavailable: 'The Taste Skill toggle is not ready for this Agent.', usage: 'Usage: /dsh-taste-skill-tonulls on|off' },
  },
  {
    locale: 'zh', suffix: 'zh', description: 'DSH Taste 前端设计技能（简体中文界面）',
    skillDescription: '用于创建、改版和评审网站及应用界面的视觉方向与质量工作流。',
    strings: { command: '为当前 Agent 启用或停用 Taste Skill。', enabled: '已为当前 Agent 启用 Taste Skill。', disabled: '已为当前 Agent 停用 Taste Skill。', unavailable: '当前 Agent 的 Taste Skill 开关尚未就绪。', usage: '用法：/dsh-taste-skill-tonulls on|off' },
  },
]

for (const variant of variants) {
  const name = `${baseName}-${variant.suffix}`
  const target = path.join(root, 'packages', name)
  await mkdir(target, { recursive: true })
  for (const source of sourcePaths) await cp(path.join(root, source), path.join(target, source), { recursive: true, force: true })
  const manifest = { ...template, name, version: '0.1.1', description: variant.description }
  await writeFile(path.join(target, 'package.json'), `${JSON.stringify(manifest, null, 2)}\n`)
  const patch = (await readFile(path.join(target, 'cordis.patch.yml'), 'utf8')).replaceAll(baseName, name)
  await writeFile(path.join(target, 'cordis.patch.yml'), patch)
  const localeSource = `export const locale = ${JSON.stringify(variant.locale)}\nexport const skillDescription = ${JSON.stringify(variant.skillDescription)}\nexport const strings = ${JSON.stringify(variant.strings, null, 2)}\n`
  await writeFile(path.join(target, 'src/locale.js'), localeSource)
}
