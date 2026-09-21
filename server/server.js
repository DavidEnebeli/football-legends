import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import playersRouter from './routes/players.js'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, '../client')))
app.use('/scripts', express.static(path.join(__dirname, '../client/public/scripts')))

app.use('/api/players', playersRouter)

app.get('/players/:playerId', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/player.html'))
  })

  app.get('/404', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../client/404.html'))
  })

  app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../client/404.html'))
  })

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})

