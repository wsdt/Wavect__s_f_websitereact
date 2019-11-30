/** Only save already translated strings into class to make code more comprehensible */
export class QuoteFact {
    get colWidth(): number | undefined {
        return this._colWidth
    }

    set colWidth(value: number | undefined) {
        this._colWidth = value
    }
    get quote(): string {
        return this._quote
    }

    set quote(value: string) {
        this._quote = value
    }
    get sourceTitle(): string {
        return this._sourceTitle
    }

    set sourceTitle(value: string) {
        this._sourceTitle = value
    }
    get sourceLink(): string | undefined {
        return this._sourceLink
    }

    set sourceLink(value: string | undefined) {
        this._sourceLink = value
    }
    get sourceLongTitle(): string {
        return this._sourceLongTitle
    }

    set sourceLongTitle(value: string) {
        this._sourceLongTitle = value
    }
    get sourceExactSource(): string {
        return this._sourceExactSource
    }

    set sourceExactSource(value: string) {
        this._sourceExactSource = value
    }

    private _quote!: string
    private _sourceTitle!: string
    private _sourceLink?: string | undefined
    private _sourceLongTitle!: string
    private _sourceExactSource!: string
    private _colWidth?: number | undefined

    public constructor(
        quote: string,
        sourceTitle: string,
        sourceLongTitle: string,
        sourceExactSource: string,
        sourceLink?: string | undefined,
        colWidth?: number
    ) {
        this.quote = quote
        this.sourceTitle = sourceTitle
        this.sourceLink = sourceLink
        this.sourceLongTitle = sourceLongTitle
        this.sourceExactSource = sourceExactSource
        this.colWidth = colWidth
    }
}
