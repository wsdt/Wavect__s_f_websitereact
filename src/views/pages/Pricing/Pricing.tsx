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
import { Collapse } from 'reactstrap'
import Button from 'reactstrap/lib/Button'
import Card from 'reactstrap/lib/Card'
import CardBody from 'reactstrap/lib/CardBody'
import CardText from 'reactstrap/lib/CardText'
import CardTitle from 'reactstrap/lib/CardTitle'
import _schema from '../../../controllers/system/multilinguality/_schema.json'
import { breadCrumbHome, breadCrumbPricing } from '../../../controllers/system/routers/BreadcrumbRoutes'
import { SocialShareBar } from '../../functional/SocialShareBar/SocialShareBar'
import { IBasePageProps } from '../Templates/BasePage.props'
import { TextPageDraft } from '../Templates/TextPageDraft/TextPageDraft'
import { IPricingState } from './Pricing.state'

const schema = _schema.pages.pricing

class Pricing extends React.PureComponent<IBasePageProps, IPricingState> {
    public state: IPricingState = {
        isPricingFormOpen: false,
    }

    public render() {
        const { t } = this.props

        return (
            <TextPageDraft breadCrumbs={[breadCrumbHome, breadCrumbPricing]} t={t}>
                <p>{t(schema.intro.description)}</p>
                <br />

                <a href={breadCrumbPricing.link} style={{ color: '#fff' }}>
                    <Card style={{ width: '20rem' }}>
                        <CardBody>
                            <CardTitle style={{ fontWeight: 'bold' }}>{t(schema.packages.taster.preview.title)}</CardTitle>
                            <CardText>{t(schema.packages.taster.preview.description)}ddd</CardText>
                            <Button color="info">{t(schema.general.btnSeeMore)}</Button>
                        </CardBody>
                    </Card>
                </a>

                <Collapse isOpen={this.state.isPricingFormOpen}></Collapse>

                <SocialShareBar shareUrl={breadCrumbPricing.link} />
            </TextPageDraft>
        )
    }
}

export default translate()(Pricing)
