import booksData from '@/data/books.json' with { type: 'json' }
import type { Book, BookFilters, SortOption } from '@/types/book.js'
import type { BookRepository } from './book.repository.js'

const sortStrategies: Record<SortOption, (a: Book, b: Book) => number> = {
  relevance: () => 0,
  title: (a, b) => a.title.localeCompare(b.title),
  author: (a, b) => (a.authors[0] || '').localeCompare(b.authors[0] || ''),
  year: (a, b) => (a.publishedYear || 0) - (b.publishedYear || 0),
}

const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}



export class JsonBookRepository implements BookRepository {
  private readonly books: Book[] = booksData as Book[]

  async searchBooks(filters: BookFilters = {}): Promise<Book[]> {
    const normalizedTitle = filters.title ? normalizeText(filters.title) : ''
    const normalizedAuthor = filters.author ? normalizeText(filters.author) : ''
    const normalizedSubject = filters.subject ? normalizeText(filters.subject) : ''

    const filtered = this.books.filter((book) => {
      const matchesTitle =
        !filters.title || normalizeText(book.title).includes(normalizedTitle)

      const matchesAuthor =
        !filters.author ||
        book.authors.some((author) => normalizeText(author).includes(normalizedAuthor))

      const matchesYear =
        !filters.year || book.publishedYear === filters.year

      const matchesSubject =
        !filters.subject ||
        book.subjects.some((subject) => normalizeText(subject).includes(normalizedSubject))

      const matchesGenre =
        !filters.genre ||
        normalizeText(book.genre) === normalizeText(filters.genre)

      return matchesTitle && matchesAuthor && matchesYear && matchesSubject && matchesGenre
    })

    const sortBy = filters.sortBy || 'relevance'
    const sortOrder = filters.sortOrder || 'asc'
    const sortFn = sortStrategies[sortBy]

    const result = [...filtered].sort((a, b) => {
      const res = sortFn(a, b)
      return sortOrder === 'desc' ? -res : res
    })

    return filters.limit ? result.slice(0, filters.limit) : result
  }

  async getSubjects(): Promise<string[]> {
    const subjects = [...new Set(this.books.flatMap((book) => book.subjects))].sort((a, b) =>
      a.localeCompare(b)
    )
    return subjects;
  }

  async getGenres(): Promise<string[]> {
    const genres = [...new Set(this.books.map((book) => book.genre))].sort((a, b) =>
      a.localeCompare(b)
    )
    return genres;
  }
}