import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as React from 'react'
import {PureComponent} from 'react'
import {Button} from 'reactstrap'
import {IGrayColorButtonProps} from './GrayColorButton.props'
import {IGrayColorButtonState} from './GrayColorButton.state'

export class GrayColorButton extends PureComponent<IGrayColorButtonProps, IGrayColorButtonState> {

    public state: IGrayColorButtonState = {
        isGrayscale: true,
    }

    public render() {
        return <Button className='btn-round mr-1' color={this.state.isGrayscale ? 'default' : 'primary'} onClick={this.props.onClick} outline={this.props.outline}
                       onMouseEnter={() => this.changeColorState(false)}
                       onMouseLeave={() => this.changeColorState(true)}>
                <FontAwesomeIcon icon={this.props.icon} />
                &nbsp;{this.props.title}
            </Button>
    }

    private changeColorState = (isGrayscale: boolean) => {
        this.setState({isGrayscale})
    }
}
