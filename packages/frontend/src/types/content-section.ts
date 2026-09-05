import type { Book } from './book'
import type { Author } from './author'

export type ContentSectionType = 'authors' | 'genres' | 'subjects' | 'new-releases'

interface BaseContentSection {
    id: string
    title: string
    description: string
    viewMore: string
    limit?: number
}

export interface BookContentSection extends BaseContentSection {
    type: Exclude<ContentSectionType, 'authors'>
    items: Book[]
}

export interface AuthorContentSection extends BaseContentSection {
    type: 'authors'
    items: Author[]
}

export type ContentSection = BookContentSection | AuthorContentSection