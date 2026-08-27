import { JsonContentSectionRepository } from '@/repository/json-content-section.repository'
import { bookService } from '@/services/books.service'

import type { ContentSection } from '@/types/content-section'

const contentSectionRepository = new JsonContentSectionRepository()

export const contentSectionService = {
    async getSections(): Promise<ContentSection[]> {
        const sections = await contentSectionRepository.getSections()

        return Promise.all(
            sections.map(async section => ({
                ...section,
                books: await bookService.searchBooks({
                    sortBy: section.type === 'new-releases' ? 'year' : 'relevance',
                    sortOrder: section.type === 'new-releases' ? 'desc' : 'asc'
                })
            }))
        )
    }
}