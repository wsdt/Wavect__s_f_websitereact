import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as React from 'react'
import {PureComponent} from 'react'
import {IGrayColorIconProps} from './GrayColorIcon.props'
import {IGrayColorIconState} from './GrayColorIcon.state'

export class GrayColorIcon extends PureComponent<IGrayColorIconProps, IGrayColorIconState> {

    public state: IGrayColorIconState = {
        isGrayscale: true,
    }

    public render() {
        return <div className={this.getGrayColorClass()}
                    onMouseEnter={() => this.changeColorState(false)}
                    onMouseLeave={() => this.changeColorState(true)}
                    onTouchStart={() => this.changeColorState(false)}
                    onTouchEnd={() => this.changeColorState(true)}>
            <FontAwesomeIcon icon={this.props.icon} />
        </div>
    }

    private changeColorState = (isGrayscale: boolean) => {
        this.setState({isGrayscale})
    }

    private getGrayColorClass = () => {
        return this.state.isGrayscale ? 'icon icon-next' : 'icon icon-primary'
    }
}
