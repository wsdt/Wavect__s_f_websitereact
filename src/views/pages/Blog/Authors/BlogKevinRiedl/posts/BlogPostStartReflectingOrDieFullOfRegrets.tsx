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
import {
    breadCrumbBlogKevinRiedl,
    breadCrumbBlogKevinRiedlStartReflectingOrDieFullOfRegrets,
    breadCrumbBlogs,
    breadCrumbHome,
} from '../../../../../../controllers/system/routers/BreadcrumbRoutes'
import { SocialShareBar } from '../../../../../functional/SocialShareBar/SocialShareBar'
import { P } from '../../../../../functional/TextComponents/P/P'
import { IBasePageProps } from '../../../../Templates/BasePage.props'
import { TextPageDraft } from '../../../../Templates/TextPageDraft/TextPageDraft'
import { BlogCategories } from '../../BlogCategories'
import { translate } from 'react-polyglot'

const BlogPostStartReflectingOrDieFullOfRegrets = (props: IBasePageProps) => {
    return (
        <TextPageDraft
            blogCategory={BlogCategories.PERSONAL_DEVELOPMENT}
            t={props.t}
            breadCrumbs={[breadCrumbHome, breadCrumbBlogs, breadCrumbBlogKevinRiedl, breadCrumbBlogKevinRiedlStartReflectingOrDieFullOfRegrets]}
        >
            <P>
                How many have heard of the well-known “midlife-crisis”? People have a midlife crisis when they feel like they missed something in
                their life. Interestingly, more and more people get the so-called “midlife-crisis” already between the age of 20–30 years as many
                obligations (e.g. getting children, moving out, …) start earlier than a hundred years ago.
            </P>
            <P>
                Now the actual question is, what kind of people get a midlife-crisis? No matter how old you are, you might be able to answer that
                question yourself. It’s because people don’t reflect enough or at all.
            </P>
            <P>
                People think short-term, neither have standards, courage nor live authentically. It seems like it’s hurting to look at your own life.
                People may be disappointed with where they are or even worse: they don’t even feel the necessity to reflect.
            </P>
            <P>
                Reflection is an endless staircase. You might think at some point that you reached the maximum, but you couldn’t be more wrong. But
                what point am I trying to make?
            </P>
            <P>
                You are going to look back at your life and will be full of regrets in case you don’t live like you wanted. And you only truly know
                what you want, when you reflect every day!
            </P>

            <SocialShareBar shareUrl={breadCrumbBlogKevinRiedlStartReflectingOrDieFullOfRegrets.link} />
        </TextPageDraft>
    )
}

export default translate()(BlogPostStartReflectingOrDieFullOfRegrets)
