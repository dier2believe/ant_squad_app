// ************************************
//               LINKS
// ************************************
document.querySelector("#infoButton").addEventListener("click", settingsMenu, false);
document.querySelector("#onePlayer").addEventListener("click", function() { changePlayerNum(1); }, false);
document.querySelector("#twoPlayer").addEventListener("click", function() { changePlayerNum(2); }, false);
document.querySelector("#threePlayer").addEventListener("click", function() { changePlayerNum(3); }, false);
document.querySelector("#fourPlayer").addEventListener("click", function() { changePlayerNum(4); }, false);

document.querySelector("#instructButton").addEventListener("click", instructionsMenu, false);

document.querySelector("#playButton").addEventListener("click", playHandler, false);


// ************************************
//             VARIABLES
// ************************************
var instructionsDisplayed = false;
var playerButtonsDisplayed = false;
var numberOfPlayers = 2;
var players = [];

var events = [];
events[0] = "bear";
events[1] = "old man";
events[2] = "trip wire";
events[3] = "abandoned house";
events[4] = "radioactive human";


// ************************************
//             FUNCTIONS
// ************************************
function settingsMenu() {
    if(playerButtonsDisplayed === false) {
        document.querySelector("#playerButtons").style.display = "block";
        document.querySelector("#instructions").style.display = "none";
        instructionsDisplayed = false;
        playerButtonsDisplayed = true;
    } else if(playerButtonsDisplayed === true) {
        document.querySelector("#playerButtons").style.display = "none";
        playerButtonsDisplayed = false;
    }
}

function instructionsMenu() {
    if(instructionsDisplayed === false) {
        document.querySelector("#instructions").style.display = "block";
        document.querySelector("#playerButtons").style.display = "none";
        playerButtonsDisplayed = false;
        instructionsDisplayed = true;
    } else if(instructionsDisplayed === true) {
        document.querySelector("#instructions").style.display = "none";
        instructionsDisplayed = false;
    }
}

function changePlayerNum(zPlayerNum) {
    numberOfPlayers = zPlayerNum;
    playerButtonsDisplayed = true;
    settingsMenu();
}

function playHandler() {
    for(var i = 1; i <= numberOfPlayers; i++) {
        players[i] = new Player(i);
    }
    document.querySelector("#menu").style.display = "none";
    document.querySelector("#gameScreen").style.display = "block";
    
    var rNum = randNum(0, events.length - 1);
    switch(events[rNum]) {
        case "bear":
            
            break;
        
        case "old man":
            
            break;
        
        case "trip wire":
            
            break;
        
        case "abandoned house":
            
            break;
        
        case "radioactive human":
            
            break;
    }
}


function randNum(zMin, zMax) {
    return Math.floor(Math.random() * ( zMax - zMin + 1) + zMin);
}

// ************************************
//              OBJECTS
// ************************************
function Player(zNum) {
    this.num = zNum;
    this.health = 100;
    this.inventory = [];
    this.alive = true;
}
