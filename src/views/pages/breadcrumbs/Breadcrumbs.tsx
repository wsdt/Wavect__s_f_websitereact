import React from 'react'
import { translate } from 'react-polyglot'
import Breadcrumb from 'reactstrap/lib/Breadcrumb'
import BreadcrumbItem from 'reactstrap/lib/BreadcrumbItem'
import { BreadcrumbConstants } from './breadcrumbs.constants'

export interface IBreadCrumbsProps {
    breadcrumbs: BreadcrumbConstants[] // chronological order needed!
    t: (key: string, ...args: any) => string
}

function BreadCrumbs(props: IBreadCrumbsProps) {
    const { t } = props

    return (
        <Breadcrumb style={{ marginTop: 15 }}>
            {props.breadcrumbs.map((breadcrumb: BreadcrumbConstants, index: number) => {
                const title = t(breadcrumb.title)
                const shortenedTitle: string = title.substring(0, 20) + (title.length > 20 ? '...' : '')

                if (index === props.breadcrumbs.length - 1) {
                    // last iteration
                    return (
                        <BreadcrumbItem key={breadcrumb.link} active={true} style={{ fontWeight: 'bold' }} title={title}>
                            {shortenedTitle}
                        </BreadcrumbItem>
                    )
                } else {
                    return (
                        <BreadcrumbItem tag="a" href={breadcrumb.link} key={breadcrumb.link} title={title}>
                            {shortenedTitle}
                        </BreadcrumbItem>
                    )
                }
            })}
        </Breadcrumb>
    )
}

export default translate()(BreadCrumbs)
