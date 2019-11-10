import {QuoteFact} from '../../../models/QuoteFact'

export interface IFactsProps {
    t: (key: string, ...args: any) => string
    title: string
    factsRows: QuoteFact[][]
}