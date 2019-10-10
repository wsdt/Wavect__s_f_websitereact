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
import {Col, Container, Row} from 'reactstrap'
// core components
import Footer from '../../../../components/Footers/Footer'
// assets
import BlogPageHeader from '../../../../components/Headers/BlogPageHeader'
import ExamplesNavbar from '../../../../components/Navbars/ExamplesNavbar'
import {BlogCategories} from '../BlogCategories'
import {TextHeader} from './text_components/TextHeader'


export interface ITextPageDraftProps {
    blogCategory?: BlogCategories
    title: string
    children: any
}

function TextPageDraft(props:ITextPageDraftProps) {

    document.documentElement.classList.remove('nav-open')
    React.useEffect(() => {
        document.body.classList.add('landing-page')
        return function cleanup() {
            document.body.classList.remove('landing-page')
        }
    })
    return (
        <>
            <ExamplesNavbar />
            <BlogPageHeader />
            <div className='section profile-content'>
                <Container>
                    <TextHeader blogCategory={props.blogCategory}>{props.title}</TextHeader>

                    <Row>
                        <Col className='ml-auto mr-auto text-center' md='8'>
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

export default TextPageDraft
