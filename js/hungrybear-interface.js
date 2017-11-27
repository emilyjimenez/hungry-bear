import { HungryBear } from './../js/hungrybear.js';

let newBear = new HungryBear("Fuzzy");

function startGame() {
  newBear.setHunger();
  // newBear.clearHunger();
  $("#start").slideUp();
  $("#game").slideDown();
}

function updateFoodLevelBar() {
    var interval = setInterval(() => {
  $("#food-level").attr("value", newBear.foodLevel);
  if (newBear.foodLevel === 0) {
    clearInterval(interval);
  }
}, 1500);
}

function isEaten() {
  newBear.didYouGetEaten();
  if (newBear.foodLevel > 0) {
    $("#bear-status").text("You're still alive, keep feeding!");
  } else {
    $("#bear-status").text("YOU LOSE and got eaten by a bear");
    $("#restart").show();
  }
}

function feedBear() {
  newBear.feed();
}

$(document).ready(function(){
  $("#start").submit(function(event){
    event.preventDefault();
    startGame();
    updateFoodLevelBar();
  });
  $("#isEaten").click(function() {
    isEaten();
  });
  $("#feed").click(function() {
    feedBear();
  });
  $("#restart-game").click(function() {
    location.reload();
  });
});
