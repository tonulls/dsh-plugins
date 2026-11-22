import { readFile } from 'node:fs/promises'
import { createAgentsProvider } from '../vendor/agents/src/provider.js'
import { createSkillsProvider } from '../vendor/skills/src/provider.js'
import { createCommandsProvider } from '../vendor/commands/src/provider.js'
import { assertBundleDescriptionLocale, BUNDLE_DESCRIPTION_LOCALE } from './locale.js'

const BUNDLE_LOCALE = assertBundleDescriptionLocale(BUNDLE_DESCRIPTION_LOCALE)
const DESCRIPTION_URLS = Object.freeze({
  agents: new URL(`./locales/agents.${BUNDLE_LOCALE}.json`, import.meta.url),
  skills: new URL(`./locales/skills.${BUNDLE_LOCALE}.json`, import.meta.url),
  commands: new URL(`./locales/commands.${BUNDLE_LOCALE}.json`, import.meta.url),
})
const descriptionMaps = new Map()

async function readDescriptions(component, signal) {
  signal?.throwIfAborted()
  let pending = descriptionMaps.get(component)
  if (pending === undefined) {
    const url = DESCRIPTION_URLS[component]
    if (url === undefined) throw new Error(`Unknown ECC bundle component: ${component}`)
    pending = readFile(url, { encoding: 'utf8' }).then((text) => {
      const descriptions = JSON.parse(text)
      if (typeof descriptions !== 'object' || descriptions === null || Array.isArray(descriptions)) {
        throw new Error(`ECC ${component} descriptions must be a name-to-string object`)
      }
      return descriptions
    })
    descriptionMaps.set(component, pending)
  }
  const descriptions = await pending
  signal?.throwIfAborted()
  return descriptions
}

function localizeEntry(entry, component, locale, descriptions) {
  const localizedDescription = entry.localizedDescription ?? { en: entry.description }
  const description = Object.hasOwn(descriptions, entry.name) ? descriptions[entry.name] : undefined
  if (typeof description !== 'string' || description.trim().length === 0) {
    throw new Error(`ECC ${component} ${locale} description is missing for ${entry.name}`)
  }
  return {
    ...entry,
    description,
    localizedDescription: { ...localizedDescription, [locale]: description },
  }
}

function localizedProviderFactory(createProvider, component, locale) {
  return (rank, options = {}) => {
    const provider = createProvider(rank, { ...options, userInvocable: false })
    return {
      ...provider,
      async list(request = {}) {
        const entries = await provider.list(request)
        const descriptions = await readDescriptions(component, request.signal)
        return entries.map((entry) => localizeEntry(entry, component, locale, descriptions))
      },
      async get(selected, request = {}) {
        const entry = await provider.get(selected, request)
        if (entry === undefined) return undefined
        const descriptions = await readDescriptions(component, request.signal)
        return localizeEntry(entry, component, locale, descriptions)
      },
    }
  }
}

/** Create provider factories that display this bundle package's descriptions. */
export function createComponentProviderFactories() {
  const locale = BUNDLE_LOCALE
  return {
    agents: localizedProviderFactory(createAgentsProvider, 'agents', locale),
    skills: localizedProviderFactory(createSkillsProvider, 'skills', locale),
    commands: localizedProviderFactory(createCommandsProvider, 'commands', locale),
  }
}

export const COMPONENT_PROVIDER_FACTORIES = createComponentProviderFactories()

/** Register the embedded component catalogs without adding individual menu entries. */
export function registerUmbrellaProviders(context, rank) {
  for (const createProvider of Object.values(COMPONENT_PROVIDER_FACTORIES)) {
    context.skills.registerProvider(() => createProvider(rank))
  }
}
