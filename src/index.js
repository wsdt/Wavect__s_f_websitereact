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
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

// styles
import './assets/css/bootstrap.min.css'
import './assets/scss/paper-kit.scss'
import './assets/demo/demo.css'
// pages
import LandingPage from './views/pages/LandingPage'
import Blog from './views/pages/Blog'
import BlogKevinRiedl from './views/pages/blogs/BlogKevinRiedl'
import BlogPostHappinessNeqFulfillment from './views/pages/blogs/posts_kevinriedl/BlogPostHappinessNeqFulfillment'
import BlogPostChangeThoughtsOnBurnoutStress from './views/pages/blogs/posts_kevinriedl/BlogPostChangeThoughtsOnBurnoutStress'
import BlogPostStrategicHustling from './views/pages/blogs/posts_kevinriedl/BlogPostStrategicHustling'
import BlogPostStartReflectingOrDieFullOfRegrets from './views/pages/blogs/posts_kevinriedl/BlogPostStartReflectingOrDieFullOfRegrets'
import BlogPostSayingYesIsABigNoToOpportunities from './views/pages/blogs/posts_kevinriedl/BlogPostSayingYesIsABigNoToOpportunities'
import Impressum from './views/pages/Impressum'
import DataPrivacy from './views/pages/DataPrivacy'
import Traction from './views/pages/Traction'
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
    breadCrumbTraction
} from "./views/pages/breadcrumbs/breadcrumbs.constants";
// others

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

            <Route path={breadCrumbHome.link} render={props => <LandingPage {...props} />} />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)
