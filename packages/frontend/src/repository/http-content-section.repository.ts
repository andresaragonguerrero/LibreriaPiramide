import type { ContentSection } from '@/types/content-section'
import type { ContentSectionRepository } from './content-section.repository'

const API_URL = `${import.meta.env.VITE_API_URL}/content-sections`

export class HttpContentSectionRepository implements ContentSectionRepository {
    async getSections(): Promise<ContentSection[]> {
        const response = await fetch(API_URL)

        if (!response.ok) {
            throw new Error(`Error al obtener secciones: ${response.status}`)
        }

        return response.json()
    }
}