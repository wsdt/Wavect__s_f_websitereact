/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'

import { Slide } from 'pure-react-carousel'
import { GrayColorImg } from '../../../views/pages/grayscale_color/GrayColorImg/GrayColorImg'

interface ICarouselSlideProps {
    index: number
    title: string
    subtitle: string
    bgImage: string
    bgImageAlt: string
    isMobile: boolean
    isShortHeight: boolean
}

function CarouselSlide(props: ICarouselSlideProps) {
    const isLongTitle: boolean = props.title.length > 30
    let fontSizeSubtitle: number = 2
    let fontSizeTitle: number = isLongTitle ? 4 : 5
    if (props.isMobile) {
        fontSizeTitle *= 2
        fontSizeSubtitle *= 2
    } else if (props.isShortHeight) {
        fontSizeTitle /= 2
        fontSizeSubtitle /= 2
    }

    return (
        <Slide index={props.index}>
            <div className='page-header section-dark' data-parallax={true} style={{ textAlign: 'center' }}>
                <GrayColorImg src={props.bgImage} alt={props.bgImageAlt} additionalFilters='brightness(0.4)' height='100%' width='auto' />

                <div className='content-center'>
                    <div
                        className='title-brand'
                        style={{
                            position: 'absolute',
                            transform: 'translate(-50%, -50%)',
                            left: '50%',
                            top: props.isMobile || props.isShortHeight ? '25%' : '50%',
                            width: '95%',
                        }}
                    >
                        <h1 style={{ fontSize: `${fontSizeTitle}vw` }}>{props.title}</h1>
                        <h2 className='presentation-subtitle text-center' style={{ fontSize: `${fontSizeSubtitle}vw` }}>
                            {props.subtitle}
                        </h2>
                    </div>
                </div>
            </div>
        </Slide>
    )
}

export default CarouselSlide
