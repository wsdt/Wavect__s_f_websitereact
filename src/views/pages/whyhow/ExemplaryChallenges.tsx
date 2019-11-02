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
import {Card, CardBody, CardTitle, Col, Container, Row} from 'reactstrap'
import _schema from '../../../controllers/system/multilinguality/_schema.json'

interface IExemplaryChallengesProps {
    t: (key:string) => string,
}

function ExemplaryChallenges(props: IExemplaryChallengesProps) {
    const {t} = props
    const schema = _schema.pages.whyhow.exemplarychallenges

    return <div className='section section-dark text-center'>
                    <Container>
                        <h2 className='title'>{t(schema.title)}</h2>
                        <Row>
                            <Col md='4'>
                                <Card style={{backgroundColor: '#111', border: '1px solid #ccc'}}>
                                    <CardBody>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <div className='author'>
                                                <CardTitle tag='h4' style={{color: '#fff'}}>{t(schema.challenges.invitestrangerdrink.title)}</CardTitle>
                                                <h6 className='card-category'>{t(schema.categories.social)}</h6>
                                            </div>
                                        </a>
                                        <p className='card-description text-center'>{t(schema.challenges.invitestrangerdrink.description)}</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='4'>
                                <Card style={{backgroundColor: '#111', border: '1px solid #ccc'}}>
                                    <CardBody>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <div className='author'>
                                                <CardTitle tag='h4' style={{color: '#fff'}}>{t(schema.challenges.goforawalk.title)}</CardTitle>
                                                <h6 className='card-category'>{t(schema.categories.health)}</h6>
                                            </div>
                                        </a>
                                        <p className='card-description text-center'>{t(schema.challenges.goforawalk.description)}</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='4'>
                                <Card style={{backgroundColor: '#111', border: '1px solid #ccc'}}>
                                    <CardBody>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <div className='author'>
                                                <CardTitle tag='h4' style={{color: '#fff'}}>{t(schema.challenges.gathertrash.title)}</CardTitle>
                                                <h6 className='card-category'>{t(schema.categories.environment)}</h6>
                                            </div>
                                        </a>
                                        <p className='card-description text-center'>{t(schema.challenges.gathertrash.description)}</p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='4'>
                                <Card style={{backgroundColor: '#111', border: '1px solid #ccc'}}>
                                    <CardBody>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <div className='author'>
                                                <CardTitle tag='h4' style={{color: '#fff'}}>{t(schema.challenges.assistretirementhome.title)}</CardTitle>
                                                <h6 className='card-category'>{t(schema.categories.social)}</h6>
                                            </div>
                                        </a>
                                        <p className='card-description text-center'>{t(schema.challenges.assistretirementhome.description)}</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='4'>
                                <Card style={{backgroundColor: '#111', border: '1px solid #ccc'}}>
                                    <CardBody>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <div className='author'>
                                                <CardTitle tag='h4' style={{color: '#fff'}}>{t(schema.challenges.holdhandstand.title)}</CardTitle>
                                                <h6 className='card-category'>{t(schema.categories.health)}</h6>
                                            </div>
                                        </a>
                                        <p className='card-description text-center'>{t(schema.challenges.holdhandstand.description)}</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='4'>
                                <Card style={{backgroundColor: '#111', border: '1px solid #ccc'}}>
                                    <CardBody>
                                        <a href='/#' onClick={e => e.preventDefault()}>
                                            <div className='author'>
                                                <CardTitle tag='h4' style={{color: '#fff'}}>{t(schema.challenges.planttree.title)}</CardTitle>
                                                <h6 className='card-category'>{t(schema.categories.environment)}</h6>
                                            </div>
                                        </a>
                                        <p className='card-description text-center'>{t(schema.challenges.planttree.description)}</p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
}

export default ExemplaryChallenges
