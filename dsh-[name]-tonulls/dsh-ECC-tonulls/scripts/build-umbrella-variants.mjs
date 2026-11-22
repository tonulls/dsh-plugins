import { lstat, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const PROJECT_ROOT = fileURLToPath(new URL('../', import.meta.url))
const PACKAGES_ROOT = path.resolve(PROJECT_ROOT, 'packages')
const SOURCE_ROOT = path.resolve(PACKAGES_ROOT, 'dsh-ecc-tonulls-en')
const BASE_PACKAGE_NAME = 'dsh-ecc-tonulls-en'
const PUBLIC_REPOSITORY = 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:'
const VARIANTS = [
  {
    directory: 'dsh-ecc-tonulls-ru',
    packageName: 'dsh-ecc-tonulls-ru',
    locale: 'ru',
    description: 'Полный ECC bundle для DSH с русскими описаниями',
    summary: 'Русские описания ECC-компонентов; меню `/` bundle показывает только четыре команды управления группами. Инструкции и ресурсы остаются без изменений.',
    installNote: 'Установите только один вариант umbrella bundle в профиль:',
    removeLabel: 'Удаление:',
    removeNote: '`dsh plugin --profile web remove dsh-ecc-tonulls-ru`',
  },
  {
    directory: 'dsh-ecc-tonulls-zh',
    packageName: 'dsh-ecc-tonulls-zh',
    locale: 'zh',
    description: '包含简体中文描述的 DSH ECC 完整 bundle',
    summary: 'ECC 组件提供简体中文描述；Bundle 的 `/` 菜单只显示四个分组控制命令。指令与资源正文保持原样。',
    installNote: '每个 profile 只能安装一个 umbrella bundle 版本：',
    removeLabel: '卸载命令：',
    removeNote: '`dsh plugin --profile web remove dsh-ecc-tonulls-zh`',
  },
]
const VARIANT_DIRECTORIES = new Set(VARIANTS.map((variant) => variant.directory))
const COMPONENT_PATHS = Object.freeze({
  agents: {
    catalog: 'vendor/agents/assets/agents/catalog.json',
    russian: 'vendor/agents/assets/locales/ru.json',
  },
  skills: {
    catalog: 'vendor/skills/assets/catalog.json',
    russian: 'vendor/skills/assets/locales/ru.json',
  },
  commands: {
    catalog: 'vendor/commands/assets/catalog.json',
    russian: 'vendor/commands/assets/locales/ru.json',
  },
})
const SOURCE_LOCALES_ROOT = path.resolve(PROJECT_ROOT, 'scripts', 'umbrella-locales')
const BASE_LOCALES_ROOT = path.resolve(SOURCE_ROOT, 'src', 'locales')
const LEGACY_BASE_LOCALE_FILES = new Set([
  'src/locales/agents.zh.json',
  'src/locales/skills.zh.json',
  'src/locales/commands.zh.json',
])

function variantReadme(variant) {
  return [
    `# ${variant.packageName}`,
    '',
    variant.summary,
    '',
    variant.installNote,
    '',
    '```sh',
    `dsh plugin --profile web add '${PUBLIC_REPOSITORY}/dsh-[name]-tonulls/dsh-ECC-tonulls/packages/${variant.packageName}'`,
    '```',
    '',
    `${variant.removeLabel} ${variant.removeNote}`,
    '',
  ].join('\n')
}

function shouldSkip(relativePath) {
  return relativePath === 'tests' || relativePath.startsWith('tests/')
    || relativePath === 'node_modules' || relativePath.startsWith('node_modules/')
}

async function filesUnder(root) {
  const files = new Map()
  async function visit(directory, prefix = '') {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const relative = prefix === '' ? entry.name : path.posix.join(prefix, entry.name)
      if (shouldSkip(relative)) continue
      const absolute = path.join(directory, entry.name)
      if (entry.isDirectory()) {
        await visit(absolute, relative)
      } else if (entry.isFile()) {
        files.set(relative, await readFile(absolute))
      } else {
        throw new Error(`Unsupported file type in umbrella package: ${absolute}`)
      }
    }
  }
  await visit(root)
  return files
}

