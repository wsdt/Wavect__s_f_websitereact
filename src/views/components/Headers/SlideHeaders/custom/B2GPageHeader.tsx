import React from 'react'
import imgB2G_0 from '../../../../../assets/img/b2g/carousel/imgB2G_0.jpg'
import imgB2G_1 from '../../../../../assets/img/b2g/carousel/imgB2G_1.jpg'
import imgB2G_2 from '../../../../../assets/img/b2g/carousel/imgB2G_2.jpg'
import imgB2G_3 from '../../../../../assets/img/b2g/carousel/imgB2G_3.jpg'
import imgB2G_4 from '../../../../../assets/img/b2g/carousel/imgB2G_4.jpg'
import imgB2G_5 from '../../../../../assets/img/b2g/carousel/imgB2G_5.jpg'
import imgB2G_6 from '../../../../../assets/img/b2g/carousel/imgB2G_6.jpg'
import imgB2G_7 from '../../../../../assets/img/b2g/carousel/imgB2G_7.jpg'
import imgB2G_8 from '../../../../../assets/img/b2g/carousel/imgB2G_8.jpg'
import imgB2G_9 from '../../../../../assets/img/b2g/carousel/imgB2G_9.jpg'
import _schema from '../../../../../controllers/system/multilinguality/_schema.json'
import {BasePageHeader} from '../BasePageHeader'

interface IB2GPageHeaderProps {
    t: (key: string, ...args: any) => string,
}

export const B2GPageHeader = (props: IB2GPageHeaderProps) => {
    const {t} = props
    const schema = _schema.pages.b2g.slider

    return <BasePageHeader t={t} slides={[
        {
            title: schema.slide_0.title,
            subtitle: schema.slide_0.subtitle,
            bgImage: imgB2G_0,
            bgImgAlt: schema.slide_0.bgImgAlt
        },
        {
            title: schema.slide_1.title,
            subtitle: schema.slide_1.subtitle,
            bgImage: imgB2G_1,
            bgImgAlt: schema.slide_1.bgImgAlt
        },
        {
            title: schema.slide_2.title,
            subtitle: schema.slide_2.subtitle,
            bgImage: imgB2G_2,
            bgImgAlt: schema.slide_2.bgImgAlt
        },
        {
            title: schema.slide_3.title,
            subtitle: schema.slide_3.subtitle,
            bgImage: imgB2G_3,
            bgImgAlt: schema.slide_3.bgImgAlt
        },
        {
            title: schema.slide_4.title,
            subtitle: schema.slide_4.subtitle,
            bgImage: imgB2G_4,
            bgImgAlt: schema.slide_4.bgImgAlt
        },
        {
            title: schema.slide_5.title,
            subtitle: schema.slide_5.subtitle,
            bgImage: imgB2G_5,
            bgImgAlt: schema.slide_5.bgImgAlt
        },
        {
            title: schema.slide_6.title,
            subtitle: schema.slide_6.subtitle,
            bgImage: imgB2G_6,
            bgImgAlt: schema.slide_6.bgImgAlt
        },
        {
            title: schema.slide_7.title,
            subtitle: schema.slide_7.subtitle,
            bgImage: imgB2G_7,
            bgImgAlt: schema.slide_7.bgImgAlt
        },
        {
            title: schema.slide_8.title,
            subtitle: schema.slide_8.subtitle,
            bgImage: imgB2G_8,
            bgImgAlt: schema.slide_8.bgImgAlt
        },
        {
            title: schema.slide_9.title,
            subtitle: schema.slide_9.subtitle,
            bgImage: imgB2G_9,
            bgImgAlt: schema.slide_9.bgImgAlt
        },
    ]}/>
}
