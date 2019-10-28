import _schema from '../../../controllers/system/multilinguality/_schema.json'

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

const schema = _schema.common_components.navbar

export const breadCrumbHome: BreadcrumbConstants = new BreadcrumbConstants(schema.home.title, '/')
export const breadCrumbWhy: BreadcrumbConstants = new BreadcrumbConstants(schema.whyhow.title, '/vision-our-why-and-how')
export const breadCrumbForCompanies: BreadcrumbConstants = new BreadcrumbConstants(schema.b2b.title, '/b2b')
export const breadCrumbForOrganizations: BreadcrumbConstants = new BreadcrumbConstants(schema.b2g.title, '/b2g')
export const breadCrumbTraction: BreadcrumbConstants = new BreadcrumbConstants(schema.traction.title, '/traction')
export const breadCrumbImpressum: BreadcrumbConstants = new BreadcrumbConstants(schema.impressum.title, '/impressum')
export const breadCrumbDataPrivacy: BreadcrumbConstants = new BreadcrumbConstants(schema.dataprivacy.title, '/data-privacy')
export const breadCrumbBlogs: BreadcrumbConstants = new BreadcrumbConstants(schema.blogs.title, '/blogs')
export const breadCrumbBlogKevinRiedl: BreadcrumbConstants = new BreadcrumbConstants(schema.blogs.autors.kevinriedl, '/blogs/kevin-riedl')
export const breadCrumbBlogKevinRiedlStrategicHustling: BreadcrumbConstants = new BreadcrumbConstants(
    schema.blogs.posts.strategichustling,
    '/blogs/kevin-riedl/strategic-hustling'
)
export const breadCrumbBlogKevinRiedlChangeYourThoughtsOnStress: BreadcrumbConstants = new BreadcrumbConstants(
    schema.blogs.posts.changethoughtsonstress,
    '/blogs/kevin-riedl/change-your-thoughts-on-burnout-stress'
)
export const breadCrumbBlogKevinRiedlStartReflectingOrDieFullOfRegrets: BreadcrumbConstants = new BreadcrumbConstants(
    schema.blogs.posts.reflectorregret,
    '/blogs/kevin-riedl/start-reflecting-or-die-full-of-regrets'
)
export const breadCrumbBlogKevinRiedlSayingYesIsABigNoToOpportunities: BreadcrumbConstants = new BreadcrumbConstants(
    schema.blogs.posts.yesisabignotoopportunities,
    '/blogs/kevin-riedl/saying-yes-is-a-big-no-to-opportunities'
)
export const breadCrumbBlogKevinRiedlHappinessNeqFulfillment: BreadcrumbConstants = new BreadcrumbConstants(
    schema.blogs.posts.happinessneqfulfillment,
    '/blogs/kevin-riedl/happiness-neq-fulfillment-who-are-you-really'
)
