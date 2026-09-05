import type { Book, BookFilters } from '../types/book.js'

export interface BookRepository {
    searchBooks(filters?: BookFilters): Promise<Book[]>
    getSubjects(): Promise<string[]>
    getGenres(): Promise<string[]>
}