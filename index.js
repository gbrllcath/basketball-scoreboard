// change homescore-el and guestscore-el content 
// add function homeAdd1-3, guestAdd1-3
// add function newgame-El to add history score log and reset scoreboard to 0\
// add function history-list to log out games

let homescoreEl = document.getElementById("homescore-el")
let guestscoreEl = document.getElementById("guestscore-el")

let homescore = 0
let guestscore = 0

function homeAdd1 () {
    console.log("home +1 point")
    homescore += 1
    homescoreEl.textContent = homescore 
}

function homeAdd2() {
    console.log("home +2 points")
    homescore += 2
    homescoreEl.textContent = homescore
}

function homeAdd3() {
    console.log("home +3 points")
    homescore += 3
    homescoreEl.textContent = homescore
}

function guestAdd1 () {
    console.log("guest +1 point")
    guestscore += 1
    guestscoreEl.textContent = guestscore 
}

function guestAdd2() {
    console.log("guest +2 points")
    guestscore += 2
    guestscoreEl.textContent = guestscore
}

function guestAdd3() {
    console.log("guest +3 points")
    guestscore+= 3
    guestscoreEl.textContent = guestscore
}


let historylistEl = document.getElementById("history-list")
let historyText = ""

function newGame () {
    historyText = "<tr><td>" + homescore + "</td><td>-</td><td>" + guestscore + "</td></tr>" + historyText
    
    historylistEl.innerHTML = historyText
    
    homescore = 0
    guestscore = 0
    homescoreEl.textContent = 0
    guestscoreEl.textContent = 0
    
}


