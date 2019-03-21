// variables to hold gemstone point values
var diamondInt = 0;
var rubyInt = 0;
var emeraldInt = 0;
var sapphireInt = 0;

var numValuesArr = [];

// Holds random number to display to player
var displayNumberInt = 0;
// Holds player's accumulated score during game
var playerScoreInt = 0;
var runningScoreInt = 0;
var winInt = 0;
var lossInt = 0;

$("#start").click(startGame() );
//$("#start").on("click" , startGame() );

$("#ruby").on("click" , clickRuby() );
$("#emerald").on("click" , clickEmerald() );
$("#diamond").on("click" , clickDiamond() );
$("#sapphire").on("click" , clickSapphire() );

//$("#ruby").click(clickRuby() );
//$("#emerald").click(clickEmerald() );
//$("#diamond").click(clickDiamond() );
//$("#sapphire").click(clickSapphire() );



// used Math.floor(Math.random() * (max# - min# + 1) + min# pattern
function generateNumValues() {
    console.log("generateNumValues")
    diamondInt = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    rubyInt = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    sapphireInt = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    emeraldInt = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    displayNumberInt = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    numValuesArr = [rubyInt, emeraldInt, diamondInt, sapphireInt]

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

function startGame () {
    console.log("startGame")
    generateNumValues();
    $("#ruby").click(clickRuby() ); // ?????
    $("#emerald").click(clickEmerald() );
    $("#diamond").click(clickDiamond() );
    $("#sapphire").click(clickSapphire() );
}

function continueGame () {
    console.log("continueGame")
    console.log("Wins: " + winInt);
    console.log("Wins: " + lossInt);

    $("#playerwins").text("  " + winInt);
    $("#playerloss").text("  " + lossInt);

    $("#ruby").click(clickRuby() );
    $("#emerald").click(clickEmerald() );
    $("#diamond").click(clickDiamond() );
    $("#sapphire").click(clickSapphire() );
}

function endGame () {
    console.log("endGame")
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
    $("#winloss").text("Goodbye!");
}

function clickRuby () {
    console.log("clickRuby")
    $("this").attr("class", "rounded-circle");
    playerScoreInt += rubyInt;
    $("#playerscore").text("  " + playerScoreInt); 
    if (playerScoreInt === displayNumberInt) {
        console.log("playerwins")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Winner!");
        winInt += winInt;
        return winInt;
        endGame ();
    }
    else if (playerScoreInt > displayNumberInt) {
        console.log("playerloses")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("You Lose!");
        lossInt += lossInt;
        return lossInt;
        endGame ();
    }
    else {
        console.log("keepgoing")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Select Again")
        // setTimeout($("#winloss").text(""), 3000);
        return playerScoreInt;
        continueGame ();
    }
}

function clickEmerald () {
    console.log("clickEmerald")
    $("this").attr("class", "rounded-circle");
    playerScoreInt += emeraldInt;
    $("#playerscore").text("  " + playerScoreInt); 
    if (playerScoreInt === displayNumberInt) {
        console.log("playerwins")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Winner!");
        winInt += winInt;
        return winInt;
        endGame ();
    }
    else if (playerScoreInt > displayNumberInt) {
        console.log("playerloses")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("You Lose!")
        lossInt += lossInt;
        return lossInt;
        endGame ();
    }
    else {
        console.log("keepgoing")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Select Again")
        // setTimeout($("#winloss").text(""), 3000);
        return playerScoreInt;
        continueGame ();
    }
}
function clickDiamond () {
    console.log("clickDiamond")
    $("this").attr("class", "rounded-circle");
    playerScoreInt += diamondInt;
    $("#playerscore").text("  " + playerScoreInt); 
    if (playerScoreInt === displayNumberInt) {
        console.log("playerwins")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Winner!")
        winInt += winInt;
        return winInt;
        endGame ();
    }
    else if (playerScoreInt > displayNumberInt) {
        console.log("playerloses")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("You Lose!")
        lossInt += lossInt;
        return lossInt;
        endGame ();
    }
    else {
        console.log("keepgoing")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Select Again")
        // setTimeout($("#winloss").text(""), 3000);
        return playerScoreInt;
        continueGame ();
    }
}
function clickSapphire () {
    console.log("clickSapphire")
    $("this").attr("class", "rounded-circle");
    playerScoreInt += sapphireInt;
    $("#playerscore").text("  " + playerScoreInt); 
    if (playerScoreInt === displayNumberInt) {
        console.log("playerwins")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Winner!")
        winInt += winInt;
        return winInt;
        endGame ();
    }
    else if (playerScoreInt > displayNumberInt) {
        console.log("playerloses")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("You Lose!")
        lossInt += lossInt;
        return lossInt;
        endGame ();
    }
    else {
        console.log("keepgoing")
        $("#playerscore").text("  " + playerScoreInt); 
        $("#winloss").text("Select Again")
        // setTimeout($("#winloss").text(""), 3000);
        return playerScoreInt;
        continueGame ();
    }
}