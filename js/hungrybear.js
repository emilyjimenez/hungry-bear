export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    var interval = setInterval(() => {
      this.foodLevel--;
      console.log("food level going down: " + this.foodLevel);
      if (this.foodLevel === 0) {
        clearInterval(interval);
      }
    }, 1500);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel =10;
  }
}
