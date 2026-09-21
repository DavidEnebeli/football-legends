import express from 'express'
import playerData from '../data/players.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(playerData)
})

router.get('/:playerId', (req, res) => {
    const playerId = parseInt(req.params.playerId)
  
    const player = playerData.find((player) => {
      return player.id === playerId
    })
  
    if (!player) {
      return res.status(404).json({ message: 'Player not found' })
    }
  
    res.status(200).json(player)
  })

export default router