import sections from '@/data/content-sections.json'

import type { ContentSection } from '@/types/content-section'
import type { ContentSectionRepository } from './content-section.repository'

export class JsonContentSectionRepository implements ContentSectionRepository {
    async getSections(): Promise<ContentSection[]> {
        return sections.map(section => ({
            ...section,
            books: []
        })) as ContentSection[]
    }
}