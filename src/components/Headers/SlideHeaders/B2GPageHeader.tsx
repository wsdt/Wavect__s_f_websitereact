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
import { isMobileWidth, useWindowDimensions } from '../../../controllers/WindowController'
import CarouselSlide from './CarouselSlide'

import imgB2G_0 from '../../../assets/img/b2g/carousel/imgB2G_0.jpg'
import imgB2G_1 from '../../../assets/img/b2g/carousel/imgB2G_1.jpg'
import imgB2G_2 from '../../../assets/img/b2g/carousel/imgB2G_2.jpg'
import imgB2G_3 from '../../../assets/img/b2g/carousel/imgB2G_3.jpg'
import imgB2G_4 from '../../../assets/img/b2g/carousel/imgB2G_4.jpg'
import imgB2G_5 from '../../../assets/img/b2g/carousel/imgB2G_5.jpg'
import imgB2G_6 from '../../../assets/img/b2g/carousel/imgB2G_6.jpg'
import imgB2G_7 from '../../../assets/img/b2g/carousel/imgB2G_7.jpg'
import imgB2G_8 from '../../../assets/img/b2g/carousel/imgB2G_8.jpg'
import imgB2G_9 from '../../../assets/img/b2g/carousel/imgB2G_9.jpg'


function B2GPageHeader() {
    const pageHeader = React.createRef<HTMLDivElement>()
    const { width, height } = useWindowDimensions(pageHeader)
    const isMobile: boolean = isMobileWidth(width)

    return (
        <div ref={pageHeader}>
            <CarouselProvider naturalSlideWidth={width} naturalSlideHeight={height} totalSlides={10} isPlaying={true} interval={5000}>
                <Slider>
                    <CarouselSlide
                        index={0}
                        title='Politician, NGO, charity, governmental organization or club?'
                        subtitle='Enterprises are not the only organizations which can profit from our service.'
                        bgImage={imgB2G_0}
                        bgImageAlt='Desk full of working material'
                        isMobile={isMobile}
                    />
                    <CarouselSlide
                        index={1}
                        title='Sponsor challenges with cash, products, vouchers or rebates..'
                        subtitle='.. to acquire volunteers, to enhance your image & to engage more people to participate in your events. '
                        bgImage={imgB2G_1}
                        bgImageAlt='Books with instructions'
                        isMobile={isMobile}
                    />
                    <CarouselSlide
                        index={2}
                        title='Personalized CSR'
                        subtitle='Users receive personalized challenges and win relevant prizes. This enables political parties, charities, communes... to convince voters, volunteers or donors to trust your organization.'
                        bgImage={imgB2G_2}
                        bgImageAlt='Individual in big city'
                        isMobile={isMobile}
                    />
                    <CarouselSlide
                        index={3}
                        title='Low-Priced CSR'
                        subtitle='Every sponsor has to pay a small fee related to the size & type of their organization. Cause real impact without investing big sums.'
                        bgImage={imgB2G_3}
                        bgImageAlt='Small company working on Corporate-Social-Responsibility (CSR) strategies'
                        isMobile={isMobile}
                    />
                    <CarouselSlide
                        index={4}
                        title='Functional Ads are OUT'
                        subtitle='Modern campaigns trigger emotions, educate and tell stories. Ads on our platform do exactly that, are subtle (e.g. small watermark on a users post) & get shared on existing social-media.'
                        bgImage={imgB2G_4}
                        bgImageAlt='Light bulbs turned off'
                        isMobile={isMobile}
                    />
                    <CarouselSlide
                        index={5}
                        title='Shortage of Volunteers?'
                        subtitle='Need more volunteers for your event (e.g. gathering trash in your commune)?'
                        bgImage={imgB2G_5}
                        bgImageAlt='Books with instructions'
                        isMobile={isMobile}
                    />
                    <CarouselSlide
                        index={6}
                        title='Enhance the reputation of your organization'
                        subtitle="If society wants you to succeed, you will succeed. Give value with 0 expectations and you'll accomplish your organization's mission."
                        bgImage={imgB2G_6}
                        bgImageAlt='Rating a company'
                        isMobile={isMobile}
                    />
                    <CarouselSlide
                        index={7}
                        title='Low Effort'
                        subtitle='Sponsoring a challenge is easy! We create your marketing campaign, drafting a challenge will cost you no more than 5 minutes.'
                        bgImage={imgB2G_7}
                        bgImageAlt='Attention equals revenues'
                        isMobile={isMobile}
                    />
                    <CarouselSlide
                        index={8}
                        title='High chance viral marketing'
                        subtitle='Making an ad to go viral is incredible costly and hard. In such cases quantity may increase your chance of viral posts. By sponsoring a challenge users share related media on our & other platforms with dedication to your organization.'
                        bgImage={imgB2G_8}
                        bgImageAlt='Virus - Viral Marketing'
                        isMobile={isMobile}
                    />
                    <CarouselSlide
                        index={9}
                        title='Word-of-Mouth at its best'
                        subtitle="Just imagine people telling friends what prizes they won by doing something good. It's basically a raffle without risking money."
                        bgImage={imgB2G_9}
                        bgImageAlt='Word-of-Mouth Marketing'
                        isMobile={isMobile}
                    />
                </Slider>
            </CarouselProvider>
        </div>
    )
}

export default B2GPageHeader
