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
import Button from 'reactstrap/lib/Button'
import Card from 'reactstrap/lib/Card'
import CardBody from 'reactstrap/lib/CardBody'
import CardText from 'reactstrap/lib/CardText'
import CardTitle from 'reactstrap/lib/CardTitle'
import { Helmet } from 'react-helmet'
import { RouteProps } from 'react-router'
import imgKevinRiedl from '../../assets/img/team/kevin_riedl.jpg'
import _schema from '../../controllers/system/multilinguality/_schema.json'
import TextPageDraft from './TextPageDraft/TextPageDraft'
import { breadCrumbBlogs, breadCrumbHome } from '../../controllers/system/routers/BreadcrumbRoutes'
import { GrayColorImg } from '../functional/GrayscaleColor/GrayColorImg/GrayColorImg'
import {SocialShareBar} from '../functional/SocialShareBar/SocialShareBar'
import { translate } from 'react-polyglot'

interface IBlogProps {
    routeProps: RouteProps
    t: (key: string, ...args: any) => string
}

function Blog(props: IBlogProps) {
    const { t } = props
    const schema = _schema.pages.blog

    return (
        <>
            <Helmet>
                <title>{t(schema.header.title)}</title>
                <meta name="description" content={t(schema.header.description)} />
                <meta name="keywords" content="wavect,blog,founder,post,personal,development,software,technical,economical,topic" />
            </Helmet>

            <TextPageDraft breadCrumbs={[breadCrumbHome, breadCrumbBlogs]}>
                <p>{t(schema.intro.description)}</p>
                <br />
                {/*
                            <Button className='btn-round' color='default' outline={true}>
                                <i className='fa fa-cog' /> Settings
                            </Button>*/}

                <a href="/blogs/kevin-riedl" style={{ color: '#fff' }}>
                    <Card style={{ width: '20rem' }}>
                        <GrayColorImg src={imgKevinRiedl} alt={t(schema.intro.blogs.kevin_riedl.imgAltTag)} />
                        <CardBody>
                            <CardTitle style={{ fontWeight: 'bold' }}>{t(schema.intro.blogs.kevin_riedl.title)}</CardTitle>
                            <CardText>{t(schema.intro.blogs.kevin_riedl.description)}</CardText>
                            <Button color="info">{t(schema.general.readposts)}</Button>
                        </CardBody>
                    </Card>
                </a>

                <SocialShareBar shareUrl={breadCrumbBlogs.link} />
            </TextPageDraft>
        </>
    )
}

export default translate()(Blog)
