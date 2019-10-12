
import * as React from 'react'
import {CSSProperties} from 'react';


interface IH2Props {
    children: any
    hasDarkBackground?: boolean
}

export const H2 = (props:IH2Props) => {
    const style:CSSProperties = {marginBottom: 12, marginTop: 32, textAlign: 'left', fontSize: 20, fontWeight: 'bold'}
    if (props.hasDarkBackground) style.color = '#ddd'
    
    return  <h2 style={style}>
        {props.children}
    </h2>
}