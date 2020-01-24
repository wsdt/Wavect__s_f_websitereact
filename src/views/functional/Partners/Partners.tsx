import React from 'react'
import Row from 'reactstrap/lib/Row'
import imgPartnerCemit from '../../../assets/img/traction/partners/partner_cemit.png'
import imgPartnerDigipuls from '../../../assets/img/traction/partners/partner_digipuls.png'
import imgPartnerInncubator from '../../../assets/img/traction/partners/partner_inncubator.png'
import imgPartnerSetup from '../../../assets/img/traction/partners/partner_setup.png'
import imgPartnerWIA from '../../../assets/img/traction/partners/partner_wia.png'
import _schema from '../../../controllers/system/multilinguality/_schema.json'
import { H2 } from '../TextComponents/H2/H2'
import { P } from '../TextComponents/P/P'
import {Partner} from './Partner/Partner'
import { IPartnersProps } from './Partners.props'

export const Partners = (props: IPartnersProps) => {
    const { t } = props
    const schema = _schema.pages.traction.partners

    return (
        <>
            <H2 hasDarkBackground={true}>{t(schema.title)}</H2>
            <P hasDarkBackground={true}>{t(schema.description)}</P>
            <Row>
                <Partner t={t} altImg={schema.partner.digipuls.altImg} logoImg={imgPartnerDigipuls}
                         title={schema.partner.digipuls.title} subtitle={schema.partner.digipuls.subtitle}
                         description={schema.partner.digipuls.description} websiteUri='https://www.digipuls.com'
                        facebookUri='https://www.facebook.com/digipuls/' instagramUri='https://www.instagram.com/digipuls'/>


                <Partner t={t} altImg={schema.partner.innc.altImg} logoImg={imgPartnerInncubator}
                         title={schema.partner.innc.title} subtitle={schema.partner.innc.subtitle}
                         description={schema.partner.innc.description} websiteUri='https://inncubator.at'
                         facebookUri='https://www.facebook.com/inncubator.at' instagramUri='https://www.instagram.com/inncubator'/>


                <Partner t={t} altImg={schema.partner.setup.altImg} logoImg={imgPartnerSetup}
                         title={schema.partner.setup.title} subtitle={schema.partner.setup.subtitle}
                         description={schema.partner.setup.description} websiteUri='https://www.setup.or.at'
                         facebookUri='http://www.facebook.com/Social.Entrepreneurship.Tirol' instagramUri='https://www.instagram.com/setup.or/'/>


                <Partner t={t} altImg={schema.partner.cemit.altImg} logoImg={imgPartnerCemit}
                         title={schema.partner.cemit.title} subtitle={schema.partner.cemit.subtitle}
                         description={schema.partner.cemit.description} websiteUri='https://cemit.at'/>

                <Partner t={t} altImg={schema.partner.wia.altImg} logoImg={imgPartnerWIA}
                         title={schema.partner.wia.title} subtitle={schema.partner.wia.subtitle}
                         description={schema.partner.wia.description} websiteUri='https://wia.world/'
                         instagramUri='https://www.instagram.com/worldimpactalliance/'/>
            </Row>
        </>
    )
}
