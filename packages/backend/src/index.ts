import express from 'express'
import cors from 'cors'
import booksRouter from './routes/books.routes.js'
import authorsRouter from './routes/authors.routes.js'
import contentSectionsRouter from './routes/content-sections.routes.js'

const app = express()
const PORT = 3000

app.disable('x-powered-by')
app.use(cors())
// app.use(cors({ origin: '' }))

app.use('/api/books', booksRouter)
app.use('/api/authors', authorsRouter)
app.use('/api/content-sections', contentSectionsRouter)

app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' })
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})