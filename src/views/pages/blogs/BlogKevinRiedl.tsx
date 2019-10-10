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
import {
    Button,
    Col,
    Container,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane
} from 'reactstrap'

// core components
import DemoFooter from '../../../components/Footers/DemoFooter'
import ExamplesNavbar from '../../../components/Navbars/ExamplesNavbar'

import imgKevinRiedlHappinessNeqFulfillment from '../../../assets/img/blogs/kevin_riedl/happinessneqfulfillment_profilepic.jpg'
import imgKevinRiedlStartReflectingOrDieFullOfRegrets from '../../../assets/img/blogs/kevin_riedl/startreflectingordiefullofregrets_profilepic.jpg'
import imgKevinRiedlSayingYesIsABigNoToOpportunities from '../../../assets/img/blogs/kevin_riedl/sayingyesisabignotoopportunities_profilepic.jpg'
import imgKevinRiedlStrategicHustling from '../../../assets/img/blogs/kevin_riedl/strategichustling_profilepic.jpg'
import imgKevinRiedlChangeThoughtsOnBurnoutStress from '../../../assets/img/blogs/kevin_riedl/changethoughtsonburnoutstress_profilepic.jpg'
import imgKevinRiedl from '../../../assets/img/team/kevin_riedl.jpg'
import BlogPageHeader from '../../../components/Headers/BlogPageHeader'
import {BlogCategories} from './BlogCategories'

