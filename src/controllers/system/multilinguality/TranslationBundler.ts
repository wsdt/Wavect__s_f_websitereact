import de from '../../../assets/langs/de.json'
import en from '../../../assets/langs/en.json' // do not import via '* as en'

export const getCurrentLang = (): string => {
    return navigator.language ? navigator.language.substring(0, 2) : 'en'
}

/** Export here all languages which should be available */
export const TranslationBundle: { [key: string]: any } = {
    en,
    de,
}
