import { POST_ROLES } from "../model/Post"

export enum ORDER {
    ASC= 'asc',
    DESC = 'desc'
 }

export type typePostSortedByType = {
    type: string, 
    sort: string,
    order: string
}