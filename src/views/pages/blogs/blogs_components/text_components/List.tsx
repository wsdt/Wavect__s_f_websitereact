import * as React from 'react'

export const Ul = (props: any) => {
    return <ul style={{ marginBottom: 12, marginTop: 16, textAlign: 'left' }}>{props.children}</ul>
}

export const Ol = (props: any) => {
    return <ol style={{ marginBottom: 12, marginTop: 16, textAlign: 'left' }}>{props.children}</ol>
}

export const Li = (props: any) => {
    return <li style={{ marginBottom: 6 }}>{props.children}</li>
}
