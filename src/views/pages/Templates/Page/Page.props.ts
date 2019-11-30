import { ReactNode } from 'react'
import { BreadcrumbRoute } from '../../../../models/BreadcrumbRoute'

export interface IPageProps {
    currBreadcrumb: BreadcrumbRoute
    children: ReactNode
    header: ReactNode
    t: (key: string, ...args: any) => string
}
