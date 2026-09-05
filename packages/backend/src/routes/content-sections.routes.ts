import { Router } from 'express'
import { getContentSections } from '../controllers/content-sections.controller.js'

const router = Router()

router.get('/', getContentSections)

export default router