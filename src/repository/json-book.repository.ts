import booksData from '@/data/books.json'
import type { Book, BookFilters, SortOption } from '@/types/book'
import type { BookRepository } from './book.repository'

const sortStrategies: Record<SortOption, (a: Book, b: Book) => number> = {
  relevance: () => 0,
  title: (a, b) => a.title.localeCompare(b.title),
  author: (a, b) => (a.authors[0] || '').localeCompare(b.authors[0] || ''),
  year: (a, b) => (a.publishedYear || 0) - (b.publishedYear || 0),
}

export class JsonBookRepository implements BookRepository {
  private readonly books: Book[] = booksData as Book[]

  async searchBooks(filters: BookFilters = {}): Promise<Book[]> {
    const filtered = this.books.filter((book) => {
      const matchesTitle =
        !filters.title ||
        book.title.toLowerCase().includes(filters.title.toLowerCase())

      const matchesAuthor =
        !filters.author ||
        book.authors.some((author) =>
          author.toLowerCase().includes(filters.author!.toLowerCase())
        )

      const matchesYear =
        !filters.year || book.publishedYear === filters.year

      const matchesSubject =
        !filters.subject ||
        book.subjects.some((subject) =>
          subject.toLowerCase().includes(filters.subject!.toLowerCase())
        )

      const matchesGenre =
        !filters.genre ||
        book.genre.toLowerCase() === filters.genre.toLowerCase()

      return matchesTitle && matchesAuthor && matchesYear && matchesSubject && matchesGenre
    })

    const sortBy = filters.sortBy || 'relevance'
    const sortOrder = filters.sortOrder || 'asc'
    const sortFn = sortStrategies[sortBy]

    const result = [...filtered].sort((a, b) => {
      const res = sortFn(a, b)
      return sortOrder === 'desc' ? -res : res
    })

    return result;
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
    return Promise.resolve(genres)
  }
}