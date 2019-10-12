import React from 'react'
import {Col, Row} from 'reactstrap'
import {BlogCategories} from '../BlogCategories'
import {GrayColorImg} from "../../grayscale_color/GrayColorImg/GrayColorImg";

export interface IBlogListDraftProps {
    blogLink: string
    blogCategory: BlogCategories
    blogTitle: string
    blogHeaderImg: string
}

function BlogListDraft(props: IBlogListDraftProps) {
    return (
        <a href={props.blogLink}>
            <li>
                <Row>
                    <Col className='ml-auto mr-auto' lg='2' md='5' xs='5'>
                        <GrayColorImg alt={`${props.blogTitle} - header title`}
                             className='img-circle img-no-padding img-responsive' src={props.blogHeaderImg}/>
                    </Col>
                    <Col className='ml-auto mr-auto' lg='10' md='8' xs='8'>
                        <h6>
                            {props.blogTitle}
                            <br/>
                            <small>{props.blogCategory}</small>
                        </h6>
                    </Col>
                </Row>
            </li>
        </a>
    )
}

export default BlogListDraft