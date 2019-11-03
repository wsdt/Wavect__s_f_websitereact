import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import React, { PureComponent, ReactNode } from 'react'
import { Collapse } from 'reactstrap'
import { GrayColorIcon } from './grayscale_color/GrayColorIcon/GrayColorIcon'

interface ICollapseIconTextProps {
    icon: IconDefinition
    title: string
    descr: string | ReactNode
}

interface ICollapseIconTextState {
    isOpen: boolean
}

export class CollapseIconText extends PureComponent<ICollapseIconTextProps, ICollapseIconTextState> {
    public state: ICollapseIconTextState = {
        isOpen: true,
    }

    public render() {
        return (
            <div className="info">
                <GrayColorIcon
                    icon={this.props.icon}
                    onClick={() => {
                        this.setState({ isOpen: !this.state.isOpen })
                    }}
                />
                <Collapse isOpen={this.state.isOpen}>
                    <div className="description">
                        <h4 className="info-title">{this.props.title}</h4>
                        <p>{this.props.descr}</p>
                        {/*<Button className='btn-link' color='info' href='/#' onClick={e => e.preventDefault()}>
                                            Coming Soon
                                        </Button>*/}
                    </div>
                </Collapse>
            </div>
        )
    }
}
