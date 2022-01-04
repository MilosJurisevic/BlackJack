function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let firstCard = getRndInteger(1, 14)
let secondCard = getRndInteger(1, 14)


let sum = firstCard + secondCard
let hasBlacJack = false
let isAlive = true
let message = ""

let messageStart = document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el')

// jeddan nacin:
let sumEl = document.getElementById('sum-el')

//drugi nacin:
//let sumEl = document.querySelector('#sum-el')

function startGame() {
    cardsEl.textContent = "Cards " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20) {
        message = "Do you want a new card"
    } else if(sum === 21) {
        message = "Black jack"
        hasBlacJack = true
    } else {
        message = "You lose!"
        isAlive = false
    }
    
    messageStart.textContent = message
    
}


function newCard() {
    let thirdCard = 9 
    sum += thirdCard

    startGame()

    console.log("Drawing a new card")
}


