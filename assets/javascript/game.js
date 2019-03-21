var diamondInt = 0; // variables to hold gemstone point values
var rubyInt = 0;
var emeraldInt = 0;
var sapphireInt = 0;
var displayNumberInt = 0; // Holds random number to display to player
var playerScoreInt = 0; // Holds player's accumulated score during game
var winInt = 0; // game wins counter
var lossInt = 0; // game loss counter
var winValuesArr =[]; //array for returning multiple objects
var lossValuesArr =[]; //array for returning multiple objects
var continueValuesArr =[];//array for returning multiple objects

$("#start").on("click" , function () {
    startGame(); 
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
/*
function updateWins (winInt) {
    $("#playerwins").text("  " + winInt);
    return winInt;
}

function updateLoss (lossInt) {
    $("#playerloss").text("  " + lossInt);
    return lossInt;
}
*/
function startGame () {
    console.log("startGame");
    diamondInt = 0;
    rubyInt = 0;
    emeraldInt = 0;
    sapphireInt = 0;
    displayNumberInt = 0;
    playerScoreInt = 0;
    winInt = 0;
    lossInt = 0;
    winValuesArr = [];
    lossValuesArr = [];
    continueValuesArr = [];
    generateNumValues();
    $("#playerscore").text("  " + playerScoreInt);
    $("#winloss").text("Select a Gem!");

}

function continueGame () {
    console.log("continueGame");
    console.log("Wins: " + winInt);
    console.log("Loss: " + lossInt);
    $("#winloss").text("Select Again!");
  
}
function winGame () {
    console.log("winGame");
    diamondInt = 0;
    rubyInt = 0;
    emeraldInt = 0;
    sapphireInt = 0;
    displayNumberInt = 0;
    playerScoreInt = 0;
    // updateWin
    //$("#playerwins").text("  " + winInt);
    $("#winloss").text("You Win!");
    
}


function loseGame () {
    console.log("loseGame");
    diamondInt = 0;
    rubyInt = 0;
    emeraldInt = 0;
    sapphireInt = 0;
    displayNumberInt = 0;
    playerScoreInt = 0;
    // updateLoss ();
    // $("#playerloss").text("  " + lossInt);
    $("#winloss").text("You Lose!");
}

// used Math.floor(Math.random() * (max# - min# + 1) + min# pattern to gennerate rand#s)
function generateNumValues() {
    console.log("generateNumValues")
    diamondInt = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    rubyInt = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    sapphireInt = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    emeraldInt = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    displayNumberInt = (Math.floor(Math.random() * (120 - 19 + 1)) + 19);
    playerScoreInt = 0;
    $("#playerscore").text("  " + playerScoreInt); 
    $("#displaynum").text(" " + displayNumberInt);
    console.log("diamond: " + diamondInt);
    console.log("rubyNum: " + rubyInt);
    console.log("sapphireNum: " + sapphireInt);
    console.log("emeraldNum: " + emeraldInt);
    console.log("Display Number: " + displayNumberInt);
}

function clickRuby () {
    console.log("clickRuby")
    playerScoreInt += rubyInt;
   console.log("ruby player score: " + playerScoreInt);

    if (playerScoreInt === displayNumberInt) {
        console.log("Ruby playerwins")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Winner!");
        winInt = winInt + 1;
        $("#playerwins").text("  " + winInt);
        console.log("Ruby " + winInt + " " + playerScoreInt);
        return winValuesArr = [winInt, playerScoreInt, winGame()];
    }
    else if (playerScoreInt > displayNumberInt) {
        console.log("Ruby playerloses")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("You Lose!");
        lossInt = lossInt + 1;
        $("#playerloss").text("  " + lossInt);
        console.log("Ruby " + lossInt + " " + playerScoreInt);
        return lossValuesArr = [lossInt, playerScoreInt, loseGame()];
    }
    else {
        console.log("Ruby keepgoing")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Select Again")
        console.log("Ruby (continue)" + playerScoreInt);
        return continueValuesArr = [playerScoreInt, continueGame()];
    }
}

function clickEmerald () {
    console.log("clickEmerald")
    playerScoreInt += emeraldInt;
    console.log("emerald player score: " + playerScoreInt);

    if (playerScoreInt === displayNumberInt) {
        console.log("Emerald playerwins")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Winner!");
        winInt = winInt + 1;
        $("#playerwin").text("  " + winInt);
        console.log("Emerald " + winInt + " " + playerScoreInt);
        return winValuesArr = [winInt, playerScoreInt, winGame()]
    }
    else if (playerScoreInt > displayNumberInt) {
        console.log("Emerald playerloses")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("You Lose!");
        lossInt = lossInt + 1;
        $("#playerloss").text("  " + lossInt);
        console.log("Emerald " + lossInt + " " + playerScoreInt);
        return lossValuesArr = [lossInt, playerScoreInt, loseGame()]
    }
    else {
        console.log("Emerald keepgoing")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Select Again")
        console.log("Emerald (continue)" + playerScoreInt);
        return continueValues = [playerScoreInt, continueGame()]
    }
}

function clickDiamond () {
    console.log("clickDiamond")
    playerScoreInt += diamondInt;
    console.log("Diamond player score: " + playerScoreInt);

    if (playerScoreInt === displayNumberInt) {
        console.log("Diamond playerwins")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Winner!");
        winInt = winInt + 1;
        $("#playerwin").text("  " + winInt);
        console.log("Diamond " + winInt + " " + playerScoreInt);
        return winValuesArr = [winInt, playerScoreInt, winGame()]
    }
    else if (playerScoreInt > displayNumberInt) {
        console.log("Diamond playerloses")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("You Lose!");
        lossInt = lossInt + 1;
        $("#playerloss").text("  " + lossInt);
        console.log("Diamond " + lossInt + " " + playerScoreInt);
        return lossValuesArr = [lossInt, playerScoreInt, loseGame()]
    }
    else {
        console.log("Diamond keepgoing")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Select Again")
        console.log("Diamond (continue) " + playerScoreInt);
        return continueValues = [playerScoreInt, continueGame()]
    }
}

function clickSapphire () {
    console.log("clickSapphire")
    playerScoreInt += sapphireInt;
    console.log("Saphire player score: " + playerScoreInt);

    if (playerScoreInt === displayNumberInt) {
        console.log("Sapphire playerwins")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Winner!");
        winInt = winInt + 1;
        $("#playerwin").text("  " + winInt);
        console.log("Sapphire " + winInt + " " + playerScoreInt);
        return winValuesArr = [winInt, playerScoreInt, winGame()]
    }
    else if (playerScoreInt > displayNumberInt) {
        console.log("Sapphire playerloses")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("You Lose!");
        lossInt = lossInt + 1;
        $("#playerloss").text("  " + lossInt);
        console.log("Sapphire " + lossInt + " " + playerScoreInt);
        return lossValuesArr = [lossInt, playerScoreInt, loseGame()]
    }
    else {
        console.log("Sapphire keepgoing")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Select Again")
        console.log("Sapphire continue" + playerScoreInt);
        return continueValues = [playerScoreInt, continueGame()]
    }
}
/*
function resetFields () {
console.log("updateFields");
$("#displaynum").text(" " + displayNumberInt);
$("#sapphirenum").text(" " + sapphireInt);
$("#rubynum").text(" " + rubyInt);
$("#diamondnum").text(" " + diamondInt);
$("#emeraldnum").text(" " + emeraldInt);
$("#playerscore").text(" " + playerScoreInt);
$("#playerwins").text(" " + winInt);
$("#playerloss").text(" " + lossInt);
}

<!-- for testing purposes
<div class="row"> 
<div class="col-md-12">
<br>
<p>Target #: <span id="displaynum">Undefined</span></p>
<p>Sapphire # : <span id="sapphirenum">Undefined</span></p>
<p>Ruby # : <span id="rubynum">Undefined</span></p>
<p>Diamond # : <span id="diamondnum">Undefined</span></p>
<p>Emerald # : <span id="emeraldnum">Undefined</span></p>
<p>Player Score: <span id="playerscore">Undefined</span></p>
<p>Player Wins: <span id="playerwins">Undefined</span></p>
<p>Player Losses: <span id="playerloss">Undefined</span></p>
</div>
</div>
*/
