import { JsonAuthorRepository } from '../repository/json-author.repository.js'
import type { AuthorRepository } from '../repository/author.repository.js'

export const authorService: AuthorRepository = new JsonAuthorRepository()