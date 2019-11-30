import React from 'react'
import { translate } from 'react-polyglot'
import Breadcrumb from 'reactstrap/lib/Breadcrumb'
import BreadcrumbItem from 'reactstrap/lib/BreadcrumbItem'
import { BreadcrumbRoute } from '../../../models/BreadcrumbRoute'
import { IBreadcrumbHeaderProps } from './BreadcrumbHeader.props'

const BreadcrumbHeader = (props: IBreadcrumbHeaderProps) => {
    const { t } = props

    return (
        <Breadcrumb style={{ marginTop: 15 }}>
            {props.breadcrumbs.map((breadcrumb: BreadcrumbRoute, index: number) => {
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

export default translate()(BreadcrumbHeader)
