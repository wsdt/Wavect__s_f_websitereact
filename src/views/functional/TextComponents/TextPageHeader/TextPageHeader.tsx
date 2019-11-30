import * as React from 'react'
import Badge from 'reactstrap/lib/Badge'
import { ITextPageHeaderProps } from './TextPageHeader.props'

export const TextPageHeader = (props: ITextPageHeaderProps) => {
    return (
        <div className="owner" style={{ marginBottom: 20 }}>
            <div className="name">
                <h1 className="title" style={{ wordWrap: 'break-word' }}>
                    {props.children}
                </h1>
                {props.blogCategory ? (
                    <Badge color="default" pill={true}>
                        {props.blogCategory}
                    </Badge>
                ) : null}
            </div>
        </div>
    )
}
