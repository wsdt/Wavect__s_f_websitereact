import React from 'react'
import Breadcrumb from 'reactstrap/lib/Breadcrumb'
import BreadcrumbItem from 'reactstrap/lib/BreadcrumbItem'
import { BreadcrumbConstants } from './breadcrumbs.constants'

export interface IBreadCrumbsProps {
    breadcrumbs: BreadcrumbConstants[] // chronological order needed!
}

function BreadCrumbs(props: IBreadCrumbsProps) {
    return (
        <Breadcrumb style={{ marginTop: 15 }}>
            {props.breadcrumbs.map((breadcrumb: BreadcrumbConstants, index: number) => {
                const shortenedTitle: string = breadcrumb.title.substring(0, 20) + (breadcrumb.title.length > 20 ? '...' : '')

                if (index === props.breadcrumbs.length - 1) {
                    // last iteration
                    return (
                        <BreadcrumbItem key={breadcrumb.link} active={true} style={{ fontWeight: 'bold' }} title={breadcrumb.title}>
                            {shortenedTitle}
                        </BreadcrumbItem>
                    )
                } else {
                    return (
                        <BreadcrumbItem tag="a" href={breadcrumb.link} key={breadcrumb.link} title={breadcrumb.title}>
                            {shortenedTitle}
                        </BreadcrumbItem>
                    )
                }
            })}
        </Breadcrumb>
    )
}

export default BreadCrumbs
