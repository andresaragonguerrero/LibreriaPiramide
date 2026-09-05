import { Router } from 'express'
import { getBooks, getSubjects, getGenres } from '../controllers/books.controller.js'

const router = Router()

router.get('/', getBooks)
router.get('/subjects', getSubjects)
router.get('/genres', getGenres)

export default router