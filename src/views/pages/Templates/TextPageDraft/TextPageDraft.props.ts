import {BreadcrumbRoute} from '../../../../models/BreadcrumbRoute'
import {BlogCategories} from '../../Blog/Authors/BlogCategories'

export interface ITextPageDraftProps {
    blogCategory?: BlogCategories
    breadCrumbs: BreadcrumbRoute[]
    children: any
    t: (key: string, ...args: any) => string
}