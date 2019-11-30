import React, { PureComponent } from 'react'
import { Card, CardBody, CardTitle, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap'
import _schema from '../../../controllers/system/multilinguality/_schema.json'
import { IFactProps } from './Fact.props'
import { IFactState } from './Fact.state'

export class Fact extends PureComponent<IFactProps, IFactState> {
    public state: IFactState = {
        isOpen: false,
    }
    // random const id for popover
    private randomId: string = `fact_${Math.floor(Math.random() * 10000)}`

    public render() {
        const { t } = this.props

        return (
            <Col md={this.props.colWidth ? this.props.colWidth : '4'}>
                {this.props.sourceLink ? (
                    <a href={this.props.sourceLink} title={t(_schema.general.accesssource)} target="_blank" rel="noopener noreferrer">
                        {this.renderCard()}
                    </a>
                ) : (
                    this.renderCard()
                )}
            </Col>
        )
    }

    private renderCard = () => {
        return (
            <Card style={{ backgroundColor: '#111', border: '1px solid #ccc' }}>
                <CardBody>
                    <p className="card-description text-center">"{this.props.quote}"</p>
                    <span
                        style={{ cursor: 'pointer' }}
                        onTouchStart={() => this.setState({ isOpen: true })}
                        onTouchEnd={() => this.setState({ isOpen: false })}
                        onMouseLeave={() => this.setState({ isOpen: false })}
                        onMouseEnter={() => this.setState({ isOpen: true })}
                    >
                        <div className="author">
                            <CardTitle tag="h4" style={{ color: '#fff' }} id={this.randomId}>
                                {this.props.sourceTitle}
                            </CardTitle>
                        </div>
                        <Popover target={this.randomId} isOpen={this.state.isOpen} placement="bottom">
                            <PopoverHeader>{this.props.sourceTitle}</PopoverHeader>
                            <PopoverBody>
                                {this.props.sourceLongTitle}
                                <small
                                    style={{
                                        display: 'block',
                                        marginTop: 6,
                                    }}
                                >
                                    {this.props.sourceExactSource}
                                </small>
                            </PopoverBody>
                        </Popover>
                    </span>
                </CardBody>
            </Card>
        )
    }
}
