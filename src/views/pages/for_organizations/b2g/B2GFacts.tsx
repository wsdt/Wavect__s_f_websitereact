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

const B2GFacts = () => {
    return <Container>
        <h2 className='title'>Some facts</h2>
        <Row>
            <Fact quote='CSR leads to more customer attention and more positive emotions towards
                                products, trademarks and organizations.' sourceTitle='GfK Austria, 2017'
                  sourceLongTitle='Market Opportunities & Innovation / GfK Consumer Life. Austria: GfK.
                                        Growth from Knowledge.' sourceExactSource='Retrieved 6 24, 2019, from
                                            https://www.gfk.com/fileadmin/user_upload/website_content/products/DE_20171113_GfK_Consumer_Life_Einblicke_in_das_taeglich_Leben_Ihrer_Zielgruppe.pdf'/>

            <Fact quote='Many trademarks have difficulties to market their products and services to Millennials.'
                  sourceTitle='GfK Austria, 2017' sourceLongTitle='Market Opportunities & Innovation / GfK Consumer Life. Austria: GfK.
                                        Growth from Knowledge.' sourceExactSource='Retrieved 6 24, 2019, from
                                            https://www.gfk.com/fileadmin/user_upload/website_content/products/DE_20171113_GfK_Consumer_Life_Einblicke_in_das_taeglich_Leben_Ihrer_Zielgruppe.pdf'/>

            <Fact
                quote='Future innovations will be led by four cornerstones: “Freedom”, “Rewards”, “Security” and “Wellbeing”.'
                sourceTitle='GfK Austria, 2017' sourceLongTitle='Market Opportunities & Innovation / GfK Consumer Life. Austria: GfK.
                                        Growth from Knowledge.' sourceExactSource='Retrieved 6 24, 2019, from
                                            https://www.gfk.com/fileadmin/user_upload/website_content/products/DE_20171113_GfK_Consumer_Life_Einblicke_in_das_taeglich_Leben_Ihrer_Zielgruppe.pdf'/>
        </Row>
        <Row>
            <Fact
                colWidth={12}
                quote='Corporate-Social-Responsibility becomes increasingly interesting for consumers. 78 % of Austrians state that CSR is extremely important. Moreover, more and more Austrians expect that organizations engage socially, especially related to environment-protection and their region. Consumers are convinced that organizations should invest in CSR and profit from such measures. Social responsibility leads to a better organization-reputation, which then leads to the organization’s success.'
                sourceTitle='GfK Austria, 2018/2019' sourceLongTitle='CSR Monitor 2019. Austria: GfK Austria'
                sourceExactSource='Retrieved 6 24, 2019, from https://www.gfk.com/fileadmin/user_upload/country_one_pager/AT/documents/Angebot_CSR_Monitor_2018_19_CGR.pdf'/>
        </Row>
        <Row>
            <Fact
                colWidth={6}
                quote='Physical- and mind sport, awareness, transparency, “Hygge”, We-Culture, “Good-Citizen”, Social-Business, Flexitarian, Zero-Waste, Minimalism, Mindful-Economy, Glocalization [sic], Outsourcing of daily routines, Edutainment, Life-long learning, social-networks, “OMline” [sic]4, Playfulness, Connectivity, Creative-Economy and many more will play an important role in the future.'
                sourceTitle='Zukunftsinstitut, 2019'
                sourceLongTitle='Megatrend-Documentation. Deutschland: Zukunftsinstitut'
                sourceExactSource='Retrieved 6 24, 2019, from https://onlineshop.zukunftsinstitut.de/shop/megatrend-dokumentation/'/>
            <Fact
                colWidth={6}
                quote='The percentage of elder people rises. According to “Consumer Trends Report of Euromonitor”, products and services which do not focus on specific age groups will be more successful in future. All age groups have more commonalities as the majority thinks. Thus, enterprises who focus rather on similarities than of differences across different age groups might profit more than others.'
                sourceTitle='Lange, 2019' sourceLongTitle='Manager-Magazin' sourceExactSource='Retrieved 6 24, 2019, from Top 10 Global Consumer Trends: https://www.manager-magazin.de/unternehmen/handel/top-10-global-consumer-trends-2019-von-euromonitor-verbrauchertrends-a-1247990.html'/>

            <Fact
                colWidth={4}
                quote='Shawn Achor, a Professor at Harvard discovered that 75 % of job success can be predicted by happiness as it leads to more intelligence, creativity, productivity, a longer life and more money.'
                sourceTitle='Achor, S., 2010' sourceLongTitle='The Happiness Advantage'
                sourceExactSource='How a Positive Brain Fuels Success in Work and Life. USA: Currency.'/>

            <Fact
                colWidth={5}
                quote='An organization’s image has a more specific influence on the customers’ perceptions of product and service quality while the organization’s reputation has a broader influence on perceptions of customer value and customer loyalty.'
                sourceTitle='Cretu, A. E., & Roderick, B. J., 2017'
                sourceLongTitle='The influence of brand image and company reputation where manufacturers market to small firms: A customer value perspective.'
                sourceExactSource='Industrial marketing management, 36(2), pp. 230-240. doi:https://doi.org/10.1016/j.indmarman.2005.08.013'/>
            <Fact
                colWidth={3}
                quote='According to a French survey the broad public thinks that regular ads are obsolete, while Sponsoring is considered State-of-the-Art.'
                sourceTitle='Walliser, 2013'
                sourceLongTitle='Sponsoring: Bedeutung, Wirkung und Kontrollmöglichkeiten.'
                sourceExactSource='Springer-Verlag'/>

        </Row>
    </Container>
}

export default B2GFacts
