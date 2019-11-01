import React from 'react'
import imgWhyEnvironment1 from '../../../../../assets/img/why/carousel/why_environment_1.jpg'
import imgWhyEnvironment2 from '../../../../../assets/img/why/carousel/why_environment_2.jpg'
import imgWhyEnvironment3 from '../../../../../assets/img/why/carousel/why_environment_3.jpg'
import imgWhyHealth1 from '../../../../../assets/img/why/carousel/why_health_1.jpg'
import imgWhyHealth2 from '../../../../../assets/img/why/carousel/why_health_2.jpg'
import imgWhyHealth3 from '../../../../../assets/img/why/carousel/why_health_3.jpg'
import imgWhySocial1 from '../../../../../assets/img/why/carousel/why_social_1.jpg'
import imgWhySocial2 from '../../../../../assets/img/why/carousel/why_social_2.jpg'
import imgWhySocial3 from '../../../../../assets/img/why/carousel/why_social_3.jpg'
import _schema from '../../../../../controllers/system/multilinguality/_schema.json'
import {BasePageHeader} from '../BasePageHeader'

interface IWhyPageHeaderProps {
    t: (key: string, ...args: any) => string,
}

export const WhyPageHeader = (props: IWhyPageHeaderProps) => {
    const {t} = props
    const schema = _schema.pages.whyhow.slider

    return <BasePageHeader t={t} slides={[
        {
            title: schema.slide_0.title,
            subtitle: schema.slide_0.subtitle,
            bgImage: imgWhySocial1,
            bgImgAlt: schema.slide_0.bgImgAlt
        },
        {
            title: schema.slide_1.title,
            subtitle: schema.slide_1.subtitle,
            bgImage: imgWhyEnvironment1,
            bgImgAlt: schema.slide_1.bgImgAlt
        },
        {
            title: schema.slide_2.title,
            subtitle: schema.slide_2.subtitle,
            bgImage: imgWhyHealth1,
            bgImgAlt: schema.slide_2.bgImgAlt
        },
        {
            title: schema.slide_3.title,
            subtitle: schema.slide_3.subtitle,
            bgImage: imgWhySocial2,
            bgImgAlt: schema.slide_3.bgImgAlt
        },
        {
            title: schema.slide_4.title,
            subtitle: schema.slide_4.subtitle,
            bgImage: imgWhyEnvironment2,
            bgImgAlt: schema.slide_4.bgImgAlt
        },
        {
            title: schema.slide_5.title,
            subtitle: schema.slide_5.subtitle,
            bgImage: imgWhyHealth2,
            bgImgAlt: schema.slide_5.bgImgAlt
        },
        {
            title: schema.slide_6.title,
            subtitle: schema.slide_6.subtitle,
            bgImage: imgWhySocial3,
            bgImgAlt: schema.slide_6.bgImgAlt
        },
        {
            title: schema.slide_7.title,
            subtitle: schema.slide_7.subtitle,
            bgImage: imgWhyEnvironment3,
            bgImgAlt: schema.slide_7.bgImgAlt
        },
        {
            title: schema.slide_8.title,
            subtitle: schema.slide_8.subtitle,
            bgImage: imgWhyHealth3,
            bgImgAlt: schema.slide_8.bgImgAlt
        },
    ]}/>
}
