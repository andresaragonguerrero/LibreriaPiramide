import authorsData from '@/data/authors.json'
import type { Author } from '@/types/author'
import type { AuthorRepository } from './author.repository'

export class JsonAuthorRepository implements AuthorRepository {
    private readonly authors: Author[] = authorsData as Author[]

    async getAuthors(): Promise<Author[]> {
        return this.authors
    }
}