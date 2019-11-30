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
import { Col, Container, Row } from 'reactstrap'
import _schema from '../../../controllers/system/multilinguality/_schema.json'
import { breadCrumbHome, breadCrumbTraction } from '../../../controllers/system/routers/BreadcrumbRoutes'
import BreadCrumbs from '../../functional/BreadcrumbHeader/BreadcrumbHeader'
import { Competitions } from '../../functional/Competitions/Competitions'
import { Partners } from '../../functional/Partners/Partners'
import { SocialShareBar } from '../../functional/SocialShareBar/SocialShareBar'
import { P } from '../../functional/TextComponents/P/P'
import { TextPageHeader } from '../../functional/TextComponents/TextPageHeader/TextPageHeader'
import BlogPageHeader from '../../pageComponents/Headers/BlogPageHeader'
import { IBasePageProps } from '../Templates/BasePage.props'
import { Page } from '../Templates/Page/Page'

const Traction = (props: IBasePageProps) => {
    const { t } = props

    return (
        <Page currBreadcrumb={breadCrumbTraction} header={<BlogPageHeader />} t={t}>
            <div className="section profile-content" style={{ paddingTop: 0 }}>
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto text-left" md="8">
                            <BreadCrumbs breadcrumbs={[breadCrumbHome, breadCrumbTraction]} />

                            <TextPageHeader>{t(_schema.pages.traction.intro.title)}</TextPageHeader>
                            <P>{t(_schema.pages.traction.intro.description)}</P>
                            <hr />
                            <br />
                            <Competitions t={t} />
                        </Col>
                    </Row>
                    <br />
                </Container>
            </div>

            <div className="section section-dark text-center">
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto text-left" md="8">
                            <Partners t={t} />
                        </Col>
                    </Row>
                </Container>
            </div>

            <SocialShareBar shareUrl={breadCrumbTraction.link} />
        </Page>
    )
}

export default translate()(Traction)
