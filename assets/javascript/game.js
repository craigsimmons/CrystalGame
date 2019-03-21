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


var diamondPic = $("img.diamond");
var rubyPic = $("img.ruby");
var emeraldPic = $("img.emerald");
var sapphirePic = $("img.sapphire")
for (var i = 0; i < numOptionsArr.length; i++)
    crystalPic.attr("data-value", numOptionsArr[i])