
import * as React from 'react'

interface IBlogSubHeaderProps {
    children: any
}

export const BlogSubHeader = (props:IBlogSubHeaderProps) => {
    return  <h2 style={{marginBottom: 12, marginTop: 32, textAlign: 'left', fontSize: 20, fontWeight: 'bold'}}>
        {props.children}
    </h2>
}