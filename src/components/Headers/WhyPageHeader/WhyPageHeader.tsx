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
import {CarouselProvider, Slider} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import imgWhyEnvironment1 from '../../../assets/img/why/carousel/why_environment_1.jpg'
import imgWhyEnvironment2 from '../../../assets/img/why/carousel/why_environment_2.jpg'
import imgWhyEnvironment3 from '../../../assets/img/why/carousel/why_environment_3.jpg'
import imgWhyHealth1 from '../../../assets/img/why/carousel/why_health_1.jpg'
import imgWhyHealth2 from '../../../assets/img/why/carousel/why_health_2.jpg'
import imgWhyHealth3 from '../../../assets/img/why/carousel/why_health_3.jpg'
import imgWhySocial1 from '../../../assets/img/why/carousel/why_social_1.jpg'
import imgWhySocial2 from '../../../assets/img/why/carousel/why_social_2.jpg'
import imgWhySocial3 from '../../../assets/img/why/carousel/why_social_3.jpg'
import {useWindowDimensions} from '../../../controllers/WindowController'
import CarouselSlide from './CarouselSlide'


function WhyPageHeader() {
    const pageHeader = React.createRef<HTMLDivElement>()
    const {width, height} = useWindowDimensions(pageHeader)
    return <div ref={pageHeader}>
        <CarouselProvider naturalSlideWidth={width} naturalSlideHeight={height}
                          totalSlides={9} isPlaying={true} interval={5000}>
            <Slider>
                <CarouselSlide index={0} title='Why do we what we do?' subtitle='Because no one else does it!'
                               bgImage={imgWhySocial1} bgImageAlt='Poor child in slums'/>
                <CarouselSlide index={1} title='We need to change!'
                               subtitle='Our application addresses our society&apos;s biggest issues: health, environment & solidarity'
                               bgImage={imgWhyEnvironment1} bgImageAlt='Polluted beach'/>
                <CarouselSlide index={2} title='Everyone is selfish!'
                               subtitle='Being selfish ensures one&apos;s survival, but endangers humanity.'
                               bgImage={imgWhyHealth1} bgImageAlt='Obese women'/>
                <CarouselSlide index={3} title='What&apos;s the solution?'
                               subtitle='Our app tells users what to do (e.g. gather trash, share food with homeless, ...), aggregates the users impact, rewards them with personalized prices & is fun!'
                               bgImage={imgWhySocial2} bgImageAlt='Homeless man seeking kindness'/>
                <CarouselSlide index={4} title='It&apos;s unrealistic?'
                               subtitle='No, it&apos;s not. Even if we just convince one person to use our app, it&apos;ll be totally worth it!'
                               bgImage={imgWhyEnvironment2} bgImageAlt='Plastic bag on tree'/>
                <CarouselSlide index={5} title='What about charities?'
                               subtitle='Charities are great, but they just fight ramifications. We need to get down to the root of these troubles.'
                               bgImage={imgWhyHealth2} bgImageAlt='Smoking cigarettes'/>
                <CarouselSlide index={6} title='Let&apos;s be honest'
                               subtitle='We don&apos;t live up to this either, it just takes too much energy to do sth. good. That&apos;s why our app rewards you in a variety of ways!'
                               bgImage={imgWhySocial3} bgImageAlt='Old man exhausted'/>
                <CarouselSlide index={7} title='Who rewards me?'
                               subtitle='Organizations (e.g. communes, charities & companies) sponsor challenges with rebates, vouchers, products or even cash. Prizes are fully personalized based on your interests.'
                               bgImage={imgWhyEnvironment3} bgImageAlt='Fish dying in plastic'/>
                <CarouselSlide index={8} title='Why would organizations sponsor challenges?'
                               subtitle='Let&apos;s say it&apos;s low-priced & personalized CSR, a new marketing-tool and they directly address consumers&apos; moral values.'
                               bgImage={imgWhyHealth3} bgImageAlt='Man drinking alcohol, abuse'/>
            </Slider>
        </CarouselProvider>
    </div>
}

export default WhyPageHeader
