import {BreadcrumbRoute} from '../../../models/BreadcrumbRoute'
import {BlogCategories} from '../blogs/BlogCategories'

export interface ITextPageDraftProps {
    blogCategory?: BlogCategories
    breadCrumbs: BreadcrumbRoute[]
    children: any
    t: (key: string, ...args: any) => string
}