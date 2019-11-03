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
import { Helmet } from 'react-helmet'
import { translate } from 'react-polyglot'
import { RouteProps } from 'react-router'
import { Col, Container, Row } from 'reactstrap'
import _schema from '../../controllers/system/multilinguality/_schema.json'
import Footer from '../components/Footers/Footer'
import BlogPageHeader from '../components/Headers/BlogPageHeader'
import NavBar from '../components/Navbars/NavBar'
import { P } from './blogs/blogs_components/text_components/P'
import { TextHeader } from './blogs/blogs_components/text_components/TextHeader'
import BreadCrumbs from './breadcrumbs/Breadcrumbs'
import { breadCrumbHome, breadCrumbTraction } from './breadcrumbs/breadcrumbs.constants'
import SocialShareBar from './SocialShareBar/SocialShareBar'
import Competitions from './traction/Competitions'
import Partners from './traction/Partners'

interface ITractionProps {
    routeProps: RouteProps
    t: (key: string, ...args: any) => string
}

function Traction(props: ITractionProps) {
    const { t } = props

    document.documentElement.classList.remove('nav-open')
    React.useEffect(() => {
        document.body.classList.add('landing-page')
        return function cleanup() {
            document.body.classList.remove('landing-page')
        }
    })

    return (
        <>
            <Helmet>
                <title>{t(_schema.pages.traction.header.title)}</title>
                <meta name="description" content={t(_schema.pages.traction.header.description)} />
                <meta name="keywords" content="wavect,traction,change,inspire,partner,sponsor,impact" />
            </Helmet>
            <NavBar />
            <BlogPageHeader />
            <div className="section profile-content" style={{ paddingTop: 0 }}>
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto text-left" md="8">
                            <BreadCrumbs breadcrumbs={[breadCrumbHome, breadCrumbTraction]} />

                            <TextHeader>{t(_schema.pages.traction.intro.title)}</TextHeader>
                            <P>{t(_schema.pages.traction.intro.description)}</P>
                            <hr />
                            <br />
                            <Competitions t={t} />
                        </Col>
                    </Row>
                    <br />
                </Container>
            </div>

            <div className="section section-dark text-center">
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto text-left" md="8">
                            <Partners t={t} />
                        </Col>
                    </Row>
                </Container>
            </div>

            <SocialShareBar shareUrl={breadCrumbTraction.link} />
            <Footer />
        </>
    )
}

export default translate()(Traction)
