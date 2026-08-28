import { JsonContentSectionRepository } from '@/repository/json-content-section.repository'
import { bookService } from '@/services/books.service'

import type { ContentSection, ContentSectionType } from '@/types/content-section'
import type { BookFilters } from '@/types/book'

const contentSectionRepository = new JsonContentSectionRepository()

const filterKeyByType: Partial<Record<ContentSectionType, keyof BookFilters>> = {
    authors: 'author',
    genres: 'genre',
    subjects: 'subject'
}

export const contentSectionService = {
    async getSections(): Promise<ContentSection[]> {
        const sections = await contentSectionRepository.getSections()

        return Promise.all(
            sections.map(async section => {
                const filterKey = filterKeyByType[section.type]
                const dynamicFilter =
                    filterKey && section.filterValue
                        ? { [filterKey]: section.filterValue }
                        : {}

                const filters: BookFilters = {
                    sortBy: section.type === 'new-releases' ? 'year' : 'relevance',
                    sortOrder: section.type === 'new-releases' ? 'desc' : 'asc',
                    limit: section.limit,
                    ...dynamicFilter
                }

                return {
                    ...section,
                    books: await bookService.searchBooks(filters)
                }
            })
        )
    }
}