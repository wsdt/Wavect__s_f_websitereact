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
import {faMoneyBill, faPeopleCarry, faSignInAlt, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {Helmet} from 'react-helmet'
import {translate} from 'react-polyglot'
import {RouteProps} from 'react-router'
import {Col, Container, Row} from 'reactstrap'
import imgAppMockup from '../../../assets/img/why/how/mockup.png'
import _schema from '../../../controllers/system/multilinguality/_schema.json'
import Footer from '../../components/Footers/Footer'
import WhyPageHeader from '../../components/Headers/SlideHeaders/WhyPageHeader'
import NavBar from '../../components/Navbars/NavBar'
import {P} from '../blogs/blogs_components/text_components/P'
import {breadCrumbWhy} from '../breadcrumbs/breadcrumbs.constants'
import {CollapseIconText} from '../CollapseIconText'
import ContactForm from '../ContactForm/ContactForm'
import {GrayColorImg} from '../grayscale_color/GrayColorImg/GrayColorImg'
import SocialShareBar from '../SocialShareBar/SocialShareBar'
import ExemplaryChallenges from './ExemplaryChallenges'
import parse from 'html-react-parser'

interface IWhyHowProps {
    routeProps:RouteProps,
    t: (key:string, ...args:any) => string,
}

function WhyHow(props: IWhyHowProps) {
    const {t} = props
    const schema = _schema.pages.whyhow

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
                <meta name='description'
                      content={t(schema.header.description)}/>
                <meta name='keywords' content='wavect,challenge,app,function,prize,curriculum,reputation'/>
            </Helmet>

            <NavBar/>
            <WhyPageHeader t={t}/>
            <div className='main'>
                <div className='section text-center'>
                    <Container>
                        <Row>
                            <Col className='ml-auto mr-auto' md='8'>
                                <h2 className='title'>{t(schema.intro.title)}</h2>
                                <h5 className='description'>
                                    <P>{t(schema.intro.description)}</P>
                                </h5>
                                <GrayColorImg src={imgAppMockup} alt={t(schema.intro.altImg)} width='50%'/>
                                <br/>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Col md='3'>
                                <CollapseIconText icon={faSignInAlt} title={t(schema.intro.iconcols.register.title)}
                                                  descr={parse(t(schema.intro.iconcols.register.description))}/>
                            </Col>
                            <Col md='3'>
                                <CollapseIconText icon={faStarHalfAlt} title={t(schema.intro.iconcols.solvechallenges.title)}
                                                  descr={parse(t(schema.intro.iconcols.solvechallenges.description))}/>
                            </Col>
                            <Col md='3'>
                                <CollapseIconText icon={faMoneyBill} title={t(schema.intro.iconcols.sponsoring.title)}
                                                  descr={parse(t(schema.intro.iconcols.sponsoring.description))}/>
                            </Col>
                            <Col md='3'>
                                <CollapseIconText icon={faPeopleCarry} title={t(schema.intro.iconcols.impact.title)}
                                                  descr={parse(t(schema.intro.iconcols.impact.description))}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
               <ExemplaryChallenges t={t}/>

                <ContactForm t={t}/>
                <SocialShareBar shareUrl={breadCrumbWhy.link}/>
            </div>
            <Footer/>
        </>
    )
}

export default translate()(WhyHow)
