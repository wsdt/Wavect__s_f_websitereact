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
import { Button, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
// core components
import Footer from '../../components/Footers/Footer'
import NavBar from '../../components/Navbars/NavBar'

import {Helmet} from 'react-helmet'
import {translate} from 'react-polyglot'
import { RouteProps } from 'react-router'
import imgKevinRiedlChangeThoughtsOnBurnoutStress from '../../../assets/img/blogs/kevin_riedl/changethoughtsonburnoutstress_profilepic.jpg'
import imgKevinRiedlHappinessNeqFulfillment from '../../../assets/img/blogs/kevin_riedl/happinessneqfulfillment_profilepic.jpg'
import imgKevinRiedlSayingYesIsABigNoToOpportunities from '../../../assets/img/blogs/kevin_riedl/sayingyesisabignotoopportunities_profilepic.jpg'
import imgKevinRiedlStartReflectingOrDieFullOfRegrets from '../../../assets/img/blogs/kevin_riedl/startreflectingordiefullofregrets_profilepic.jpg'
import imgKevinRiedlStrategicHustling from '../../../assets/img/blogs/kevin_riedl/strategichustling_profilepic.jpg'
import imgKevinRiedl from '../../../assets/img/team/kevin_riedl.jpg'
import _schema from '../../../controllers/system/multilinguality/_schema.json'
import BlogPageHeader from '../../components/Headers/BlogPageHeader'
import BreadCrumbs from '../breadcrumbs/Breadcrumbs'
import {
    breadCrumbBlogKevinRiedl,
    breadCrumbBlogKevinRiedlChangeYourThoughtsOnStress,
    breadCrumbBlogKevinRiedlHappinessNeqFulfillment,
    breadCrumbBlogKevinRiedlSayingYesIsABigNoToOpportunities, breadCrumbBlogKevinRiedlStartReflectingOrDieFullOfRegrets,
    breadCrumbBlogKevinRiedlStrategicHustling,
    breadCrumbBlogs,
    breadCrumbHome
} from '../breadcrumbs/breadcrumbs.constants'
import { GrayColorImg } from '../grayscale_color/GrayColorImg/GrayColorImg'
import SocialShareBar from '../SocialShareBar/SocialShareBar'
import { BlogCategories } from './BlogCategories'
import BlogListDraft from './blogs_components/BlogListDraft'


interface IBlogKevinRiedlProps {
    routeProps:RouteProps,
    t: (key:string, ...args:any) => string,
}

function BlogKevinRiedl(props: IBlogKevinRiedlProps) {
    const {t} = props
    const schema = _schema.pages.blog.blogs
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
            <Helmet>
                <title>{t(schema.kevinriedl.header.title)}</title>
                <meta name='description'
                      content={t(schema.kevinriedl.header.description)}/>
                <meta name='keywords' content='wavect,blog,ceo,kevin,riedl,post,technical,economical,personal'/>
            </Helmet>

            <NavBar />
            <BlogPageHeader />
            <div className='section profile-content' style={{paddingTop: 0}}>
                <Container>
                    <Row>
                        <Col className='ml-auto mr-auto text-center' md='8'>
                            <BreadCrumbs breadcrumbs={[breadCrumbHome, breadCrumbBlogs, breadCrumbBlogKevinRiedl]} />
                            <div className='owner' style={{ marginTop: 100 }}>
                                <div className='avatar'>
                                    <GrayColorImg alt={t(schema.kevinriedl.intro.name)} className='img-circle img-no-padding img-responsive' src={imgKevinRiedl} />
                                </div>
                                <div className='name'>
                                    <h4 className='title'>
                                        {t(schema.kevinriedl.intro.name)} <br />
                                    </h4>
                                    <h6 className='description'>{t(schema.kevinriedl.intro.shortDescription)}</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='ml-auto mr-auto text-center' md='8'>
                            <p>{t(schema.kevinriedl.intro.description)}</p>
                            <br />
                            <a href='https://www.linkedin.com/in/kevin-riedl-947219158/' target='_blank' rel='noopener noreferrer' title={t(_schema.common_components.navbar.linkedin.linkTitle)}>
                                <Button className='btn-round' color='default' outline={true}>
                                    <i className='fa fa-linkedin' /> {t(_schema.common_components.navbar.linkedin.title)}
                                </Button>
                            </a>
                        </Col>
                    </Row>
                    <br />
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
                                        {t(schema.general.posts)}
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
                                            blogLink={breadCrumbBlogKevinRiedlHappinessNeqFulfillment.link}
                                            blogCategory={BlogCategories.PERSONAL_DEVELOPMENT}
                                            blogTitle={t(breadCrumbBlogKevinRiedlHappinessNeqFulfillment.title)}
                                            blogHeaderImg={imgKevinRiedlHappinessNeqFulfillment}
                                        />

                                        <hr />
                                        <BlogListDraft
                                            blogLink={breadCrumbBlogKevinRiedlChangeYourThoughtsOnStress.link}
                                            blogCategory={BlogCategories.PERSONAL_DEVELOPMENT}
                                            blogTitle={t(breadCrumbBlogKevinRiedlChangeYourThoughtsOnStress.title)}
                                            blogHeaderImg={imgKevinRiedlChangeThoughtsOnBurnoutStress}
                                        />
                                        <hr />
                                        <BlogListDraft
                                            blogLink={breadCrumbBlogKevinRiedlStrategicHustling.link}
                                            blogCategory={BlogCategories.PERSONAL_DEVELOPMENT}
                                            blogTitle={t(breadCrumbBlogKevinRiedlStrategicHustling.title)}
                                            blogHeaderImg={imgKevinRiedlStrategicHustling}
                                        />
                                        <hr />
                                        <BlogListDraft
                                            blogLink={breadCrumbBlogKevinRiedlSayingYesIsABigNoToOpportunities.link}
                                            blogCategory={BlogCategories.PERSONAL_DEVELOPMENT}
                                            blogTitle={t(breadCrumbBlogKevinRiedlSayingYesIsABigNoToOpportunities.title)}
                                            blogHeaderImg={imgKevinRiedlSayingYesIsABigNoToOpportunities}
                                        />
                                        <hr />
                                        <BlogListDraft
                                            blogLink={breadCrumbBlogKevinRiedlStartReflectingOrDieFullOfRegrets.link}
                                            blogCategory={BlogCategories.PERSONAL_DEVELOPMENT}
                                            blogTitle={t(breadCrumbBlogKevinRiedlStartReflectingOrDieFullOfRegrets.title)}
                                            blogHeaderImg={imgKevinRiedlStartReflectingOrDieFullOfRegrets}
                                        />
                                    </ul>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>

                    <SocialShareBar shareUrl={breadCrumbBlogKevinRiedl.link} />
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default translate()(BlogKevinRiedl)
