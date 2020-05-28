import { BreadcrumbRoute } from '../../../models/BreadcrumbRoute'
import _schema from '../multilinguality/_schema.json'

const navSchema = _schema.common_components.navbar
const pageSchema = _schema.pages

export const breadCrumbHome: BreadcrumbRoute = new BreadcrumbRoute(
    navSchema.home.title,
    pageSchema.landingPage.header.title,
    pageSchema.landingPage.header.description,
    'wavect,challenge,environment,social,health,home',
    '/Wavect__s_f_websitereact/#/'
)
export const breadCrumbWhy: BreadcrumbRoute = new BreadcrumbRoute(
    navSchema.whyhow.title,
    pageSchema.whyhow.header.title,
    pageSchema.whyhow.header.description,
    'wavect,challenge,app,function,prize,curriculum,reputation',
    '/Wavect__s_f_websitereact/#/vision-our-why-and-how'
)
export const breadCrumbForCompanies: BreadcrumbRoute = new BreadcrumbRoute(
    navSchema.b2b.title,
    pageSchema.b2b.header.title,
    pageSchema.b2b.header.description,
    'wavect,sponsor,customer,corporate,social,responsibility,csr,personalize,low,price,storytelling,image,reputation',
    '/Wavect__s_f_websitereact/#/b2b'
)
export const breadCrumbForOrganizations: BreadcrumbRoute = new BreadcrumbRoute(
    navSchema.b2g.title,
    pageSchema.b2g.header.title,
    pageSchema.b2g.header.description,
    'wavect,government,issue,society,solidarity,environment,health,charity,reputation,sustainability',
    '/Wavect__s_f_websitereact/#/b2g'
)
export const breadCrumbTraction: BreadcrumbRoute = new BreadcrumbRoute(
    navSchema.traction.title,
    pageSchema.traction.header.title,
    pageSchema.traction.header.description,
    'wavect,traction,change,inspire,partner,sponsor,impact',
    '/Wavect__s_f_websitereact/#/traction'
)
export const breadCrumbImpressum: BreadcrumbRoute = new BreadcrumbRoute(
    navSchema.impressum.title,
    pageSchema.impressum.header.title,
    pageSchema.impressum.header.description,
    'wavect,impressum,data,privacy,user,protection',
    '/Wavect__s_f_websitereact/#/impressum'
)
export const breadCrumbDataPrivacy: BreadcrumbRoute = new BreadcrumbRoute(
    navSchema.dataprivacy.title,
    pageSchema.dataprivacy.header.title,
    pageSchema.dataprivacy.header.description,
    'wavect,data,privacy,value,experience,social,media',
    '/Wavect__s_f_websitereact/#/data-privacy'
)

export const breadCrumbPricing: BreadcrumbRoute = new BreadcrumbRoute(
    navSchema.pricing.title,
    pageSchema.pricing.header.title,
    pageSchema.pricing.header.description,
    'wavect,pricing,cost,csr,product,service,social,environment,health',
    '/Wavect__s_f_websitereact/#/pricing'
)

export const breadCrumbBlogs: BreadcrumbRoute = new BreadcrumbRoute(
    navSchema.blogs.title,
    pageSchema.blog.header.title,
    pageSchema.blog.header.description,
    'wavect,blog,founder,post,personal,development,software,technical,economical,topic',
    '/Wavect__s_f_websitereact/#/blogs'
)
export const breadCrumbBlogKevinRiedl: BreadcrumbRoute = new BreadcrumbRoute(
    navSchema.blogs.autors.kevinriedl,
    pageSchema.blog.blogs.kevinriedl.header.title,
    pageSchema.blog.blogs.kevinriedl.header.description,
    'wavect,blog,ceo,kevin,riedl,post,technical,economical,personal',
    '/Wavect__s_f_websitereact/#/blogs/kevin-riedl'
)
export const breadCrumbBlogKevinRiedlStrategicHustling: BreadcrumbRoute = new BreadcrumbRoute(
    navSchema.blogs.posts.strategichustling,
    'Strategic Hustling',
    'Read this, if you want to have better grades, be more successful in your job or just be more independent and happy in everything you do.',
    'wavect,blog,post,strategy,hustle,job,success,happiness,energy',
    '/Wavect__s_f_websitereact/#/blogs/kevin-riedl/strategic-hustling'
)
export const breadCrumbBlogKevinRiedlChangeYourThoughtsOnStress: BreadcrumbRoute = new BreadcrumbRoute(
    navSchema.blogs.posts.changethoughtsonstress,
    'Let me change the way you think about Stress & Burnout',
    'Do you feel overwhelmed, empty, stressed, demotivated or just depressed? If sometimes or yes, then this post is for YOU!',
    'wavect,blog,post,stress,motivation,depression,help',
    '/Wavect__s_f_websitereact/#/blogs/kevin-riedl/change-your-thoughts-on-burnout-stress'
)
export const breadCrumbBlogKevinRiedlStartReflectingOrDieFullOfRegrets: BreadcrumbRoute = new BreadcrumbRoute(
    navSchema.blogs.posts.reflectorregret,
    'Start reflecting or you will die full of regrets',
    'How could you avoid a midlife crisis? You only regret those things, you have never acted on.',
    'wavect,blog,post,regret,die,reflect,midlife,crisis,act',
    '/Wavect__s_f_websitereact/#/blogs/kevin-riedl/start-reflecting-or-die-full-of-regrets'
)
export const breadCrumbBlogKevinRiedlSayingYesIsABigNoToOpportunities: BreadcrumbRoute = new BreadcrumbRoute(
    navSchema.blogs.posts.yesisabignotoopportunities,
    'Saying yes is a big NO to a lot of other opportunities',
    'Time management is out. The process of elimination helps you to put in front truly important goals.',
    'wavect,blog,post,yes,no,elimination,process,goal',
    '/Wavect__s_f_websitereact/#/blogs/kevin-riedl/saying-yes-is-a-big-no-to-opportunities'
)
export const breadCrumbBlogKevinRiedlHappinessNeqFulfillment: BreadcrumbRoute = new BreadcrumbRoute(
    navSchema.blogs.posts.happinessneqfulfillment,
    'Happiness != Fulfillment: Who are you really?',
    'If you pursue happiness, you will always loose. Choose fulfillment and try to live a meaningful life.',
    'wavect,blog,post,happiness,fulfillment,life,pursue,change,lifestyle',
    '/Wavect__s_f_websitereact/#/blogs/kevin-riedl/happiness-neq-fulfillment-who-are-you-really'
)
