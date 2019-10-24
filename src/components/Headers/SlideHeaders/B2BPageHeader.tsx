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
import {isMobileWidth, isSmallerHeight, useWindowDimensions} from '../../../controllers/WindowController'
import CarouselSlide from './CarouselSlide'

import imgB2B_0 from '../../../assets/img/b2b/carousel/imgB2B_0.jpg'
import imgB2B_1 from '../../../assets/img/b2b/carousel/imgB2B_1.jpg'
import imgB2B_2 from '../../../assets/img/b2b/carousel/imgB2B_2.jpg'
import imgB2B_3 from '../../../assets/img/b2b/carousel/imgB2B_3.jpg'
import imgB2B_4 from '../../../assets/img/b2b/carousel/imgB2B_4.jpg'
import imgB2B_5 from '../../../assets/img/b2b/carousel/imgB2B_5.jpg'
import imgB2B_6 from '../../../assets/img/b2b/carousel/imgB2B_6.jpg'
import imgB2B_7 from '../../../assets/img/b2b/carousel/imgB2B_7.jpg'
import imgB2B_8 from '../../../assets/img/b2b/carousel/imgB2B_8.jpg'

function B2BPageHeader() {
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
                        title="Sponsor challenges with rebates, products, vouchers or even cash."
                        subtitle="Causing real environmental, social or health-related impact via sponsoring has never been so easy."
                        bgImage={imgB2B_0}
                        bgImageAlt="Desk full of working material"
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={1}
                        title="How does it work?"
                        subtitle="Select a challenge, choose what to sponsor and acquire new loyal customers by triggering emotions."
                        bgImage={imgB2B_1}
                        bgImageAlt="Books with instructions"
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={2}
                        title="Personalized CSR"
                        subtitle="Users receive personalized challenges and win relevant prizes. This maximizes impact and allows targeting customer needs as well as customers' ethics."
                        bgImage={imgB2B_2}
                        bgImageAlt="Individual in big city"
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={3}
                        title="Functional Ads are OUT"
                        subtitle="Modern ads trigger emotions, educate and tell stories. Ads on our platform do exactly that, are subtle (e.g. small watermark on a users post) & get shared on existing social-media. "
                        bgImage={imgB2B_3}
                        bgImageAlt="Light bulbs turned off"
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={4}
                        title="Enhance the reputation of your enterprise."
                        subtitle="No idea how to start? Just sponsor a challenge instead of organizing huge CSR-Events or drafting expensive marketing campaigns. No green-washing, you cause real impact."
                        bgImage={imgB2B_4}
                        bgImageAlt="Rating a company"
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={5}
                        title="Low-Priced CSR"
                        subtitle="CSR becomes increasingly important. Every sponsor has to pay a small fee related to the size of their organization. Our service itself & this price-scheme make CSR more accessible to SMEs."
                        bgImage={imgB2B_5}
                        bgImageAlt="Small company working on Corporate-Social-Responsibility (CSR) strategies"
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={6}
                        title="Attention = Revenue"
                        subtitle="Nothing generates more yields than attention. Regular ads need to be expensively developed and have a high risk of becoming a bummer. Sponsor a challenge, cause impact and users will share their stories!"
                        bgImage={imgB2B_6}
                        bgImageAlt="Attention equals revenues"
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={7}
                        title="High chance viral marketing"
                        subtitle="Making an ad to go viral is incredible costly and hard. In such cases quantity may increase your chance of viral posts. By sponsoring a challenge users share related media on our & other platforms with dedication to your organization."
                        bgImage={imgB2B_7}
                        bgImageAlt="Virus - Viral Marketing"
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                    <CarouselSlide
                        index={8}
                        title="Word-of-Mouth at its best"
                        subtitle="Just imagine people telling friends what prizes they won by doing something good. It's basically a raffle without risking money."
                        bgImage={imgB2B_8}
                        bgImageAlt="Word-of-Mouth Marketing"
                        isMobile={isMobile}
                        isShortHeight={isShortHeight}
                    />
                </Slider>
            </CarouselProvider>
        </div>
    )
}

export default B2BPageHeader
