import * as React from 'react'
import {PureComponent} from 'react'
import {IGrayColorImgProps} from './GrayColorImg.props'
import {IGrayColorImgState} from './GrayColorImg.state'

export class GrayColorImg extends PureComponent<IGrayColorImgProps, IGrayColorImgState> {

    public state: IGrayColorImgState = {
        isGrayscale: true,
    }

    public render() {
        return <div onMouseEnter={() => this.changeColorState(false)}
                    onMouseLeave={() => this.changeColorState(true)}
                    onTouchStart={() => this.changeColorState(false)}
                    onTouchEnd={() => this.changeColorState(true)}>

            <img alt={this.props.alt} style={this.state.isGrayscale ? {filter: 'grayscale(100)'} : undefined} src={this.props.src} className={this.props.className} />
        </div>
    }

    private changeColorState = (isGrayscale: boolean) => {
        this.setState({isGrayscale})
    }


}
