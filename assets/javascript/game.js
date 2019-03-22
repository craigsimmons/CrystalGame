var diamondInt = 0; // variables to hold gemstone point values
var rubyInt = 0;
var emeraldInt = 0;
var sapphireInt = 0;

var displayNumberInt = 0; // Holds random number to display to player
var playerScoreInt = 0; // Holds player's accumulated score during game
var winInt = 0; // game wins counter
var lossInt = 0; // game loss counter

/*-------- jQuery on.click function for 3 buttons at top of game ------------ */

$("#start").on("click" , function () {
    startGame(); 
});

$("#reset").on("click" , function () {
    resetAll(); 
});

$("#again").on("click" , function () {
    playAgain(); 
});

/*-------- jQuery on.click function for each gem ------------ */

$("#ruby").on("click" , function () {
    clickRuby();
});

$("#emerald").on("click" , function () {
    clickEmerald();
});

$("#diamond").on("click" , function () {
    clickDiamond();
});

$("#sapphire").on("click" , function () {
    clickSapphire();
});

/*-------- Functions begin below ------------ */

function startGame () {  // starts a game, resets gem value  variables, prints player score =0, generate random#'s
    diamondInt = 0;      // linked to "Start" button. Does NOT reset wins/ losses, although this is easy to enable.
    rubyInt = 0;       
    emeraldInt = 0;
    sapphireInt = 0;
    displayNumberInt = 0;
    playerScoreInt = 0;
    generateNumValues();
    $("#playerscore").text("  " + playerScoreInt);
    $("#winloss").text("Select a Gem!");
    
}

function playAgain () {  // starts a game, resets several  variables, prints player score =0
    diamondInt = 0;   // linked to "Play Again" button
    rubyInt = 0;
    emeraldInt = 0;
    sapphireInt = 0;
    displayNumberInt = 0;
    playerScoreInt = 0;
    generateNumValues();
    $("#playerscore").text("  " + playerScoreInt);
    $("#winloss").text("Play Again...");
}

function continueGame () { // runs during gem selection BEFORE a win/lose state occurs. Nothing reset
    $("#winloss").text("Select a Gem!");  // called automagically, not tied to a button
    $("#playerscore").text("  " + playerScoreInt); 
}

function winGame () { // called if player wins. increments winInt counter and updates screen
    displayNumberInt = 0;
    winInt = winInt + 1;
    $("#playerscore").text("  " + playerScoreInt); 
    $("#playerwins").text("  " + winInt);
    $("#winloss").text("You Win!");
    // playAgain (); if we want game to queue up a new game automatically after a win/loss, add this line and remove button in HTML
}


function loseGame () { // called if player loses a round. increments lossInt counter and updates screen
    displayNumberInt = 0;
    lossInt = lossInt + 1;
    $("#playerloss").text("  " + lossInt);
    $("#playerscore").text("  " + playerScoreInt); 
    $("#winloss").text("You Lose!");
    // playAgain (); if we want game to queue up a new game automatically after a win/loss, add this line and remove button in HTML
}

function resetAll () {  // self -explanatory: resets all vars and updates display fields.  Triggered by Reset button
    var diamondInt = 0; 
    var rubyInt = 0;
    var emeraldInt = 0;
    var sapphireInt = 0;
    var displayNumberInt = 0;
    var playerScoreInt = 0; 
    var winInt = 0; 
    var lossInt = 0; 
    $("#playerloss").text("  " + lossInt);
    $("#playerwins").text("  " + winInt);
    $("#playerscore").text("  " + playerScoreInt);
    $("#displaynum").text("  " + displayNumberInt);
    $("#winloss").text("Click Start to Begin!");
}
// Generates random numbers and displayNumber that player must match to win
// used Math.floor(Math.random() * (max# - min# + 1) + min# pattern to gennerate rand#s 
function generateNumValues() {
    diamondInt = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    rubyInt = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    sapphireInt = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    emeraldInt = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    displayNumberInt = (Math.floor(Math.random() * (120 - 19 + 1)) + 19);
    $("#displaynum").text("  " + displayNumberInt);
}

function clickRuby () {  // called when ruby img is clicked. 
    playerScoreInt = playerScoreInt + rubyInt;
    
    if (playerScoreInt === displayNumberInt) { // if game # = player score: Win!
        winGame();
    }
    else if (playerScoreInt > displayNumberInt) { // if player score > game Number: Lose!
        loseGame();
    }
    else {   // if player score is < game #: Continue with round.
        continueGame();
    }
}

function clickEmerald () {  // See comments for clickRuby
    playerScoreInt = playerScoreInt + emeraldInt;
    
    if (playerScoreInt === displayNumberInt) {
        winGame();
    }
    else if (playerScoreInt > displayNumberInt) {
        loseGame();
    }
    else {
        continueGame();
    }
}

function clickDiamond () {  // See comments for clickRuby
    playerScoreInt = playerScoreInt + diamondInt;
    
    if (playerScoreInt === displayNumberInt) {
        winGame();
    }
    else if (playerScoreInt > displayNumberInt) {
        loseGame();
    }
    else {
        continueGame();
    }
}

function clickSapphire () {  // See comments for clickRuby
    playerScoreInt = playerScoreInt + sapphireInt;
    
    if (playerScoreInt === displayNumberInt) {
        winGame();
    }
    else if (playerScoreInt > displayNumberInt) {
        loseGame();
    }
    else {
        continueGame();
    }
}