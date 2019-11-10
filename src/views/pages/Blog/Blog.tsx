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
import { translate } from 'react-polyglot'
import Button from 'reactstrap/lib/Button'
import Card from 'reactstrap/lib/Card'
import CardBody from 'reactstrap/lib/CardBody'
import CardText from 'reactstrap/lib/CardText'
import CardTitle from 'reactstrap/lib/CardTitle'
import imgKevinRiedl from '../../../assets/img/team/kevin_riedl.jpg'
import _schema from '../../../controllers/system/multilinguality/_schema.json'
import { breadCrumbBlogs, breadCrumbHome } from '../../../controllers/system/routers/BreadcrumbRoutes'
import { GrayColorImg } from '../../functional/GrayscaleColor/GrayColorImg/GrayColorImg'
import {SocialShareBar} from '../../functional/SocialShareBar/SocialShareBar'
import {IBasePageProps} from '../Templates/BasePage.props'
import {TextPageDraft} from '../Templates/TextPageDraft/TextPageDraft'

const schema = _schema.pages.blog

const Blog = (props: IBasePageProps) => {
    const { t } = props

    return <TextPageDraft breadCrumbs={[breadCrumbHome, breadCrumbBlogs]} t={t}>
                <p>{t(schema.intro.description)}</p>
                <br />

                <a href='/blogs/kevin-riedl' style={{ color: '#fff' }}>
                    <Card style={{ width: '20rem' }}>
                        <GrayColorImg src={imgKevinRiedl} alt={t(schema.intro.blogs.kevin_riedl.imgAltTag)} />
                        <CardBody>
                            <CardTitle style={{ fontWeight: 'bold' }}>{t(schema.intro.blogs.kevin_riedl.title)}</CardTitle>
                            <CardText>{t(schema.intro.blogs.kevin_riedl.description)}</CardText>
                            <Button color='info'>{t(schema.general.readposts)}</Button>
                        </CardBody>
                    </Card>
                </a>

                <SocialShareBar shareUrl={breadCrumbBlogs.link} />
            </TextPageDraft>
}

export default translate()(Blog)
