import express from 'express'
import booksRouter from './routes/books.routes.js'
import authorsRouter from './routes/authors.routes.js'

const app = express()
const PORT = 3000

app.disable('x-powered-by')

app.use('/api/books', booksRouter)
app.use('/api/authors', authorsRouter)

app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' })
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})