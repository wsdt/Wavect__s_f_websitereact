export class BreadcrumbRoute {
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
    private _link!: string

    public constructor(title: string, link: string) {
        this.title = title
        this.link = link
    }
}