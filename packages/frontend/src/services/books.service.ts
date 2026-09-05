import { HttpBookRepository } from '@/repository/http-book.repository'
import type { BookRepository } from '@/repository/book.repository'

export const bookService: BookRepository = new HttpBookRepository()