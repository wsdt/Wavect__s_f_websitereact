import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export interface IGrayColorButtonProps {
    icon: IconDefinition
    onClick: () => void
    outline: boolean
    title: string
    isLoading?: boolean
}
