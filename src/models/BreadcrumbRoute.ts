export class BreadcrumbRoute {
    get metaTitle(): string {
        return this._metaTitle;
    }

    set metaTitle(value: string) {
        this._metaTitle = value;
    }
    get metaKeywords(): string {
        return this._metaKeywords;
    }

    set metaKeywords(value: string) {
        this._metaKeywords = value;
    }

    get metaDescription(): string {
        return this._metaDescription;
    }

    set metaDescription(value: string) {
        this._metaDescription = value;
    }

    get title(): string {
        return this._title
    }

    set title(value: string) {
        this._title = value
    }

    get link(): string {
        return this._link
    }

    set link(value: string) {
        this._link = value
    }

    private _title!: string
    private _metaTitle!: string
    private _metaDescription!: string
    /** Currently used for metaKeywords, later maybe additionally for hashtags (e.g. for blog-categories, ...)
     * Keywords separated via comma ','
     */
    private _metaKeywords!: string
    private _link!: string

    public constructor(title: string, metaTitle: string, metaDescription: string, metaKeywords: string, link: string) {
        this.title = title
        this.metaTitle = metaTitle
        this.metaDescription = metaDescription
        this.metaKeywords = metaKeywords
        this.link = link
    }
}