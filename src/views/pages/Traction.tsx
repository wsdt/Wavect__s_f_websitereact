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
import { breadCrumbHome, breadCrumbTraction } from '../../controllers/system/routers/BreadcrumbRoutes'
import BreadCrumbs from '../functional/BreadcrumbHeader/BreadcrumbHeader'
import { P } from '../functional/TextComponents/P/P'
import { TextPageHeader } from '../functional/TextComponents/TextPageHeader/TextPageHeader'
import Footer from '../pageComponents/Footers/Footer'
import BlogPageHeader from '../pageComponents/Headers/BlogPageHeader'
import NavBar from '../pageComponents/Navbars/NavBar'
import {SocialShareBar} from '../functional/SocialShareBar/SocialShareBar'
import {Competitions} from '../functional/Competitions/Competitions'
import {Partners} from '../functional/Partners/Partners'

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
                <meta name='description' content={t(_schema.pages.traction.header.description)} />
                <meta name='keywords' content='wavect,traction,change,inspire,partner,sponsor,impact' />
            </Helmet>
            <NavBar />
            <BlogPageHeader />
            <div className='section profile-content' style={{ paddingTop: 0 }}>
                <Container>
                    <Row>
                        <Col className='ml-auto mr-auto text-left' md='8'>
                            <BreadCrumbs breadcrumbs={[breadCrumbHome, breadCrumbTraction]} />

                            <TextPageHeader>{t(_schema.pages.traction.intro.title)}</TextPageHeader>
                            <P>{t(_schema.pages.traction.intro.description)}</P>
                            <hr />
                            <br />
                            <Competitions t={t} />
                        </Col>
                    </Row>
                    <br />
                </Container>
            </div>

            <div className='section section-dark text-center'>
                <Container>
                    <Row>
                        <Col className='ml-auto mr-auto text-left' md='8'>
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
