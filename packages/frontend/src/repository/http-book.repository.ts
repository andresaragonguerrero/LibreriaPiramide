import type { Book, BookFilters } from '@/types/book'
import type { BookRepository } from './book.repository'

const API_URL = `${import.meta.env.VITE_API_URL}/books`

export class HttpBookRepository implements BookRepository {
    async searchBooks(filters: BookFilters = {}): Promise<Book[]> {
        const params = new URLSearchParams()

        if (filters.title) params.set('title', filters.title)
        if (filters.author) params.set('author', filters.author)
        if (filters.subject) params.set('subject', filters.subject)
        if (filters.genre) params.set('genre', filters.genre)
        if (filters.year) params.set('year', String(filters.year))
        if (filters.limit) params.set('limit', String(filters.limit))
        if (filters.sortBy) params.set('sortBy', filters.sortBy)
        if (filters.sortOrder) params.set('sortOrder', filters.sortOrder)

        const response = await fetch(`${API_URL}?${params.toString()}`)

        if (!response.ok) {
            throw new Error(`Error al buscar libros: ${response.status}`)
        }

        return response.json()
    }

    async getSubjects(): Promise<string[]> {
        const response = await fetch(`${API_URL}/subjects`)

        if (!response.ok) {
            throw new Error(`Error al obtener temáticas: ${response.status}`)
        }

        return response.json()
    }

    async getGenres(): Promise<string[]> {
        const response = await fetch(`${API_URL}/genres`)

        if (!response.ok) {
            throw new Error(`Error al obtener géneros: ${response.status}`)
        }

        return response.json()
    }
}