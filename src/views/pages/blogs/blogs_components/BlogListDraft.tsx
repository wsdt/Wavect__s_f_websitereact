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
import { Col, Row } from 'reactstrap'
import Button from 'reactstrap/lib/Button'
import { BlogCategories } from '../BlogCategories'

export interface IBlogListDraftProps {
    blogLink: string
    blogCategory: BlogCategories
    blogTitle: string
    blogHeaderImg: string
}

function BlogListDraft(props: IBlogListDraftProps) {
    return (
        <li>
            <Row>
                <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                    <img alt={`${props.blogTitle} - header title`} className="img-circle img-no-padding img-responsive" src={props.blogHeaderImg} />
                </Col>
                <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                    <h6>
                        {props.blogTitle}
                        <br />
                        <small>{props.blogCategory}</small>
                    </h6>
                </Col>
                <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                    <br />
                    <a href={props.blogLink}>
                        <Button className="btn-round" color="default" size="sm">
                            <i className="fa fa-arrow-circle-right" />
                        </Button>
                    </a>
                </Col>
            </Row>
        </li>
    )
}

export default BlogListDraft
