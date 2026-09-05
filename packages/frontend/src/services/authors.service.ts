import { HttpAuthorRepository } from '@/repository/http-author.repository'
import type { AuthorRepository } from '@/repository/author.repository'

export const authorService: AuthorRepository = new HttpAuthorRepository()