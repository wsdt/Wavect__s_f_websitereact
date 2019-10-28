import en from './langs/en.json' // do not import via '* as en'


export const getCurrentLang = ():string => {
    return window.localStorage.getItem('locale') || 'en'
}


/** Export here all languages which should be available */
export const TranslationBundle: {[key:string]:any} = {
    en,
}


