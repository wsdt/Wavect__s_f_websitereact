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
import { Container, Row } from 'reactstrap'

function Footer() {
    return (
        <footer className="footer footer-black footer-white">
            <Container>
                <Row>
                    <nav className="footer-nav">
                        <ul>
                            <li>
                                <a href="/impressum">Impressum</a>
                            </li>
                            <li>
                                <a href="/data-privacy">Data Privacy</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="credits ml-auto">
                        <span className="copyright">© Wavect</span>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
