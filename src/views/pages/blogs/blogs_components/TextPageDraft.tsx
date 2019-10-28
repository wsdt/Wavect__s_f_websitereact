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
import { Col, Container, Row } from 'reactstrap'
// core components
import Footer from '../../../components/Footers/Footer'
// assets
import BlogPageHeader from '../../../components/Headers/BlogPageHeader'
import NavBar from '../../../components/Navbars/NavBar'
import BreadCrumbs from '../../breadcrumbs/Breadcrumbs'
import { BreadcrumbConstants } from '../../breadcrumbs/breadcrumbs.constants'
import { BlogCategories } from '../BlogCategories'
import { TextHeader } from './text_components/TextHeader'
import {translate} from "react-polyglot";

export interface ITextPageDraftProps {
    blogCategory?: BlogCategories
    breadCrumbs: BreadcrumbConstants[]
    children: any,
    t: (key:string, ...args:any) => string,
}

function TextPageDraft(props: ITextPageDraftProps) {
    const {t} = props

    document.documentElement.classList.remove('nav-open')
    React.useEffect(() => {
        document.body.classList.add('landing-page')
        return function cleanup() {
            document.body.classList.remove('landing-page')
        }
    })

    return (
        <>
            <NavBar />
            <BlogPageHeader />
            <div className="section profile-content">
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <BreadCrumbs breadcrumbs={props.breadCrumbs} />

                            <TextHeader blogCategory={props.blogCategory}>{t(props.breadCrumbs[props.breadCrumbs.length - 1].title)}</TextHeader>

                            {props.children}
                        </Col>
                    </Row>
                    <br />
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default translate()(TextPageDraft)
