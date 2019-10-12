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
import {Button, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap'
// core components
import Footer from '../../../components/Footers/Footer'
import ExamplesNavbar from '../../../components/Navbars/ExamplesNavbar'

import imgKevinRiedlChangeThoughtsOnBurnoutStress
    from '../../../assets/img/blogs/kevin_riedl/changethoughtsonburnoutstress_profilepic.jpg'
import imgKevinRiedlHappinessNeqFulfillment
    from '../../../assets/img/blogs/kevin_riedl/happinessneqfulfillment_profilepic.jpg'
import imgKevinRiedlSayingYesIsABigNoToOpportunities
    from '../../../assets/img/blogs/kevin_riedl/sayingyesisabignotoopportunities_profilepic.jpg'
import imgKevinRiedlStartReflectingOrDieFullOfRegrets
    from '../../../assets/img/blogs/kevin_riedl/startreflectingordiefullofregrets_profilepic.jpg'
import imgKevinRiedlStrategicHustling from '../../../assets/img/blogs/kevin_riedl/strategichustling_profilepic.jpg'
import imgKevinRiedl from '../../../assets/img/team/kevin_riedl.jpg'
import BlogPageHeader from '../../../components/Headers/BlogPageHeader'
import {BlogCategories} from './BlogCategories'
import BlogListDraft from './blogs_components/BlogListDraft'
import BreadCrumbs from "../breadcrumbs/Breadcrumbs";
import {breadCrumbBlogKevinRiedl, breadCrumbBlogs, breadCrumbHome} from "../breadcrumbs/breadcrumbs.constants";

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
                    <Row>
                        <Col className='ml-auto mr-auto text-center' md='8'>
                            <BreadCrumbs breadcrumbs={[breadCrumbHome, breadCrumbBlogs, breadCrumbBlogKevinRiedl]}/>
                            <div className='owner' style={{marginTop: 100}}>
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
                        </Col>
                    </Row>
                    <Row>
                        <Col className='ml-auto mr-auto text-center' md='8'>
                            <p>
                                I attended commercial school & started studying information technology afterwards. I
                                love learning and trying
                                something new. Some of my role-models are Jordan Peterson, Garyvee & Simon Sinek.
                            </p>
                            <br/>
                            <a href='https://www.linkedin.com/in/kevin-riedl-947219158/' target='_blank'
                               rel='noopener noreferrer'>
                                <Button className='btn-round' color='default' outline={true}>
                                    <i className='fa fa-linkedin'/> LinkedIn
                                </Button>
                            </a>
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
                                <Col className='ml-auto mr-auto' md='auto'>
                                    <ul className='list-unstyled follows'>
                                        <BlogListDraft
                                            blogLink='/blogs/kevin-riedl/happiness-neq-fulfillment-who-are-you-really'
                                            blogCategory={BlogCategories.PERSONAL_DEVELOPMENT}
                                            blogTitle='Happiness neq Fulfillment'
                                            blogHeaderImg={imgKevinRiedlHappinessNeqFulfillment}
                                        />

                                        <hr/>
                                        <BlogListDraft
                                            blogLink='/blogs/kevin-riedl/change-your-thoughts-on-burnout-stress'
                                            blogCategory={BlogCategories.PERSONAL_DEVELOPMENT}
                                            blogTitle='Let me change the way you think about stress & burnout'
                                            blogHeaderImg={imgKevinRiedlChangeThoughtsOnBurnoutStress}
                                        />
                                        <hr/>
                                        <BlogListDraft
                                            blogLink='/blogs/kevin-riedl/strategic-hustling'
                                            blogCategory={BlogCategories.PERSONAL_DEVELOPMENT}
                                            blogTitle='Strategic Hustling'
                                            blogHeaderImg={imgKevinRiedlStrategicHustling}
                                        />
                                        <hr/>
                                        <BlogListDraft
                                            blogLink='/blogs/kevin-riedl/saying-yes-is-a-big-no-to-opportunities'
                                            blogCategory={BlogCategories.PERSONAL_DEVELOPMENT}
                                            blogTitle='Saying YES is a big NO to a lot of opportunities'
                                            blogHeaderImg={imgKevinRiedlSayingYesIsABigNoToOpportunities}
                                        />
                                        <hr/>
                                        <BlogListDraft
                                            blogLink='/blogs/kevin-riedl/start-reflecting-or-die-full-of-regrets'
                                            blogCategory={BlogCategories.PERSONAL_DEVELOPMENT}
                                            blogTitle='Start reflecting or you will die full of regrets'
                                            blogHeaderImg={imgKevinRiedlStartReflectingOrDieFullOfRegrets}
                                        />
                                    </ul>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Container>
            </div>
            <Footer/>
        </>
    )
}

export default BlogKevinRiedl
