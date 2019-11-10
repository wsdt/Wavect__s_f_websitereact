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

// reactstrap components

// core components
import Footer from './pageComponents/Footers/Footer.js'
import IndexHeader from './pageComponents/Headers/IndexHeader.js'
import IndexNavbar from './pageComponents/Navbars/IndexNavbar.js'

// index sections
import SectionButtons from './index-sections/SectionButtons'
import SectionCarousel from './index-sections/SectionCarousel'
import SectionDark from './index-sections/SectionDark'
import SectionDownload from './index-sections/SectionDownload'
import SectionExamples from './index-sections/SectionExamples'
import SectionJavaScript from './index-sections/SectionJavaScript'
import SectionLogin from './index-sections/SectionLogin'
import SectionNavbars from './index-sections/SectionNavbars'
import SectionNavigation from './index-sections/SectionNavigation'
import SectionNotifications from './index-sections/SectionNotifications'
import SectionNucleoIcons from './index-sections/SectionNucleoIcons'
import SectionProgress from './index-sections/SectionProgress'
import SectionTypography from './index-sections/SectionTypography'

function Index() {
    document.documentElement.classList.remove('nav-open')
    React.useEffect(() => {
        document.body.classList.add('index')
        return function cleanup() {
            document.body.classList.remove('index')
        }
    })
    return (
        <>
            <IndexNavbar />
            <IndexHeader />
            <div className="main">
                <SectionButtons />
                <SectionNavbars />
                <SectionNavigation />
                <SectionProgress />
                <SectionNotifications />
                <SectionTypography />
                <SectionJavaScript />
                <SectionCarousel />
                <SectionNucleoIcons />
                <SectionDark />
                <SectionLogin />
                <SectionExamples />
                <SectionDownload />
                <Footer />
            </div>
        </>
    )
}

export default Index
