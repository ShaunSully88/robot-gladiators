

<<<<<<< HEAD
<<<<<<< HEAD
var enemyName= ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth= 50;
var enemyAttack= 12;

// fight function
var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
  
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
    // if player choses to fight, fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
      // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
      }
      // if no (false), ask question again by running fight() again
      else {
        fight();
      }
      // if player did not chose 1 or 2 in prompt
    } else {
      window.alert("You need to pick a valid option. Try again!");
    }
  };
  
  // run fight function to start game
  fight();
  
=======
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth= 50;
var enemyAttack= 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);
debugger;
=======
>>>>>>> develop
// fight function
var fight = function(enemy) {
  
  while(playerInfo.health > 0 && enemy.health > 0) {
        
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
          // subtract money from playerMoney for skipping
        playerInfo.money = Math.max (0,playerInfo.money - 10);
        console.log("playerinfo.money", playerInfo.money);
        break;  
      }
    }
          // remove enemy's health by subtracting the amount set in the playerAttack variable
    var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);
    enemy.health = Math.max (0, enemy.health - damage);
    console.log(
      playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );
      
          // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");
      playerInfo.money= playerInfo.money + 20;
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }
      
          // remove players's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max (0,playerInfo.health - damage);
    console.log(
      enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );
      
          // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
  }
};
  
// run fight function to start game
var startGame = function () {
  // reset player stats
  playerInfo.reset();

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
      var pickedEnemyObj = enemyInfo[i];
  
      pickedEnemyObj = randomNumber(40, 60);
  
      fight(pickedEnemyObj);
    }
    
    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      if (storeConfirm){
        shop();
      }
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  endGame ();
};

// function to end the entire game
var endGame = function () {
  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
  window.alert("The game has now ended. Let's see how you did!");
  }
  else {
  window.alert("You've lost your robot in battle.");
  }
  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");
  
  if (playAgainConfirm) {
    //restart the game
    startGame ();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }


<<<<<<< HEAD
>>>>>>> develop
=======
}

var shop = function () {
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":
      playerInfo.refillHealth();
      break;
    
    case "upgrade":
    case "UPGRADE":
      playerInfo.upgradeAttack();
      break;
      
    case "leave":
    case "LEAVE":
      window.alert("Leaving the store");
      break;
      
    default:
      window.alert("You did not pick a valid option. Try again.");
      shop ();
      break;  
  }
};

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (min - max + 1) + min);
  return value;
};

var playerInfo = {
  name: window.prompt ("What is your robot's name? "),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health =100;
    this.money= 10;
    this.attack=10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert ("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >=7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  }
};

// You can also log multiple values at once like this

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber (10, 14)
  },
  { 
    name: "Amy Android",
    attack: randomNumber (10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber (10, 14)
  }
];
// start the game when the page loads
startGame ();

 

>>>>>>> develop
