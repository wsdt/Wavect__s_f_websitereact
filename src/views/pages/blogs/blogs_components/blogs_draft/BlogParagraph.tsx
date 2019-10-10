
import * as React from 'react'

interface IBlogParagraphProps {
    children:any
}

export const BlogParagraph = (props:IBlogParagraphProps) => {
    return  <p style={{marginBottom: 12, textAlign: 'left', fontSize: 16}}>
        {props.children}
    </p>
}