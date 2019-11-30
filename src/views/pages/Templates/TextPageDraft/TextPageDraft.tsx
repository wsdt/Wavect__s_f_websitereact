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
import { Col, Container, Row } from 'reactstrap'
import { BreadcrumbRoute } from '../../../../models/BreadcrumbRoute'
import BreadCrumbs from '../../../functional/BreadcrumbHeader/BreadcrumbHeader'
import { TextPageHeader } from '../../../functional/TextComponents/TextPageHeader/TextPageHeader'
import BlogPageHeader from '../../../pageComponents/Headers/BlogPageHeader'
import { Page } from '../Page/Page'
import { ITextPageDraftProps } from './TextPageDraft.props'

export const TextPageDraft = (props: ITextPageDraftProps) => {
    const currBreadcrumb: BreadcrumbRoute = props.breadCrumbs[props.breadCrumbs.length - 1]
    const { t } = props

    return (
        <Page currBreadcrumb={currBreadcrumb} header={<BlogPageHeader />} t={t}>
            <div className="section profile-content" style={{ paddingTop: 0 }}>
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <BreadCrumbs breadcrumbs={props.breadCrumbs} />

                            <TextPageHeader blogCategory={props.blogCategory}>
                                {t(props.breadCrumbs[props.breadCrumbs.length - 1].title)}
                            </TextPageHeader>

                            {props.children}
                        </Col>
                    </Row>
                    <br />
                </Container>
            </div>
        </Page>
    )
}
