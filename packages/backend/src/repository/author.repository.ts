import type { Author } from '../types/author.js'

export interface AuthorRepository {
    getAuthors(): Promise<Author[]>
}