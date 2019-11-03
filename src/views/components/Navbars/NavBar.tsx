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
// nodejs library that concatenates strings
// @ts-ignore
import classnames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

// reactstrap components
import { faFacebook, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBlog, faEnvelope, faGlasses, faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faSitemap } from '@fortawesome/free-solid-svg-icons/faSitemap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { translate } from 'react-polyglot'
import {
    Collapse,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    UncontrolledDropdown,
} from 'reactstrap'
import imgWavectLogo from '../../../assets/img/wavect_logo.png'
import _schema from '../../../controllers/system/multilinguality/_schema.json'
import {
    breadCrumbBlogs,
    breadCrumbForCompanies,
    breadCrumbForOrganizations,
    breadCrumbHome,
    breadCrumbTraction,
    breadCrumbWhy,
} from '../../pages/breadcrumbs/breadcrumbs.constants'
import { GrayColorImg } from '../../pages/grayscale_color/GrayColorImg/GrayColorImg'

interface INavBarProps {
    t: (key: string, ...args: any) => string
}

const NavBar = (props: INavBarProps) => {
    const { t } = props
    const schema = _schema.common_components.navbar
    const [navbarColor, setNavbarColor] = React.useState('navbar-transparent')
    const [isNavbarBrandAsText, setNavbarBrandAsText] = React.useState(true)
    const [navbarCollapse, setNavbarCollapse] = React.useState(false)

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse)
        document.documentElement.classList.toggle('nav-open')
    }

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (document.documentElement.scrollTop > 299 || document.body.scrollTop > 299) {
                setNavbarColor('')
                setNavbarBrandAsText(false)
            } else if (document.documentElement.scrollTop < 300 || document.body.scrollTop < 300) {
                setNavbarColor('navbar-transparent')
                setNavbarBrandAsText(true)
            }
        }

        window.addEventListener('scroll', updateNavbarColor)

        return function cleanup() {
            window.removeEventListener('scroll', updateNavbarColor)
        }
    })
    return (
        <Navbar className={classnames('fixed-top', navbarColor)} color-on-scroll="300" expand="lg">
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand data-placement="bottom" to={breadCrumbHome.link} title={t(schema.home.linkTitle)} tag={Link}>
                        {isNavbarBrandAsText ? (
                            t(_schema.general.wavect.title)
                        ) : (
                            <GrayColorImg src={imgWavectLogo} alt={t(_schema.general.wavect.logoAltTag)} width={40} />
                        )}
                    </NavbarBrand>
                    <button
                        aria-expanded={navbarCollapse}
                        className={classnames('navbar-toggler navbar-toggler', {
                            toggled: navbarCollapse,
                        })}
                        onClick={toggleNavbarCollapse}
                    >
                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                    </button>
                </div>
                <Collapse className="justify-content-end" navbar={true} isOpen={navbarCollapse}>
                    <Nav navbar={true}>
                        <NavItem>
                            <NavLink href={breadCrumbWhy.link} title={t(schema.whyhow.linkTitle)}>
                                <FontAwesomeIcon icon={faGlasses} size="lg" className="d-lg-none" /> {t(breadCrumbWhy.title)}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={breadCrumbTraction.link} title={t(schema.traction.linkTitle)}>
                                <FontAwesomeIcon icon={faHandshake} size="lg" className="d-lg-none" /> {t(breadCrumbTraction.title)}
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav={true} inNavbar={true}>
                            <DropdownToggle
                                aria-haspopup={true}
                                caret={true}
                                color="default"
                                data-toggle="dropdown"
                                href="/#"
                                title={t(schema.organizations.linkTitle)}
                                id="navbarDropdownMenuLink"
                                nav={true}
                                onClick={e => e.preventDefault()}
                            >
                                <FontAwesomeIcon icon={faSitemap} size="lg" className="d-lg-none" /> {t(schema.organizations.title)}
                            </DropdownToggle>
                            <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                                <DropdownItem to={breadCrumbForCompanies.link} tag={Link} title={t(schema.b2b.linkTitle)}>
                                    {t(breadCrumbForCompanies.title)}
                                </DropdownItem>
                                <DropdownItem divider={true} />
                                <DropdownItem title={t(schema.b2g.linkTitle)} to={breadCrumbForOrganizations.link} tag={Link}>
                                    {t(breadCrumbForOrganizations.title)}
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href={breadCrumbBlogs.link} title={t(schema.blogs.linkTitle)}>
                                <FontAwesomeIcon icon={faBlog} size="lg" className="d-lg-none" /> {t(breadCrumbBlogs.title)}
                            </NavLink>
                        </NavItem>

                        <NavItem style={{ marginRight: -10 }}>
                            <NavLink data-placement="bottom" href="mailto:office@wavect.io" title={t(schema.email.linkTitle)}>
                                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                                <p className="d-lg-none"> {t(schema.email.title)}</p>
                            </NavLink>
                        </NavItem>
                        <NavItem style={{ marginRight: -10 }}>
                            <NavLink
                                data-placement="bottom"
                                href="https://www.linkedin.com/company/19010151"
                                target="_blank"
                                title={t(schema.linkedin.linkTitle)}
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                                <p className="d-lg-none"> {t(schema.linkedin.title)}</p>
                            </NavLink>
                        </NavItem>
                        <NavItem style={{ marginRight: -10 }}>
                            <NavLink
                                data-placement="bottom"
                                href="https://www.facebook.com/wavect"
                                target="_blank"
                                title={t(schema.facebook.linkTitle)}
                            >
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                                <p className="d-lg-none"> {t(schema.facebook.title)}</p>
                            </NavLink>
                        </NavItem>
                        <NavItem style={{ marginRight: -10 }}>
                            <NavLink
                                data-placement="bottom"
                                href="https://www.instagram.com/wavect.io"
                                target="_blank"
                                title={t(schema.instagram.linkTitle)}
                            >
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                                <p className="d-lg-none"> {t(schema.instagram.title)}</p>
                            </NavLink>
                        </NavItem>
                        <NavItem style={{ marginRight: -10 }}>
                            <NavLink
                                data-placement="bottom"
                                href="https://github.com/orgs/bekind-austria"
                                target="_blank"
                                title={t(schema.github.linkTitle)}
                            >
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                                <p className="d-lg-none"> {t(schema.github.title)}</p>
                            </NavLink>
                        </NavItem>
                        <NavItem style={{ marginRight: -10 }}>
                            <NavLink
                                data-placement="bottom"
                                href="https://twitter.com/wavect_austria"
                                target="_blank"
                                title={t(schema.twitter.linkTitle)}
                            >
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                                <p className="d-lg-none"> {t(schema.twitter.title)}</p>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default translate()(NavBar)
