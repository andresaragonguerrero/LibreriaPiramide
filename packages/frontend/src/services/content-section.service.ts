import { JsonContentSectionRepository } from '@/repository/json-content-section.repository'
import { bookService } from '@/services/books.service'
import { authorService } from '@/services/authors.service'
import {
    pickOneBookPerGenre,
    pickRandomAuthors,
    pickRandomBooks,
    pickTopYearsReleases
} from '@/strategies/content-section-strategies'

import type { ContentSection, ContentSectionType } from '@/types/content-section'
import type { Book } from '@/types/book'

const contentSectionRepository = new JsonContentSectionRepository()

const bookStrategyByType: Partial<Record<ContentSectionType, (books: Book[], limit: number) => Book[]>> = {
    genres: pickOneBookPerGenre,
    subjects: pickRandomBooks,
    'new-releases': (books, limit) => pickTopYearsReleases(books, limit)
}

export const contentSectionService = {
    async getSections(): Promise<ContentSection[]> {
        const [sections, allBooks, allAuthors] = await Promise.all([
            contentSectionRepository.getSections(),
            bookService.searchBooks({}),
            authorService.getAuthors()
        ])

        return sections.map(section => {
            if (section.type === 'authors') {
                return {
                    ...section,
                    items: pickRandomAuthors(allAuthors, section.limit ?? allAuthors.length)
                }
            }

            return {
                ...section,
                items: bookStrategyByType[section.type]!(allBooks, section.limit ?? allBooks.length)
            }
        })
    }
}