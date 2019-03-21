        // variables to hold gemstone point values
var diamondStr = "";
var rubyStr = "";
var emeraldStr = "";
var sapphireStr = "";

var numValuesArr = [];

        // Holds random number to display to player
var displayNumberStr = "";
        // Holds player's accumulated score during game
var playerScoreStr = "0";
var runningScoreStr = "0"
var winStr = "0";
var lossStr ="0";

// need startGame function 
// need 
// need lossBanner function
// need winBanner function

//random number function between 1-12 & assign to each crystal

diamondStr = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
rubyStr = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
sapphireStr = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
emeraldStr = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
numValuesArr = [rubyStr, emeraldStr, diamondStr, sapphireStr]

//random number function between 19 -120
displayNumberStr = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

console.log("diamond: " + diamondStr);
console.log("rubyStr: " + rubyStr);
console.log("sapphireStr: " + sapphireStr);
console.log("emeraldStr: " + emeraldStr);
console.log("Display Number: " + displayNumberStr);
console.log(numValuesArr)

$("#displaynum").text("  " + displayNumberStr);
$("#sapphirenum").text("  " + sapphireStr);
$("#rubynum").text("  " + rubyStr);
$("#diamondnum").text("  " + diamondStr);
$("#emeraldnum").text("  " + emeraldStr);
$("#playerscore").text("  " + playerScoreStr);
$("#playerwins").text("  " + winStr);
$("#playerloss").text("  " + lossStr);



$("#diamond").on("click" , function() {
    $("this").attr("class", "rounded-circle");
    playerScoreStr += diamondStr;
    $("#playerscore").text("  " + playerScoreStr); 
    if (playerScoreStr === displayNumberStr) {
        $("#playerscore").text("  " + playerScoreStr); 
        $("#winloss").text("Winner!")
        setTimeout($("#winloss").text(""), 3000);
    }
    else if (playerScoreStr > displayNumberStr) {
            $("#playerscore").text("  " + playerScoreStr); 
            $("#winloss").text("You Lose!")
            setTimeout($("#winloss").text(""), 3000);
    }
    else {
        $("#playerscore").text("  " + playerScoreStr); 
        $("#winloss").text("Select Again")
        setTimeout($("#winloss").text(""), 3000);
        return playerScoreStr;
    }
});

$("#ruby").on("click" , function() {
    $("this").attr("class", "rounded-circle");
    playerScoreStr += diamondStr;
    $("#playerscore").text("  " + playerScoreStr); 
    if (playerScoreStr === displayNumberStr) {
        $("#playerscore").text("  " + playerScoreStr); 
        $("#winloss").text("Winner!")
        setTimeout($("#winloss").text(""), 3000);
    }
    else if (playerScoreStr > displayNumberStr) {
            $("#playerscore").text("  " + playerScoreStr); 
            $("#winloss").text("You Lose!")
            setTimeout($("#winloss").text(""), 3000);
    }
    else {
        $("#playerscore").text("  " + playerScoreStr); 
        $("#winloss").text("Select Again")
        setTimeout($("#winloss").text(""), 3000);
        return playerScoreStr;
    }
});

$("#emerald").on("click" , function() {
    $("this").attr("class", "rounded-circle");
    playerScoreStr += diamondStr;
    $("#playerscore").text("  " + playerScoreStr); 
    if (playerScoreStr === displayNumberStr) {
        $("#playerscore").text("  " + playerScoreStr); 
        $("#winloss").text("Winner!")
        setTimeout($("#winloss").text(""), 3000);
    }
    else if (playerScoreStr > displayNumberStr) {
            $("#playerscore").text("  " + playerScoreStr); 
            $("#winloss").text("You Lose!")
            setTimeout($("#winloss").text(""), 3000);
    }
    else {
        $("#playerscore").text("  " + playerScoreStr); 
        $("#winloss").text("Select Again")
        setTimeout($("#winloss").text(""), 3000);
        return playerScoreStr;
    }
});

$("#sapphire").on("click" , function() {
    $("this").attr("class", "rounded-circle");
    playerScoreStr += diamondStr;
    $("#playerscore").text("  " + playerScoreStr); 
    if (playerScoreStr === displayNumberStr) {
        $("#playerscore").text("  " + playerScoreStr); 
        $("#winloss").text("Winner!")
        setTimeout($("#winloss").text(""), 3000);
    }
    else if (playerScoreStr > displayNumberStr) {
            $("#playerscore").text("  " + playerScoreStr); 
            $("#winloss").text("You Lose!")
            setTimeout($("#winloss").text(""), 3000);
    }
    else {
        $("#playerscore").text("  " + playerScoreStr); 
        $("#winloss").text("Select Again")
        setTimeout($("#winloss").text(""), 3000);
        return playerScoreStr;
    }
});