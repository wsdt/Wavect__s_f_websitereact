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

// reactstrap components
import { CarouselProvider, Slider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import {isMobileWidth, isSmallerHeight, useWindowDimensions} from '../../../../controllers/WindowController'
import CarouselSlide from './CarouselSlide'

import imgB2B_0 from '../../../../assets/img/b2b/carousel/imgB2B_0.jpg'
import imgB2B_1 from '../../../../assets/img/b2b/carousel/imgB2B_1.jpg'
import imgB2B_2 from '../../../../assets/img/b2b/carousel/imgB2B_2.jpg'
import imgB2B_3 from '../../../../assets/img/b2b/carousel/imgB2B_3.jpg'
import imgB2B_4 from '../../../../assets/img/b2b/carousel/imgB2B_4.jpg'
import imgB2B_5 from '../../../../assets/img/b2b/carousel/imgB2B_5.jpg'
import imgB2B_6 from '../../../../assets/img/b2b/carousel/imgB2B_6.jpg'
import imgB2B_7 from '../../../../assets/img/b2b/carousel/imgB2B_7.jpg'
import imgB2B_8 from '../../../../assets/img/b2b/carousel/imgB2B_8.jpg'
import _schema from "../../../../controllers/system/multilinguality/_schema.json";

interface IB2BPageHeaderProps {
    t: (key: string, ...args: any) => string,
}

function B2BPageHeader(props:IB2BPageHeaderProps) {
    const {t} = props
    const schema = _schema.pages.b2b.slider

    const pageHeader = React.createRef<HTMLDivElement>()
    const { width, height } = useWindowDimensions(pageHeader)
    const isMobile: boolean = isMobileWidth(width)
    const isShortHeight: boolean = isSmallerHeight(height)

    return (
        <div ref={pageHeader}>
            <CarouselProvider naturalSlideWidth={width} naturalSlideHeight={height} totalSlides={9} isPlaying={true} interval={5000}>
                <Slider>
                    <CarouselSlide
                        index={0}
                        title={t(schema.slide_0.title)}
                        subtitle={t(schema.slide_0.subtitle)}
                        bgImage={imgB2B_0}
                        bgImageAlt={t(schema.slide_0.bgImgAlt)}
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={1}
                        title={t(schema.slide_1.title)}
                        subtitle={t(schema.slide_1.subtitle)}
                        bgImage={imgB2B_1}
                        bgImageAlt={t(schema.slide_1.bgImgAlt)}
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={2}
                        title={t(schema.slide_2.title)}
                        subtitle={t(schema.slide_2.subtitle)}
                        bgImage={imgB2B_2}
                        bgImageAlt={t(schema.slide_2.bgImgAlt)}
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={3}
                        title={t(schema.slide_3.title)}
                        subtitle={t(schema.slide_3.subtitle)}
                        bgImage={imgB2B_3}
                        bgImageAlt={t(schema.slide_3.bgImgAlt)}
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={4}
                        title={t(schema.slide_4.title)}
                        subtitle={t(schema.slide_4.subtitle)}
                        bgImage={imgB2B_4}
                        bgImageAlt={t(schema.slide_4.bgImgAlt)}
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={5}
                        title={t(schema.slide_5.title)}
                        subtitle={t(schema.slide_5.subtitle)}
                        bgImage={imgB2B_5}
                        bgImageAlt={t(schema.slide_5.bgImgAlt)}
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={6}
                        title={t(schema.slide_6.title)}
                        subtitle={t(schema.slide_6.subtitle)}
                        bgImage={imgB2B_6}
                        bgImageAlt={t(schema.slide_6.bgImgAlt)}
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={7}
                        title={t(schema.slide_7.title)}
                        subtitle={t(schema.slide_7.subtitle)}
                        bgImage={imgB2B_7}
                        bgImageAlt={t(schema.slide_7.bgImgAlt)}
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={8}
                        title={t(schema.slide_8.title)}
                        subtitle={t(schema.slide_8.subtitle)}
                        bgImage={imgB2B_8}
                        bgImageAlt={t(schema.slide_8.bgImgAlt)}
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                </Slider>
            </CarouselProvider>
        </div>
    )
}

export default B2BPageHeader
