import React from 'react'
import imgB2B_0 from '../../../../../assets/img/b2b/carousel/imgB2B_0.jpg'
import imgB2B_1 from '../../../../../assets/img/b2b/carousel/imgB2B_1.jpg'
import imgB2B_2 from '../../../../../assets/img/b2b/carousel/imgB2B_2.jpg'
import imgB2B_3 from '../../../../../assets/img/b2b/carousel/imgB2B_3.jpg'
import imgB2B_4 from '../../../../../assets/img/b2b/carousel/imgB2B_4.jpg'
import imgB2B_5 from '../../../../../assets/img/b2b/carousel/imgB2B_5.jpg'
import imgB2B_6 from '../../../../../assets/img/b2b/carousel/imgB2B_6.jpg'
import imgB2B_7 from '../../../../../assets/img/b2b/carousel/imgB2B_7.jpg'
import imgB2B_8 from '../../../../../assets/img/b2b/carousel/imgB2B_8.jpg'

import _schema from '../../../../../controllers/system/multilinguality/_schema.json'
import { BasePageHeader } from '../BasePageHeader'

interface IB2BPageHeaderProps {
    t: (key: string, ...args: any) => string
}

export const B2BPageHeader = (props: IB2BPageHeaderProps) => {
    const schema = _schema.pages.b2b.slider

    return (
        <BasePageHeader
            t={props.t}
            slides={[
                {
                    title: schema.slide_0.title,
                    subtitle: schema.slide_0.subtitle,
                    bgImage: imgB2B_0,
                    bgImgAlt: schema.slide_0.bgImgAlt,
                },
                {
                    title: schema.slide_1.title,
                    subtitle: schema.slide_1.subtitle,
                    bgImage: imgB2B_1,
                    bgImgAlt: schema.slide_1.bgImgAlt,
                },
                {
                    title: schema.slide_2.title,
                    subtitle: schema.slide_2.subtitle,
                    bgImage: imgB2B_2,
                    bgImgAlt: schema.slide_2.bgImgAlt,
                },
                {
                    title: schema.slide_3.title,
                    subtitle: schema.slide_3.subtitle,
                    bgImage: imgB2B_3,
                    bgImgAlt: schema.slide_3.bgImgAlt,
                },
                {
                    title: schema.slide_4.title,
                    subtitle: schema.slide_4.subtitle,
                    bgImage: imgB2B_4,
                    bgImgAlt: schema.slide_4.bgImgAlt,
                },
                {
                    title: schema.slide_5.title,
                    subtitle: schema.slide_5.subtitle,
                    bgImage: imgB2B_5,
                    bgImgAlt: schema.slide_5.bgImgAlt,
                },
                {
                    title: schema.slide_6.title,
                    subtitle: schema.slide_6.subtitle,
                    bgImage: imgB2B_6,
                    bgImgAlt: schema.slide_6.bgImgAlt,
                },
                {
                    title: schema.slide_7.title,
                    subtitle: schema.slide_7.subtitle,
                    bgImage: imgB2B_7,
                    bgImgAlt: schema.slide_7.bgImgAlt,
                },
                {
                    title: schema.slide_8.title,
                    subtitle: schema.slide_8.subtitle,
                    bgImage: imgB2B_8,
                    bgImgAlt: schema.slide_8.bgImgAlt,
                },
            ]}
        />
    )
}
