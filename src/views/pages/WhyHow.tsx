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
import {RouteProps} from 'react-router'
import {Card, CardBody, CardTitle, Col, Container, Row} from 'reactstrap'
import imgAppMockup from '../../assets/img/why/how/mockup.png'
import Footer from '../components/Footers/Footer'
import WhyPageHeader from '../components/Headers/SlideHeaders/WhyPageHeader'
import NavBar from '../components/Navbars/NavBar'
import {P} from './blogs/blogs_components/text_components/P'
import {breadCrumbWhy} from './breadcrumbs/breadcrumbs.constants'
import {CollapseIconText} from './CollapseIconText'
import ContactForm from './ContactForm/ContactForm'
import {GrayColorImg} from './grayscale_color/GrayColorImg/GrayColorImg'
import SocialShareBar from './SocialShareBar/SocialShareBar'
import {Helmet} from "react-helmet";

function WhyHow(_: RouteProps) {
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
                <title>Wavect - How does it work?</title>
                <meta name='description'
                      content='Change the world by using our app, win relevant prizes and improve your curriculum vitae by gathering points (Micro-Volunteering).'/>
                <meta name='keywords' content='wavect,challenge,app,function,prize,curriculum,reputation'/>
            </Helmet>

            <NavBar/>
            <WhyPageHeader/>
            <div className='main'>
                <div className='section text-center'>
                    <Container>
                        <Row>
                            <Col className='ml-auto mr-auto' md='8'>
                                <h2 className='title'>How does it work?</h2>
                                <h5 className='description'>
                                    <P>
                                        It's really easy! As soon as you have a profile on our "social network" (we
                                        don't like it's actual definition
                                        & reputation, but our platform is more easily understood by this term), you are
                                        eligible to win prizes by
                                        doing something good for humanity.
                                    </P>
                                </h5>
                                <GrayColorImg src={imgAppMockup} alt='Wavect App Mockup' width='50%'/>
                                <br/>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Col md='3'>
                                <CollapseIconText icon={faSignInAlt} title='Register'
                                                  descr={<>You may tell us what's important to you which helps us to
                                                      show you{' '}
                                                      <strong>relevant challenges based on your moral</strong> (e.g.
                                                      environmental challenges esp. related to
                                                      plastic,...).</>}/>
                            </Col>
                            <Col md='3'>
                                <CollapseIconText icon={faStarHalfAlt} title='Solve challenges and...'
                                                  descr={<>...<strong>proof it with videos/pictures or even ask a
                                                      friend</strong> for verification. Additionally,
                                                      your followers will rate your post based on it's authenticity to
                                                      ensure high quality & fair-play.</>}/>
                            </Col>
                            <Col md='3'>
                                <CollapseIconText icon={faMoneyBill} title='Sponsoring'
                                                  descr={<>If you win a prize, the sponsor will contact you to exchange
                                                      further details about your prize. You will
                                                      always gather karma points which will be shown on your profile and
                                                      can be attached to your CV as
                                                      <strong> Micro-Volunteering</strong>.</>}/>
                            </Col>
                            <Col md='3'>
                                <CollapseIconText icon={faPeopleCarry} title='Your Impact'
                                                  descr={<>Your impact will be aggregated to show you & your followers
                                                      how much impact you had on our small planet.{' '}
                                                      <strong>No more "I can't change anything"</strong>.</>}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='section section-dark text-center'>
                    <Container>
                        <h2 className='title'>Exemplary challenges</h2>
                        <Row>
                            <Col md='4'>
                                <Card style={{backgroundColor: 'transparent', border: '1px solid #ccc'}}>
                                    <CardBody>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <div className='author'>
                                                <CardTitle tag='h4' style={{color: '#fff'}}>
                                                    Invite a stranger for a drink
                                                </CardTitle>
                                                <h6 className='card-category'>Social challenge</h6>
                                            </div>
                                        </a>
                                        <p className='card-description text-center'>
                                            Approach someone on the street or any other public place where people may be
                                            responsive to such a gesture
                                            and invite them for a casual drink. Take a selfie with or without your
                                            possibly new friend and claim your
                                            prize.
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='4'>
                                <Card style={{backgroundColor: 'transparent', border: '1px solid #ccc'}}>
                                    <CardBody>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <div className='author'>
                                                <CardTitle tag='h4' style={{color: '#fff'}}>
                                                    Go for a 15 minute walk
                                                </CardTitle>
                                                <h6 className='card-category'>Health challenge</h6>
                                            </div>
                                        </a>
                                        <p className='card-description text-center'>
                                            Walking is incredible healthy as you free your mind, reduce your stress
                                            level, get fresh air and the best
                                            of it: you even burn fat. Just take a selfie at your final destination or
                                            share your route via screenshot.
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='4'>
                                <Card style={{backgroundColor: 'transparent', border: '1px solid #ccc'}}>
                                    <CardBody>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <div className='author'>
                                                <CardTitle tag='h4' style={{color: '#fff'}}>
                                                    Gather 5 pieces of trash
                                                </CardTitle>
                                                <h6 className='card-category'>Environmental challenge</h6>
                                            </div>
                                        </a>
                                        <p className='card-description text-center'>
                                            Gather cigarette stubs, plastic bottles or anything else which doesn't
                                            belong to the environment and
                                            dispose it properly. Just don't forget about your hygiene and wear
                                            (reusable) gloves. Take a picture of
                                            everything you gathered and post it.
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='4'>
                                <Card style={{backgroundColor: 'transparent', border: '1px solid #ccc'}}>
                                    <CardBody>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <div className='author'>
                                                <CardTitle tag='h4' style={{color: '#fff'}}>
                                                    Assist in a retirement home
                                                </CardTitle>
                                                <h6 className='card-category'>Social challenge</h6>
                                            </div>
                                        </a>
                                        <p className='card-description text-center'>
                                            The older you get the more lonely you might become as e.g. many loose
                                            contact to friends or because of
                                            dying family-members. Help out in a retirement home, talk about life and
                                            become wiser & more mature than
                                            you can imagine.
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='4'>
                                <Card style={{backgroundColor: 'transparent', border: '1px solid #ccc'}}>
                                    <CardBody>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <div className='author'>
                                                <CardTitle tag='h4' style={{color: '#fff'}}>
                                                    Hold a 5 second handstand
                                                </CardTitle>
                                                <h6 className='card-category'>Health challenge</h6>
                                            </div>
                                        </a>
                                        <p className='card-description text-center'>
                                            A controlled and well-formed handstand is hard to learn, but good for your
                                            intramuscular coordination.
                                            Nevertheless, most athletes neglect training their balance and body tension.
                                            Record your handstand and
                                            upload it on our platform.
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='4'>
                                <Card style={{backgroundColor: 'transparent', border: '1px solid #ccc'}}>
                                    <CardBody>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <div className='author'>
                                                <CardTitle tag='h4' style={{color: '#fff'}}>
                                                    Plant a tree
                                                </CardTitle>
                                                <h6 className='card-category'>Environmental challenge</h6>
                                            </div>
                                        </a>
                                        <p className='card-description text-center'>
                                            Every tree counts. Huge forest fires have been active in the last few years
                                            and destroyed an enormous
                                            wooded area. Buy a seedling and plant it in an approved stretch of land.
                                            Take a selfie or record a video
                                            when planting your tree.
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <ContactForm/>
                <SocialShareBar shareUrl={breadCrumbWhy.link}/>
            </div>
            <Footer/>
        </>
    )
}

export default WhyHow
