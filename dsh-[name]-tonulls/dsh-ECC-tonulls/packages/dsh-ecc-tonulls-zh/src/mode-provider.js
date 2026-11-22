import { assertBundleDescriptionLocale, BUNDLE_DESCRIPTION_LOCALE } from './locale.js'
import { parseModeCommandInput } from './routing.js'

const ENTRIES = [
  {
    name: 'dsh-ecc-agents',
    target: 'agents',
    description: 'Enable or disable automatic selection of ECC agent role instructions for this session.',
    ru: 'Включить или выключить автоматический выбор ролевых инструкций ECC Agents в этой сессии.',
    zh: '启用或停用本会话中 ECC Agent 角色说明的自动选择。',
    response: {
      en: { on: 'ECC Agents automatic selection enabled for this Agent.', off: 'ECC Agents automatic selection disabled for this Agent.' },
      ru: { on: 'Автоподбор ECC Agents включён для этого Agent.', off: 'Автоподбор ECC Agents выключен для этого Agent.' },
      zh: { on: '已为当前 Agent 启用 ECC Agents 自动选择。', off: '已为当前 Agent 停用 ECC Agents 自动选择。' },
    },
  },
  {
    name: 'dsh-ecc-skills',
    target: 'skills',
    description: 'Enable or disable automatic selection of ECC Skills for the current task in this session.',
    ru: 'Включить или выключить автоматический выбор ECC Skills для текущей задачи в этой сессии.',
    zh: '启用或停用本会话中针对当前任务自动选择 ECC Skills 的功能。',
    response: {
      en: { on: 'ECC Skills automatic selection enabled for this Agent.', off: 'ECC Skills automatic selection disabled for this Agent.' },
      ru: { on: 'Автоподбор ECC Skills включён для этого Agent.', off: 'Автоподбор ECC Skills выключен для этого Agent.' },
      zh: { on: '已为当前 Agent 启用 ECC Skills 自动选择。', off: '已为当前 Agent 停用 ECC Skills 自动选择。' },
    },
  },
  {
    name: 'dsh-ecc-commands',
    target: 'commands',
    description: 'Enable or disable automatic selection of reviewed ECC Commands for this session.',
    ru: 'Включить или выключить автоматический выбор проверенных ECC Commands в этой сессии.',
    zh: '启用或停用本会话中对已审核 ECC Commands 的自动选择。',
    response: {
      en: { on: 'ECC Commands automatic selection enabled for this Agent.', off: 'ECC Commands automatic selection disabled for this Agent.' },
      ru: { on: 'Автоподбор ECC Commands включён для этого Agent.', off: 'Автоподбор ECC Commands выключен для этого Agent.' },
      zh: { on: '已为当前 Agent 启用 ECC Commands 自动选择。', off: '已为当前 Agent 停用 ECC Commands 自动选择。' },
    },
  },
  {
    name: 'dsh-ecc-tonulls',
    target: 'tonulls',
    description: 'Enable or disable automatic selection across all included ECC components for this session.',
    ru: 'Включить или выключить автоматический выбор во всех подключённых ECC-компонентах этой сессии.',
    zh: '启用或停用本会话中对所有已包含 ECC 组件的自动选择。',
    response: {
      en: { on: 'Automatic selection for all ECC components enabled for this Agent.', off: 'Automatic selection for all ECC components disabled for this Agent.' },
      ru: { on: 'Автоподбор всех ECC-компонентов включён для этого Agent.', off: 'Автоподбор всех ECC-компонентов выключен для этого Agent.' },
      zh: { on: '已为当前 Agent 启用所有 ECC 组件的自动选择。', off: '已为当前 Agent 停用所有 ECC 组件的自动选择。' },
    },
  },
]

const USAGE = {
  en: (name) => `Usage: /${name} on|off`,
  ru: (name) => `Формат: /${name} on|off`,
  zh: (name) => `用法：/${name} on|off`,
}
const ROUTING_UNAVAILABLE = {
  en: 'ECC session controls are not ready for this Agent.',
  ru: 'Переключатели ECC для этого Agent ещё не готовы.',
  zh: '此 Agent 的 ECC 会话控制尚未就绪。',
}

function localizedDescriptions(entry) {
  return { en: entry.description, ru: entry.ru, zh: entry.zh }
}

/** Create the four native DSH slash commands for a bundle variant. */
export function createModeCommandDefinitions({
  descriptionLocale = BUNDLE_DESCRIPTION_LOCALE,
  getRouting,
} = {}) {
  const locale = assertBundleDescriptionLocale(descriptionLocale)
  if (typeof getRouting !== 'function') throw new TypeError('getRouting must be a function')

  return ENTRIES.map((entry) => ({
    name: entry.name,
    description: localizedDescriptions(entry)[locale],
    input: { hint: 'on|off' },
    handler({ agent, rawInput }) {
      const command = parseModeCommandInput(entry.target, rawInput)
      if (command === undefined) return { kind: 'error', text: USAGE[locale](entry.name) }
      const routing = getRouting(agent)
      if (typeof routing?.applyCommand !== 'function') {
        return { kind: 'error', text: ROUTING_UNAVAILABLE[locale] }
      }
      if (!routing.applyCommand(command)) return { kind: 'error', text: USAGE[locale](entry.name) }
      return { kind: 'success', text: entry.response[locale][command.enabled ? 'on' : 'off'] }
    },
  }))
}

/** Register all four commands and return one disposer for their registrations. */
export function registerModeCommands(context, options) {
  if (typeof context?.commands?.register !== 'function') {
    throw new Error('dsh-ecc-tonulls requires the DSH commands service')
  }
  const disposers = []
  try {
    for (const definition of createModeCommandDefinitions(options)) {
      disposers.push(context.commands.register(definition))
    }
  } catch (error) {
    for (const dispose of disposers.reverse()) dispose()
    throw error
  }
  let disposed = false
  return () => {
    if (disposed) return
    disposed = true
    for (const dispose of disposers.reverse()) dispose()
  }
}

export { ENTRIES as MODE_CONTROL_ENTRIES }
