import type { Book } from '@/types/book'

export type ContentSectionType =
    | 'authors'
    | 'genres'
    | 'subjects'
    | 'new-releases'

export interface ContentSection {
    id: string
    type: ContentSectionType
    title: string
    description: string
    viewMore: string
    limit?: number
    books: Book[]
}