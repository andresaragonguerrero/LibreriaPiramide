import type { Request, Response } from 'express'
import { bookService } from '../services/books.service.js'
import type { BookFilters, SortOption, SortOrder } from '../types/book.js'

const validSortOptions: Set<SortOption> = new Set(['relevance', 'title', 'author', 'year'])
const validSortOrders: Set<SortOrder> = new Set(['asc', 'desc'])

function parseFilters(query: Request['query']): BookFilters {
    const filters: BookFilters = {}

    if (typeof query.title === 'string') filters.title = query.title
    if (typeof query.author === 'string') filters.author = query.author
    if (typeof query.subject === 'string') filters.subject = query.subject
    if (typeof query.genre === 'string') filters.genre = query.genre

    if (typeof query.year === 'string' && !Number.isNaN(Number(query.year))) {
        filters.year = Number(query.year)
    }

    if (typeof query.limit === 'string' && !Number.isNaN(Number(query.limit))) {
        filters.limit = Number(query.limit)
    }

    if (typeof query.sortBy === 'string' && validSortOptions.has(query.sortBy as SortOption)) {
        filters.sortBy = query.sortBy as SortOption
    }

    if (typeof query.sortOrder === 'string' && validSortOrders.has(query.sortOrder as SortOrder)) {
        filters.sortOrder = query.sortOrder as SortOrder
    }

    return filters
}

export async function getBooks(req: Request, res: Response) {
    const filters = parseFilters(req.query)
    const books = await bookService.searchBooks(filters)
    res.json(books)
}

export async function getSubjects(_req: Request, res: Response) {
    const subjects = await bookService.getSubjects()
    res.json(subjects)
}

export async function getGenres(_req: Request, res: Response) {
    const genres = await bookService.getGenres()
    res.json(genres)
}