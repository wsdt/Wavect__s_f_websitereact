import * as React from 'react'
import Badge from 'reactstrap/lib/Badge'
import {BlogCategories} from '../../BlogCategories'

export interface ITextHeaderProps {
    blogCategory?: BlogCategories
    children: any
}

export const TextHeader = (props: ITextHeaderProps) => {
    return <div className='owner' style={{marginBottom: 20}}>
        <div className='name'>
            <h1 className='title'>{props.children}</h1>
            {props.blogCategory ? <Badge color='default' pill={true}>{props.blogCategory}</Badge> : null}
        </div>
    </div>
}