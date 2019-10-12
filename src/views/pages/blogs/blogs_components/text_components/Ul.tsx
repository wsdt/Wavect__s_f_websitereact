import * as React from 'react'

export const Ul = (props: any) => {
    return <ul style={{ marginBottom: 12, marginTop: 16, textAlign: 'left' }}>{props.children}</ul>
}

export const Li = (props: any) => {
    return <li style={{ marginBottom: 6 }}>{props.children}</li>
}