function BlogKevinRiedl() {
    const [activeTab, setActiveTab] = React.useState('1')

    const toggle = (tab: any) => {
        if (activeTab !== tab) {
            setActiveTab(tab)
        }
    }

    document.documentElement.classList.remove('nav-open')
    React.useEffect(() => {
        document.body.classList.add('landing-page')
        return function cleanup() {
            document.body.classList.remove('landing-page')
        }
    })
    return (
        <>
            <ExamplesNavbar/>
            <BlogPageHeader/>
            <div className='section profile-content'>
                <Container>
                    <div className='owner'>
                        <div className='avatar'>
                            <img alt='Kevin Riedl, Bsc.' className='img-circle img-no-padding img-responsive'
                                 src={imgKevinRiedl}/>
                        </div>
                        <div className='name'>
                            <h4 className='title'>
                                Kevin Riedl, Bsc. <br/>
                            </h4>
                            <h6 className='description'>Software Engineer & Business Administration</h6>
                        </div>
                    </div>
                    <Row>
                        <Col className='ml-auto mr-auto text-center' md='6'>
                            <p>
                                I attended commercial school & started studying information technology afterwards. I
                                love learning and trying something new. Some of my role-models are Jordan Peterson,
                                Garyvee & Simon Sinek.
                            </p>
                            <br/>
                            <a href='https://www.linkedin.com/in/kevin-riedl-947219158/' target='_blank' rel='noopener noreferrer'>
                                <Button className='btn-round' color='default' outline={true}>
                                    <i className='fa fa-linkedin'/> LinkedIn
                                </Button></a>
                        </Col>
                    </Row>
                    <br/>
                    <div className='nav-tabs-navigation'>
                        <div className='nav-tabs-wrapper'>
                            <Nav role='tablist' tabs={true}>
                                <NavItem>
                                    <NavLink
                                        className={activeTab === '1' ? 'active' : ''}
                                        onClick={() => {
                                            toggle('1')
                                        }}
                                    >
                                        Posts
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                    {/* Tab panes */}
                    <TabContent className='following' activeTab={activeTab}>
                        <TabPane tabId='1' id='follows'>
                            <Row>
                                <Col className='ml-auto mr-auto' md='8'>
                                    <ul className='list-unstyled follows'>
                                        <li>
                                            <Row>
                                                <Col className='ml-auto mr-auto' lg='2' md='4' xs='4'>
                                                    <img
                                                        alt='Happiness neq Fulfillment header pic'
                                                        className='img-circle img-no-padding img-responsive'
                                                        src={imgKevinRiedlHappinessNeqFulfillment}
                                                    />
                                                </Col>
                                                <Col className='ml-auto mr-auto' lg='7' md='4' xs='4'>
                                                    <h6>
                                                        Happiness != Fulfillment: Who are you really?<br/>
                                                        <small>{BlogCategories.PERSONAL_DEVELOPMENT}</small>
                                                    </h6>
                                                </Col>
                                                <Col className='ml-auto mr-auto' lg='3' md='4' xs='4'>
                                                    <br />
                                                    <a href='/blogs/kevin-riedl/happiness-neq-fulfillment-who-are-you-really'>
                                                        <Button className='btn-round' color='default' size='sm'>
                                                            <i className='fa fa-arrow-circle-right'/>
                                                        </Button>
                                                    </a>
                                                </Col>
                                            </Row>
                                        </li>
                                        <hr/>
                                        <li>
                                            <Row>
                                                <Col className='mx-auto' lg='2' md='4' xs='4'>
                                                    <img
                                                        alt='Let me change the way you think about stress & burnout - Profile pic'
                                                        className='img-circle img-no-padding img-responsive'
                                                        src={imgKevinRiedlChangeThoughtsOnBurnoutStress}
                                                    />
                                                </Col>
                                                <Col lg='7' md='4' xs='4'>
                                                    <h6>
                                                        Let me change the way you think about Stress and Burnout <br/>
                                                        <small>{BlogCategories.PERSONAL_DEVELOPMENT}</small>
                                                    </h6>
                                                </Col>
                                                <Col lg='3' md='4' xs='4'>
                                                    <br />
                                                    <a href='/blogs/kevin-riedl/change-your-thoughts-on-burnout-stress'>
                                                        <Button className='btn-round' color='default' size='sm'>
                                                            <i className='fa fa-arrow-circle-right'/>
                                                        </Button>
                                                    </a>
                                                </Col>
                                            </Row>
                                        </li>
                                        <hr/>
                                        <li>
                                            <Row>
                                                <Col className='mx-auto' lg='2' md='4' xs='4'>
                                                    <img
                                                        alt='Strategic Hustling - Profile pic'
                                                        className='img-circle img-no-padding img-responsive'
                                                        src={imgKevinRiedlStrategicHustling}
                                                    />
                                                </Col>
                                                <Col lg='7' md='4' xs='4'>
                                                    <h6>
                                                       Strategic Hustling<br/>
                                                        <small>{BlogCategories.PERSONAL_DEVELOPMENT}</small>
                                                    </h6>
                                                </Col>
                                                <Col lg='3' md='4' xs='4'>
                                                    <br />
                                                    <a href='/blogs/kevin-riedl/strategic-hustling'>
                                                        <Button className='btn-round' color='default' size='sm'>
                                                            <i className='fa fa-arrow-circle-right'/>
                                                        </Button>
                                                    </a>
                                                </Col>
                                            </Row>
                                        </li>
                                        <hr/>
                                        <li>
                                            <Row>
                                                <Col className='mx-auto' lg='2' md='4' xs='4'>
                                                    <img
                                                        alt='Saying YES is a big NO to a lot of opportunities - Profile pic'
                                                        className='img-circle img-no-padding img-responsive'
                                                        src={imgKevinRiedlSayingYesIsABigNoToOpportunities}
                                                    />
                                                </Col>
                                                <Col lg='7' md='4' xs='4'>
                                                    <h6>
                                                        Saying yes is a big NO to a lot of other opportunities<br/>
                                                        <small>{BlogCategories.PERSONAL_DEVELOPMENT}</small>
                                                    </h6>
                                                </Col>
                                                <Col lg='3' md='4' xs='4'>
                                                    <br />
                                                    <a href='/blogs/kevin-riedl/saying-yes-is-a-big-no-to-opportunities'>
                                                        <Button className='btn-round' color='default' size='sm'>
                                                            <i className='fa fa-arrow-circle-right'/>
                                                        </Button>
                                                    </a>
                                                </Col>
                                            </Row>
                                        </li>
                                        <hr/>


                                        <li>
                                            <Row>
                                                <Col className='mx-auto' lg='2' md='4' xs='4'>
                                                    <img
                                                        alt='Start reflecting or you will die full of regrets - Profile pic'
                                                        className='img-circle img-no-padding img-responsive'
                                                        src={imgKevinRiedlStartReflectingOrDieFullOfRegrets}
                                                    />
                                                </Col>
                                                <Col lg='7' md='4' xs='4'>
                                                    <h6>
                                                        Start reflecting or you will die full of regrets<br/>
                                                        <small>{BlogCategories.PERSONAL_DEVELOPMENT}</small>
                                                    </h6>
                                                </Col>
                                                <Col lg='3' md='4' xs='4'>
                                                    <br />
                                                    <a href='/blogs/kevin-riedl/start-reflecting-or-die-full-of-regrets'>
                                                        <Button className='btn-round' color='default' size='sm'>
                                                            <i className='fa fa-arrow-circle-right'/>
                                                        </Button>
                                                    </a>
                                                </Col>
                                            </Row>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Container>
            </div>
            <DemoFooter/>
        </>
    )
}

export default BlogKevinRiedl