async function readSourceFiles() {
  const info = await lstat(SOURCE_ROOT)
  if (!info.isDirectory() || info.isSymbolicLink()) {
    throw new Error(`Base umbrella path must be a real directory: ${SOURCE_ROOT}`)
  }
  return filesUnder(SOURCE_ROOT)
}

function parseJsonFile(contents, description) {
  if (contents === undefined) throw new Error(`Missing ${description}`)
  return JSON.parse(contents.toString('utf8'))
}

function normalizeDescriptions(component, locale, names, descriptions) {
  if (typeof descriptions !== 'object' || descriptions === null || Array.isArray(descriptions)) {
    throw new Error(`${locale}/${component} descriptions must be a name-to-string object`)
  }
  const nameSet = new Set(names)
  const missing = names.filter((name) => !Object.hasOwn(descriptions, name))
  const extra = Object.keys(descriptions).filter((name) => !nameSet.has(name))
  if (missing.length > 0 || extra.length > 0) {
    throw new Error(`${locale}/${component} descriptions mismatch catalog: ${missing.length} missing, ${extra.length} extra`)
  }
  const normalized = Object.fromEntries(names.map((name) => {
    const description = descriptions[name]
    if (typeof description !== 'string' || description.trim().length === 0) {
      throw new Error(`${locale}/${component} has an empty description for ${name}`)
    }
    return [name, description]
  }))
  return Buffer.from(`${JSON.stringify(normalized, null, 2)}\n`)
}

async function readChineseSource(component) {
  const scriptsRoot = path.resolve(PROJECT_ROOT, 'scripts')
  const scriptsInfo = await lstat(scriptsRoot)
  if (!scriptsInfo.isDirectory() || scriptsInfo.isSymbolicLink()) {
    throw new Error(`Scripts path must be a real directory: ${scriptsRoot}`)
  }
  const sourceInfo = await lstat(SOURCE_LOCALES_ROOT)
  if (!sourceInfo.isDirectory() || sourceInfo.isSymbolicLink()) {
    throw new Error(`Umbrella locale sources must be a real directory: ${SOURCE_LOCALES_ROOT}`)
  }
  const directory = path.resolve(SOURCE_LOCALES_ROOT, 'zh')
  if (path.dirname(directory) !== SOURCE_LOCALES_ROOT) {
    throw new Error(`Refusing to read outside umbrella locale sources: ${directory}`)
  }
  const directoryInfo = await lstat(directory)
  if (!directoryInfo.isDirectory() || directoryInfo.isSymbolicLink()) {
    throw new Error(`Chinese locale source must be a real directory: ${directory}`)
  }
  const file = path.resolve(directory, `${component}.json`)
  if (path.dirname(file) !== directory) throw new Error(`Refusing to read outside Chinese locale sources: ${file}`)
  const info = await lstat(file)
  if (!info.isFile() || info.isSymbolicLink()) {
    throw new Error(`Chinese locale source must be a regular file: ${file}`)
  }
  return readFile(file)
}

async function localeFilesFor(sourceFiles, locale) {
  if (!['en', 'ru', 'zh'].includes(locale)) throw new Error(`Unsupported bundle description locale: ${locale}`)
  const localeFiles = new Map()
  for (const [component, paths] of Object.entries(COMPONENT_PATHS)) {
    const catalog = parseJsonFile(sourceFiles.get(paths.catalog), `${component} catalog`)
    if (!Array.isArray(catalog.entries)) throw new Error(`${component} catalog must contain entries`)
    const names = catalog.entries.map((entry) => entry.name)
    if (names.some((name) => typeof name !== 'string') || new Set(names).size !== names.length) {
      throw new Error(`${component} catalog contains invalid or duplicate names`)
    }
    let descriptions
    if (locale === 'en') {
      descriptions = Object.fromEntries(catalog.entries.map((entry) => [entry.name, entry.description]))
    } else if (locale === 'ru') {
      descriptions = parseJsonFile(sourceFiles.get(paths.russian), `${component} Russian descriptions`)
    } else {
      descriptions = parseJsonFile(await readChineseSource(component), `${component} Chinese descriptions`)
    }
    localeFiles.set(`src/locales/${component}.${locale}.json`, normalizeDescriptions(component, locale, names, descriptions))
  }
  return localeFiles
}

