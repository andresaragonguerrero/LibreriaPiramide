import type { Request, Response } from 'express'
import { authorService } from '../services/authors.service.js'

export async function getAuthors(_req: Request, res: Response) {
    const authors = await authorService.getAuthors()
    res.json(authors)
}