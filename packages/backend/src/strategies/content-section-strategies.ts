import type { Book } from '../types/book.js'
import { shuffle } from '../utils/random.js'
import type { Author } from '../types/author.js'

export function pickRandomBooks(books: Book[], limit: number): Book[] {
    return shuffle(books).slice(0, limit)
}

export function pickRandomAuthorsSample(books: Book[], limit: number): Book[] {
    const authors = [...new Set(books.flatMap(book => book.authors))]
    const randomAuthors = shuffle(authors).slice(0, limit)

    return randomAuthors
        .map(author => books.find(book => book.authors.includes(author)))
        .filter((book): book is Book => Boolean(book))
}

export function pickOneBookPerGenre(books: Book[], limit: number): Book[] {
    const genres = [...new Set(books.map(book => book.genre))]

    return genres
        .map(genre => books.find(book => book.genre === genre))
        .filter((book): book is Book => Boolean(book))
        .slice(0, limit)
}

export function pickTopYearsReleases(books: Book[], limit: number, yearsCount = 2): Book[] {
    const topYears = new Set(
        [...new Set(books.map(book => book.publishedYear).filter((year): year is number => Boolean(year)))]
            .sort((a, b) => b - a)
            .slice(0, yearsCount)
    )

    return books
        .filter(book => book.publishedYear && topYears.has(book.publishedYear))
        .slice(0, limit)
}

export function pickRandomAuthors(authors: Author[], limit: number): Author[] {
    return shuffle(authors).slice(0, limit)
}