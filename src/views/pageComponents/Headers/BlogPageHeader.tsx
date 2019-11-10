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

// core components
import imgBlogHeader from '../../../assets/img/blogs/blog_header.jpg'

function BlogPageHeader() {
    const pageHeader = React.createRef<HTMLDivElement>()

    React.useEffect(() => {
        if (window.innerWidth < 991) {
            const updateScroll = () => {
                const windowScrollTop = window.pageYOffset / 3
                // @ts-ignore
                pageHeader.current.style.transform = 'translate3d(0,' + windowScrollTop + 'px,0)'
            }
            window.addEventListener('scroll', updateScroll)
            return function cleanup() {
                window.removeEventListener('scroll', updateScroll)
            }
        }
        return undefined
    })

    return (
        <>
            <div
                style={{
                    backgroundImage: 'url(' + imgBlogHeader + ')',
                }}
                className="page-header page-header-xs"
                data-parallax={true}
                ref={pageHeader}
            >
                <div className="filter" />
            </div>
        </>
    )
}

export default BlogPageHeader