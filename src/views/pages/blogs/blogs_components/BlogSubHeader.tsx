
import * as React from 'react'

export const BlogSubHeader = (props:any) => {
    return  <h2 style={{marginBottom: 12, marginTop: 32, textAlign: 'left', fontSize: 20, fontWeight: 'bold'}}>
        {props.children}
    </h2>
}