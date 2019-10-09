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
import { Col, Container, Row} from 'reactstrap'

// core components
import Button from 'reactstrap/lib/Button'
import Card from 'reactstrap/lib/Card'
import CardBody from 'reactstrap/lib/CardBody'
import CardImg from 'reactstrap/lib/CardImg'
import CardText from 'reactstrap/lib/CardText'
import CardTitle from 'reactstrap/lib/CardTitle'
import DemoFooter from '../../components/Footers/DemoFooter'
import ExamplesNavbar from '../../components/Navbars/ExamplesNavbar'

// assets
import imgKevinRiedl from '../../assets/img/team/kevin_riedl.jpg'
import BlogPageHeader from '../../components/Headers/BlogPageHeader'

function Blog() {

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
                    <div className='owner'>
                        <div className='name'>
                            <h1 className='title'>
                                Blogs
                            </h1>
                            <h4 className='description'>Personal blogs of Co-Founders</h4>
                        </div>
                    </div>
                    <Row>
                        <Col className='ml-auto mr-auto text-center' md='6'>
                            <p>
                                Here you'll find personal blogs of our team-members. Topics may range from technical, economical, psychological as well as spiritual ones. Feel free to share them :-)
                            </p>
                            <br />
                            {/*
                            <Button className='btn-round' color='default' outline={true}>
                                <i className='fa fa-cog' /> Settings
                            </Button>*/}

                            <Card style={{width: '20rem'}}>
                                <CardImg top={true} src={imgKevinRiedl} alt='CEO: Kevin Riedl'/>
                                <CardBody>
                                    <CardTitle style={{fontWeight: 'bold'}}>Kevin Riedl, Bsc.</CardTitle>
                                    <CardText>Here you'll find economical, technical & personal posts.</CardText>
                                    <Button color='info'><a href='/blogs/kevin-riedl' style={{color: '#fff'}}>Read posts</a></Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <br />

                </Container>
            </div>
            <DemoFooter />
        </>
    )
}

export default Blog
