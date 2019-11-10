import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import {ReactNode} from 'react'

export interface ICollapseIconTextProps {
    icon: IconDefinition
    title: string
    descr: string | ReactNode
}