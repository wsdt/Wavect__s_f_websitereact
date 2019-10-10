
import * as React from 'react'

interface ITextSubHeaderProps {
    children: any
}

export const TextSubHeader = (props:ITextSubHeaderProps) => {
    return  <h2 style={{marginBottom: 12, marginTop: 32, textAlign: 'left', fontSize: 20, fontWeight: 'bold'}}>
        {props.children}
    </h2>
}