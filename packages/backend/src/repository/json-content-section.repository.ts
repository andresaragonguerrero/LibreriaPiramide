import sections from '../data/content-sections.json' with { type: 'json' }
import type { ContentSection, ContentSectionType } from '../types/content-section.js'
import type { ContentSectionRepository } from '../repository/content-section.repository.js'

export class JsonContentSectionRepository implements ContentSectionRepository {
    async getSections(): Promise<ContentSection[]> {
        return sections.map(section => ({
            ...section,
            type: section.type as ContentSectionType,
            items: []
        })) as ContentSection[]
    }
}