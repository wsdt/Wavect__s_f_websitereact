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
import Carousel, {CarouselSlideRenderControlProps} from 'nuka-carousel'
import React from 'react'
import {isMobileWidth, isSmallerHeight, useWindowDimensions} from '../../../../controllers/WindowController'
import {CarouselDots} from './CarouselDots'
import CarouselSlide from './CarouselSlide'
import {CarouselNextBtn, CarouselPrevBtn} from "./CarouselControlBtns";

interface ISlide {
    title: string,
    subtitle: string,
    bgImage: string,
    bgImgAlt: string,
}

interface IBasePageHeaderProps {
    t: (key: string, ...args: any) => string,
    slides: ISlide[]
}

export const BasePageHeader = (props: IBasePageHeaderProps) => {
    const {t} = props
    const pageHeader = React.createRef<HTMLDivElement>()
    const {width, height} = useWindowDimensions(pageHeader)
    const isMobile: boolean = isMobileWidth(width)
    const isShortHeight: boolean = isSmallerHeight(height)

    return (
        <div ref={pageHeader}>
            <Carousel autoplay={true} autoplayInterval={6000} enableKeyboardControls={true} dragging={true}
                      swiping={false} // disable swiping as bad UX on mobile as we want to scroll via touch

                      initialSlideWidth={width} initialSlideHeight={height} pauseOnHover={true} // better ux, for longer texts
                      speed={1500} easing='easeCubicInOut'
                      renderBottomCenterControls={(controlProps: CarouselSlideRenderControlProps) =>
                          <CarouselDots {...controlProps} />}
                      renderCenterLeftControls={(controlProps: CarouselSlideRenderControlProps) =>
                          <CarouselPrevBtn {...controlProps} />}
                      renderCenterRightControls={(controlProps: CarouselSlideRenderControlProps) =>
                          <CarouselNextBtn {...controlProps}/>}>

                {props.slides.map((slide: ISlide) => {
                    return <CarouselSlide
                        key={Math.random() * 10000}
                        title={t(slide.title)}
                        subtitle={t(slide.subtitle)}
                        bgImage={slide.bgImage}
                        bgImageAlt={t(slide.bgImgAlt)}
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                })}
            </Carousel>
        </div>
    )
}
