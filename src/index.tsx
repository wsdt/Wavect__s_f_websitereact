/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

// styles
import './assets/css/bootstrap.min.css'
import './assets/demo/demo.css'
import './assets/scss/paper-kit.scss'
import Blog from './views/pages/Blog'
import BlogKevinRiedl from './views/pages/blogs/BlogKevinRiedl'
import BlogPostChangeThoughtsOnBurnoutStress from './views/pages/blogs/posts_kevinriedl/BlogPostChangeThoughtsOnBurnoutStress'
import BlogPostHappinessNeqFulfillment from './views/pages/blogs/posts_kevinriedl/BlogPostHappinessNeqFulfillment'
import BlogPostSayingYesIsABigNoToOpportunities from './views/pages/blogs/posts_kevinriedl/BlogPostSayingYesIsABigNoToOpportunities'
import BlogPostStartReflectingOrDieFullOfRegrets from './views/pages/blogs/posts_kevinriedl/BlogPostStartReflectingOrDieFullOfRegrets'
import BlogPostStrategicHustling from './views/pages/blogs/posts_kevinriedl/BlogPostStrategicHustling'
import {
    breadCrumbBlogKevinRiedl,
    breadCrumbBlogKevinRiedlChangeYourThoughtsOnStress,
    breadCrumbBlogKevinRiedlHappinessNeqFulfillment,
    breadCrumbBlogKevinRiedlSayingYesIsABigNoToOpportunities,
    breadCrumbBlogKevinRiedlStartReflectingOrDieFullOfRegrets,
    breadCrumbBlogKevinRiedlStrategicHustling,
    breadCrumbBlogs,
    breadCrumbDataPrivacy, breadCrumbHome,
    breadCrumbImpressum,
    breadCrumbTraction, breadCrumbWhy
} from './views/pages/breadcrumbs/breadcrumbs.constants'
import DataPrivacy from './views/pages/DataPrivacy'
import Impressum from './views/pages/Impressum'
import LandingPage from './views/pages/LandingPage'
import Traction from './views/pages/Traction'
import WhyHow from './views/pages/WhyHow'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route
                path={breadCrumbBlogKevinRiedlSayingYesIsABigNoToOpportunities.link}
                render={props => <BlogPostSayingYesIsABigNoToOpportunities {...props} />}
            />
            <Route
                path={breadCrumbBlogKevinRiedlStartReflectingOrDieFullOfRegrets.link}
                render={props => <BlogPostStartReflectingOrDieFullOfRegrets {...props} />}
            />
            <Route path={breadCrumbBlogKevinRiedlStrategicHustling.link} render={props => <BlogPostStrategicHustling {...props} />} />
            <Route
                path={breadCrumbBlogKevinRiedlChangeYourThoughtsOnStress.link}
                render={props => <BlogPostChangeThoughtsOnBurnoutStress {...props} />}
            />
            <Route
                path={breadCrumbBlogKevinRiedlHappinessNeqFulfillment.link}
                render={props => <BlogPostHappinessNeqFulfillment {...props} />}
            />
            <Route path={breadCrumbBlogKevinRiedl.link} render={props => <BlogKevinRiedl {...props} />} />
            <Route path={breadCrumbBlogs.link} render={props => <Blog {...props} />} />

            <Route path={breadCrumbTraction.link} render={props => <Traction {...props} />} />
            <Route path={breadCrumbImpressum.link} render={props => <Impressum {...props} />} />
            <Route path={breadCrumbDataPrivacy.link} render={props => <DataPrivacy {...props} />} />

            <Route path={breadCrumbWhy.link} render={props => <WhyHow {...props} />} />

            <Route path={breadCrumbHome.link} render={props => <LandingPage {...props} />} />
            <Redirect to='/' />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)
