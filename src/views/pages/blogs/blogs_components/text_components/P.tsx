
import * as React from 'react'
import {CSSProperties} from 'react'

interface IPProps {
    children:any
    hasDarkBackground?: boolean
}

export const P = (props:IPProps) => {
    const style:CSSProperties = {marginBottom: 12, textAlign: 'left', fontSize: 16}
    if (props.hasDarkBackground) style.color = '#ccc'

    return  <p style={style}>
        {props.children}
    </p>
}