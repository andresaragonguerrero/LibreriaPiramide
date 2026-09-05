import { JsonBookRepository } from '@/repository/json-book.repository'
import type { BookRepository } from '@/repository/book.repository'

export const bookService: BookRepository = new JsonBookRepository()