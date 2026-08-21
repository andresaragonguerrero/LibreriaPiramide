import booksData from '@/data/books.json'
import type { Book, BookFilters } from '@/types/book'

const books: Book[] = booksData

export const searchBooks = (filters: BookFilters = {}): Book[] => {
    return books.filter((book) => {
        const matchesTitle =
            !filters.title ||
            book.title.toLowerCase().includes(filters.title.toLowerCase())

        const matchesAuthor =
            !filters.author ||
            book.authors.some((author) =>
                author.toLowerCase().includes(filters.author!.toLowerCase()),
            )

        const matchesYear =
            !filters.year || book.publishedYear === filters.year

        const matchesSubject =
            !filters.subject ||
            book.subjects.some((subject) =>
                subject.toLowerCase().includes(filters.subject!.toLowerCase()),
            )

        const matchesGenre =
            !filters.genre ||
            book.genre.toLowerCase() === filters.genre.toLowerCase()

        return (
            matchesTitle &&
            matchesAuthor &&
            matchesYear &&
            matchesSubject &&
            matchesGenre
        )
    })
}

export const getSubjects = (): string[] => {
    return [...new Set(books.flatMap((book) => book.subjects))].sort((a, b) =>
        a.localeCompare(b),
    )
}

export const getGenres = (): string[] => {
    return [...new Set(books.map((book) => book.genre))].sort((a, b) =>
        a.localeCompare(b),
    )
}