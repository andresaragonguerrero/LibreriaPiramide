import { JsonContentSectionRepository } from '@/repository/json-content-section.repository'
import { bookService } from '@/services/books.service'
import {
    pickRandomAuthorsSample,
    pickOneBookPerGenre,
    pickRandomBooks,
    pickTopYearsReleases
} from '@/strategies/content-section-strategies'

import type { ContentSection, ContentSectionType } from '@/types/content-section'
import type { Book } from '@/types/book'

const contentSectionRepository = new JsonContentSectionRepository()

const strategyByType: Record<ContentSectionType, (books: Book[], limit: number) => Book[]> = {
    authors: pickRandomAuthorsSample,
    genres: pickOneBookPerGenre,
    subjects: pickRandomBooks,
    'new-releases': (books, limit) => pickTopYearsReleases(books, limit)
}

export const contentSectionService = {
    async getSections(): Promise<ContentSection[]> {
        const [sections, allBooks] = await Promise.all([
            contentSectionRepository.getSections(),
            bookService.searchBooks({})
        ])

        return sections.map(section => ({
            ...section,
            books: strategyByType[section.type](allBooks, section.limit ?? allBooks.length)
        }))
    }
}