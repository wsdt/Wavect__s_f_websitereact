import { BreadcrumbRoute } from '../../../models/BreadcrumbRoute'

export interface IBreadcrumbHeaderProps {
    breadcrumbs: BreadcrumbRoute[] // chronological order needed!
    t: (key: string, ...args: any) => string
}
