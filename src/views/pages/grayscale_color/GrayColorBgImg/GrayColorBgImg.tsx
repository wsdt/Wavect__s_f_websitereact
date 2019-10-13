import * as React from 'react'
import {PureComponent} from 'react'
import {IGrayColorBgImgProps} from './GrayColorBgImg.props'
import {IGrayColorBgImgState} from './GrayColorBgImg.state'

export class GrayColorBgImg extends PureComponent<IGrayColorBgImgProps, IGrayColorBgImgState> {

    public state: IGrayColorBgImgState = {
        isGrayscale: true,
    }

    public render() {


        return <div onMouseEnter={() => this.changeColorState(false)}
                    onMouseLeave={() => this.changeColorState(true)}
                    onTouchStart={() => this.changeColorState(false)}
                    onTouchEnd={() => this.changeColorState(true)}
                    data-parallax={this.props.dataParallax}
                    style={{backgroundImage: `url(${this.props.src})`, filter: this.getFilter()}} className={this.props.className}>
            {this.props.children}
        </div>
    }

    private getFilter = () => {
        return this.state.isGrayscale ? `grayscale(1) ${this.props.additionalFilters}` : this.props.additionalFilters
    }

    private changeColorState = (isGrayscale: boolean) => {
        this.setState({isGrayscale})
    }


}
