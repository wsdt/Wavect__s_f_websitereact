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
import { translate } from 'react-polyglot'
import { Button, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import imgKevinRiedlChangeThoughtsOnBurnoutStress from '../../../../../assets/img/blogs/kevin_riedl/changethoughtsonburnoutstress_profilepic.jpg'
import imgKevinRiedlHappinessNeqFulfillment from '../../../../../assets/img/blogs/kevin_riedl/happinessneqfulfillment_profilepic.jpg'
import imgKevinRiedlSayingYesIsABigNoToOpportunities from '../../../../../assets/img/blogs/kevin_riedl/sayingyesisabignotoopportunities_profilepic.jpg'
import imgKevinRiedlStartReflectingOrDieFullOfRegrets from '../../../../../assets/img/blogs/kevin_riedl/startreflectingordiefullofregrets_profilepic.jpg'
import imgKevinRiedlStrategicHustling from '../../../../../assets/img/blogs/kevin_riedl/strategichustling_profilepic.jpg'
import imgKevinRiedl from '../../../../../assets/img/team/kevin_riedl.jpg'
import _schema from '../../../../../controllers/system/multilinguality/_schema.json'
import {
    breadCrumbBlogKevinRiedl,
    breadCrumbBlogKevinRiedlChangeYourThoughtsOnStress,
    breadCrumbBlogKevinRiedlHappinessNeqFulfillment,
    breadCrumbBlogKevinRiedlSayingYesIsABigNoToOpportunities,
    breadCrumbBlogKevinRiedlStartReflectingOrDieFullOfRegrets,
    breadCrumbBlogKevinRiedlStrategicHustling,
    breadCrumbBlogs,
    breadCrumbHome,
} from '../../../../../controllers/system/routers/BreadcrumbRoutes'
import BlogListDraft from '../../../../functional/BlogListDraft/BlogListDraft'
import BreadCrumbs from '../../../../functional/BreadcrumbHeader/BreadcrumbHeader'
import { GrayColorImg } from '../../../../functional/GrayscaleColor/GrayColorImg/GrayColorImg'
import { SocialShareBar } from '../../../../functional/SocialShareBar/SocialShareBar'
import BlogPageHeader from '../../../../pageComponents/Headers/BlogPageHeader'
import { IBasePageProps } from '../../../Templates/BasePage.props'
import { Page } from '../../../Templates/Page/Page'
import { BlogCategories } from '../BlogCategories'

const schema = _schema.pages.blog.blogs

const BlogKevinRiedl = (props: IBasePageProps) => {
    const { t } = props
    const [activeTab, setActiveTab] = React.useState('1')

    const toggle = (tab: any) => {
        if (activeTab !== tab) {
            setActiveTab(tab)
        }
    }

    return (
        <Page currBreadcrumb={breadCrumbBlogKevinRiedl} header={<BlogPageHeader />} t={t}>
            <div className="section profile-content" style={{ paddingTop: 0 }}>
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <BreadCrumbs breadcrumbs={[breadCrumbHome, breadCrumbBlogs, breadCrumbBlogKevinRiedl]} />
                            <div className="owner" style={{ marginTop: 100 }}>
                                <div className="avatar">
                                    <GrayColorImg
                                        alt={t(schema.kevinriedl.intro.name)}
                                        className="img-circle img-no-padding img-responsive"
                                        src={imgKevinRiedl}
                                    />
                                </div>
                                <div className="name">
                                    <h4 className="title">
                                        {t(schema.kevinriedl.intro.name)} <br />
                                    </h4>
                                    <h6 className="description">{t(schema.kevinriedl.intro.shortDescription)}</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <p>{t(schema.kevinriedl.intro.description)}</p>
                            <br />
                            <a
                                href="https://www.linkedin.com/in/kevin-riedl-947219158/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title={t(_schema.common_components.navbar.linkedin.linkTitle)}
                            >
                                <Button className="btn-round" color="default" outline={true}>
                                    <i className="fa fa-linkedin" /> {t(_schema.common_components.navbar.linkedin.title)}
                                </Button>
                            </a>
                        </Col>
                    </Row>
                    <br />
                    <div className="nav-tabs-navigation">
                        <div className="nav-tabs-wrapper">
                            <Nav role="tablist" tabs={true}>
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
                    <TabContent className="following" activeTab={activeTab}>
                        <TabPane tabId="1" id="follows">
                            <Row>
                                <Col className="ml-auto mr-auto" md="auto">
                                    <ul className="list-unstyled follows">
                                        <BlogListDraft
                                            blogLink={breadCrumbBlogKevinRiedlHappinessNeqFulfillment.link}
                                            blogCategory={BlogCategories.PERSONAL_DEVELOPMENT}
                                            blogTitle={t(breadCrumbBlogKevinRiedlHappinessNeqFulfillment.title)}
                                            blogHeaderImg={imgKevinRiedlHappinessNeqFulfillment}
                                            blogLanguage={t(schema.general.languages.en)}
                                        />

                                        <hr />
                                        <BlogListDraft
                                            blogLink={breadCrumbBlogKevinRiedlChangeYourThoughtsOnStress.link}
                                            blogCategory={BlogCategories.PERSONAL_DEVELOPMENT}
                                            blogTitle={t(breadCrumbBlogKevinRiedlChangeYourThoughtsOnStress.title)}
                                            blogHeaderImg={imgKevinRiedlChangeThoughtsOnBurnoutStress}
                                            blogLanguage={t(schema.general.languages.en)}
                                        />
                                        <hr />
                                        <BlogListDraft
                                            blogLink={breadCrumbBlogKevinRiedlStrategicHustling.link}
                                            blogCategory={BlogCategories.PERSONAL_DEVELOPMENT}
                                            blogTitle={t(breadCrumbBlogKevinRiedlStrategicHustling.title)}
                                            blogHeaderImg={imgKevinRiedlStrategicHustling}
                                            blogLanguage={t(schema.general.languages.en)}
                                        />
                                        <hr />
                                        <BlogListDraft
                                            blogLink={breadCrumbBlogKevinRiedlSayingYesIsABigNoToOpportunities.link}
                                            blogCategory={BlogCategories.PERSONAL_DEVELOPMENT}
                                            blogTitle={t(breadCrumbBlogKevinRiedlSayingYesIsABigNoToOpportunities.title)}
                                            blogHeaderImg={imgKevinRiedlSayingYesIsABigNoToOpportunities}
                                            blogLanguage={t(schema.general.languages.en)}
                                        />
                                        <hr />
                                        <BlogListDraft
                                            blogLink={breadCrumbBlogKevinRiedlStartReflectingOrDieFullOfRegrets.link}
                                            blogCategory={BlogCategories.PERSONAL_DEVELOPMENT}
                                            blogTitle={t(breadCrumbBlogKevinRiedlStartReflectingOrDieFullOfRegrets.title)}
                                            blogHeaderImg={imgKevinRiedlStartReflectingOrDieFullOfRegrets}
                                            blogLanguage={t(schema.general.languages.en)}
                                        />
                                    </ul>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>

                    <SocialShareBar shareUrl={breadCrumbBlogKevinRiedl.link} />
                </Container>
            </div>
        </Page>
    )
}

export default translate()(BlogKevinRiedl)
