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
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import { faHandshake } from '@fortawesome/free-solid-svg-icons/faHandshake'

function ExamplesNavbar() {
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
                            <NavLink href="/blogs" title="Blog posts of co-founders">
                                <FontAwesomeIcon icon={faBlog} /> Blogs
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/traction" title="Past competitions & Partners">
                                <FontAwesomeIcon icon={faHandshake} /> Traction
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink data-placement="bottom" href="mailto:office@wavect.io" title="Contact us via e-mail">
                                <i className="fa fa-envelope" />
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
                                <i className="fa fa-linkedin-square" />
                                <p className="d-lg-none">LinkedIn</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink data-placement="bottom" href="https://www.facebook.com/wavect" target="_blank" title="Like us on Facebook">
                                <i className="fa fa-facebook-square" />
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
                                <i className="fa fa-instagram" />
                                <p className="d-lg-none">Instagram</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink data-placement="bottom" href="https://github.com/orgs/bekind-austria" target="_blank" title="Star us on GitHub">
                                <i className="fa fa-github" />
                                <p className="d-lg-none">GitHub</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink data-placement="bottom" href="https://twitter.com/wavect_austria" target="_blank" title="Follow us on Twitter">
                                <i className="fa fa-twitter" />
                                <p className="d-lg-none">Twitter</p>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default ExamplesNavbar
