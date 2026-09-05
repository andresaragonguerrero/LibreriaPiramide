import type { Author } from '@/types/author'
import type { AuthorRepository } from './author.repository'

const API_URL = 'http://localhost:3000/api/authors'

export class HttpAuthorRepository implements AuthorRepository {
    async getAuthors(): Promise<Author[]> {
        const response = await fetch(API_URL)

        if (!response.ok) {
            throw new Error(`Error al obtener autores: ${response.status}`)
        }

        return response.json()
    }
}