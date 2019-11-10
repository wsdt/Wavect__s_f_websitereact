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
import { Helmet } from 'react-helmet'
import { RouteProps } from 'react-router'
import {
    breadCrumbBlogKevinRiedl,
    breadCrumbBlogKevinRiedlHappinessNeqFulfillment,
    breadCrumbBlogs,
    breadCrumbHome,
} from '../../../../controllers/system/routers/BreadcrumbRoutes'
import {SocialShareBar} from '../../../functional/SocialShareBar/SocialShareBar'
import { BlogCategories } from '../BlogCategories'
import { H2 } from '../../../functional/TextComponents/H2/H2'
import { P } from '../../../functional/TextComponents/P/P'
import TextPageDraft from '../../TextPageDraft/TextPageDraft'

function BlogPostHappinessNeqFullfillment(_: RouteProps) {
    document.documentElement.classList.remove('nav-open')
    React.useEffect(() => {
        document.body.classList.add('landing-page')
        return function cleanup() {
            document.body.classList.remove('landing-page')
        }
    })
    return (
        <>
            <Helmet>
                <title>Happiness != Fulfillment: Who are you really?</title>
                <meta
                    name="description"
                    content="If you pursue happiness, you will always loose. Choose fulfillment and try to live a meaningful life."
                />
                <meta name="keywords" content="wavect,blog,post,happiness,fulfillment,life,pursue,change,lifestyle" />
            </Helmet>

            <TextPageDraft
                blogCategory={BlogCategories.PERSONAL_DEVELOPMENT}
                breadCrumbs={[breadCrumbHome, breadCrumbBlogs, breadCrumbBlogKevinRiedl, breadCrumbBlogKevinRiedlHappinessNeqFulfillment]}
            >
                <H2>Why does this post matter?</H2>
                <P>
                    Do you know who you are? Sounds like a silly question and the answer might be redundant, but are you actually sure you know the
                    answer? I’m not talking about how you identify yourself (sexually, hobbies, jobs, family, friends or other interests), I’m
                    referring to your actual personality. Sure, your personality partially consists of those aspects and play an important part in
                    your life, but you should never refer to those things when you describe yourself.
                </P>
                <P>
                    Characteristics allow other people to categorize you, which might be enough for them, but not for you. They don’t need to know
                    where you want to go, how you want to live and with whom you want to share your journey. You need to know. Which leads me again to
                    the question: Who are you?
                </P>

                <H2>What do most people regret?</H2>
                <P>
                    Several surveys/interviews have shown that most retirees regret that they didn’t live a life true to themselves. And it’s actually
                    true and comprehensible as most people don’t reflect enough on their life’s to do what they really want to do. You don’t have to
                    do what your parents, friends or your partner wants for you. Most people just want to help you, but their recommendations are in
                    majority misleading as they don’t reflect what you truly enjoy and with what you really want to spend your limited time with. Life
                    is short, but limitless. If you want to be rich, live in Hawaii or just found a successful company, then align your goals and just
                    do it.
                </P>

                <H2>What is happiness?</H2>
                <P>
                    I don’t agree with the saying “Money doesn’t make you happy.”. It does! But for that we have to define what’s happiness, which is
                    quite easy. Happiness is short-term. Being happy means that you feel good at that specific moment, at that time. Not later, not
                    tomorrow, but right now and maybe for several hours. Happiness has explicit causes. E.g. being on vacation, becoming a
                    father/mother or getting a promotion. Thus, even money can make you happy. You become happier by buying nice cars, travelling the
                    world and basically just living the moment. But why are there so many unhappy, rich people? Again: Happiness is short-term.
                </P>

                <H2>What about Fulfillment?</H2>
                <P>
                    As mentioned before, being happy refers always to specific causes and you mood could flip every second which actually happens on
                    an everyday basis no matter how much money and how great your life is. Happy as well as unhappy people might not be fulfilled, but
                    fulfilled people are always happy. Being fulfilled is long-term. Fulfillment does not come from money, success, friends, family,
                    travelling or whatever interests you have. Being fulfilled means that you found meaning in life, that you are grateful and enjoy
                    every moment no matter how shitty it might be. Being fulfilled is one of the most difficult things in life and is basically a
                    life-long journey as there is always room for improvement and progress.
                </P>
                <P>
                    One thing you could do today: Write three things down for what you are grateful for and ask yourself -> “Would I do what I do,
                    when nobody is watching, I’m dying within a year or money would not be relevant?”
                </P>

                <SocialShareBar shareUrl={breadCrumbBlogKevinRiedlHappinessNeqFulfillment.link} />
            </TextPageDraft>
        </>
    )
}

export default BlogPostHappinessNeqFullfillment
