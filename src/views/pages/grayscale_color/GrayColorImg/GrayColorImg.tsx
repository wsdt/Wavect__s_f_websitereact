import * as React from 'react'
import { PureComponent } from 'react'
import { IGrayColorImgProps } from './GrayColorImg.props'
import { IGrayColorImgState } from './GrayColorImg.state'

export class GrayColorImg extends PureComponent<IGrayColorImgProps, IGrayColorImgState> {
    public state: IGrayColorImgState = {
        isGrayscale: true,
    }

    public render() {
        return (
            <div
                onMouseEnter={() => this.changeColorState(false)}
                onMouseLeave={() => this.changeColorState(true)}
                onTouchStart={() => this.changeColorState(false)}
                onTouchEnd={() => this.changeColorState(true)}
            >
                <img
                    alt={this.props.alt}
                    style={{ filter: this.getFilter() }}
                    src={this.props.src}
                    className={this.props.className}
                    width={this.props.width}
                    height={this.props.height}
                />
            </div>
        )
    }

    private getFilter = () => {
        if (this.props.additionalFilters) {
            return this.state.isGrayscale ? `grayscale(1) ${this.props.additionalFilters}` : this.props.additionalFilters
        } else {
            return this.state.isGrayscale ? 'grayscale(1)' : ''
        }
    }

    private changeColorState = (isGrayscale: boolean) => {
        this.setState({ isGrayscale })
    }
}
