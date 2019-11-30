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
import parse from 'html-react-parser'
import React from 'react'
import { translate } from 'react-polyglot'
import { Col, Container, Row } from 'reactstrap'
import _schema from '../../../../controllers/system/multilinguality/_schema.json'
import { breadCrumbForCompanies, breadCrumbHome, breadCrumbWhy } from '../../../../controllers/system/routers/BreadcrumbRoutes'
import { CollapseIconText } from '../../../classbased/CollapseIconText/CollapseIconText'
import ContactForm from '../../../classbased/ContactForm/ContactForm'
import BreadCrumbs from '../../../functional/BreadcrumbHeader/BreadcrumbHeader'
import { B2BFacts } from '../../../functional/Facts/B2BFacts/B2BFacts'
import { SocialShareBar } from '../../../functional/SocialShareBar/SocialShareBar'
import { Li, Ol } from '../../../functional/TextComponents/List/List'
import { B2BPageHeader } from '../../../pageComponents/Headers/SlideHeaders/custom/B2BPageHeader'
import { IBasePageProps } from '../../Templates/BasePage.props'
import { Page } from '../../Templates/Page/Page'

const schema = _schema.pages.b2b

const B2B = (props: IBasePageProps) => {
    const { t } = props

    return (
        <Page currBreadcrumb={breadCrumbForCompanies} header={<B2BPageHeader t={t} />} t={t}>
            <div className="main">
                <div className="section text-center" style={{ paddingTop: 0 }}>
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <BreadCrumbs breadcrumbs={[breadCrumbHome, breadCrumbForCompanies]} />

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
                    <B2BFacts t={t} />
                </div>

                <ContactForm t={t} />
                <SocialShareBar shareUrl={breadCrumbForCompanies.link} />
            </div>
        </Page>
    )
}

export default translate()(B2B)
