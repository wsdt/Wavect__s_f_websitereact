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
    breadCrumbBlogKevinRiedlChangeYourThoughtsOnStress,
    breadCrumbBlogs,
    breadCrumbHome,
} from '../../breadcrumbs/breadcrumbs.constants'
import { BlogCategories } from '../BlogCategories'
import { BlockQuote } from '../blogs_components/text_components/BlockQuote'
import { H2 } from '../blogs_components/text_components/H2'
import { P } from '../blogs_components/text_components/P'
import { Li, Ul } from '../blogs_components/text_components/List'
import TextPageDraft from '../blogs_components/TextPageDraft'
import { RouteProps } from 'react-router'
import SocialShareBar from '../../SocialShareBar/SocialShareBar'
import {Helmet} from "react-helmet";

function BlogPostChangeThoughtsOnBurnoutStress(_: RouteProps) {
    return <>
        <Helmet>
            <title>{breadCrumbBlogKevinRiedlChangeYourThoughtsOnStress.title}</title>
            <meta name='description'
                  content='Do you feel overwhelmed, empty, stressed, demotivated or just depressed? If sometimes or yes, then this post is for YOU!'/>
            <meta name='keywords' content='wavect,blog,post,stress,motivation,depression,help'/>
        </Helmet>

        <TextPageDraft
            blogCategory={BlogCategories.PERSONAL_DEVELOPMENT}
            breadCrumbs={[breadCrumbHome, breadCrumbBlogs, breadCrumbBlogKevinRiedl, breadCrumbBlogKevinRiedlChangeYourThoughtsOnStress]}
        >
            <P>Do you feel overwhelmed, empty, stressed, demotivated or just depressed? If sometimes or yes, then this post is for YOU!</P>
            <H2>What is Stress?</H2>
            <BlockQuote
                quoteLink={'https://my.clevelandclinic.org/health/articles/11874-stress'}
                quoteSourceTitle="Stress"
                quoteLastViewedDate="09.10.2019"
                quoteSourceYear="2019"
                autor="Cleveland Clinic"
                quote="Stress is the body’s reaction to any change that requires an adjustment or response. The body reacts to these changes with physical, mental, and emotional responses. Stress is a normal part of life. You can experience stress from your environment, your body, and your thoughts. Even positive life changes such as a promotion, a mortgage, or the birth of a child produce stress."
            />

            <P>
                As above’s definition states, there are at least two kinds of stress: negative and positive stress. Everyone talks about the negative
                stress, but what about this “positive” stress? But before we get there, we have to clarify why our body experiences stress and why it
                is even vital.
            </P>
            <P>
                The answer is quite simple and considering that our body does not know that we are actually in quite save environments today. Imagine
                being a soldier during a war today. Stress mobilizes our body to survive. As this reaction moves all energy to e.g. our arms and legs,
                we can perform at higher levels and maybe survive the dangerous situation with a higher probability. At that specific moment, body
                functions like our immune system and similar are completely useless. In case we try to survive a gun battle, we simply don’t care
                about the bacteria and viruses in our body. If we die because of a bullet, the virus and bacteria dies with us. The same principle can
                be applied when doing any kind of sports as our body is supposed to deliver a great performance.
            </P>

            <H2>Negative/Positive stress is a myth</H2>
            <P>
                Stress is vital. Stress is a tool to achieve something (e.g. surviving). As every other tool (e.g. Smartphones, Knives, …) you can use
                it for the bad or good.
            </P>
            <P>
                But why am I stating that negative and positive stress is actually a myth? It’s all about context. There is no such thing as bad and
                good stress. Not the actual cause but the duration makes the difference. Don’t loose me here. This basically means that short periods
                of stress are not bad at all and in some situations even necessary.
            </P>

            <H2>Burnout</H2>
            <BlockQuote
                quoteLink="https://www.ncbi.nlm.nih.gov/books/NBK279286/"
                quoteSourceTitle="Depression: What is burnout?"
                quoteLastViewedDate="09.10.2019"
                quoteSourceYear="2012"
                quote="Experts have not yet agreed on how to define burnout. And strictly speaking, there is no such diagnosis as “burnout.” This is unlike having “depression” diagnosed, for example, which is a widely accepted and well-studied condition. That is not the case with burnout. Some experts think that other conditions are behind being “burned out” — such as depression or an anxiety disorder. Physical illnesses may also cause burnout-like symptoms. Being diagnosed with “burnout” too soon might then mean that the real problems aren’t identified and treated appropriately."
                autor="Institute for Quality and Efficiency in Health Care"
            />

            <P>
                As we can extract from the quote above, there seems to be no strict definition for a burnout. Nevertheless, possible symptoms of
                burnouts are Exhaustion, Alienation from (work-related) activities and reduced performance. Nevertheless, there is a general consensus
                that burnouts are caused by long-term stress (referring to the previous paragraphs here).
            </P>
            <P>
                We now know that stress is actually a good and important tool in our life’s. But like every other tool we have to use it wisely and in
                a controlled as well as thoughtful manner. As burnouts seem to be caused in majority by uncontrolled stress, we might conclude that
                controlled/portioned stress allows us to work and do as much tasks/things as we want.
            </P>

            <H2>Don't fight stress, control & use it wisely</H2>
            <P>
                And I say it again: Stress is not your foe, it’s a good old friend as long as you don’t have it 24/7 around you. Being stressed is
                purely a mindset thing. Thus, stress situations are actually caused by yourself and not outer circumstances.
            </P>
            <P>
                Just think about it for a moment. Stress starts in your head. You can be stressed and neutral or even relaxed in the same situation.
                Important is how you think about yourself, your circumstances and surroundings at that specific moment. Stress is caused when thinking
                about negative outcomes, which might be reasonable sometimes. And that’s the word we have been searching for: “reasonable”. It is
                reasonable to worry in case a lion chases you, but it’s completely non-sense to worry about comparable small things like not being on
                time. Sure, you should be punctual, accomplish your goals and do what you truly want, but you have to do it with the right attitude.
            </P>
            <P>
                Nevertheless, your mind is also strongly dependent on a healthy lifestyle (nutrition, sport, sleep, social-interaction, …). Therefore,
                you should also aim to improve on those aspects in your life, if you haven’t already.
            </P>
            <P>
                To not making it more complicated as it is, I’m just listing here a couple of things you could do to reduce your general stress level
                even in extremely though times:
            </P>
            <Ul>
                <Li>Note three things you are grateful for, every day.</Li>
                <Li>Do at least 5 Push-ups straight after getting up in the morning, every day.</Li>
                <Li>
                    Write your life-goals including the “Why” down and read them every day (e.g. “I want to talk at TED or a related event, because I
                    want to influence a lot of life’s.”).
                </Li>
                <Li>
                    Write statements down which mirror the mindset you want to acquire and read them every day (e.g. “I’m grateful and happy for every
                    day.”).
                </Li>
                <Li>Hug someone you love or a good friend every day.</Li>
                <Li>
                    Play a self-made audio file which consists of statements which mirror the mindset you want to have (e.g. “I’m not stressed or
                    nervous, I’m excited!”) during your sleep to influence your subconsciousness.
                </Li>
                <Li>Take a deep breath every time before you talk or feel slightly stressed.</Li>
                <Li>
                    Do what you love, enjoy the things you are doing and try to rather hold on positive than on negative memories as well as thoughts.
                </Li>
                <Li>Do something nice every day (e.g. Holding the door open for a stranger).</Li>
            </Ul>

            <SocialShareBar shareUrl={breadCrumbBlogKevinRiedlChangeYourThoughtsOnStress.link} />
        </TextPageDraft>
    </>
}

export default BlogPostChangeThoughtsOnBurnoutStress
