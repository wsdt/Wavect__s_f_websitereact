import React from 'react'
import {Redirect, Route, Switch} from 'react-router'
import Blog from '../../../views/pages/Blog'
import BlogKevinRiedl from '../../../views/pages/blogs/BlogKevinRiedl'
import BlogPostChangeThoughtsOnBurnoutStress
    from '../../../views/pages/blogs/posts_kevinriedl/BlogPostChangeThoughtsOnBurnoutStress'
import BlogPostHappinessNeqFulfillment
    from '../../../views/pages/blogs/posts_kevinriedl/BlogPostHappinessNeqFulfillment'
import BlogPostSayingYesIsABigNoToOpportunities
    from '../../../views/pages/blogs/posts_kevinriedl/BlogPostSayingYesIsABigNoToOpportunities'
import BlogPostStartReflectingOrDieFullOfRegrets
    from '../../../views/pages/blogs/posts_kevinriedl/BlogPostStartReflectingOrDieFullOfRegrets'
import BlogPostStrategicHustling from '../../../views/pages/blogs/posts_kevinriedl/BlogPostStrategicHustling'
import {
    breadCrumbBlogKevinRiedl,
    breadCrumbBlogKevinRiedlChangeYourThoughtsOnStress,
    breadCrumbBlogKevinRiedlHappinessNeqFulfillment,
    breadCrumbBlogKevinRiedlSayingYesIsABigNoToOpportunities,
    breadCrumbBlogKevinRiedlStartReflectingOrDieFullOfRegrets,
    breadCrumbBlogKevinRiedlStrategicHustling,
    breadCrumbBlogs,
    breadCrumbDataPrivacy, breadCrumbForCompanies,
    breadCrumbForOrganizations, breadCrumbHome,
    breadCrumbImpressum,
    breadCrumbTraction,
    breadCrumbWhy
} from '../../../views/pages/breadcrumbs/breadcrumbs.constants'
import DataPrivacy from '../../../views/pages/DataPrivacy'
import B2B from '../../../views/pages/for_organizations/b2b/B2B'
import B2G from '../../../views/pages/for_organizations/b2g/B2G'
import Impressum from '../../../views/pages/Impressum'
import LandingPage from '../../../views/pages/LandingPage'
import Traction from '../../../views/pages/Traction'
import WhyHow from '../../../views/pages/whyhow/WhyHow'
import {BrowserRouter} from "react-router-dom";

const CustomRouter = () => {
    return <BrowserRouter>
        <Switch>
            <Route
                exact={true}
                path={breadCrumbBlogKevinRiedlSayingYesIsABigNoToOpportunities.link}
                render={props => <BlogPostSayingYesIsABigNoToOpportunities {...props} />}
            />
            <Route
                exact={true}
                path={breadCrumbBlogKevinRiedlStartReflectingOrDieFullOfRegrets.link}
                render={props => <BlogPostStartReflectingOrDieFullOfRegrets {...props} />}
            />
            <Route exact={true} path={breadCrumbBlogKevinRiedlStrategicHustling.link}
                   render={props => <BlogPostStrategicHustling {...props} />}/>
            <Route exact={true}
                        path={breadCrumbBlogKevinRiedlChangeYourThoughtsOnStress.link}
                render={props => <BlogPostChangeThoughtsOnBurnoutStress {...props} />}
            />
            <Route exact={true} path={breadCrumbBlogKevinRiedlHappinessNeqFulfillment.link}
                   render={props => <BlogPostHappinessNeqFulfillment {...props} />}/>
            <Route exact={true} path={breadCrumbBlogKevinRiedl.link} render={props => <BlogKevinRiedl {...props} />}/>
            <Route exact={true} path={breadCrumbBlogs.link} render={props => <Blog {...props} />}/>

            <Route exact={true} path={breadCrumbTraction.link} render={props => <Traction {...props} />}/>
            <Route exact={true} path={breadCrumbImpressum.link} render={props => <Impressum {...props} />}/>
            <Route exact={true} path={breadCrumbDataPrivacy.link} render={props => <DataPrivacy {...props} />}/>

            <Route exact={true} path={breadCrumbWhy.link} render={props => <WhyHow {...props} />}/>
            <Route exact={true} path={breadCrumbForOrganizations.link} render={props => <B2G {...props} />}/>
            <Route exact={true} path={breadCrumbForCompanies.link} render={props => <B2B {...props} />}/>

            <Route exact={true} path={breadCrumbHome.link} render={props => <LandingPage {...props} />}/>

            <Redirect to='/'/>
        </Switch>
    </BrowserRouter>
}

export default CustomRouter