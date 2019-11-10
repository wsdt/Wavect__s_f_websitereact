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
import {Helmet} from 'react-helmet'
import Footer from '../../../pageComponents/Footers/Footer'
import NavBar from '../../../pageComponents/Navbars/NavBar'
import {IPageProps} from './Page.props'


export const Page = (props: IPageProps) => {
    document.documentElement.classList.remove('nav-open')
    React.useEffect(() => {
        document.body.classList.add('landing-page')
        return function cleanup() {
            document.body.classList.remove('landing-page')
        }
    })

    const {t} = props

    return (
        <>
            <Helmet>
                <title>{t(props.currBreadcrumb.metaTitle)}</title>
                <meta name='description' content={t(props.currBreadcrumb.metaDescription)} />
                <meta name='keywords' content={t(props.currBreadcrumb.metaKeywords)} />
            </Helmet>
            <NavBar />
            {props.header}
            {props.children}
            <Footer />
        </>
    )
}
