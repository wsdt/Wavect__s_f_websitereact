/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
import ReactDOM from 'react-dom'
import { I18n } from 'react-polyglot'
import './assets/css/bootstrap.min.css'
import './assets/demo/demo.css'
import './assets/scss/paper-kit.scss'
import { getLangBundle } from './controllers/system/multilinguality/TranslationBundler'
import { getCurrentLang } from './controllers/system/multilinguality/TranslationBundler'
import CustomRouter from './controllers/system/routers/CustomRouter'


const lang: string = getCurrentLang()

/*
ReactDOM.render(
    <I18n locale={lang} messages={getLangBundle(lang)}>
        <CustomRouter />
    </I18n>,
    document.getElementById('root')
)
*/

const child = <I18n locale={lang} messages={getLangBundle(lang)}>
    <CustomRouter />
</I18n>

const rootElement = document.getElementById('root')
// @ts-ignore
if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(child, rootElement)
} else {
    ReactDOM.render(child, rootElement)
}