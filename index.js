let homeScore = 0;
let guestScore = 0;

let homeScoreDisplay = document.getElementById("home-score-display")
let guestScoreDisplay = document.getElementById("guest-score-display")

homeScoreDisplay.textContent = homeScore
guestScoreDisplay.textContent = guestScore

function addHome1() {
 homeScore += 1
 homeScoreDisplay.textContent = homeScore   
}

function addHome2() {
 homeScore += 2
 homeScoreDisplay.textContent = homeScore   
}

function addHome3() {
 homeScore += 3
 homeScoreDisplay.textContent = homeScore   
}

function addGuest1() {
 guestScore += 1
 guestScoreDisplay.textContent = guestScore   
}

function addGuest2() {
 guestScore += 2
 guestScoreDisplay.textContent = guestScore   
}


function addGuest3() {
 guestScore += 3
 guestScoreDisplay.textContent = guestScore   
}

