import type { Request, Response } from 'express'
import { contentSectionService } from '../services/content-sections.service.js'

export async function getContentSections(_req: Request, res: Response) {
    const sections = await contentSectionService.getSections()
    res.json(sections)
}