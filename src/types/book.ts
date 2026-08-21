export type SortOption = 'relevance' | 'title' | 'author' | 'year'

export interface Book {
    id: string
    title: string
    authors: string[]
    publishedYear?: number
    subjects: string[]
    genre: string
    coverUrl?: string
}

export interface BookFilters {
    title?: string
    author?: string
    year?: number
    subject?: string
    genre?: string
    sortBy?: SortOption
}