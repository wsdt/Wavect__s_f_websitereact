
export interface IFactProps {
    quote: string
    sourceTitle: string
    sourceLongTitle: string
    sourceExactSource: string // link, retrieved on, etc.
    colWidth?: number
    t: (key: string, ...args: any) => string
    sourceLink?: string
}