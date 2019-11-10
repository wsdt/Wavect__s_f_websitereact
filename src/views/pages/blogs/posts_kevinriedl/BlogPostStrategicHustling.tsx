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
import { RouteProps } from 'react-router'
import {
    breadCrumbBlogKevinRiedl,
    breadCrumbBlogKevinRiedlStrategicHustling,
    breadCrumbBlogs,
    breadCrumbHome,
} from '../../../../controllers/system/routers/BreadcrumbRoutes'
import {SocialShareBar} from '../../../functional/SocialShareBar/SocialShareBar'
import { BlogCategories } from '../BlogCategories'
import { H2 } from '../../../functional/TextComponents/H2/H2'
import { P } from '../../../functional/TextComponents/P/P'
import TextPageDraft from '../../TextPageDraft/TextPageDraft'
import { Helmet } from 'react-helmet'

function BlogPostStrategicHustling(_: RouteProps) {
    return (
        <>
            <Helmet>
                <title>Strategic Hustling</title>
                <meta
                    name="description"
                    content="Read this, if you want to have better grades, be more successful in your job or just be more independent and happy in everything you
                do."
                />
                <meta name="keywords" content="wavect,blog,post,strategy,hustle,job,success,happiness,energy" />
            </Helmet>

            <TextPageDraft
                blogCategory={BlogCategories.PERSONAL_DEVELOPMENT}
                breadCrumbs={[breadCrumbHome, breadCrumbBlogs, breadCrumbBlogKevinRiedl, breadCrumbBlogKevinRiedlStrategicHustling]}
            >
                <P>
                    Read this, if you want to have better grades, be more successful in your job or just be more independent and happy in everything
                    you do.
                </P>

                <H2>What’s the difference between successful and unsuccessful people?</H2>
                <P>
                    Why are some people successful while others just don’t get that piece of cake they desperately want? The calculation is simple and
                    may not surprise you:
                </P>
                <P>
                    <span style={{ fontWeight: 'bold' }}>SUCCESS = TALENT * EFFORT</span>
                </P>
                <P>
                    Thus, it’s not just about talent nor effort. If you have a lot of talent and put 0 effort in it, then you just can’t be
                    successful. The same applies if you put an incredible amount of effort in everything you do, but you don’t got talent in that
                    specific field. You cannot change your given talents, but you can put more effort in whatever you want to do. You can study, try
                    something new, reflect and hustle, you just need to put in the work.
                </P>

                <H2>What is Success?</H2>
                <P>
                    People always think success means that you accumulated a lot of money, but that’s only a small part of the story. Success in life
                    basically means that you are happy and fulfilled. This might indicate for some people that you have enough money to do what you
                    want, but not necessarily. Success is a really vague term and it means something different for everyone. Some might be incredibly
                    happy working as programmer in an office, with 3 kids and a lovely wife/husband. Others might be fulfilled by travelling the world
                    and being an Influencer. The key-take-away here is, earning a lot of money doesn’t mean that you are successful, it means that you
                    earn a lot of money.
                </P>

                <H2>How to attract Success?</H2>
                <P>
                    As mentioned before, being successful means that you need to put a lot of effort in something and should put effort in things
                    which suite your talents. But success is actually not (only) acquired, you attract it. But how? With your attitude! Being
                    successful does not mean that you are happy or fulfilled, it just means that you have what you (think that you) wanted. On the
                    other hand being fulfilled and happy automatically means that you are successful. Considering this, you should work on yourself to
                    start being happy & fulfilled to truly becoming successful.
                </P>

                <H2>Make an effort strategically</H2>
                <P>
                    Because you are doing a lot more, does not mean that you get a lot more things done! Don’t just work 12 hours a day, be a
                    strategist. You are not a machine, you are a human. Don’t only work hard, work smart.
                </P>
                <P>
                    Don’t get me wrong, searching for ways to save time and to get more things done in a short period is important when you have
                    ambitious goals. But as emphasized before, you are not a machine. Trying to achieve more long-term does mean sometimes, to do
                    something seemingly unproductive (e.g. meditating, watching a movie, going out with friends).
                </P>
                <P>
                    Stress, exhaustion or strain is the productivity and happiness killer #1. You can spare time by e.g. working during train
                    journeys, but sometimes it’s more productive to just enjoy the ride or talk with strangers during your trip as your mind and body
                    can recover. Considering this you might be more relaxed afterwards and could hustle more efficiently as you would have been able
                    before. It’s important to find a midway between procrastination and extreme hustling. Don’t forget, you want to be happy and
                    fulfilled, not just successful financially!
                </P>

                <SocialShareBar shareUrl={breadCrumbBlogKevinRiedlStrategicHustling.link} />
            </TextPageDraft>
        </>
    )
}

export default BlogPostStrategicHustling
