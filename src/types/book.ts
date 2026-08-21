export interface Book {
    id: string
    title: string
    authors: string[]
    publishedYear?: number
    subjects: string[]
    coverUrl?: string
}

export interface BookFilters {
    title?: string
    author?: string
    year?: number
    subject?: string
}