function assertVariantTarget(variant) {
  const target = path.resolve(PACKAGES_ROOT, variant.directory)
  if (!VARIANT_DIRECTORIES.has(path.basename(target))
    || path.dirname(target) !== PACKAGES_ROOT
    || target === SOURCE_ROOT) {
    throw new Error(`Refusing to write outside an allowed generated variant directory: ${target}`)
  }
  return target
}

function expectedVariantFiles(sourceFiles, variant, localeFiles) {
  const expected = new Map(sourceFiles)
  for (const relative of expected.keys()) {
    if (relative.startsWith('src/locales/')) expected.delete(relative)
  }
  for (const [relative, contents] of localeFiles) expected.set(relative, contents)
  const manifestText = expected.get('package.json')
  if (manifestText === undefined) throw new Error('The base umbrella package is missing package.json')
  const manifest = JSON.parse(manifestText.toString('utf8'))
  if (manifest.name !== BASE_PACKAGE_NAME) {
    throw new Error(`Expected base package ${BASE_PACKAGE_NAME}; found ${String(manifest.name)}`)
  }
  manifest.name = variant.packageName
  manifest.description = variant.description
  expected.set('package.json', Buffer.from(`${JSON.stringify(manifest, null, 2)}\n`))

  const patchText = expected.get('cordis.patch.yml')?.toString('utf8')
  const pluginNamePattern = new RegExp(`^([ \\t]*name:[ \\t]*)${BASE_PACKAGE_NAME}[ \\t]*$`, 'm')
  if (patchText === undefined || !pluginNamePattern.test(patchText)) {
    throw new Error(`Base cordis.patch.yml must register package ${BASE_PACKAGE_NAME}`)
  }
  expected.set('cordis.patch.yml', Buffer.from(patchText.replace(pluginNamePattern, `$1${variant.packageName}`)))

  const localeText = expected.get('src/locale.js')?.toString('utf8')
  const localePattern = /^export const BUNDLE_DESCRIPTION_LOCALE = 'en'$/m
  if (localeText === undefined || !localePattern.test(localeText)) {
    throw new Error('Base src/locale.js must define BUNDLE_DESCRIPTION_LOCALE as en')
  }
  expected.set('src/locale.js', Buffer.from(localeText.replace(localePattern,
    `export const BUNDLE_DESCRIPTION_LOCALE = '${variant.locale}'`)))
  expected.set('README.md', Buffer.from(variantReadme(variant)))
  return expected
}

async function readActual(target) {
  let info
  try {
    info = await lstat(target)
  } catch (error) {
    if (error.code === 'ENOENT') return new Map()
    throw error
  }
  if (!info.isDirectory() || info.isSymbolicLink()) {
    throw new Error(`Generated variant path must be a real directory: ${target}`)
  }
  return filesUnder(target)
}

function compareFiles(expected, actual, target) {
  const missing = [...expected.keys()].filter((file) => !actual.has(file))
  const extra = [...actual.keys()].filter((file) => !expected.has(file))
  const changed = [...expected.keys()].filter((file) => actual.has(file) && !expected.get(file).equals(actual.get(file)))
  if (missing.length > 0 || extra.length > 0 || changed.length > 0) {
    const details = [
      ...missing.slice(0, 10).map((file) => `missing: ${file}`),
      ...extra.slice(0, 10).map((file) => `unexpected: ${file}`),
      ...changed.slice(0, 10).map((file) => `out of date: ${file}`),
    ]
    throw new Error(`Umbrella variant is not synchronized (${target}; ${missing.length} missing, ${extra.length} extra, ${changed.length} changed):\n${details.join('\n')}`)
  }
}

