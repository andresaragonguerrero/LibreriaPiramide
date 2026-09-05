import { HttpContentSectionRepository } from '@/repository/http-content-section.repository'
import type { ContentSectionRepository } from '@/repository/content-section.repository'

export const contentSectionService: ContentSectionRepository = new HttpContentSectionRepository()