export class BreadcrumbConstants {
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

export const breadCrumbHome: BreadcrumbConstants = new BreadcrumbConstants('Home', '/')
export const breadCrumbWhy: BreadcrumbConstants = new BreadcrumbConstants('Why & How?', '/vision-our-why-and-how')
export const breadCrumbForCompanies: BreadcrumbConstants = new BreadcrumbConstants('For Companies', '/b2b')
export const breadCrumbForOrganizations: BreadcrumbConstants = new BreadcrumbConstants('For other organizations', '/b2g')
export const breadCrumbTraction: BreadcrumbConstants = new BreadcrumbConstants('Traction', '/traction')
export const breadCrumbImpressum: BreadcrumbConstants = new BreadcrumbConstants('Impressum', '/impressum')
export const breadCrumbDataPrivacy: BreadcrumbConstants = new BreadcrumbConstants('Data Privacy', '/data-privacy')
export const breadCrumbBlogs: BreadcrumbConstants = new BreadcrumbConstants('Blogs', '/blogs')
export const breadCrumbBlogKevinRiedl: BreadcrumbConstants = new BreadcrumbConstants('Kevin Riedl', '/blogs/kevin-riedl')
export const breadCrumbBlogKevinRiedlStrategicHustling: BreadcrumbConstants = new BreadcrumbConstants(
    'Strategic Hustling',
    '/blogs/kevin-riedl/strategic-hustling'
)
export const breadCrumbBlogKevinRiedlChangeYourThoughtsOnStress: BreadcrumbConstants = new BreadcrumbConstants(
    'Let me change the way you think about Stress and Burnout',
    '/blogs/kevin-riedl/change-your-thoughts-on-burnout-stress'
)
export const breadCrumbBlogKevinRiedlStartReflectingOrDieFullOfRegrets: BreadcrumbConstants = new BreadcrumbConstants(
    'Start reflecting or you will die full of regrets',
    '/blogs/kevin-riedl/start-reflecting-or-die-full-of-regrets'
)
export const breadCrumbBlogKevinRiedlSayingYesIsABigNoToOpportunities: BreadcrumbConstants = new BreadcrumbConstants(
    'Saying yes is a big NO to a lot of other opportunities',
    '/blogs/kevin-riedl/saying-yes-is-a-big-no-to-opportunities'
)
export const breadCrumbBlogKevinRiedlHappinessNeqFulfillment: BreadcrumbConstants = new BreadcrumbConstants(
    'Happiness != Fulfillment: Who are you really?',
    '/blogs/kevin-riedl/happiness-neq-fulfillment-who-are-you-really'
)
