
import React, { PureComponent } from 'react'
import { Collapse } from 'reactstrap'
import { GrayColorIcon } from '../../functional/GrayscaleColor/GrayColorIcon/GrayColorIcon'
import {ICollapseIconTextState} from './CollapseIcon.state'
import {ICollapseIconTextProps} from './CollapseIconText.props'

export class CollapseIconText extends PureComponent<ICollapseIconTextProps, ICollapseIconTextState> {
    public state: ICollapseIconTextState = {
        isOpen: true,
    }

    public render() {
        return (
            <div className='info'>
                <GrayColorIcon
                    icon={this.props.icon}
                    onClick={() => {
                        this.setState({ isOpen: !this.state.isOpen })
                    }}
                />
                <Collapse isOpen={this.state.isOpen}>
                    <div className='description'>
                        <h4 className='info-title'>{this.props.title}</h4>
                        <p>{this.props.descr}</p>
                    </div>
                </Collapse>
            </div>
        )
    }
}
