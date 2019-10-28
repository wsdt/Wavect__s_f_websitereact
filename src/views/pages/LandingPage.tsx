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
import {Button, Card, CardBody, CardFooter, CardTitle, Col, Container, Row} from 'reactstrap'

// core components
import {faAward, faHandsHelping, faListAlt, faRuler} from '@fortawesome/free-solid-svg-icons'
import {Helmet} from 'react-helmet'
import Footer from '../components/Footers/Footer'
import LandingPageHeader from '../components/Headers/LandingPageHeader'
import NavBar from '../components/Navbars/NavBar'

// assets
import {translate} from 'react-polyglot'
import {RouteProps} from 'react-router'
import imgChristofJori from '../../assets/img/team/circle/christof_jori.png'
import imgDanielGosterxeier from '../../assets/img/team/circle/daniel_gosterxeier.png'
import imgKevinRiedl from '../../assets/img/team/circle/kevin_riedl.png'
import imgMariellaGalneder from '../../assets/img/team/circle/mariella_galneder.png'
import imgRezaShokri from '../../assets/img/team/circle/reza_shokri.png'
import _schema from '../../controllers/system/multilinguality/_schema.json'
import ModalVideo from '../components/Modals/ModalVideo'
import {breadCrumbHome} from './breadcrumbs/breadcrumbs.constants'
import {CollapseIconText} from './CollapseIconText'
import ContactForm from './ContactForm/ContactForm'
import {GrayColorImg} from './grayscale_color/GrayColorImg/GrayColorImg'
import SocialShareBar from './SocialShareBar/SocialShareBar'

interface ILandingPageProps {
    routeProps:RouteProps,
    t: (key:string, ...args:any) => string,
}

