
// var playerName = window.prompt("what is your robot's name?");

// function fight() {
//     window.alert("The fight has begun!");
// }
// //fight();
// console.log(playerName);

// console.log("This logs a string, good for leaving yourself a message");
// // this will do math and log 20
// console.log(10 + 10);
// // what is this?
// console.log("Our robot's name is " + playerName);

// var name = "your name";

// console.log(name);

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
  }

var fight = function(enemyName) {
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  if (promptFight === "fight" || promptFight === "FIGHT") {
        console.log(promptFight);
        while(enemyHealth > 0 && playerHealth > 0) {
        enemyHealth = enemyHealth - playerAttack;
        console.log(enemyHealth);
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")
        playerHealth = playerHealth - enemyAttack;
        console.log(playerHealth);
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")
        // check to see if the value of the playerHealth variable is greater than 0
        if (playerHealth > 0) {
             // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
            console.log("Your player is still alive!");
        }
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;
            } 
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        }
    } 
        if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
        }
    else {
        window.alert("You need to pick a valid option. Try again!");
      }
};

for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
      }
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}


