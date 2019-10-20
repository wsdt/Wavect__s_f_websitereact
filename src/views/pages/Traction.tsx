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
import Footer from '../../components/Footers/Footer'
import BlogPageHeader from '../../components/Headers/BlogPageHeader'
import NavBar from '../../components/Navbars/NavBar'
import { P } from './blogs/blogs_components/text_components/P'
import { TextHeader } from './blogs/blogs_components/text_components/TextHeader'
import BreadCrumbs from './breadcrumbs/Breadcrumbs'
import { breadCrumbHome, breadCrumbTraction } from './breadcrumbs/breadcrumbs.constants'
import Competitions from './traction/Competitions'
import Partners from './traction/Partners'
import { RouteProps } from 'react-router'

function Traction(_: RouteProps) {
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
                        <Col className="ml-auto mr-auto text-left" md="8">
                            <BreadCrumbs breadcrumbs={[breadCrumbHome, breadCrumbTraction]} />

                            <TextHeader>Traction</TextHeader>
                            <P>
                                Young startups need to prove themselves; they need feedback & traction. That's why we participate in several
                                competitions and always search for strong partners.
                            </P>
                            <hr />
                            <br />
                            <Competitions />
                        </Col>
                    </Row>
                    <br />
                </Container>
            </div>

            <div className="section section-dark text-center">
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto text-left" md="8">
                            <Partners />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </>
    )
}

export default Traction
