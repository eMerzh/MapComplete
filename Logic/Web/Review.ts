import { Store } from "../UIEventSource"

export interface Review {
    comment?: string
    author: string
    date: Date
    rating: number
    affiliated: boolean
    /**
     * True if the current logged in user is the creator of this comment
     */
    made_by_user: Store<boolean>
}
