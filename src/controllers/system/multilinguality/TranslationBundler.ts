import * as en from './langs/en.json'


export const getCurrentLang = ():string => {
    return window.localStorage.getItem('locale') || 'en'
}


/** Export here all languages which should be available */
export const TranslationBundle: {[key:string]:any} = {
    en,
}
