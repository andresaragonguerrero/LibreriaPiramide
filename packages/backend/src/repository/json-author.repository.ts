import authorsData from '../data/authors.json' with { type: 'json' }
import type { Author } from '../types/author.js'
import type { AuthorRepository } from './author.repository.js'

export class JsonAuthorRepository implements AuthorRepository {
    private readonly authors: Author[] = authorsData as Author[]

    async getAuthors(): Promise<Author[]> {
        return this.authors
    }
}