function LandingPage(props: ILandingPageProps) {
    const {t} = props
    const schema = _schema.pages.landingPage

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
                      <meta name='keywords' content='wavect,challenge,environment,social,health,home'/>
            </Helmet>

            <NavBar/>
            <LandingPageHeader/>
            <div className='main'>
                <div className='section text-center'>
                    <Container>
                        <Row>
                            <Col className='ml-auto mr-auto' md='8'>
                                <h2 className='title'>{t(schema.intro.title)}</h2>
                                <h5 className='description'>{t(schema.intro.description)}</h5>
                                <br/>
                                <ModalVideo/>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Col md='3'>
                                <CollapseIconText icon={faListAlt} title={t(schema.intro.iconcols.relevantchallenges.title)}
                                                  descr={t(schema.intro.iconcols.relevantchallenges.description)}/>
                            </Col>
                            <Col md='3'>
                                <CollapseIconText icon={faAward} title={t(schema.intro.iconcols.personalizedprizes.title)}
                                                  descr={t(schema.intro.iconcols.personalizedprizes.description)}/>
                            </Col>
                            <Col md='3'>
                                <CollapseIconText icon={faHandsHelping} title={t(schema.intro.iconcols.microvolunteering.title)}
                                                  descr={t(schema.intro.iconcols.microvolunteering.description)}/>
                            </Col>
                            <Col md='3'>
                                <CollapseIconText icon={faRuler} title={t(schema.intro.iconcols.measurableimpact.title)}
                                                  descr={t(schema.intro.iconcols.measurableimpact.description)}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='section section-dark text-center'>
                    <Container>
                        <h2 className='title'>{t(schema.aboutus.title)}</h2>
                        <Row>
                            <Col md='4'>
                                <Card className='card-profile card-plain'>
                                    <div className='card-avatar'>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <GrayColorImg alt={t(schema.aboutus.cto.imgAltTag)} src={imgChristofJori}/>
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <div className='author'>
                                                <CardTitle tag='h4'>{t(schema.aboutus.cto.name)}</CardTitle>
                                                <h6 className='card-category'>{t(schema.aboutus.cto.duty)}</h6>
                                            </div>
                                        </a>
                                        <p className='card-description text-center'>{t(schema.aboutus.cto.ownIntro)}</p>
                                    </CardBody>
                                    <CardFooter className='text-center'>
                                        <a href='https://www.linkedin.com/in/christof-jori-a1912817a/' target='_blank'
                                           rel='noopener noreferrer'>
                                            <Button className='btn-just-icon btn-neutral' color='link'>
                                                <i className='fa fa-linkedin'/>
                                            </Button>
                                        </a>

                                        <a href='http://github.com/sevensevener' target='_blank'
                                           rel='noopener noreferrer'>
                                            <Button className='btn-just-icon btn-neutral ml-1' color='link'>
                                                <i className='fa fa-github'/>
                                            </Button>
                                        </a>

                                        <a href='https://www.instagram.com/crisjny/' target='_blank'
                                           rel='noopener noreferrer'>
                                            <Button className='btn-just-icon btn-neutral ml-1' color='link'>
                                                <i className='fa fa-instagram'/>
                                            </Button>
                                        </a>

                                        <a href='https://www.facebook.com/crise.jori' target='_blank'
                                           rel='noopener noreferrer'>
                                            <Button className='btn-just-icon btn-neutral ml-1' color='link'>
                                                <i className='fa fa-facebook'/>
                                            </Button>
                                        </a>

                                        <Button className='btn-just-icon btn-neutral ml-1' color='link'
                                                href='mailto:christof.jori@wavect.io'>
                                            <i className='fa fa-envelope'/>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col md='4'>
                                <Card className='card-profile card-plain'>
                                    <div className='card-avatar'>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <GrayColorImg alt={t(schema.aboutus.cmo.imgAltTag)} src={imgMariellaGalneder}/>
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <div className='author'>
                                                <CardTitle tag='h4'>{t(schema.aboutus.cmo.name)}</CardTitle>
                                                <h6 className='card-category'>{t(schema.aboutus.cmo.duty)}</h6>
                                            </div>
                                        </a>
                                        <p className='card-description text-center'>{t(schema.aboutus.cmo.ownIntro)}</p>
                                    </CardBody>
                                    <CardFooter className='text-center'>
                                        <a href='https://www.linkedin.com/in/mariella-galneder-653719180/'
                                           target='_blank' rel='noopener noreferrer'>
                                            <Button className='btn-just-icon btn-neutral' color='link'>
                                                <i className='fa fa-linkedin'/>
                                            </Button>
                                        </a>

                                        <a href='https://www.instagram.com/plain_vanilla_mary/' target='_blank'
                                           rel='noopener noreferrer'>
                                            <Button className='btn-just-icon btn-neutral ml-1' color='link'>
                                                <i className='fa fa-instagram'/>
                                            </Button>
                                        </a>

                                        <a href='https://www.facebook.com/mariella.galneder' target='_blank'
                                           rel='noopener noreferrer'>
                                            <Button className='btn-just-icon btn-neutral ml-1' color='link'>
                                                <i className='fa fa-facebook'/>
                                            </Button>
                                        </a>

                                        <Button className='btn-just-icon btn-neutral ml-1' color='link'
                                                href='mailto:mariella.galneder@wavect.io'>
                                            <i className='fa fa-envelope'/>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col md='4'>
                                <Card className='card-profile card-plain'>
                                    <div className='card-avatar'>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <GrayColorImg alt={t(schema.aboutus.cio.imgAltTag)} src={imgRezaShokri}/>
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <div className='author'>
                                                <CardTitle tag='h4'>{t(schema.aboutus.cio.name)}</CardTitle>
                                                <h6 className='card-category'>{t(schema.aboutus.cio.duty)}</h6>
                                            </div>
                                        </a>
                                        <p className='card-description text-center'>{t(schema.aboutus.cio.ownIntro)}</p>
                                    </CardBody>
                                    <CardFooter className='text-center'>
                                        <a href='https://shokri.at' target='_blank' rel='noopener noreferrer'>
                                            <Button className='btn-just-icon btn-neutral ml-1' color='link'>
                                                <i className='fa fa-link'/>
                                            </Button>
                                        </a>

                                        <a href='https://www.linkedin.com/in/reza-shokri/' target='_blank'
                                           rel='noopener noreferrer'>
                                            <Button className='btn-just-icon btn-neutral' color='link'>
                                                <i className='fa fa-linkedin'/>
                                            </Button>
                                        </a>

                                        <a href='https://github.com/bioharz/' target='_blank' rel='noopener noreferrer'>
                                            <Button className='btn-just-icon btn-neutral' color='link'>
                                                <i className='fa fa-github'/>
                                            </Button>
                                        </a>

                                        <a href='https://www.facebook.com/shokri.at' target='_blank'
                                           rel='noopener noreferrer'>
                                            <Button className='btn-just-icon btn-neutral ml-1' color='link'>
                                                <i className='fa fa-facebook'/>
                                            </Button>
                                        </a>

                                        <a href='https://twitter.com/bioharz33' target='_blank'
                                           rel='noopener noreferrer'>
                                            <Button className='btn-just-icon btn-neutral' color='link'>
                                                <i className='fa fa-twitter'/>
                                            </Button>
                                        </a>

                                        <Button className='btn-just-icon btn-neutral ml-1' color='link'
                                                href='mailto:reza.shokri@wavect.io'>
                                            <i className='fa fa-envelope'/>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='4'>
                                <Card className='card-profile card-plain'>
                                    <div className='card-avatar'>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <GrayColorImg alt={t(schema.aboutus.cfo.imgAltTag)} src={imgDanielGosterxeier}/>
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <div className='author'>
                                                <CardTitle tag='h4'>{t(schema.aboutus.cfo.name)}</CardTitle>
                                                <h6 className='card-category'>{t(schema.aboutus.cfo.duty)}</h6>
                                            </div>
                                        </a>
                                        <p className='card-description text-center'>{t(schema.aboutus.cfo.ownIntro)}</p>
                                    </CardBody>
                                    <CardFooter className='text-center'>
                                        <a href='https://www.linkedin.com/in/daniel-e-gosterxeier/' target='_blank'
                                           rel='noopener noreferrer'>
                                            <Button className='btn-just-icon btn-neutral' color='link'>
                                                <i className='fa fa-linkedin'/>
                                            </Button>
                                        </a>

                                        <a href='https://www.instagram.com/daniel_x_official/' target='_blank'
                                           rel='noopener noreferrer'>
                                            <Button className='btn-just-icon btn-neutral ml-1' color='link'>
                                                <i className='fa fa-instagram'/>
                                            </Button>
                                        </a>

                                        <a href='https://www.facebook.com/d.gosterxeier' target='_blank'
                                           rel='noopener noreferrer'>
                                            <Button className='btn-just-icon btn-neutral ml-1' color='link'>
                                                <i className='fa fa-facebook'/>
                                            </Button>
                                        </a>

                                        <Button className='btn-just-icon btn-neutral ml-1' color='link'
                                                href='mailto:daniel.gosterxeier@wavect.io'>
                                            <i className='fa fa-envelope'/>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col md='4'>
                                <Card className='card-profile card-plain'>
                                    <div className='card-avatar'>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <GrayColorImg alt={t(schema.aboutus.ceo.imgAltTag)} src={imgKevinRiedl}/>
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href='//#' onClick={e => e.preventDefault()}>
                                            <div className='author'>
                                                <CardTitle tag='h4'>{t(schema.aboutus.ceo.name)}</CardTitle>
                                                <h6 className='card-category'>{t(schema.aboutus.ceo.duty)}</h6>
                                            </div>
                                        </a>
                                        <p className='card-description text-center'>{t(schema.aboutus.ceo.ownIntro)}</p>
                                    </CardBody>
                                    <CardFooter className='text-center'>
                                        <a href='https://www.linkedin.com/in/kevin-riedl-947219158' target='_blank'
                                           rel='noopener noreferrer'>
                                            <Button className='btn-just-icon btn-neutral' color='link'>
                                                <i className='fa fa-linkedin'/>
                                            </Button>
                                        </a>

                                        <a href='https://www.github.com/wsdt' target='_blank' rel='noopener noreferrer'>
                                            <Button className='btn-just-icon btn-neutral ml-1' color='link'>
                                                <i className='fa fa-github'/>
                                            </Button>
                                        </a>

                                        <a href='https://www.instagram.com/kevkevin_greenhat' target='_blank'
                                           rel='noopener noreferrer'>
                                            <Button className='btn-just-icon btn-neutral ml-1' color='link'>
                                                <i className='fa fa-instagram'/>
                                            </Button>
                                        </a>

                                        <a href='https://www.facebook.com/kriedl97' target='_blank'
                                           rel='noopener noreferrer'>
                                            <Button className='btn-just-icon btn-neutral ml-1' color='link'>
                                                <i className='fa fa-facebook'/>
                                            </Button>
                                        </a>

                                        <Button className='btn-just-icon btn-neutral ml-1' color='link'
                                                href='mailto:kevin.riedl@wavect.io'>
                                            <i className='fa fa-envelope'/>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <ContactForm t={t} />

                <SocialShareBar shareUrl={breadCrumbHome.link}/>
            </div>
            <Footer/>
        </>
    )
}

export default translate()(LandingPage)
