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
import {Button, Card, CardBody, CardTitle} from 'reactstrap'
import CardImg from 'reactstrap/lib/CardImg'
import CardText from 'reactstrap/lib/CardText'
import Col from 'reactstrap/lib/Col'
import Row from 'reactstrap/lib/Row'
import imgCompetitionAdventureX from '../../../assets/img/traction/competitions/adventurex_tyrol_2019.jpg'
import imgCompetitionBeadyDays from '../../../assets/img/traction/competitions/beadydays_kufstein_2019.jpg'
import {H2} from '../blogs/blogs_components/text_components/H2'
import {P} from '../blogs/blogs_components/text_components/P'

function Competitions(_: any) {
    return (
        <>
            <H2>Past competitions</H2>
            <P>
                You may know us from one of the following competitions. Drop us a <a
                href="mailto:office@wavect.io">message</a> if you think we should
                participate in a particular competition.
            </P>
            <Row>
                <Col className="ml-auto mr-auto text-center" md="auto">
                    <a
                        href="https://www.startupeuregio.eu/de/startups/adventure-x"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color: '#fff'}}
                    >
                        <Card style={{width: '20rem'}}>
                            <CardImg top={true} src={imgCompetitionAdventureX} alt="Adventure X - Innsbruck, Tyrol"/>
                            <CardBody>
                                <a href="/#" onClick={e => e.preventDefault()}>
                                    <div className="author">
                                        <CardTitle tag="h4">Adventure X - Innsbruck</CardTitle>
                                        <h6 className="card-category">Finalist (2019)</h6>
                                    </div>
                                </a>
                                <CardText className="card-description text-center">
                                    AdventureX is a business model competition for young startups and already
                                    established companies. Our business model
                                    has been selected from over 55 companies to compete with the top 6 startups in
                                    Tyrol.
                                </CardText>
                                <Button color="info">
                                    Read more
                                </Button>
                            </CardBody>
                        </Card>
                    </a>
                </Col>

                <Col className="ml-auto mr-auto text-center" md="auto">
                    <a
                        href="https://www.beady-days.at/de/beady-award.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color: '#fff'}}
                    >
                        <Card style={{width: '20rem'}}>
                            <CardImg top={true} src={imgCompetitionBeadyDays} alt="Beady Awards - Kufstein, Tyrol"/>
                            <CardBody>
                                <a href="/#" onClick={e => e.preventDefault()}>
                                    <div className="author">
                                        <CardTitle tag="h4">Beady Awards - Kufstein</CardTitle>
                                        <h6 className="card-category">Finalist (2019)</h6>
                                    </div>
                                </a>
                                <CardText className="card-description text-center">
                                    The Beady Awards honor the best concepts to make the world a better place and it's
                                    organizers claim to be the youngest
                                    festival in Austria. Our business model got into the top 3 startups in October 2019
                                    .
                                </CardText>
                                <Button color="info">
                                    Read more
                                </Button>
                            </CardBody>
                        </Card>
                    </a>
                </Col>
            </Row>
        </>
    )
}

export default Competitions
