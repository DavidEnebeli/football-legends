const playerDetails = document.getElementById('player-details')

const getPlayer = async () => {
  try {
    const pathParts = window.location.pathname.split('/')
    const playerId = pathParts[pathParts.length - 1]

    const response = await fetch(`/api/players/${playerId}`)

    if (!response.ok) {
      window.location.href = '/404'
      return
    }

    const player = await response.json()

    playerDetails.innerHTML = `
      <article class="player-detail">
        <img src="${player.image}" alt="${player.name}">

        <h2>${player.name}</h2>

        <p><strong>Nationality:</strong> ${player.nationality}</p>
        <p><strong>Position:</strong> ${player.position}</p>
        <p><strong>Era:</strong> ${player.era}</p>
        <p><strong>Description:</strong> ${player.description}</p>
        <p><strong>Achievements:</strong> ${player.achievements}</p>
      </article>
    `
  } catch (error) {
    console.error('Error fetching player:', error)
  }
}

getPlayer()