import * as React from 'react'
import Badge from 'reactstrap/lib/Badge'
import {BlogCategories} from '../BlogCategories'

export interface IBlogHeaderProps {
    blogCategory: BlogCategories
    children: any
}

export const BlogHeader = (props: IBlogHeaderProps) => {
    return <div className='owner' style={{marginBottom: 20}}>
        <div className='name'>
            <h1 className='title'>{props.children}</h1>
            <Badge color='default' pill={true}>{props.blogCategory}</Badge>
        </div>
    </div>
}