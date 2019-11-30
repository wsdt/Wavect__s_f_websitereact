import de from '../../../assets/langs/de.json'
import en from '../../../assets/langs/en.json' // do not import via '* as en'

const defaultLang: string = 'en'

export const getCurrentLang = (): string => {
    return navigator.language ? navigator.language.substring(0, 2) : defaultLang
}

export const getLangBundle = (lang:string) => {
    const langBundle:{[key:string]:any} = TranslationBundle[lang]
    if (langBundle) {
        return langBundle
    } else {
        console.warn('TranslationBundler:getLangBundle: No translations for this language available.')
        return TranslationBundle[defaultLang]
    }
}

/** Export here all languages which should be available */
export const TranslationBundle: { [key: string]: any } = {
    en,
    de,
}
