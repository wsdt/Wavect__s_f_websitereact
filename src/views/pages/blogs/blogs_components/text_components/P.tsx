
import * as React from 'react'

interface IPProps {
    children:any

}

export const P = (props:IPProps) => {
    return  <p style={{marginBottom: 12, textAlign: 'left', fontSize: 16}}>
        {props.children}
    </p>
}