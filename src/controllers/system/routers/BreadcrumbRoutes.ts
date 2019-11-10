import {BreadcrumbRoute} from '../../../models/BreadcrumbRoute'
import _schema from '../multilinguality/_schema.json'


const schema = _schema.common_components.navbar

export const breadCrumbHome: BreadcrumbRoute = new BreadcrumbRoute(schema.home.title, '/')
export const breadCrumbWhy: BreadcrumbRoute = new BreadcrumbRoute(schema.whyhow.title, '/vision-our-why-and-how')
export const breadCrumbForCompanies: BreadcrumbRoute = new BreadcrumbRoute(schema.b2b.title, '/b2b')
export const breadCrumbForOrganizations: BreadcrumbRoute = new BreadcrumbRoute(schema.b2g.title, '/b2g')
export const breadCrumbTraction: BreadcrumbRoute = new BreadcrumbRoute(schema.traction.title, '/traction')
export const breadCrumbImpressum: BreadcrumbRoute = new BreadcrumbRoute(schema.impressum.title, '/impressum')
export const breadCrumbDataPrivacy: BreadcrumbRoute = new BreadcrumbRoute(schema.dataprivacy.title, '/data-privacy')
export const breadCrumbBlogs: BreadcrumbRoute = new BreadcrumbRoute(schema.blogs.title, '/blogs')
export const breadCrumbBlogKevinRiedl: BreadcrumbRoute = new BreadcrumbRoute(schema.blogs.autors.kevinriedl, '/blogs/kevin-riedl')
export const breadCrumbBlogKevinRiedlStrategicHustling: BreadcrumbRoute = new BreadcrumbRoute(
    schema.blogs.posts.strategichustling,
    '/blogs/kevin-riedl/strategic-hustling'
)
export const breadCrumbBlogKevinRiedlChangeYourThoughtsOnStress: BreadcrumbRoute = new BreadcrumbRoute(
    schema.blogs.posts.changethoughtsonstress,
    '/blogs/kevin-riedl/change-your-thoughts-on-burnout-stress'
)
export const breadCrumbBlogKevinRiedlStartReflectingOrDieFullOfRegrets: BreadcrumbRoute = new BreadcrumbRoute(
    schema.blogs.posts.reflectorregret,
    '/blogs/kevin-riedl/start-reflecting-or-die-full-of-regrets'
)
export const breadCrumbBlogKevinRiedlSayingYesIsABigNoToOpportunities: BreadcrumbRoute = new BreadcrumbRoute(
    schema.blogs.posts.yesisabignotoopportunities,
    '/blogs/kevin-riedl/saying-yes-is-a-big-no-to-opportunities'
)
export const breadCrumbBlogKevinRiedlHappinessNeqFulfillment: BreadcrumbRoute = new BreadcrumbRoute(
    schema.blogs.posts.happinessneqfulfillment,
    '/blogs/kevin-riedl/happiness-neq-fulfillment-who-are-you-really'
)
