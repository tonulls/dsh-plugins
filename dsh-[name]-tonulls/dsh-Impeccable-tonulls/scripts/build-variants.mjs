import { cp, mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const baseName = 'dsh-impeccable-tonulls'
const sourceFiles = ['index.js', 'cordis.patch.yml', 'LICENSE', 'NOTICE.md', 'skills', 'package.template.json']
const variants = [
  {
    locale: 'ru', suffix: 'ru', description: 'Impeccable design skill bundle for DSH (Russian UI metadata)',
    skillDescription: 'Рекомендации по дизайну интерфейсов: контекст продукта, планирование, критика и улучшение визуального оформления, доступности, адаптивности и анимации.',
    strings: {
      command: 'Включить или выключить доступность навыка Impeccable для текущего Agent.',
      enabled: 'Навык Impeccable включён для этого Agent.', disabled: 'Навык Impeccable выключен для этого Agent.',
      unavailable: 'Переключатель Impeccable для этого Agent ещё не готов.', usage: 'Формат: /dsh-impeccable on|off',
    },
  },
  {
    locale: 'en', suffix: 'en', description: 'Impeccable design skill bundle for DSH (English UI metadata)',
    skillDescription: 'Frontend design guidance for product context, planning, critique, visual design, accessibility, responsiveness, and motion.',
    strings: {
      command: 'Enable or disable the Impeccable skill for the current Agent.',
      enabled: 'Impeccable is enabled for this Agent.', disabled: 'Impeccable is disabled for this Agent.',
      unavailable: 'The Impeccable toggle is not ready for this Agent.', usage: 'Usage: /dsh-impeccable on|off',
    },
  },
  {
    locale: 'zh', suffix: 'zh', description: 'DSH Impeccable 设计技能包（简体中文界面）',
    skillDescription: '前端设计指导：产品背景、规划、评审、视觉设计、无障碍、响应式布局与动效。',
    strings: {
      command: '为当前 Agent 启用或停用 Impeccable 技能。',
      enabled: '已为当前 Agent 启用 Impeccable。', disabled: '已为当前 Agent 停用 Impeccable。',
      unavailable: '当前 Agent 的 Impeccable 开关尚未就绪。', usage: '用法：/dsh-impeccable on|off',
    },
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
  const manifest = {
    ...template,
    name,
    version: '0.1.1',
    description: variant.description,
    files: ['README.md', 'LICENSE', 'NOTICE.md', 'index.js', 'locale.js', 'cordis.patch.yml', 'skills'],
  }
  await writeFile(path.join(target, 'package.json'), `${JSON.stringify(manifest, null, 2)}\n`)
  const patch = (await readFile(path.join(target, 'cordis.patch.yml'), 'utf8')).replaceAll(baseName, name)
  await writeFile(path.join(target, 'cordis.patch.yml'), patch)
  const localeSource = `export const locale = ${JSON.stringify(variant.locale)}\nexport const skillDescription = ${JSON.stringify(variant.skillDescription)}\nexport const strings = ${JSON.stringify(variant.strings, null, 2)}\n`
  await writeFile(path.join(target, 'locale.js'), localeSource)
}
