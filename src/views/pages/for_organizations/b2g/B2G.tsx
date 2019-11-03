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
import { faAd, faCreditCard, faFilter, faUsers } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Helmet } from 'react-helmet'
import { translate } from 'react-polyglot'
import { RouteProps } from 'react-router'
import { Col, Container, Row } from 'reactstrap'
import _schema from '../../../../controllers/system/multilinguality/_schema.json'
import Footer from '../../../components/Footers/Footer'
import { B2GPageHeader } from '../../../components/Headers/SlideHeaders/custom/B2GPageHeader'
import NavBar from '../../../components/Navbars/NavBar'
import { Li, Ol } from '../../blogs/blogs_components/text_components/List'
import { breadCrumbForOrganizations, breadCrumbHome, breadCrumbWhy } from '../../breadcrumbs/breadcrumbs.constants'
import { CollapseIconText } from '../../CollapseIconText'
import ContactForm from '../../ContactForm/ContactForm'
import SocialShareBar from '../../SocialShareBar/SocialShareBar'
import B2GFacts from './B2GFacts'
import parse from 'html-react-parser'
import BreadCrumbs from '../../breadcrumbs/Breadcrumbs'

interface IB2GProps {
    routeProps: RouteProps
    t: (key: string, ...args: any) => string
}

function B2G(props: IB2GProps) {
    const { t } = props
    const schema = _schema.pages.b2g

    document.documentElement.classList.remove('nav-open')
    React.useEffect(() => {
        document.body.classList.add('profile-page')
        return function cleanup() {
            document.body.classList.remove('profile-page')
        }
    })

    return (
        <>
            <Helmet>
                <title>{t(schema.header.title)}</title>
                <meta name="description" content={t(schema.header.description)} />
                <meta name="keywords" content="wavect,government,issue,society,solidarity,environment,health,charity,reputation,sustainability" />
            </Helmet>

            <NavBar />
            <B2GPageHeader t={t} />
            <div className="main">
                <div className="section text-center" style={{ paddingTop: 0 }}>
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <BreadCrumbs breadcrumbs={[breadCrumbHome, breadCrumbForOrganizations]} />

                                <h2 className="title">{t(schema.intro.title)}</h2>
                                <h5 className="description">
                                    <Ol>
                                        <Li>{parse(t(schema.intro.description._1, { link: breadCrumbWhy.link }))}</Li>
                                        <Li>{t(schema.intro.description._2)}</Li>
                                        <Li>{t(schema.intro.description._3)}</Li>
                                        <Li>{t(schema.intro.description._4)}</Li>
                                    </Ol>
                                </h5>
                                <br />
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col md="3">
                                <CollapseIconText
                                    icon={faCreditCard}
                                    title={t(schema.intro.iconcols.lowpricedcsr.title)}
                                    descr={parse(t(schema.intro.iconcols.lowpricedcsr.description))}
                                />
                            </Col>
                            <Col md="3">
                                <CollapseIconText
                                    icon={faFilter}
                                    title={t(schema.intro.iconcols.personalizedcsr.title)}
                                    descr={parse(t(schema.intro.iconcols.personalizedcsr.description))}
                                />
                            </Col>
                            <Col md="3">
                                <CollapseIconText
                                    icon={faAd}
                                    title={t(schema.intro.iconcols.storytelling.title)}
                                    descr={parse(t(schema.intro.iconcols.storytelling.description))}
                                />
                            </Col>
                            <Col md="3">
                                <CollapseIconText
                                    icon={faUsers}
                                    title={t(schema.intro.iconcols.aggregatedimpact.title)}
                                    descr={parse(t(schema.intro.iconcols.aggregatedimpact.description))}
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section section-dark text-center">
                    <B2GFacts t={t} />
                </div>

                <ContactForm t={t} />
                <SocialShareBar shareUrl={breadCrumbForOrganizations.link} />
            </div>
            <Footer />
        </>
    )
}

export default translate()(B2G)
