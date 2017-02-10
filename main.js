// ************************************
//               LINKS
// ************************************
document.querySelector("#infoButton").addEventListener("click", settingsMenu, false);
document.querySelector("#onePlayer").addEventListener("click", function() { changePlayerNum(1); }, false);
document.querySelector("#twoPlayer").addEventListener("click", function() { changePlayerNum(2); }, false);
document.querySelector("#threePlayer").addEventListener("click", function() { changePlayerNum(3); }, false);
document.querySelector("#fourPlayer").addEventListener("click", function() { changePlayerNum(4); }, false);

//document.querySelector("#squareButton").addEventListener("click", )

document.querySelector("#instructButton").addEventListener("click", instructionsMenu, false);
document.querySelector("#playButton").addEventListener("click", playHandler, false);
document.querySelector("#squareButton").addEventListener("click", spaceHandler, false);

//document.querySelector("#nextButton").addEventListener("click", nextHandler, false);
//document.querySelector("#inventoryButton").addEventListener("click", bagHandler, false);

var output = document.querySelector("#output");
var squareInput = document.querySelector("#squareInput");
var squareButton = document.querySelector("#squareButton");
var playGameOutputs = document.querySelector("#playGameOutputs");

var answerButton1 = document.querySelector("#answerButton1");
var answerButton2 = document.querySelector("#answerButton2");

var inventoryButton = document.querySelector("#inventoryButton");
var nextPlayerButton = document.querySelector("#nextPlayerButton");

// ************************************
//             VARIABLES
// ************************************
var instructionsDisplayed = false;
var playerButtonsDisplayed = false;
var numberOfPlayers = 2;
var activePlayer = 1;
var players = [];

/*
var events = [];
events[0] = "bear";
events[1] = "old man";
events[2] = "trip wire";
events[3] = "abandoned house";
events[4] = "radioactive human";
*/


var desert = new Biome("desert");
desert.randEvents = ["oasis", "tired"];
var volcano = new Biome("volcano");
volcano.randEvents = ["tunnel"];
var ocean = new Biome("ocean");
ocean.randEvents = ["sinking", "kraken"];
var forest = new Biome("forest");
forest.randEvents = ["tree"];
var plains = new Biome("plains");
plains.randEvents = ["grave", "campsite", "berries", "hole"];

// ************************************
//             FUNCTIONS
// ************************************

//    TITLE SCREEN
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


//     ACTUAL GAME

function playHandler() {
    for(var i = 1; i <= numberOfPlayers; i++) {
        players[i] = new Player(i);
    }
    document.querySelector("#menu").style.display = "none";
    document.querySelector("#gameScreen").style.display = "block";
    
    output.innerHTML = "Player 1";
    setTimeout(squareInputHandler, 1500);
}

function squareInputHandler() {
    output.innerHTML = "What square are you on?";
    squareInput.style.display = "block";
    squareButton.style.display = "block";
    document.querySelector("#squareInput").style.display = "block";
}

function spaceHandler() {
    squareInput.style.display = "none";
    squareButton.style.display = "none";
    var squareValue = squareInput.value;
    //if(squareValue.length <= 3 && squareValue.length >= 2) {
        switch(squareValue) {
            case "desert":
                desertEvent();
                break;
            case "volcano":
                volcanoEvent();
                break;
            case "ocean":
                oceanEvent();
                break;
            case "forest":
                forestEvent();
                break;
            case "plains":
                plainsEvent();
                break;
        }
    //}
    
}

function desertEvent() {
    var eventNum = randNum(0, desert.randEvents.length - 1);
    switch(desert.randEvents[eventNum]) {
        case "oasis":
            output.innerHTML = "What appears to be an oasis looms in the distance";
            answerButton1.innerHTML = "Approach It";
            answerButton1.style.display = "inline-block";
            answerButton1.addEventListener("click", approachOasis, false);
            answerButton2.innerHTML = "Ignore and keep going on your path";
            answerButton2.style.display = "inline-block";
            answerButton2.addEventListener("click", ignoreOasis, false);
            break;
        case "tired":
            
            break;
    }
}

function approachOasis() {
    answerButton1.style.display = "none";
    answerButton2.style.display = "none";
    answerButton1.removeEventListener("click", approachOasis, false);
    answerButton2.removeEventListener("click", ignoreOasis, false);
    var xNum = randNum(1, 100);
    if(xNum <= 30) {
        output.innerHTML = "You get water from the Oasis<br>+5 HP";
        players[activePlayer].health += 5;
        output.innerHTML += "<br> Current Health: " + players[activePlayer].health;
        
    } else {
        output.innerHTML = "It is a mirage and you are dehydrated from your efforts<br>-5 HP";
        players[activePlayer].health -= 5;
        output.innerHTML += "<br> Current Health: " + players[activePlayer].health;
    }
}
function ignoreOasis() {
    answerButton1.style.display = "none";
    answerButton2.style.display = "none";
    answerButton1.removeEventListener("click", approachOasis, false);
    answerButton2.removeEventListener("click", ignoreOasis, false);
    output.innerHTML = "You press on";
}

function volcanoEvent() {
    
}

function oceanEvent() {
    
}

function forestEvent() {
    
}

function plainsEvent() {
    
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

function Biome(zName) {
    this.name = zName;
    this.randEvents = [];
    this.squares = [];
}

//*****************************************
//                JQUERY
//*****************************************
/*
$("#inventoryButton").click(function(){
   $("#boxFullOfStuff").toggle();
});
*/
