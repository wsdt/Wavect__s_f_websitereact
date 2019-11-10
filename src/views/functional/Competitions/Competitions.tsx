import parse from 'html-react-parser'
import React from 'react'
import { Button, Card, CardBody, CardTitle } from 'reactstrap'
import CardText from 'reactstrap/lib/CardText'
import Col from 'reactstrap/lib/Col'
import Row from 'reactstrap/lib/Row'
import imgCompetitionAdventureX from '../../../assets/img/traction/competitions/adventurex_tyrol_2019.jpg'
import imgCompetitionBeadyDays from '../../../assets/img/traction/competitions/beadydays_kufstein_2019.jpg'
import _schema from '../../../controllers/system/multilinguality/_schema.json'
import { H2 } from '../TextComponents/H2/H2'
import { P } from '../TextComponents/P/P'
import { GrayColorImg } from '../GrayscaleColor/GrayColorImg/GrayColorImg'
import {ICompetitionsProps} from "./Competitions.props";

export const Competitions = (props: ICompetitionsProps) => {
    const { t } = props
    const schema = _schema.pages.traction.competitions
    return (
        <>
            <H2>{t(schema.title)}</H2>
            <P>{parse(t(schema.description))}</P>
            <Row>
                <Col className='ml-auto mr-auto text-center' md='auto'>
                    <a
                        href='https://www.startupeuregio.eu/de/startups/adventure-x'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ color: '#fff' }}
                    >
                        <Card style={{ width: '20rem' }}>
                            <GrayColorImg src={imgCompetitionAdventureX} alt={t(schema.comps.adventurex_2019.title)} />
                            <CardBody>
                                <div className='author'>
                                    <CardTitle tag='h4'>{t(schema.comps.adventurex_2019.title)}</CardTitle>
                                    <h6 className='card-category'>{t(schema.comps.adventurex_2019.subtitle)}</h6>
                                </div>
                                <CardText className='card-description text-center'>{t(schema.comps.adventurex_2019.description)}</CardText>
                                <Button color='info'>{t(_schema.general.readmore)}</Button>
                            </CardBody>
                        </Card>
                    </a>
                </Col>

                <Col className='ml-auto mr-auto text-center' md='auto'>
                    <a href='https://www.beady-days.at/de/beady-award.html' target='_blank' rel='noopener noreferrer' style={{ color: '#fff' }}>
                        <Card style={{ width: '20rem' }}>
                            <GrayColorImg src={imgCompetitionBeadyDays} alt='Beady Awards - Kufstein, Tyrol' />
                            <CardBody>
                                <div className='author'>
                                    <CardTitle tag='h4'>{t(schema.comps.beadydays_2019.title)}</CardTitle>
                                    <h6 className='card-category'>{t(schema.comps.beadydays_2019.subtitle)}</h6>
                                </div>
                                <CardText className='card-description text-center'>{t(schema.comps.beadydays_2019.description)}</CardText>
                                <Button color='info'>{t(_schema.general.readmore)}</Button>
                            </CardBody>
                        </Card>
                    </a>
                </Col>
            </Row>
        </>
    )
}
