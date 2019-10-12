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
import { Button, Card, CardBody, CardFooter, CardTitle } from 'reactstrap'
import Col from 'reactstrap/lib/Col'
import Row from 'reactstrap/lib/Row'
import imgPartnerDigipuls from '../../../assets/img/traction/partners/partner_digipuls.png'
import imgPartnerInncubator from '../../../assets/img/traction/partners/partner_inncubator.png'
import { H2 } from '../blogs/blogs_components/text_components/H2'
import { P } from '../blogs/blogs_components/text_components/P'
import {GrayColorImg} from '../grayscale_color/GrayColorImg/GrayColorImg'

function Partners(_: any) {
    return (
        <>
            <H2 hasDarkBackground={true}>Our partners</H2>
            <P hasDarkBackground={true}>In today's globalized and interconnected world strong partners have never been that important.</P>
            <Row>
                <Col md='4' xs='8' className='ml-auto mr-auto text-center'>
                    <Card className='card-profile card-plain'>
                        <div className='card-avatar'>
                            <a href='https://www.digipuls.com' target='_blank' rel='noopener noreferrer'>
                                <GrayColorImg alt='DigiPuls, Oliver Feldkircher' src={imgPartnerDigipuls} />
                            </a>
                        </div>
                        <CardBody>
                            <a href='https://www.digipuls.com' target='_blank' rel='noopener noreferrer'>
                                <div className='author'>
                                    <CardTitle tag='h4'>digiPULS</CardTitle>
                                    <h6 className='card-category'>Oliver Feldkircher, CEO</h6>
                                </div>
                            </a>
                            <p className='card-description text-center'>
                                Our relationship to Oliver & his professional consultancy may be described as an amicably mentor.
                            </p>
                        </CardBody>
                        <CardFooter className='text-center'>
                            <a href='https://www.digipuls.com' target='_blank' rel='noopener noreferrer'>
                                <Button className='btn-just-icon btn-neutral' color='link'>
                                    <i className='fa fa-link' />
                                </Button>
                            </a>

                            <a href='https://www.facebook.com/digipuls/' target='_blank' rel='noopener noreferrer'>
                                <Button className='btn-just-icon btn-neutral ml-1' color='link'>
                                    <i className='fa fa-facebook' />
                                </Button>
                            </a>

                            <a href='https://www.instagram.com/digipuls' target='_blank' rel='noopener noreferrer'>
                                <Button className='btn-just-icon btn-neutral ml-1' color='link'>
                                    <i className='fa fa-instagram' />
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>
                </Col>

                <Col md='4' xs='8' className='ml-auto mr-auto text-center'>
                    <Card className='card-profile card-plain'>
                        <div className='card-avatar'>
                            <a href='https://inncubator.at' target='_blank' rel='noopener noreferrer'>
                                <GrayColorImg alt='Inncubator, Innsbruck (WiFi, Tyrol)' src={imgPartnerInncubator} />
                            </a>
                        </div>
                        <CardBody>
                            <a href='https://inncubator.at' target='_blank' rel='noopener noreferrer'>
                                <div className='author'>
                                    <CardTitle tag='h4'>Inncubator</CardTitle>
                                    <h6 className='card-category'>Incubator in Innsbruck</h6>
                                </div>
                            </a>
                            <p className='card-description text-center'>
                                The Inncubator [sic] is an incubator program by the university of Innsbruck and the WKO for young startups.
                            </p>
                        </CardBody>
                        <CardFooter className='text-center'>
                            <a href='https://inncubator.at' target='_blank' rel='noopener noreferrer'>
                                <Button className='btn-just-icon btn-neutral' color='link'>
                                    <i className='fa fa-link' />
                                </Button>
                            </a>

                            <a href='https://www.facebook.com/inncubator.at/' target='_blank' rel='noopener noreferrer'>
                                <Button className='btn-just-icon btn-neutral ml-1' color='link'>
                                    <i className='fa fa-facebook' />
                                </Button>
                            </a>

                            <a href='https://www.instagram.com/inncubator/' target='_blank' rel='noopener noreferrer'>
                                <Button className='btn-just-icon btn-neutral ml-1' color='link'>
                                    <i className='fa fa-instagram' />
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Partners
