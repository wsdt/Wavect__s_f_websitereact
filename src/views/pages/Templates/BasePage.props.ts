import {RouteProps} from 'react-router'

export interface IBasePageProps {
    routeProps: RouteProps
    t: (key: string, ...args: any) => string
}