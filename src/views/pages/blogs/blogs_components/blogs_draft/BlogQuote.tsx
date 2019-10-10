import * as React from 'react'

export interface IBlogQuoteProps {
    autor?: string
    quoteLink: string
    quoteSourceTitle: string
    quoteLastViewedDate: string
    quoteSourceYear: string
    quote: string
}

export const BlogQuote = (props: IBlogQuoteProps) => {
    return <blockquote className='blockquote'>

        <footer className='blockquote-footer'><span style={{fontStyle: 'italic', fontSize: 14, color: '#ccc'}}>{props.quote}</span>
            <br />
            <cite style={{fontSize: 12}} title={props.autor}>(<a href={props.quoteLink}>'{props.quoteSourceTitle}' ({props.quoteSourceYear}) last viewed on {props.quoteLastViewedDate}</a>)</cite></footer>
    </blockquote>
}
