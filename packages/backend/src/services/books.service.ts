import { JsonBookRepository } from '../repository/json-book.repository.js'
import type { BookRepository } from '../repository/book.repository.js'

export const bookService: BookRepository = new JsonBookRepository()