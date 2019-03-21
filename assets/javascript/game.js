// variables to hold gemstone point values
var diamondInt = 0;
var rubyInt = 0;
var emeraldInt = 0;
var sapphireInt = 0;
var numValuesArr = []; // used for testing
// Holds random number to display to player
var displayNumberInt = 0;
// Holds player's accumulated score during game
var playerScoreInt = 0;
var runningScoreInt = 0;
var winInt = 0;
var lossInt = 0;
var winValuesArr =[];
var lossValuesArr =[];
var continueValuesArr =[];

$("#start").on("click" , function () {
    startGame(); //
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

function startGame () {
    console.log("startGame");
    generateNumValues();
}

function continueGame () {
    console.log("continueGame");
    console.log("Wins: " + winInt);
    console.log("Loss: " + lossInt);
    $("#playerwins").text("  " + winInt);
    $("#playerloss").text("  " + lossInt);
}

function endGame () {
    console.log("endGame");
    diamondInt = 0;
    rubyInt = 0;
    emeraldInt = 0;
    sapphireInt = 0;
    numValuesArr = [];
    displayNumberInt = 0;
    playerScoreInt = 0;
    runningScoreInt = 0;
    winInt = 0;
    lossInt = 0;
    winValuesArr =[];
    lossValuesArr =[];
    continueValuesArr =[];
    $("#winloss").text("Goodbye!");
}

// used Math.floor(Math.random() * (max# - min# + 1) + min# pattern to gennerate rand#s)
function generateNumValues() {
    console.log("generateNumValues")
    diamondInt = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    rubyInt = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    sapphireInt = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    emeraldInt = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    displayNumberInt = (Math.floor(Math.random() * (120 - 19 + 1)) + 19);
    numValuesArr = [rubyInt, emeraldInt, diamondInt, sapphireInt];
    $("#sapphirenum").text("  " + sapphireInt);
    $("#rubynum").text("  " + rubyInt);
    $("#diamondnum").text("  " + diamondInt);
    $("#emeraldnum").text("  " + emeraldInt);
    $("#displaynum").text("  " + displayNumberInt);
    console.log("diamond: " + diamondInt);
    console.log("rubyNum: " + rubyInt);
    console.log("sapphireNum: " + sapphireInt);
    console.log("emeraldNum: " + emeraldInt);
    console.log("Display Number: " + displayNumberInt);
    console.log(numValuesArr);
}

function updateFields () {
    console.log("updateFields");
    $("#displaynum").text("  " + displayNumberInt);
    $("#sapphirenum").text("  " + sapphireInt);
    $("#rubynum").text("  " + rubyInt);
    $("#diamondnum").text("  " + diamondInt);
    $("#emeraldnum").text("  " + emeraldInt);
    $("#playerscore").text("  " + playerScoreInt);
    $("#playerwins").text("  " + winInt);
    $("#playerloss").text("  " + lossInt);
}

function clickRuby () {
    console.log("clickRuby")
    $("this").attr("class", "rounded-circle");
    playerScoreInt += rubyInt;
    // $("#playerscore").text("  " + playerScoreInt);

    if (playerScoreInt === displayNumberInt) {
        console.log("Ruby playerwins")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Winner!");
        winInt += winInt;
        $("#playerwins").text("  " + winInt);
        console.log("Ruby " + winInt + playerScoreInt);
        return winValuesArr = [winInt, playerScoreInt, endGame()]
    }
    else if (playerScoreInt > displayNumberInt) {
        console.log("Ruby playerloses")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("You Lose!");
        lossInt += lossInt;
        $("#playerloss").text("  " + lossInt);
        console.log("Ruby " + lossInt + playerScoreInt);
        return lossValuesArr = [lossInt, playerScoreInt, endGame()]
    }
    else {
        console.log("Ruby keepgoing")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Select Again")
        console.log("Ruby " + playerScoreInt);
        return continueValuesArr = [playerScoreInt, continueGame()]
    }
}

function clickEmerald () {
    console.log("clickEmerald")
    $("this").attr("class", "rounded-circle");
    playerScoreInt += emeraldInt;
   // $("#playerscore").text("  " + playerScoreInt);

    if (playerScoreInt === displayNumberInt) {
        console.log("Emerald playerwins")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Winner!");
        winInt += winInt;
        $("#playerwin").text("  " + winInt);
        console.log("Emerald " + winInt + playerScoreInt);
        return winValuesArr = [winInt, playerScoreInt, endGame()]
    }
    else if (playerScoreInt > displayNumberInt) {
        console.log("Emerald playerloses")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("You Lose!");
        lossInt += lossInt;
        $("#playerloss").text("  " + lossInt);
        console.log("Emerald " + lossInt + playerScoreInt);
        return lossValuesArr = [lossInt, playerScoreInt, endGame()]
    }
    else {
        console.log("Emerald keepgoing")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Select Again")

        console.log("Emerald " + playerScoreInt);
        return continueValues = [playerScoreInt, continueGame()]
    }
}

function clickDiamond () {
    console.log("clickDiamond")
    $("this").attr("class", "rounded-circle");
    playerScoreInt += diamondInt;
    // $("#playerscore").text("  " + playerScoreInt);

    if (playerScoreInt === displayNumberInt) {
        console.log("Diamond playerwins")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Winner!");
        winInt += winInt;
        $("#playerwin").text("  " + winInt);
        console.log("Diamond " + winInt + playerScoreInt);
        return winValuesArr = [winInt, playerScoreInt, endGame()]
    }
    else if (playerScoreInt > displayNumberInt) {
        console.log("Diamond playerloses")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("You Lose!");
        lossInt += lossInt;
        $("#playerloss").text("  " + lossInt);
        console.log("Diamond " + lossInt + playerScoreInt);
        return lossValuesArr = [lossInt, playerScoreInt, endGame()]
    }
    else {
        console.log("Diamond keepgoing")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Select Again")

        console.log("Diamond " + playerScoreInt);
        return continueValues = [playerScoreInt, continueGame()]
    }
}

function clickSapphire () {
    console.log("clickSapphire")
    $("this").attr("class", "rounded-circle");
    playerScoreInt += SapphireInt;
    // $("#playerscore").text("  " + playerScoreInt);

    if (playerScoreInt === displayNumberInt) {
        console.log("Sapphire playerwins")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Winner!");
        winInt += winInt;
        $("#playerwin").text("  " + winInt);
        console.log("Sapphire " + winInt + playerScoreInt);
        return winValuesArr = [winInt, playerScoreInt, endGame()]
    }
    else if (playerScoreInt > displayNumberInt) {
        console.log("Sapphire playerloses")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("You Lose!");
        lossInt += lossInt;
        $("#playerloss").text("  " + lossInt);
        console.log("Sapphire " + lossInt + playerScoreInt);
        return lossValuesArr = [lossInt, playerScoreInt, endGame()]
    }
    else {
        console.log("Sapphire keepgoing")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Select Again")

        console.log("Sapphire " + playerScoreInt);
        return continueValues = [playerScoreInt, continueGame()]
    }
}







