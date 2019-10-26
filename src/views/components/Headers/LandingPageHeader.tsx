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
import { Container } from 'reactstrap'
import * as imgAntoineBarres from '../../../assets/img/antoine-barres.jpg'
import * as imgClouds from '../../../assets/img/clouds.png'
import imgFoglow from '../../../assets/img/fog-low.png'
import { isMobileWidth, useWindowDimensions } from '../../../controllers/WindowController'

function LandingPageHeader() {
    const pageHeader = React.createRef<HTMLDivElement>()
    const { width } = useWindowDimensions(pageHeader)
    const isMobile: boolean = isMobileWidth(width)

    let fontSizeSubtitle: number = 2
    let fontSizeTitle: number = 7
    if (isMobile) {
        fontSizeTitle *= 2
        fontSizeSubtitle *= 2
    }

    return (
        <>
            <div
                className="page-header section-dark"
                data-parallax={true}
                style={{
                    backgroundImage: `url(${imgAntoineBarres})`,
                }}
                ref={pageHeader}
            >
                <div className="filter" />
                <div className="content-center">
                    <Container>
                        <div className="title-brand">
                            <h1 className="presentation-title" style={{ fontSize: `${fontSizeTitle}vw` }}>
                                Become a hero
                            </h1>
                            <div className="fog-low">
                                <img alt="fog low" src={imgFoglow} />
                            </div>
                            <div className="fog-low right">
                                <img alt="fog low" src={imgFoglow} />
                            </div>
                        </div>
                        <h2 className="presentation-subtitle text-center" style={{ fontSize: `${fontSizeSubtitle}vw` }}>
                            Solve challenges, do something good and win relevant prizes & money.
                        </h2>
                        {/*<br/>
                        <div className="motto text-center">
                            <ModalVideo/>
                        </div>
                        <Button className="btn-round" color="neutral" type="button" outline>Become a Tester</Button>*/}
                    </Container>
                </div>
                <div
                    className="moving-clouds"
                    style={{
                        backgroundImage: `url(${imgClouds})`,
                    }}
                />
            </div>
        </>
    )
}

export default LandingPageHeader