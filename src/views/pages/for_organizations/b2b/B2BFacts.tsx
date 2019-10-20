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
import {Container, Row} from 'reactstrap'
import Fact from '../Fact'

const B2BFacts = () => {
    return <Container>
        <h2 className='title'>Some facts</h2>
        <Row>
            <Fact quote='CSR leads to more customer attention and more positive emotions towards
                                products, trademarks and enterprises.' sourceTitle='GfK Austria, 2017' sourceLongTitle='Market Opportunities & Innovation / GfK Consumer Life. Austria: GfK.
                                        Growth from Knowledge.' sourceExactSource='Retrieved 6 24, 2019, from
                                            https://www.gfk.com/fileadmin/user_upload/website_content/products/DE_20171113_GfK_Consumer_Life_Einblicke_in_das_taeglich_Leben_Ihrer_Zielgruppe.pdf'/>
            <Fact
                quote='About 41 % of the respondents are patrons/regular customers, while 68 % feel ignored by companies.'
                sourceTitle='Reichl, 2019' sourceLongTitle='Consumer Trends'
                sourceExactSource='AMC Study 2019. Vienna, Austria: GfK Austria'/>

            <Fact quote='Many trademarks have difficulties to market their products and services to Millennials.'
                  sourceTitle='GfK Austria, 2017' sourceLongTitle='Market Opportunities & Innovation / GfK Consumer Life. Austria: GfK.
                                        Growth from Knowledge.' sourceExactSource='Retrieved 6 24, 2019, from
                                            https://www.gfk.com/fileadmin/user_upload/website_content/products/DE_20171113_GfK_Consumer_Life_Einblicke_in_das_taeglich_Leben_Ihrer_Zielgruppe.pdf'/>

        </Row>
        <Row>
            <Fact
                colWidth={12}
                quote='Corporate-Social-Responsibility becomes increasingly interesting for consumers. 78 % of Austrians state that CSR is extremely important. Moreover, more and more Austrians expect that enterprises engage socially, especially related to environment-protection and their region. Consumers are convinced that enterprises should invest in CSR and profit from such measures. Social responsibility leads to a better company-reputation, which then leads to the company’s success.'
                sourceTitle='GfK Austria, 2018/2019' sourceLongTitle='CSR Monitor 2019. Austria: GfK Austria'
                sourceExactSource='Retrieved 6 24, 2019, from https://www.gfk.com/fileadmin/user_upload/country_one_pager/AT/documents/Angebot_CSR_Monitor_2018_19_CGR.pdf'/>
        </Row>
        <Row>
            <Fact
                colWidth={6}
                quote='A brand’s image has a more specific influence on the customers’ perceptions of product and service quality while the company’s reputation has a broader influence on perceptions of customer value and customer loyalty.'
                sourceTitle='Cretu, A. E., & Roderick, B. J., 2017'
                sourceLongTitle='The influence of brand image and company reputation where manufacturers market to small firms: A customer value perspective.'
                sourceExactSource='Industrial marketing management, 36(2), pp. 230-240. doi:https://doi.org/10.1016/j.indmarman.2005.08.013'/>
            <Fact
                colWidth={6}
                quote='Approximately 45 % of consumers feel guilty when they do something which harms the environment. About 32 % of consumers state that sustainability is really important, appr. 40 % think it’s extremely important.'
                sourceTitle='Reichl, 2019' sourceLongTitle='Consumer Trends'
                sourceExactSource='AMC Study 2019. Vienna, Austria: GfK Austria'/>
        </Row>
        <Row>
            <Fact
                colWidth={12}
                quote="Empirical evidence suggests that (1) a buyer's response to a service is consistent with his/her attitude toward the vendor's reputation, (2) the common factor underlying a company's reputation is primarily uni-dimensional, and (3) the effectiveness of a specific communications program can be enhanced by utilizing the company's reputation."
                sourceTitle='Yoon, E., Guffey, H. J., & Kijewski, V., 1993'
                sourceLongTitle='The effects on information and company reputation on intentions to buy a business service.'
                sourceExactSource='Journal of Business research, 27(3), pp. 215-228. doi:https://doi.org/10.1016/0148-2963(93)90027-M'/>
        </Row>
        <Row>
            <Fact
                colWidth={5}
                quote='According to a French survey the broad public thinks that regular ads are obsolete, while Sponsoring is considered State-of-the-Art.'
                sourceTitle='Walliser, 2013'
                sourceLongTitle='Sponsoring: Bedeutung, Wirkung und Kontrollmöglichkeiten.'
                sourceExactSource='Springer-Verlag'/>

            <Fact
                colWidth={6}
                quote='Sustainable products will be more and more in demand. A rising number of consumers conditionally choose products/services on ethical questions.'
                sourceTitle='Lange, 2019' sourceLongTitle='Manager-Magazin'
                sourceExactSource='Retrieved 6 24, 2019, from Top 10 Global Consumer Trends: https://www.manager-magazin.de/unternehmen/handel/top-10-global-consumer-trends-2019-von-euromonitor-verbrauchertrends-a-1247990.html'/>

        </Row>
    </Container>
}

export default B2BFacts
