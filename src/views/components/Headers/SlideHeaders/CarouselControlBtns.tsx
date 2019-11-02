import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {NextButton, PreviousButton} from 'nuka-carousel'
import * as React from 'react'

const defaultButtonStyles = (disabled:boolean) => ({
    border: 0,
    background: 'rgba(0,0,0,0.4)',
    color: 'white',
    padding: 10,
    opacity: disabled ? 0.3 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer'
})

/** Override needed as not configurable */
export class CarouselPrevBtn extends PreviousButton {
    public render() {
        const disabled =
            (this.props.currentSlide === 0 && !this.props.wrapAround) ||
            this.props.slideCount === 0
        return (
            <button
                style={defaultButtonStyles(disabled)}
                disabled={disabled}
                onClick={this.handleClick}
                aria-label='previous'
                type='button'>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </button>
        )
    }
    private handleClick = (event:any) => {
        event.preventDefault()
        this.props.previousSlide()
    }
}


/** Override needed as not configurable */
// tslint:disable-next-line:max-classes-per-file
export class CarouselNextBtn extends NextButton {
    
    public render() {
        const {
            wrapAround,
            slidesToShow,
            currentSlide,
            cellAlign,
            slideCount
        } = this.props

        const disabled = this.nextButtonDisabled({
            wrapAround,
            slidesToShow,
            currentSlide,
            cellAlign,
            slideCount
        })

        return (
            <button
                style={defaultButtonStyles(disabled)}
                disabled={disabled}
                onClick={this.handleClick}
                aria-label='next'
                type='button'>
                <FontAwesomeIcon icon={faArrowRight}/>
            </button>
        )
    }

    private handleClick = (event:any) => {
        event.preventDefault()
        this.props.nextSlide()
    }

    private nextButtonDisabled = (params:any) => {
        const {
            wrapAround,
            slidesToShow,
            currentSlide,
            cellAlign,
            slideCount
        } = params

        let buttonDisabled = false
        if (!wrapAround) {
            const lastSlideIndex = slideCount - 1
            let slidesShowing = slidesToShow
            let lastSlideOffset = 0

            switch (cellAlign) {
                case 'center':
                    slidesShowing = (slidesToShow - 1) * 0.5
                    lastSlideOffset = Math.floor(slidesToShow * 0.5) - 1
                    break
                case 'right':
                    slidesShowing = 1
                    break
            }

            if (slidesToShow > 1) {
                buttonDisabled =
                    currentSlide + slidesShowing > lastSlideIndex + lastSlideOffset
            } else {
                buttonDisabled = currentSlide + 1 > lastSlideIndex
            }
        }
        return buttonDisabled
    }
}