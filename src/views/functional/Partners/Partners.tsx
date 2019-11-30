import React from 'react'
import { Button, Card, CardBody, CardFooter, CardTitle } from 'reactstrap'
import Col from 'reactstrap/lib/Col'
import Row from 'reactstrap/lib/Row'
import imgPartnerDigipuls from '../../../assets/img/traction/partners/partner_digipuls.png'
import imgPartnerInncubator from '../../../assets/img/traction/partners/partner_inncubator.png'
import _schema from '../../../controllers/system/multilinguality/_schema.json'
import { H2 } from '../TextComponents/H2/H2'
import { P } from '../TextComponents/P/P'
import { GrayColorImg } from '../GrayscaleColor/GrayColorImg/GrayColorImg'
import { IPartnersProps } from './Partners.props'

export const Partners = (props: IPartnersProps) => {
    const { t } = props
    const schema = _schema.pages.traction.partners

    return (
        <>
            <H2 hasDarkBackground={true}>{t(schema.title)}</H2>
            <P hasDarkBackground={true}>{t(schema.description)}</P>
            <Row>
                <Col md="4" xs="8" className="ml-auto mr-auto text-center">
                    <Card className="card-profile card-plain">
                        <div className="card-avatar">
                            <a href="https://www.digipuls.com" target="_blank" rel="noopener noreferrer">
                                <GrayColorImg alt={t(schema.partner.digipuls.altImg)} src={imgPartnerDigipuls} />
                            </a>
                        </div>
                        <CardBody>
                            <a href="https://www.digipuls.com" target="_blank" rel="noopener noreferrer">
                                <div className="author">
                                    <CardTitle tag="h4">{t(schema.partner.digipuls.title)}</CardTitle>
                                    <h6 className="card-category">{t(schema.partner.digipuls.subtitle)}</h6>
                                </div>
                            </a>
                            <p className="card-description text-center">{t(schema.partner.digipuls.description)}</p>
                        </CardBody>
                        <CardFooter className="text-center">
                            <a href="https://www.digipuls.com" target="_blank" rel="noopener noreferrer">
                                <Button className="btn-just-icon btn-neutral" color="link">
                                    <i className="fa fa-link" />
                                </Button>
                            </a>

                            <a href="https://www.facebook.com/digipuls/" target="_blank" rel="noopener noreferrer">
                                <Button className="btn-just-icon btn-neutral ml-1" color="link">
                                    <i className="fa fa-facebook" />
                                </Button>
                            </a>

                            <a href="https://www.instagram.com/digipuls" target="_blank" rel="noopener noreferrer">
                                <Button className="btn-just-icon btn-neutral ml-1" color="link">
                                    <i className="fa fa-instagram" />
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>
                </Col>

                <Col md="4" xs="8" className="ml-auto mr-auto text-center">
                    <Card className="card-profile card-plain">
                        <div className="card-avatar">
                            <a href="https://inncubator.at" target="_blank" rel="noopener noreferrer">
                                <GrayColorImg alt={t(schema.partner.innc.altImg)} src={imgPartnerInncubator} />
                            </a>
                        </div>
                        <CardBody>
                            <a href="https://inncubator.at" target="_blank" rel="noopener noreferrer">
                                <div className="author">
                                    <CardTitle tag="h4">{t(schema.partner.innc.title)}</CardTitle>
                                    <h6 className="card-category">{t(schema.partner.innc.subtitle)}</h6>
                                </div>
                            </a>
                            <p className="card-description text-center">{t(schema.partner.innc.description)} </p>
                        </CardBody>
                        <CardFooter className="text-center">
                            <a href="https://inncubator.at" target="_blank" rel="noopener noreferrer">
                                <Button className="btn-just-icon btn-neutral" color="link">
                                    <i className="fa fa-link" />
                                </Button>
                            </a>

                            <a href="https://www.facebook.com/inncubator.at/" target="_blank" rel="noopener noreferrer">
                                <Button className="btn-just-icon btn-neutral ml-1" color="link">
                                    <i className="fa fa-facebook" />
                                </Button>
                            </a>

                            <a href="https://www.instagram.com/inncubator/" target="_blank" rel="noopener noreferrer">
                                <Button className="btn-just-icon btn-neutral ml-1" color="link">
                                    <i className="fa fa-instagram" />
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
