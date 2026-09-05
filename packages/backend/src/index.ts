import express from 'express'
import booksRouter from './routes/books.routes.js'

const app = express()
const PORT = 3000

app.disable('x-powered-by')

app.use('/api/books', booksRouter)

app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' })
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})