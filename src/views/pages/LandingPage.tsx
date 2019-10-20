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
import { Button, Card, CardBody, CardFooter, CardTitle, Col, Container, Row } from 'reactstrap'

// core components
import { faAward, faHandsHelping, faListAlt, faRuler } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/Footers/Footer'
import LandingPageHeader from '../../components/Headers/LandingPageHeader'
import NavBar from '../../components/Navbars/NavBar'

// assets
import { RouteProps } from 'react-router'
import imgChristofJori from '../../assets/img/team/christof_jori.jpg'
import imgDanielGosterxeier from '../../assets/img/team/daniel_gosterxeier.jpg'
import imgKevinRiedl from '../../assets/img/team/kevin_riedl.jpg'
import imgMariellaGalneder from '../../assets/img/team/mariella_galneder.jpg'
import imgRezaShokri from '../../assets/img/team/reza_shokri.jpg'
import ModalVideo from '../../components/Modals/ModalVideo'
import ContactForm from './ContactForm/ContactForm'
import { GrayColorIcon } from './grayscale_color/GrayColorIcon/GrayColorIcon'
import { GrayColorImg } from './grayscale_color/GrayColorImg/GrayColorImg'

function LandingPage(_: RouteProps) {
    document.documentElement.classList.remove('nav-open')
    React.useEffect(() => {
        document.body.classList.add('profile-page')
        return function cleanup() {
            document.body.classList.remove('profile-page')
        }
    })
    return (
        <>
            <NavBar />
            <LandingPageHeader />
            <div className="main">
                <div className="section text-center">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <h2 className="title">Let's face the truth</h2>
                                <h5 className="description">
                                    The world faces incredible huge problems: decreasing solidarity & social interaction in our society, climate
                                    change, growing pollution & health issues. We designed a platform which aims to address those issues by offering
                                    an economical value for organizations & users.
                                </h5>
                                <br />
                                <ModalVideo />
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col md="3">
                                <div className="info">
                                    <GrayColorIcon icon={faListAlt} />

                                    <div className="description">
                                        <h4 className="info-title">Relevant challenges</h4>
                                        <p className="description">
                                            Solve challenges based on what's important to you. You think climate change is a big issue, then you'll
                                            receive related challenges which help to address that problem.
                                        </p>
                                        {/*<Button className='btn-link' color='info' href='/#' onClick={e => e.preventDefault()}>
                                            Coming Soon
                                        </Button>*/}
                                    </div>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="info">
                                    <GrayColorIcon icon={faAward} />
                                    <div className="description">
                                        <h4 className="info-title">Personalized prizes</h4>
                                        <p>
                                            Solving challenges takes energy. By solving some you'll win relevant prizes which address your interests.
                                            If you love travelling or skiing, you might win related prizes.
                                        </p>
                                        {/*<Button className='btn-link' color='info' href='/#' onClick={e => e.preventDefault()}>
                                            Coming Soon
                                        </Button>*/}
                                    </div>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="info">
                                    <GrayColorIcon icon={faHandsHelping} />
                                    <div className="description">
                                        <h4 className="info-title">Micro-Volunteering</h4>
                                        <p>
                                            Gather points for your profile's reputation by solving challenges. This reputation can be attached to your
                                            CV which shows your social commitment. The whole app focuses heavily on Gamification.
                                        </p>
                                        {/*<Button className='btn-link' color='info' href='/#' onClick={e => e.preventDefault()}>
                                            Coming Soon
                                        </Button>*/}
                                    </div>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="info">
                                    <GrayColorIcon icon={faRuler} />
                                    <div className="description">
                                        <h4 className="info-title">Measurable Impact</h4>
                                        <p>
                                            The impact of each challenge will be aggregated which shows you what & how much impact you and others have
                                            had on our small world. No more "I can't change anything"!
                                        </p>
                                        {/*<Button className='btn-link' color='info' href='/#' onClick={e => e.preventDefault()}>
                                            Coming Soon
                                        </Button>*/}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section section-dark text-center">
                    <Container>
                        <h2 className="title">Let's talk about us</h2>
                        <Row>
                            <Col md="4">
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        <a href="/#" onClick={e => e.preventDefault()}>
                                            <GrayColorImg alt="CTO: Christof Jori" src={imgChristofJori} />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href="/#" onClick={e => e.preventDefault()}>
                                            <div className="author">
                                                <CardTitle tag="h4">Christof Jori</CardTitle>
                                                <h6 className="card-category">CTO</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                            I'm Chris and I'm passionate about programming. Thus, I love to learn new, especially cutting-edge
                                            technologies. My vision is to create a unique project that does have an immense impact on our society.
                                            Never stop learning!
                                        </p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <a href="https://www.linkedin.com/in/christof-jori-a1912817a/" target="_blank" rel="noopener noreferrer">
                                            <Button className="btn-just-icon btn-neutral" color="link">
                                                <i className="fa fa-linkedin" />
                                            </Button>
                                        </a>

                                        <a href="http://github.com/sevensevener" target="_blank" rel="noopener noreferrer">
                                            <Button className="btn-just-icon btn-neutral ml-1" color="link">
                                                <i className="fa fa-github" />
                                            </Button>
                                        </a>

                                        <a href="https://www.instagram.com/crisjny/" target="_blank" rel="noopener noreferrer">
                                            <Button className="btn-just-icon btn-neutral ml-1" color="link">
                                                <i className="fa fa-instagram" />
                                            </Button>
                                        </a>

                                        <a href="https://www.facebook.com/crise.jori" target="_blank" rel="noopener noreferrer">
                                            <Button className="btn-just-icon btn-neutral ml-1" color="link">
                                                <i className="fa fa-facebook" />
                                            </Button>
                                        </a>

                                        <Button className="btn-just-icon btn-neutral ml-1" color="link" href="mailto:christof.jori@wavect.io">
                                            <i className="fa fa-envelope" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        <a href="/#" onClick={e => e.preventDefault()}>
                                            <GrayColorImg alt="CMO: Mariella Galneder" src={imgMariellaGalneder} />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href="/#" onClick={e => e.preventDefault()}>
                                            <div className="author">
                                                <CardTitle tag="h4">Mariella Galneder</CardTitle>
                                                <h6 className="card-category">CMO</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                            My name is Mariella, but as soon as I start talking English, I introduce myself as Mary. I love dedicated
                                            people who turn their dreams into a vision and pursue it. And my vision is it to open the people’s eyes
                                            and make a change together.
                                        </p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <a href="https://www.linkedin.com/in/mariella-galneder-653719180/" target="_blank" rel="noopener noreferrer">
                                            <Button className="btn-just-icon btn-neutral" color="link">
                                                <i className="fa fa-linkedin" />
                                            </Button>
                                        </a>

                                        <a href="https://www.instagram.com/plain_vanilla_mary/" target="_blank" rel="noopener noreferrer">
                                            <Button className="btn-just-icon btn-neutral ml-1" color="link">
                                                <i className="fa fa-instagram" />
                                            </Button>
                                        </a>

                                        <a href="https://www.facebook.com/mariella.galneder" target="_blank" rel="noopener noreferrer">
                                            <Button className="btn-just-icon btn-neutral ml-1" color="link">
                                                <i className="fa fa-facebook" />
                                            </Button>
                                        </a>

                                        <Button className="btn-just-icon btn-neutral ml-1" color="link" href="mailto:mariella.galneder@wavect.io">
                                            <i className="fa fa-envelope" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        <a href="/#" onClick={e => e.preventDefault()}>
                                            <GrayColorImg alt="CIO: Reza Shokri" src={imgRezaShokri} />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href="/#" onClick={e => e.preventDefault()}>
                                            <div className="author">
                                                <CardTitle tag="h4">Reza Shokri</CardTitle>
                                                <h6 className="card-category">CIO</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                            Hi, my name is Reza. I'm an entrepreneur & software engineer. It's easier than ever before to have a
                                            social, ecological & economical impact. So, my passion is all about disruptive technologies & innovations
                                            with the possibility to reach out to billions of people.
                                        </p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <a href="https://shokri.at" target="_blank" rel="noopener noreferrer">
                                            <Button className="btn-just-icon btn-neutral ml-1" color="link">
                                                <i className="fa fa-link" />
                                            </Button>
                                        </a>

                                        <a href="https://www.linkedin.com/in/reza-shokri/" target="_blank" rel="noopener noreferrer">
                                            <Button className="btn-just-icon btn-neutral" color="link">
                                                <i className="fa fa-linkedin" />
                                            </Button>
                                        </a>

                                        <a href="https://github.com/bioharz/" target="_blank" rel="noopener noreferrer">
                                            <Button className="btn-just-icon btn-neutral" color="link">
                                                <i className="fa fa-github" />
                                            </Button>
                                        </a>

                                        <a href="https://www.facebook.com/shokri.at" target="_blank" rel="noopener noreferrer">
                                            <Button className="btn-just-icon btn-neutral ml-1" color="link">
                                                <i className="fa fa-facebook" />
                                            </Button>
                                        </a>

                                        <a href="https://twitter.com/bioharz33" target="_blank" rel="noopener noreferrer">
                                            <Button className="btn-just-icon btn-neutral" color="link">
                                                <i className="fa fa-twitter" />
                                            </Button>
                                        </a>

                                        <Button className="btn-just-icon btn-neutral ml-1" color="link" href="mailto:reza.shokri@wavect.io">
                                            <i className="fa fa-envelope" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        <a href="/#" onClick={e => e.preventDefault()}>
                                            <GrayColorImg alt="CFO: Daniel Gosterxeier" src={imgDanielGosterxeier} />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href="/#" onClick={e => e.preventDefault()}>
                                            <div className="author">
                                                <CardTitle tag="h4">Daniel Gosterxeier</CardTitle>
                                                <h6 className="card-category">CFO</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                            Hey everybody! I’m Daniel and my role at Wavect is to find new strategy partners, networking and all about
                                            sales & finances. I get up everyday being happy, a positive mind to influence the people around me. My
                                            vision is a world without tribes - we're all a big family sitting in one boat.
                                        </p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <a href="https://www.linkedin.com/in/daniel-e-gosterxeier/" target="_blank" rel="noopener noreferrer">
                                            <Button className="btn-just-icon btn-neutral" color="link">
                                                <i className="fa fa-linkedin" />
                                            </Button>
                                        </a>

                                        <a href="https://www.instagram.com/daniel_x_official/" target="_blank" rel="noopener noreferrer">
                                            <Button className="btn-just-icon btn-neutral ml-1" color="link">
                                                <i className="fa fa-instagram" />
                                            </Button>
                                        </a>

                                        <a href="https://www.facebook.com/d.gosterxeier" target="_blank" rel="noopener noreferrer">
                                            <Button className="btn-just-icon btn-neutral ml-1" color="link">
                                                <i className="fa fa-facebook" />
                                            </Button>
                                        </a>

                                        <Button className="btn-just-icon btn-neutral ml-1" color="link" href="mailto:daniel.gosterxeier@wavect.io">
                                            <i className="fa fa-envelope" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        <a href="/#" onClick={e => e.preventDefault()}>
                                            <GrayColorImg alt="CEO: Kevin Riedl" src={imgKevinRiedl} />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href="//#" onClick={e => e.preventDefault()}>
                                            <div className="author">
                                                <CardTitle tag="h4">Kevin Riedl</CardTitle>
                                                <h6 className="card-category">CEO</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                            I'm Kevin and I want to leave Earth just a little bit better than I found it. I love challenges and
                                            consider myself as a lifelong learner & visionary. Thus, I dream of changing the way how people interact
                                            with each other and I'm sure that our software application may be a good way to achieve that goal.
                                        </p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <a href="https://www.linkedin.com/in/kevin-riedl-947219158" target="_blank" rel="noopener noreferrer">
                                            <Button className="btn-just-icon btn-neutral" color="link">
                                                <i className="fa fa-linkedin" />
                                            </Button>
                                        </a>

                                        <a href="https://www.github.com/wsdt" target="_blank" rel="noopener noreferrer">
                                            <Button className="btn-just-icon btn-neutral ml-1" color="link">
                                                <i className="fa fa-github" />
                                            </Button>
                                        </a>

                                        <a href="https://www.instagram.com/kevkevin_greenhat" target="_blank" rel="noopener noreferrer">
                                            <Button className="btn-just-icon btn-neutral ml-1" color="link">
                                                <i className="fa fa-instagram" />
                                            </Button>
                                        </a>

                                        <a href="https://www.facebook.com/kriedl97" target="_blank" rel="noopener noreferrer">
                                            <Button className="btn-just-icon btn-neutral ml-1" color="link">
                                                <i className="fa fa-facebook" />
                                            </Button>
                                        </a>

                                        <Button className="btn-just-icon btn-neutral ml-1" color="link" href="mailto:kevin.riedl@wavect.io">
                                            <i className="fa fa-envelope" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <ContactForm />
            </div>
            <Footer />
        </>
    )
}

export default LandingPage
