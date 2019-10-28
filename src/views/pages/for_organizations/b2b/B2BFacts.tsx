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
import _schema from '../../../../controllers/system/multilinguality/_schema.json'
import Fact from '../Fact'


interface IB2BFactsProps {
    t: (key:string, ...args:any) => string,
}

const B2BFacts = (props:IB2BFactsProps) => {
    const {t} = props
    const schema = _schema.pages.b2b.facts

    return <Container>
        <h2 className='title'>{t(schema.title)}</h2>
        <Row>
            <Fact quote={t(schema.elems._1.quote)} sourceTitle={t(schema.elems._1.sourceTitle)}
                  sourceLongTitle={t(schema.elems._1.sourceLongTitle)} sourceExactSource={t(schema.elems._1.sourceExactSource)}/>
            <Fact
                quote={t(schema.elems._2.quote)}
                sourceTitle={t(schema.elems._2.sourceTitle)} sourceLongTitle={t(schema.elems._2.sourceLongTitle)}
                sourceExactSource={t(schema.elems._2.sourceExactSource)}/>

            <Fact quote={t(schema.elems._3.quote)}
                  sourceTitle={t(schema.elems._3.sourceTitle)} sourceLongTitle={t(schema.elems._3.sourceLongTitle)}
                  sourceExactSource={t(schema.elems._3.sourceExactSource)}/>

        </Row>
        <Row>
            <Fact
                colWidth={12}
                quote={t(schema.elems._4.quote)}
                sourceTitle={t(schema.elems._4.sourceTitle)} sourceLongTitle={t(schema.elems._4.sourceLongTitle)}
                sourceExactSource={t(schema.elems._4.sourceExactSource)}/>
        </Row>
        <Row>
            <Fact
                colWidth={6}
                quote={t(schema.elems._5.quote)}
                sourceTitle={t(schema.elems._5.sourceTitle)}
                sourceLongTitle={t(schema.elems._5.sourceLongTitle)}
                sourceExactSource={t(schema.elems._5.sourceExactSource)}/>
            <Fact
                colWidth={6}
                quote={t(schema.elems._6.quote)}
                sourceTitle={t(schema.elems._6.sourceTitle)} sourceLongTitle={t(schema.elems._6.sourceLongTitle)}
                sourceExactSource={t(schema.elems._6.sourceExactSource)}/>
        </Row>
        <Row>
            <Fact
                colWidth={12}
                quote={t(schema.elems._7.quote)}
                sourceTitle={t(schema.elems._7.sourceTitle)}
                sourceLongTitle={t(schema.elems._7.sourceExactSource)}
                sourceExactSource={t(schema.elems._7.sourceExactSource)}/>
        </Row>
        <Row>
            <Fact
                colWidth={5}
                quote={t(schema.elems._8.quote)}
                sourceTitle={t(schema.elems._8.sourceTitle)}
                sourceLongTitle={t(schema.elems._8.sourceLongTitle)}
                sourceExactSource={t(schema.elems._8.sourceExactSource)}/>

            <Fact
                colWidth={6}
                quote={t(schema.elems._9.quote)}
                sourceTitle={t(schema.elems._9.sourceTitle)} sourceLongTitle={t(schema.elems._9.sourceLongTitle)}
                sourceExactSource={t(schema.elems._9.sourceExactSource)}/>

        </Row>
    </Container>
}

export default B2BFacts
