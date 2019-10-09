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
/*eslint-disable*/
import React from 'react'

// reactstrap components
import { Container } from 'reactstrap'

// assets
import * as imgAntoineBarres from 'assets/img/antoine-barres.jpg'
import imgFogLow from 'assets/img/fog-low.png'
import * as imgClouds from 'assets/img/clouds.png'

function IndexHeader() {
    return (
        <>
            <div
                className="page-header section-dark"
                style={{
                    backgroundImage: 'url(' + imgAntoineBarres + ')',
                }}
            >
                <div className="filter" />
                <div className="content-center">
                    <Container>
                        <div className="title-brand">
                            <h1 className="presentation-title">Paper Kit React</h1>
                            <div className="fog-low">
                                <img alt="..." src={imgFogLow} />
                            </div>
                            <div className="fog-low right">
                                <img alt="..." src={imgFogLow} />
                            </div>
                        </div>
                        <h2 className="presentation-subtitle text-center">Make your mark with a Free Bootstrap 4 (Reactstrap) UI Kit!</h2>
                    </Container>
                </div>
                <div
                    className="moving-clouds"
                    style={{
                        backgroundImage: 'url(' + imgClouds + ')',
                    }}
                />
                <h6 className="category category-absolute">Designed and coded by Creative Tim</h6>
            </div>
        </>
    )
}

export default IndexHeader
