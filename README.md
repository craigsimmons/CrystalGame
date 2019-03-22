# unit-4-game
Crystal Collector

**Simple game where:**

1. Each gem is assigned a random number
2. Game generates a random number  
3. Player tries to match the game's random numberby selecting / clicking various gems.
4. Each gem has a value and this value is added to the player's score upon click
5. If the player's score exceeds the game's random #, the player loses.
6. If the player's score exactly matches the game's random number,  the player wins
7. Wins and Losses are tracked until Reset button clears everything

**Release Notes:**

1. The Start button begins a game, PlayAgain starts a new game without clearing the player's win loss record
2. Reset resets all variables

**Known issues:**

1. Players can click gem buttons at anytime. If done immediately after a win/loss occurs, it will mess up the score and win-loss counters. I believe this is because the  jQuery onclicks are always active. 
2. Random number generation: No isues with the game's randomly generated number. But the random numbers for the gems - while random - are not unique. Need to add logic to make each gem's value unique.
3. Game win conditions: it is possible that a game can never be won (e.g. the game number is odd and all the gems have even values. )

WIll research solutions for v2

craig@simmons.name

[Github Repository for this game:](https://github.com/craigsimmons/unit-4-game)
