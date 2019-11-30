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
import _schema from '../../../../controllers/system/multilinguality/_schema.json'
import { QuoteFact } from '../../../../models/QuoteFact'
import { Facts } from '../Facts'
import { IB2BFactsProps } from './B2BFacts.props'

const schema = _schema.pages.b2b.facts

export const B2BFacts = (props: IB2BFactsProps) => {
    const { t } = props

    // TODO: HERE FACTS.TSX mit providing translated strings
    return (
        <Facts
            t={t}
            title={t(schema.title)}
            factsRows={[
                [
                    new QuoteFact(
                        t(schema.elems._1.quote),
                        t(schema.elems._1.sourceTitle),
                        t(schema.elems._1.sourceLongTitle),
                        t(schema.elems._1.sourceExactSource),
                        'https://www.gfk.com/fileadmin/user_upload/website_content/products/DE_20171113_GfK_Consumer_Life_Einblicke_in_das_taeglich_Leben_Ihrer_Zielgruppe.pdf'
                    ),
                    new QuoteFact(
                        t(schema.elems._2.quote),
                        t(schema.elems._2.sourceTitle),
                        t(schema.elems._2.sourceLongTitle),
                        t(schema.elems._2.sourceExactSource)
                    ),
                    new QuoteFact(
                        t(schema.elems._3.quote),
                        t(schema.elems._3.sourceTitle),
                        t(schema.elems._3.sourceLongTitle),
                        t(schema.elems._3.sourceExactSource),
                        'https://www.gfk.com/fileadmin/user_upload/website_content/products/DE_20171113_GfK_Consumer_Life_Einblicke_in_das_taeglich_Leben_Ihrer_Zielgruppe.pdf'
                    ),
                ],
                [
                    new QuoteFact(
                        t(schema.elems._4.quote),
                        t(schema.elems._4.sourceTitle),
                        t(schema.elems._4.sourceLongTitle),
                        t(schema.elems._4.sourceExactSource),
                        'https://www.gfk.com/fileadmin/user_upload/country_one_pager/AT/documents/Angebot_CSR_Monitor_2018_19_CGR.pdf',
                        12
                    ),
                ],
                [
                    new QuoteFact(
                        t(schema.elems._5.quote),
                        t(schema.elems._5.sourceTitle),
                        t(schema.elems._5.sourceLongTitle),
                        t(schema.elems._5.sourceExactSource),
                        'https://doi.org/10.1016/j.indmarman.2005.08.013',
                        6
                    ),
                    new QuoteFact(
                        t(schema.elems._6.quote),
                        t(schema.elems._6.sourceTitle),
                        t(schema.elems._6.sourceLongTitle),
                        t(schema.elems._6.sourceExactSource),
                        undefined,
                        6
                    ),
                ],
                [
                    new QuoteFact(
                        t(schema.elems._7.quote),
                        t(schema.elems._7.sourceTitle),
                        t(schema.elems._7.sourceExactSource),
                        t(schema.elems._7.sourceExactSource),
                        'https://doi.org/10.1016/0148-2963(93)90027-M',
                        12
                    ),
                ],
                [
                    new QuoteFact(
                        t(schema.elems._8.quote),
                        t(schema.elems._8.sourceTitle),
                        t(schema.elems._8.sourceLongTitle),
                        t(schema.elems._8.sourceExactSource),
                        'https://www.springer.com/de/book/9783409187893',
                        5
                    ),
                    new QuoteFact(
                        t(schema.elems._9.quote),
                        t(schema.elems._9.sourceTitle),
                        t(schema.elems._9.sourceLongTitle),
                        t(schema.elems._9.sourceExactSource),
                        'https://www.manager-magazin.de/unternehmen/handel/top-10-global-consumer-trends-2019-von-euromonitor-verbrauchertrends-a-1247990.html',
                        6
                    ),
                ],
            ]}
        />
    )
}
