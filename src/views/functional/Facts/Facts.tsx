import React from 'react'
import {Container, Row} from 'reactstrap'
import {QuoteFact} from '../../../models/QuoteFact'
import {Fact} from '../../classbased/Fact/Fact'
import {IFactsProps} from './Facts.props'


export const Facts = (props: IFactsProps) => {
    const { t } = props

    return (
        <Container>
            <h2 className='title'>{props.title}</h2>
                {props.factsRows.map((factsRow:QuoteFact[]) => {
                    return <Row key={Math.random()*150000}>
                        {factsRow.map((fact:QuoteFact) => {
                            return <Fact
                                key={Math.random()*100000}
                                quote={fact.quote}
                                sourceTitle={fact.sourceTitle}
                                t={t}
                                colWidth={fact.colWidth}
                                sourceLink={fact.sourceLink}
                                sourceLongTitle={fact.sourceLongTitle}
                                sourceExactSource={fact.sourceExactSource}
                            />
                        })}
                    </Row>
                })}

        </Container>
    )
}
