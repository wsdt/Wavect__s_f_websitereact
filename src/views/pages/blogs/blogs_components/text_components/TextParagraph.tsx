
import * as React from 'react'

interface ITextParagraphProps {
    children:any

}

export const TextParagraph = (props:ITextParagraphProps) => {
    return  <p style={{marginBottom: 12, textAlign: 'left', fontSize: 16}}>
        {props.children}
    </p>
}