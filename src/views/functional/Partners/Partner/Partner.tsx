import React from 'react'
import {Button, Card, CardBody, CardFooter, CardTitle} from 'reactstrap'
import Col from 'reactstrap/lib/Col'
import {GrayColorImg} from '../../GrayscaleColor/GrayColorImg/GrayColorImg'
import {IPartnerProps} from './Partner.props'

export const Partner = (props: IPartnerProps) => {
    const {t} = props

    return <Col md="4" xs="8" className="ml-auto mr-auto text-center">
        <Card className="card-profile card-plain">
            <div className="card-avatar">
                <a href={props.websiteUri} target="_blank" rel="noopener noreferrer">
                    <GrayColorImg alt={t(props.altImg)} src={props.logoImg}/>
                </a>
            </div>
            <CardBody>
                <a href={props.websiteUri} target="_blank" rel="noopener noreferrer">
                    <div className="author">
                        <CardTitle tag="h4">{t(props.title)}</CardTitle>
                        <h6 className="card-category">{t(props.subtitle)}</h6>
                    </div>
                </a>
                <p className="card-description text-center">{t(props.description)} </p>
            </CardBody>
            <CardFooter className="text-center">
                <a href={props.websiteUri} target="_blank" rel="noopener noreferrer">
                    <Button className="btn-just-icon btn-neutral" color="link">
                        <i className="fa fa-link"/>
                    </Button>
                </a>

                {getSocialMedia(props)}

            </CardFooter>
        </Card>
    </Col>
}

const getSocialMedia = (props: IPartnerProps) => {
    const tsx = []
    if (props.facebookUri) {
        tsx.push(<a href={props.facebookUri} target="_blank" rel="noopener noreferrer">
            <Button className="btn-just-icon btn-neutral ml-1" color="link">
                <i className="fa fa-facebook"/>
            </Button>
        </a>)
    }

    if (props.instagramUri) {
        tsx.push(<a href={props.instagramUri} target="_blank" rel="noopener noreferrer">
            <Button className="btn-just-icon btn-neutral ml-1" color="link">
                <i className="fa fa-instagram"/>
            </Button>
        </a>)
    }

    return tsx
}