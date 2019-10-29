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
import imgWhyEnvironment1 from '../../../../assets/img/why/carousel/why_environment_1.jpg'
import imgWhyEnvironment2 from '../../../../assets/img/why/carousel/why_environment_2.jpg'
import imgWhyEnvironment3 from '../../../../assets/img/why/carousel/why_environment_3.jpg'
import imgWhyHealth1 from '../../../../assets/img/why/carousel/why_health_1.jpg'
import imgWhyHealth2 from '../../../../assets/img/why/carousel/why_health_2.jpg'
import imgWhyHealth3 from '../../../../assets/img/why/carousel/why_health_3.jpg'
import imgWhySocial1 from '../../../../assets/img/why/carousel/why_social_1.jpg'
import imgWhySocial2 from '../../../../assets/img/why/carousel/why_social_2.jpg'
import imgWhySocial3 from '../../../../assets/img/why/carousel/why_social_3.jpg'
import _schema from '../../../../controllers/system/multilinguality/_schema.json'
import {isMobileWidth, isSmallerHeight, useWindowDimensions} from '../../../../controllers/WindowController'
import CarouselSlide from './CarouselSlide'

interface IWhyPageHeaderProps {
    t: (key:string, ...args:any) => string,
}

function WhyPageHeader(props:IWhyPageHeaderProps) {
    const {t} = props
    const schema = _schema.pages.whyhow.slider
    const pageHeader = React.createRef<HTMLDivElement>()
    const { width, height } = useWindowDimensions(pageHeader)
    const isMobile: boolean = isMobileWidth(width)
    const isShortHeight:boolean = isSmallerHeight(height)

    const totalSlides = 9

    return (
        <div ref={pageHeader}>
            <CarouselProvider naturalSlideWidth={width} naturalSlideHeight={height} totalSlides={totalSlides} isPlaying={true} interval={5000}>
                <Slider>
                    <CarouselSlide
                        index={0}
                        title={t(schema.slide_0.title)}
                        subtitle={t(schema.slide_0.subtitle)}
                        bgImage={imgWhySocial1}
                        bgImageAlt={t(schema.slide_0.bgImgAlt)}
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={1}
                        title={t(schema.slide_1.title)}
                        subtitle={t(schema.slide_1.subtitle)}
                        bgImage={imgWhyEnvironment1}
                        bgImageAlt={t(schema.slide_1.bgImgAlt)}
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={2}
                        title={t(schema.slide_2.title)}
                        subtitle={t(schema.slide_2.subtitle)}
                        bgImage={imgWhyHealth1}
                        bgImageAlt={t(schema.slide_2.bgImgAlt)}
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={3}
                        title={t(schema.slide_3.title)}
                        subtitle={t(schema.slide_3.subtitle)}
                        bgImage={imgWhySocial2}
                        bgImageAlt={t(schema.slide_3.bgImgAlt)}
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={4}
                        title={t(schema.slide_4.title)}
                        subtitle={t(schema.slide_4.subtitle)}
                        bgImage={imgWhyEnvironment2}
                        bgImageAlt={t(schema.slide_4.bgImgAlt)}
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={5}
                        title={t(schema.slide_5.title)}
                        subtitle={t(schema.slide_5.subtitle)}
                        bgImage={imgWhyHealth2}
                        bgImageAlt={t(schema.slide_5.bgImgAlt)}
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={6}
                        title={t(schema.slide_6.title)}
                        subtitle={t(schema.slide_6.subtitle)}
                        bgImage={imgWhySocial3}
                        bgImageAlt={t(schema.slide_6.bgImgAlt)}
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={7}
                        title={t(schema.slide_7.title)}
                        subtitle={t(schema.slide_7.subtitle)}
                        bgImage={imgWhyEnvironment3}
                        bgImageAlt={t(schema.slide_7.bgImgAlt)}
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={8}
                        title={t(schema.slide_8.title)}
                        subtitle={t(schema.slide_8.subtitle)}
                        bgImage={imgWhyHealth3}
                        bgImageAlt={t(schema.slide_8.bgImgAlt)}
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                </Slider>
            </CarouselProvider>
        </div>
    )
}

export default WhyPageHeader
