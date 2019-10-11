
import * as React from 'react'

interface IH2Props {
    children: any
}

export const H2 = (props:IH2Props) => {
    return  <h2 style={{marginBottom: 12, marginTop: 32, textAlign: 'left', fontSize: 20, fontWeight: 'bold'}}>
        {props.children}
    </h2>
}