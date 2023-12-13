let homePointsSave = document.getElementById("home-points");
let guestPointsSave = document.getElementById("guest-points");

let homePoints = 0;
let guestpoints = 0;

function homeAdd1Point() {
    homePoints += 1;
    homePointsSave.textContent = homePoints;
}

function homeAdd2Point() {
    homePoints += 2;
    homePointsSave.textContent = homePoints;
}

function homeAdd3Point() {
    homePoints += 3;
    homePointsSave.textContent = homePoints;
}

function guestAdd1Point() {
    guestpoints += 1;
    guestPointsSave.textContent = guestpoints;
}

function guestAdd2Point() {
    guestpoints += 2;
    guestPointsSave.textContent = guestpoints;
}

function guestAdd3Point() {
    guestpoints += 3;
    guestPointsSave.textContent = guestpoints;
}

let homeFouls = document.getElementById("fouls-home");
let guestFouls = document.getElementById("fouls-guest");

let foulsHome = 0;
let foulsGuest = 0;

function addFoulsHome() {
    foulsHome += 1;
    homeFouls.textContent = foulsHome;
}

function addFoulsGuest() {
    foulsGuest += 1;
    guestFouls.textContent = foulsGuest;
}

function reset() {
    homePoints = 0;
    guestpoints = 0;
    foulsHome = 0;
    foulsGuest = 0;
    homePointsSave.textContent = homePoints;
    guestPointsSave.textContent = guestpoints;
    homeFouls.textContent = foulsHome;
    guestFouls.textContent = foulsGuest;
}