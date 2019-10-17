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
import {RouteProps} from 'react-router'
import {
    breadCrumbBlogKevinRiedl,
    breadCrumbBlogKevinRiedlSayingYesIsABigNoToOpportunities,
    breadCrumbBlogs,
    breadCrumbHome
} from '../../breadcrumbs/breadcrumbs.constants'
import { BlogCategories } from '../BlogCategories'
import { H2 } from '../blogs_components/text_components/H2'
import { P } from '../blogs_components/text_components/P'
import TextPageDraft from '../blogs_components/TextPageDraft'
import SocialShareBar from "../../SocialShareBar/SocialShareBar"

function BlogPostSayingYesIsABigNoToOpportunities(_: RouteProps) {
    return (
        <TextPageDraft blogCategory={BlogCategories.PERSONAL_DEVELOPMENT} breadCrumbs={[breadCrumbHome, breadCrumbBlogs, breadCrumbBlogKevinRiedl, breadCrumbBlogKevinRiedlSayingYesIsABigNoToOpportunities]}>
            <P>
                In today’s world there are a ton of opportunities out there. An app idea here, a job offer there or anything else which gets you
                closer to achieving your actual life-goals (if you have some, if not you should start to reflect on your life as it’s the source of
                fulfillment).
            </P>

            <H2>Time-Management is OUT</H2>
            <P>
                People always talk about time-management and how little time they have. Sure, our time is limited. But spending our time wisely will
                make you efficient enough to achieve everything you want. No matter if it’s spending time with your family, working on your career or
                a startup. But why is time-management obsolete? It’s easy: You waste a lot of time every day, every week in every month. And why do we
                waste time?
            </P>

            <H2>We are not robots!</H2>
            <P>
                Being a robot has a lot of advantages which might be the reason a lot of people try to act like one. But smart people rather work
                smart than hard. Working/Acting like robots just sets you up to loose as you can never be better in a robot’s job than an actual
                robot! What’s the solution, then?
            </P>

            <H2>Energy-Management</H2>
            <P>
                We have a constant value of time in our life, we just don’t know how much beforehand. Thus, we can only try to use that time as
                efficient as possible but in a century where computers can fulfill a lot of tasks better and cheaper than most people, we should not
                only try to mobilize as much hours as possible. In contrast to that we should rather focus on our actual strengths as living beings.
                Our creativity, intuition, ethics and emotions. Building those skills and giving your body as well as your mind enough time to process
                new information/skills. Thus, rather give yourself a break; meditate, do yoga, go to the gym or try to something new. All those things
                will help you to build those skills and make you even more experienced, emotionally intelligent, mature and even more efficient!
                Passion and fun will influence your efficiency more than every hour ever could.
            </P>

            <H2>A ‘yes’ is the ultimate ‘no’</H2>
            <P>
                Referencing to the last paragraphs, you only have a limited amount of energy in your life. Use it wisely and for something meaningful.
                Reflection on what you truly desire in your life might be a good starting point.
            </P>
            <P>
                The more skills and knowledge people have, the busier they are in general. That’s nothing bad, but often they are not doing what they
                actually wanted to do. People are attracted to opportunities of all kind which then leads most of the time to a “yes”. But, what
                people forget is that saying yes to an opportunity means that you say “no” to a ton of other opportunities which you don’t even know
                about. That being said, we should rather focus on our actual life-visions, our values and true desires. Every opportunity which
                doesn’t clearly support those goals should be rejected.
            </P>

            <SocialShareBar shareUrl={breadCrumbBlogKevinRiedlSayingYesIsABigNoToOpportunities.link}/>
        </TextPageDraft>
    )
}

export default BlogPostSayingYesIsABigNoToOpportunities
