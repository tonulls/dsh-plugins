export const BUNDLE_DESCRIPTION_LOCALE = 'zh'
export const SUPPORTED_BUNDLE_DESCRIPTION_LOCALES = Object.freeze(['en', 'ru', 'zh'])

export function assertBundleDescriptionLocale(locale) {
  if (!SUPPORTED_BUNDLE_DESCRIPTION_LOCALES.includes(locale)) {
    throw new Error(`Unsupported ECC bundle description locale: ${String(locale)}`)
  }
  return locale
}
