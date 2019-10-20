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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import {
    breadCrumbBlogs,
    breadCrumbForCompanies,
    breadCrumbForOrganizations,
    breadCrumbTraction,
    breadCrumbWhy,
} from '../../views/pages/breadcrumbs/breadcrumbs.constants'
import { faSitemap } from '@fortawesome/free-solid-svg-icons/faSitemap'

function NavBar() {
    const [navbarColor, setNavbarColor] = React.useState('navbar-transparent')
    const [navbarCollapse, setNavbarCollapse] = React.useState(false)

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse)
        document.documentElement.classList.toggle('nav-open')
    }

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (document.documentElement.scrollTop > 299 || document.body.scrollTop > 299) {
                setNavbarColor('')
            } else if (document.documentElement.scrollTop < 300 || document.body.scrollTop < 300) {
                setNavbarColor('navbar-transparent')
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
                    <NavbarBrand data-placement="bottom" to="/" title="Home" tag={Link}>
                        Wavect
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
                            <NavLink href={breadCrumbWhy.link} title={breadCrumbWhy.title}>
                                <FontAwesomeIcon icon={faGlasses} size="lg" /> {breadCrumbWhy.title}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={breadCrumbTraction.link} title={breadCrumbTraction.title}>
                                <FontAwesomeIcon icon={faHandshake} size="lg" /> {breadCrumbTraction.title}
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav={true} inNavbar={true}>
                            <DropdownToggle
                                aria-haspopup={true}
                                caret={true}
                                color="default"
                                data-toggle="dropdown"
                                href="/#"
                                id="navbarDropdownMenuLink"
                                nav={true}
                                onClick={e => e.preventDefault()}
                            >
                                <FontAwesomeIcon icon={faSitemap} size="lg" /> For Organizations
                            </DropdownToggle>
                            <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                                <DropdownItem to={breadCrumbForCompanies.link} tag={Link} title="B2B">
                                    {breadCrumbForCompanies.title}
                                </DropdownItem>
                                <DropdownItem divider={true} />
                                <DropdownItem title="B2G" to={breadCrumbForOrganizations.link} tag={Link}>
                                    {breadCrumbForOrganizations.title}
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href={breadCrumbBlogs.link} title={breadCrumbBlogs.title}>
                                <FontAwesomeIcon icon={faBlog} size="lg" /> {breadCrumbBlogs.title}
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink data-placement="bottom" href="mailto:office@wavect.io" title="Contact us via e-mail">
                                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 5 }} size="lg" />
                                <p className="d-lg-none">E-Mail</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                data-placement="bottom"
                                href="https://www.linkedin.com/company/19010151"
                                target="_blank"
                                title="Follow us on LinkedIn"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} style={{ marginRight: 5 }} size="lg" />
                                <p className="d-lg-none">LinkedIn</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink data-placement="bottom" href="https://www.facebook.com/wavect" target="_blank" title="Like us on Facebook">
                                <FontAwesomeIcon icon={faFacebook} style={{ marginRight: 5 }} size="lg" />
                                <p className="d-lg-none">Facebook</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                data-placement="bottom"
                                href="https://www.instagram.com/wavect.io"
                                target="_blank"
                                title="Follow us on Instagram"
                            >
                                <FontAwesomeIcon icon={faInstagram} style={{ marginRight: 5 }} size="lg" />
                                <p className="d-lg-none">Instagram</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink data-placement="bottom" href="https://github.com/orgs/bekind-austria" target="_blank" title="Star us on GitHub">
                                <FontAwesomeIcon icon={faGithub} style={{ marginRight: 5 }} size="lg" />
                                <p className="d-lg-none">GitHub</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink data-placement="bottom" href="https://twitter.com/wavect_austria" target="_blank" title="Follow us on Twitter">
                                <FontAwesomeIcon icon={faTwitter} style={{ marginRight: 5 }} size="lg" />
                                <p className="d-lg-none">Twitter</p>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
