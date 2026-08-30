import type { Author } from '@/types/author'

export interface AuthorRepository {
    getAuthors(): Promise<Author[]>
}