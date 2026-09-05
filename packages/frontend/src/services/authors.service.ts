import { JsonAuthorRepository } from '@/repository/json-author.repository'
import type { AuthorRepository } from '@/repository/author.repository'

export const authorService: AuthorRepository = new JsonAuthorRepository()