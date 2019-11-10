import { PagingDots } from 'nuka-carousel'
import React from 'react'

/** Override needed as dot color not configurable (was black) */
export class CarouselDots extends PagingDots {
    public render() {
        const indexes = this.getDotIndexes(this.props.slideCount, this.props.slidesToScroll, this.props.slidesToShow, this.props.cellAlign)
        return (
            <ul style={this.getListStyles()}>
                {indexes.map(index => {
                    return (
                        <li
                            // style={this.getListItemStyles()}
                            key={index}
                            className={this.props.currentSlide === index ? 'paging-item active' : 'paging-item'}
                        >
                            <button
                                type="button"
                                style={this.getButtonStyles(this.props.currentSlide === index)}
                                onClick={this.props.goToSlide.bind(null, index)}
                                aria-label={`slide ${index + 1} bullet`}
                            >
                                <span
                                    className="paging-dot"
                                    style={{
                                        display: 'inline-block',
                                        borderRadius: '50%',
                                        width: '6px',
                                        height: '6px',
                                        background: 'white',
                                    }}
                                />
                            </button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
