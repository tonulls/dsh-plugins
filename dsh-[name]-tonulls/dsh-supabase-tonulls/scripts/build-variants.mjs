import { cp, mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const baseName = 'dsh-supabase-tonulls'
const sourcePaths = ['src', 'skills', 'LICENSE', 'NOTICE.md', 'cordis.patch.yml']
const template = JSON.parse(await readFile(path.join(root, 'package.template.json'), 'utf8'))
const variants = [
  {
    locale: 'ru', suffix: 'ru',
    description: 'Supabase development skill for DSH (Russian metadata)',
    skillDescription: 'Практическое руководство по Supabase: Postgres и RLS, Data API и миграции, Auth/SSR, Storage, Edge Functions, Realtime, векторы/Cron/Queues, CLI/MCP, безопасность и диагностика.',
    strings: {
      command: 'Включить или выключить Supabase-навык для текущего Agent.',
      enabled: 'Supabase-навык включён для этого Agent.',
      disabled: 'Supabase-навык выключен для этого Agent.',
      unavailable: 'Переключатель Supabase для этого Agent ещё не готов.',
      usage: 'Формат: /dsh-supabase-tonulls on|off',
    },
  },
  {
    locale: 'en', suffix: 'en',
    description: 'Supabase development skill for DeepSeek Harness (English metadata)',
    skillDescription: 'Practical Supabase guidance for Postgres and RLS, the Data API and migrations, Auth/SSR, Storage, Edge Functions, Realtime, vectors/Cron/Queues, CLI/MCP, security, and troubleshooting.',
    strings: {
      command: 'Enable or disable the Supabase skill for the current Agent.',
      enabled: 'The Supabase skill is enabled for this Agent.',
      disabled: 'The Supabase skill is disabled for this Agent.',
      unavailable: 'The Supabase toggle is not ready for this Agent.',
      usage: 'Usage: /dsh-supabase-tonulls on|off',
    },
  },
  {
    locale: 'zh', suffix: 'zh',
    description: 'DSH Supabase 开发技能（简体中文元数据）',
    skillDescription: 'Supabase 实用指南：Postgres 与 RLS、Data API 和迁移、Auth/SSR、Storage、Edge Functions、Realtime、向量/Cron/Queues、CLI/MCP、安全与故障排查。',
    strings: {
      command: '为当前 Agent 启用或停用 Supabase 技能。',
      enabled: '已为当前 Agent 启用 Supabase 技能。',
      disabled: '已为当前 Agent 停用 Supabase 技能。',
      unavailable: '当前 Agent 的 Supabase 开关尚未就绪。',
      usage: '用法：/dsh-supabase-tonulls on|off',
    },
  },
]

for (const variant of variants) {
  const name = `${baseName}-${variant.suffix}`
  const target = path.join(root, 'packages', name)
  await mkdir(target, { recursive: true })
  for (const source of sourcePaths) {
    await cp(path.join(root, source), path.join(target, source), { recursive: true, force: true })
  }

  const manifest = { ...template, name, version: '0.1.0', description: variant.description }
  await writeFile(path.join(target, 'package.json'), `${JSON.stringify(manifest, null, 2)}\n`)

  const patch = (await readFile(path.join(target, 'cordis.patch.yml'), 'utf8')).replaceAll(baseName, name)
  await writeFile(path.join(target, 'cordis.patch.yml'), patch)

  const localeSource = `export const locale = ${JSON.stringify(variant.locale)}\nexport const skillDescription = ${JSON.stringify(variant.skillDescription)}\nexport const strings = ${JSON.stringify(variant.strings, null, 2)}\n`
  await writeFile(path.join(target, 'src/locale.js'), localeSource)

}
