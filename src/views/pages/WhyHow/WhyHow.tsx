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
import { faMoneyBill, faPeopleCarry, faSignInAlt, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import parse from 'html-react-parser'
import React from 'react'
import { translate } from 'react-polyglot'
import { Col, Container, Row } from 'reactstrap'
import imgAppMockup from '../../../assets/img/why/how/mockup.png'
import _schema from '../../../controllers/system/multilinguality/_schema.json'
import { breadCrumbHome, breadCrumbWhy } from '../../../controllers/system/routers/BreadcrumbRoutes'
import BecomeTesterForm from '../../classbased/BecomeTesterForm/BecomeTesterForm'
import { CollapseIconText } from '../../classbased/CollapseIconText/CollapseIconText'
import ContactForm from '../../classbased/ContactForm/ContactForm'
import BreadCrumbs from '../../functional/BreadcrumbHeader/BreadcrumbHeader'
import {ExemplaryChallenges} from '../../functional/ExemplaryChallenges/ExemplaryChallenges'
import { GrayColorImg } from '../../functional/GrayscaleColor/GrayColorImg/GrayColorImg'
import {SocialShareBar} from '../../functional/SocialShareBar/SocialShareBar'
import { P } from '../../functional/TextComponents/P/P'
import { WhyPageHeader } from '../../pageComponents/Headers/SlideHeaders/custom/WhyPageHeader'
import {IBasePageProps} from '../Templates/BasePage.props'
import {Page} from '../Templates/Page/Page'

const schema = _schema.pages.whyhow

const WhyHow = (props: IBasePageProps) => {
    const { t } = props

    return <Page currBreadcrumb={breadCrumbWhy} header={<WhyPageHeader t={t}/>} t={t}>
        <div className='main'>
            <div className='section text-center' style={{ paddingTop: 0 }}>
                <Container>
                    {/* Button represents an anchor */}
                    <button
                        id='alpha_test'
                        style={{
                            margin: 0,
                            padding: 0,
                            border: 0,
                            background: 'transparent',
                            fontSize: 'inherit',
                        }}
                    />
                    <Row>
                        <Col className='ml-auto mr-auto' md='8'>
                            <BreadCrumbs breadcrumbs={[breadCrumbHome, breadCrumbWhy]} />
                            <h2 className='title'>{t(schema.intro.title)}</h2>
                            <h5 className='description'>
                                <P>{t(schema.intro.description)}</P>
                            </h5>
                            <GrayColorImg src={imgAppMockup} alt={t(schema.intro.altImg)} width='50%' />
                            <br />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col className='ml-auto mr-auto' md='8'>
                            <BecomeTesterForm t={t} />
                        </Col>
                    </Row>

                    <br />
                    <Row>
                        <Col md='3'>
                            <CollapseIconText
                                icon={faSignInAlt}
                                title={t(schema.intro.iconcols.register.title)}
                                descr={parse(t(schema.intro.iconcols.register.description))}
                            />
                        </Col>
                        <Col md='3'>
                            <CollapseIconText
                                icon={faStarHalfAlt}
                                title={t(schema.intro.iconcols.solvechallenges.title)}
                                descr={parse(t(schema.intro.iconcols.solvechallenges.description))}
                            />
                        </Col>
                        <Col md='3'>
                            <CollapseIconText
                                icon={faMoneyBill}
                                title={t(schema.intro.iconcols.sponsoring.title)}
                                descr={parse(t(schema.intro.iconcols.sponsoring.description))}
                            />
                        </Col>
                        <Col md='3'>
                            <CollapseIconText
                                icon={faPeopleCarry}
                                title={t(schema.intro.iconcols.impact.title)}
                                descr={parse(t(schema.intro.iconcols.impact.description))}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <ExemplaryChallenges t={t} />

            <ContactForm t={t} />
            <SocialShareBar shareUrl={breadCrumbWhy.link} />
        </div>
    </Page>
}

export default translate()(WhyHow)
