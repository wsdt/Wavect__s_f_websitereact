import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { PureComponent } from 'react'
import { Button } from 'reactstrap'
import { IGrayColorButtonProps } from './GrayColorButton.props'
import { IGrayColorButtonState } from './GrayColorButton.state'
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

export class GrayColorButton extends PureComponent<IGrayColorButtonProps, IGrayColorButtonState> {
    public state: IGrayColorButtonState = {
        isGrayscale: true,
    }

    public render() {
        return (
            <Button
                className="btn-round mr-1"
                color={this.state.isGrayscale ? 'default' : 'primary'}
                onClick={this.props.onClick}
                outline={this.props.outline}
                onMouseEnter={() => this.changeColorState(false)}
                onMouseLeave={() => this.changeColorState(true)}
                onTouchStart={() => this.changeColorState(false)}
                onTouchEnd={() => this.changeColorState(true)}
            >
                {this.getBtnContent()}
            </Button>
        )
    }

    private getBtnContent = () => {
        if (this.props.isLoading) {
            return <FontAwesomeIcon icon={faSpinner} spin={true} />
        } else {
            return <><FontAwesomeIcon icon={this.props.icon}  />
                &nbsp;{this.props.title}</>
        }
    }

    private changeColorState = (isGrayscale: boolean) => {
        this.setState({ isGrayscale })
    }
}
