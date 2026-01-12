const footballTeam = {
    team: "Bengals",
    year: 1964,
    headCoach: "Zac Taylor",
    players: [
      {
        name: "Joe Burrow",
        position: "forward",
        isCaptain: true
      },
      {
        name: "Ja'marr Chase",
        position: "midfielder",
        isCaptain: false
      },
      {
        name: "Tee Higgins",
        position: "midfielder",
        isCaptain: false
      },
      {
        name: "Chase Brown",
        position: "defender",
        isCaptain: false
      },
      {
        name: "Trey Hendrickson",
        position: "goalkeeper",
        isCaptain: false
      },
      {
        name: "Andrei Iosivas",
        position: "defender",
        isCaptain: false
      }
    ]
  }

const team = document.querySelector("#team");
const year = document.querySelector("#year");
const headCoach = document.querySelector("#head-coach")
team.textContent = footballTeam.team;
year.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;

const playerCards = document.querySelector("#player-cards");

const appendCards = (player) => {
  if (player.isCaptain) {
    playerCards.innerHTML += 
    `<div class="player-card">
    <h2>(Captain) ${player.name}</h2>
    <p>Position: ${player.position}</p>
    </div>`
  }else playerCards.innerHTML += 
    `<div class="player-card">
    <h2>${player.name}</h2>
    <p>Position: ${player.position}</p>
    </div>`
}


const playerFilter = document.querySelector("#players")

const filterCards = (filter) => {
  let filteredCard = footballTeam.players.filter((player) => {
    return player.position === filter
  })

  if (playerFilter.value === "all") {
    return footballTeam.players.forEach((player) => appendCards(player))
  }else {
    return filteredCard.forEach((player) => appendCards(player))
  }
  
}


filterCards()

playerFilter.addEventListener("change", () => {
  playerCards.innerHTML = ``
  filterCards(playerFilter.value)
  
}
  
)

