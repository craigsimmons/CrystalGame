var diamondInt = 0; // variables to hold gemstone point values
var rubyInt = 0;
var emeraldInt = 0;
var sapphireInt = 0;

var displayNumberInt = 0; // Holds random number to display to player
var playerScoreInt = 0; // Holds player's accumulated score during game
var winInt = 0; // game wins counter
var lossInt = 0; // game loss counter

//-----------------------------------------------------

$("#start").on("click" , function () {
    startGame(); 
});

$("#reset").on("click" , function () {
    resetAll(); 
});

$("#again").on("click" , function () {
    playAgain(); 
});

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

//-----------------------------------------------------

function startGame () {  // starts a game, resets several  variables, prints player score =0
    diamondInt = 0;
    rubyInt = 0;
    emeraldInt = 0;
    sapphireInt = 0;
    displayNumberInt = 0;
    playerScoreInt = 0;
    generateNumValues();
    $("#playerscore").text("  " + playerScoreInt);
    $("#winloss").text("Select a Gem!");
    
}

function playAgain () {  
    diamondInt = 0;
    rubyInt = 0;
    emeraldInt = 0;
    sapphireInt = 0;
    displayNumberInt = 0;
    playerScoreInt = 0;
    generateNumValues();
    $("#playerscore").text("  " + playerScoreInt);
    $("#winloss").text("Select a Gem!");
}

function continueGame () { // runs during gem selection before a win/lose state occurs
    $("#winloss").text("Select Again!");
    $("#playerscore").text("  " + playerScoreInt); 
}

function winGame () {
    displayNumberInt = 0;
    winInt = winInt + 1;
    $("#playerscore").text("  " + playerScoreInt); 
    $("#playerwins").text("  " + winInt);
    $("#winloss").text("You Win!");
}


function loseGame () {
    displayNumberInt = 0;
    lossInt = lossInt + 1;
    $("#playerloss").text("  " + lossInt);
    $("#playerscore").text("  " + playerScoreInt); 
    $("#winloss").text("You Lose!");
}

function resetAll () {
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

// used Math.floor(Math.random() * (max# - min# + 1) + min# pattern to gennerate rand#s 
function generateNumValues() {
    diamondInt = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    rubyInt = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    sapphireInt = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    emeraldInt = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    displayNumberInt = (Math.floor(Math.random() * (120 - 19 + 1)) + 19);
    $("#displaynum").text("  " + displayNumberInt);
}

function clickRuby () {
    playerScoreInt = playerScoreInt + rubyInt;
    
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

function clickEmerald () {
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

function clickDiamond () {
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

function clickSapphire () {
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
/*
function clickEmerald () {
    playerScoreInt = playerScoreInt + emeraldInt;

    if (playerScoreInt === displayNumberInt) {
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Winner!");
        winInt = winInt + 1;
        $("#playerwin").text("  " + winInt);
        winGame();
        // return winValuesArr = [winInt, playerScoreInt, winGame()];
    }
    else if (playerScoreInt > displayNumberInt) {
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("You Lose!");
        lossInt = lossInt + 1;
        $("#playerloss").text("  " + lossInt);
        loseGame();
        // return lossValuesArr = [lossInt, playerScoreInt, loseGame()];
    }
    else {
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Select Again")
        continueGame();
        // return continueValues = [playerScoreInt, continueGame()];
        
    }
}

function clickDiamond () {
    playerScoreInt = playerScoreInt + diamondInt;

    if (playerScoreInt === displayNumberInt) {
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Winner!");
        winInt = winInt + 1;
        $("#playerwin").text("  " + winInt);
        winGame();
        // return winValuesArr = [winInt, playerScoreInt, winGame()]
    }
    else if (playerScoreInt > displayNumberInt) {
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("You Lose!");
        lossInt = lossInt + 1;
        $("#playerloss").text("  " + lossInt);
        loseGame();
        // return lossValuesArr = [lossInt, playerScoreInt, loseGame()];
    }
    else {
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Select Again")
        continueGame()
       // return continueValues = [playerScoreInt, continueGame()]
    }
}

function clickSapphire () {
    playerScoreInt = playerScoreInt + sapphireInt;

    if (playerScoreInt === displayNumberInt) {
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Winner!");
        winInt = winInt + 1;
        $("#playerwin").text("  " + winInt);
        winGame();
        // return winValuesArr = [winInt, playerScoreInt, winGame()]
    }
    else if (playerScoreInt > displayNumberInt) {
        console.log("Sapphire playerloses")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("You Lose!");
        lossInt = lossInt + 1;
        $("#playerloss").text("  " + lossInt);
        loseGame();
        // return lossValuesArr = [lossInt, playerScoreInt, loseGame()];
    }
    else {
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Select Again")
        continueGame()
       // return continueValues = [playerScoreInt, continueGame()]
    }
}
*/