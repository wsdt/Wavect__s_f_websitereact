
import * as React from 'react'

export const BlogParagraph = (props:any) => {
    return  <p style={{marginBottom: 12, textAlign: 'left', fontSize: 16}}>
        {props.children}
    </p>
}