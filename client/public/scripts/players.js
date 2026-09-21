const playersContainer = document.getElementById('players')

const getPlayers = async () => {
  try {
    const response = await fetch('/api/players')
    const players = await response.json()

    players.forEach((player) => {
      const card = document.createElement('article')
      card.className = 'player-card'

      card.innerHTML = `
        <img src="${player.image}" alt="${player.name}">
        <h3>${player.name}</h3>
        <p><strong>Nationality:</strong> ${player.nationality}</p>
        <p><strong>Position:</strong> ${player.position}</p>
        <p><strong>Era:</strong> ${player.era}</p>
        <a href="/players/${player.id}" role="button">
          View Legend
        </a>
      `

      playersContainer.appendChild(card)
    })
  } catch (error) {
    console.error('Error fetching players:', error)

    playersContainer.innerHTML = `
      <p>Unable to load football legends.</p>
    `
  }
}

getPlayers()