async function writeBaseEnglishLocaleFiles(sourceFiles) {
  const expected = await localeFilesFor(sourceFiles, 'en')
  const expectedNames = new Set(expected.keys())
  const existingNames = [...sourceFiles.keys()].filter((relative) => relative.startsWith('src/locales/'))
  const unknownFiles = existingNames.filter((relative) =>
    !expectedNames.has(relative) && !LEGACY_BASE_LOCALE_FILES.has(relative))
  if (unknownFiles.length > 0) {
    throw new Error(`Refusing to replace unrecognized base locale files: ${unknownFiles.join(', ')}`)
  }
  const info = await lstat(BASE_LOCALES_ROOT)
  if (!info.isDirectory() || info.isSymbolicLink()) {
    throw new Error(`Base locales path must be a real directory: ${BASE_LOCALES_ROOT}`)
  }
  for (const relative of existingNames.filter((name) => LEGACY_BASE_LOCALE_FILES.has(name))) {
    const target = path.resolve(SOURCE_ROOT, relative)
    if (path.dirname(target) !== BASE_LOCALES_ROOT || !target.startsWith(`${BASE_LOCALES_ROOT}${path.sep}`)) {
      throw new Error(`Refusing to remove outside base locales: ${target}`)
    }
    const fileInfo = await lstat(target)
    if (!fileInfo.isFile() || fileInfo.isSymbolicLink()) {
      throw new Error(`Legacy locale must be a regular file: ${target}`)
    }
    await rm(target)
  }
  for (const [relative, contents] of expected) {
    const target = path.resolve(SOURCE_ROOT, relative)
    if (path.dirname(target) !== BASE_LOCALES_ROOT || !target.startsWith(`${BASE_LOCALES_ROOT}${path.sep}`)) {
      throw new Error(`Refusing to write outside base locales: ${target}`)
    }
    await writeFile(target, contents)
  }
}

async function checkVariants() {
  const sourceFiles = await readSourceFiles()
  const englishFiles = await localeFilesFor(sourceFiles, 'en')
  const actualEnglishFiles = new Map([...sourceFiles].filter(([relative]) => relative.startsWith('src/locales/')))
  compareFiles(englishFiles, actualEnglishFiles, SOURCE_ROOT)
  for (const variant of VARIANTS) {
    const target = assertVariantTarget(variant)
    const localeFiles = await localeFilesFor(sourceFiles, variant.locale)
    compareFiles(expectedVariantFiles(sourceFiles, variant, localeFiles), await readActual(target), target)
  }
  console.log(`Umbrella locale variants are synchronized (${VARIANTS.length} variants).`)
}

async function buildVariants() {
  let sourceFiles = await readSourceFiles()
  await writeBaseEnglishLocaleFiles(sourceFiles)
  sourceFiles = await readSourceFiles()
  for (const variant of VARIANTS) {
    const target = assertVariantTarget(variant)
    const localeFiles = await localeFilesFor(sourceFiles, variant.locale)
    const expected = expectedVariantFiles(sourceFiles, variant, localeFiles)
    const info = await readActualInfo(target)
    if (info !== null) await rm(target, { recursive: true, force: true })
    await mkdir(target, { recursive: true })
    for (const [relative, contents] of expected) {
      const output = path.resolve(target, relative)
      if (!output.startsWith(`${target}${path.sep}`)) {
        throw new Error(`Refusing to write outside generated variant: ${output}`)
      }
      await mkdir(path.dirname(output), { recursive: true })
      await writeFile(output, contents)
    }
    console.log(`Generated ${target}`)
  }
  await checkVariants()
}

async function readActualInfo(target) {
  try {
    const info = await lstat(target)
    if (!info.isDirectory() || info.isSymbolicLink()) {
      throw new Error(`Generated variant path must be a real directory: ${target}`)
    }
    return info
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
    return null
  }
}

const command = process.argv[2]
if (command === '--check') {
  await checkVariants()
} else if (command === undefined) {
  await buildVariants()
} else {
  throw new Error(`Unknown argument: ${command}`)
}
