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
import Blog from "./views/pages/Blog";
import BlogKevinRiedl from "./views/pages/blogs/BlogKevinRiedl";
import BlogPostHappinessNeqFulfillment from "./views/pages/blogs/posts_kevinriedl/BlogPostHappinessNeqFulfillment"
import BlogPostChangeThoughtsOnBurnoutStress from "./views/pages/blogs/posts_kevinriedl/BlogPostChangeThoughtsOnBurnoutStress";
import BlogPostStrategicHustling from "./views/pages/blogs/posts_kevinriedl/BlogPostStrategicHustling";
import BlogPostStartReflectingOrDieFullOfRegrets
    from "./views/pages/blogs/posts_kevinriedl/BlogPostStartReflectingOrDieFullOfRegrets";
import BlogPostSayingYesIsABigNoToOpportunities
    from "./views/pages/blogs/posts_kevinriedl/BlogPostSayingYesIsABigNoToOpportunities";
import Impressum from "./views/pages/Impressum";
import DataPrivacy from "./views/pages/DataPrivacy";
// others

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/blogs/kevin-riedl/saying-yes-is-a-big-no-to-opportunities" render={props => <BlogPostSayingYesIsABigNoToOpportunities {...props} />} />
            <Route path="/blogs/kevin-riedl/start-reflecting-or-die-full-of-regrets" render={props => <BlogPostStartReflectingOrDieFullOfRegrets {...props} />} />
            <Route path="/blogs/kevin-riedl/strategic-hustling" render={props => <BlogPostStrategicHustling {...props} />} />
            <Route path="/blogs/kevin-riedl/change-your-thoughts-on-burnout-stress" render={props => <BlogPostChangeThoughtsOnBurnoutStress {...props} />} />
            <Route path="/blogs/kevin-riedl/happiness-neq-fulfillment-who-are-you-really" render={props => <BlogPostHappinessNeqFulfillment {...props} />} />
            <Route path="/blogs/kevin-riedl" render={props => <BlogKevinRiedl {...props} />} />
            <Route path="/blogs" render={props => <Blog {...props} />} />

            <Route path="/impressum" render={props => <Impressum {...props} />} />
            <Route path="/data-privacy" render={props => <DataPrivacy {...props} />} />

            <Route path="/" render={props => <LandingPage {...props} />} />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)
