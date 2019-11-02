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
import {translate} from 'react-polyglot'
import { Container, Row } from 'reactstrap'
import _schema from '../../../controllers/system/multilinguality/_schema.json'
import { breadCrumbDataPrivacy, breadCrumbImpressum } from '../../pages/breadcrumbs/breadcrumbs.constants'

interface IFooterProps {
    t: (key:string, ...args:any) => string,
}

function Footer(props:IFooterProps) {
    const {t} = props

    return <footer className='footer footer-black footer-white'>
            <Container>
                <Row>
                    <nav className='footer-nav'>
                        <ul>
                            <li>
                                <a href={breadCrumbImpressum.link}>{t(breadCrumbImpressum.title)}</a>
                            </li>
                            <li>
                                <a href={breadCrumbDataPrivacy.link}>{t(breadCrumbDataPrivacy.title)}</a>
                            </li>
                        </ul>
                    </nav>
                    <div className='credits ml-auto'>
                        <span className='copyright'>© {t(_schema.general.wavect.title)}, {new Date().getFullYear()}</span>
                    </div>
                </Row>
            </Container>
        </footer>
}

export default translate()(Footer)
