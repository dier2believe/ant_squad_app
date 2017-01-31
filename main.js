var settingsButton = document.querySelector("#infoButton");
settingsButton.addEventListener("click", settingsMenu, false);
var onePlayerButton = document.querySelector("#onePlayer");
onePlayerButton.addEventListener("click", function() { changePlayerNum(1); }, false);
var twoPlayerButton = document.querySelector("#twoPlayer");
twoPlayerButton.addEventListener("click", function() { changePlayerNum(2); }, false);
var threePlayerButton = document.querySelector("#threePlayer");
threePlayerButton.addEventListener("click", function() { changePlayerNum(3); }, false);
var fourPlayerButton = document.querySelector("#fourPlayer");
fourPlayerButton.addEventListener("click", function() { changePlayerNum(4); }, false);


var playButton = document.querySelector("#playButton");
playButton.addEventListener("click", playHandler, false);


// ************************************
//             VARIABLES
// ************************************
var playerButtonsDisplayed = false;
var numberOfPlayers = 2;
var players = [];



// ************************************
//             FUNCTIONS
// ************************************
function settingsMenu() {
    if(playerButtonsDisplayed === false) {
        document.querySelector("#playerButtons").style.display = "block";
        playerButtonsDisplayed = true;
    } else if(playerButtonsDisplayed === true) {
        document.querySelector("#playerButtons").style.display = "none";
        playerButtonsDisplayed = false;
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
    //window.location(index_2.html);
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


//*****************************************
//                JQUERY
//*****************************************
/*$(document).ready(function(
 $(".playerButtons").animate  ));
*/
