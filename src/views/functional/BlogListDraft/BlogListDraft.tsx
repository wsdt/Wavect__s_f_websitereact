import React from 'react'
import { Col, Row } from 'reactstrap'
import { GrayColorImg } from '../GrayscaleColor/GrayColorImg/GrayColorImg'
import {IBlogListDraftProps} from './BlogListDraft.props'


const BlogListDraft = (props: IBlogListDraftProps) => {
    return (
        <a href={props.blogLink}>
            <li>
                <Row>
                    <Col className='ml-auto mr-auto' lg='2' md='5' xs='5'>
                        <GrayColorImg
                            alt={`${props.blogTitle} - header title`}
                            className='img-circle img-no-padding img-responsive'
                            src={props.blogHeaderImg}
                        />
                    </Col>
                    <Col className='ml-auto mr-auto' lg='10' md='8' xs='8'>
                        <h6>
                            {props.blogTitle}
                            <br />
                            <small>
                                {props.blogCategory} - {props.blogLanguage}
                            </small>
                        </h6>
                    </Col>
                </Row>
            </li>
        </a>
    )
}

export default BlogListDraft
