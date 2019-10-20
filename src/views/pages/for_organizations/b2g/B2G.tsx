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
import {
    faAd,
    faCreditCard, faFilter,
    faUsers
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {RouteProps} from 'react-router'
import {Link} from 'react-router-dom'
import {Col, Container, Row} from 'reactstrap'
import Footer from '../../../../components/Footers/Footer'
import B2GPageHeader from '../../../../components/Headers/SlideHeaders/B2GPageHeader'
import NavBar from '../../../../components/Navbars/NavBar'
import {Li, Ol} from '../../blogs/blogs_components/text_components/List'
import {P} from '../../blogs/blogs_components/text_components/P'
import {breadCrumbWhy} from '../../breadcrumbs/breadcrumbs.constants'
import {GrayColorIcon} from '../../grayscale_color/GrayColorIcon/GrayColorIcon'
import B2GFacts from './B2GFacts'

function B2G(_: RouteProps) {
    document.documentElement.classList.remove('nav-open')
    React.useEffect(() => {
        document.body.classList.add('profile-page')
        return function cleanup() {
            document.body.classList.remove('profile-page')
        }
    })
    return (
        <>
            <NavBar/>
            <B2GPageHeader/>
            <div className='main'>
                <div className='section text-center'>
                    <Container>
                        <Row>
                            <Col className='ml-auto mr-auto' md='8'>
                                <h2 className='title'>How to sponsor a challenge?</h2>
                                <h5 className='description'>
                                    <Ol>
                                        <Li>Tell us what kind of challenge you want to sponsor <Link
                                            to={breadCrumbWhy.link}>(e.g. gathering trash, ...)</Link>.</Li>
                                        <Li>Choose what to sponsor (e.g. giving an exclusive rebate on your products,
                                            raffle products or vouchers, cash, ...). If you don't have any products, you
                                            simply can buy vouchers/products from other organizations (e.g. Amazon) or
                                            pay out cash.</Li>
                                        <Li>Send us a short paragraph why you sponsor the challenge you have
                                            selected.</Li>
                                        <Li>Distribute your prizes amongst those users who have solved your
                                            challenge.</Li>
                                    </Ol>
                                </h5>
                                <br/>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Col md='3'>
                                <div className='info'>
                                    <GrayColorIcon icon={faCreditCard}/>

                                    <div className='description'>
                                        <h4 className='info-title'>Low-Priced CSR</h4>
                                        <p className='description'>
                                            A small fee has to be settled to sponsor a challenge. <strong>This fee is
                                            dependent
                                            on the size & type of your organization</strong> as especially smaller
                                            organizations
                                            have
                                            difficulties with CSR or have never thought of using it as a marketing
                                            strategy.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md='3'>
                                <div className='info'>
                                    <GrayColorIcon icon={faFilter}/>
                                    <div className='description'>
                                        <h4 className='info-title'>Personalized CSR</h4>
                                        <p>
                                            Challenges & prizes will be <strong>issued to users based on their interests
                                            &
                                            ethics</strong>. This way you can acquire voters, volunteers and donors in a
                                            completely new manner. You'll create value by giving people incentives to do
                                            sth. good. Public relations made easy.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md='3'>
                                <div className='info'>
                                    <GrayColorIcon icon={faAd}/>
                                    <div className='description'>
                                        <h4 className='info-title'>Storytelling</h4>
                                        <p>
                                            Users have to post a video or picture to proof that they solved your
                                            challenge. A watermark will be added on their media and gets shared on
                                            Wavect as well as other social media. <strong>Modern storytelling is made by
                                            users
                                            instead of marketing specialists.</strong>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md='3'>
                                <div className='info'>
                                    <GrayColorIcon icon={faUsers}/>
                                    <div className='description'>
                                        <h4 className='info-title'>Aggregated Impact</h4>
                                        <p>
                                            As you give users additional incentives to do sth. good, <strong>all impact
                                            can be
                                            dedicated to your organization</strong>. The caused impact will be
                                            aggregated to show
                                            you and your potential voters, donors or volunteers what implication your
                                            sponsoring had.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='section section-dark text-center'>
                    <B2GFacts/>
                </div>

                <div className='section landing-section'>
                    <Container>
                        <Row>
                            <Col className='ml-auto mr-auto' md='8' style={{textAlign: 'center'}}>
                                <h2 className='text-center'>Want to know more?</h2>
                                <br/>
                                <P>
                                    If you are interested, you can contact as at any time. Feedback is highly
                                    appreciated too. Just contact us via{' '}
                                    <a href='mailto:office@wavect.io'>E-Mail 'office@wavect.io'</a>
                                </P>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default B2G
