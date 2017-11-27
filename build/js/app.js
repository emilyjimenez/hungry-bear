(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HungryBear = exports.HungryBear = function () {
  function HungryBear(name) {
    _classCallCheck(this, HungryBear);

    this.name = name;
    this.foodLevel = 10;
  }

  _createClass(HungryBear, [{
    key: "setHunger",
    value: function setHunger() {
      var _this = this;

      var interval = setInterval(function () {
        _this.foodLevel--;
        console.log("food level going down: " + _this.foodLevel);
        if (_this.foodLevel === 0) {
          clearInterval(interval);
        }
      }, 1500);
    }
  }, {
    key: "didYouGetEaten",
    value: function didYouGetEaten() {
      if (this.foodLevel > 0) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "feed",
    value: function feed() {
      this.foodLevel = 10;
    }
  }]);

  return HungryBear;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _hungrybear = require("./../js/hungrybear.js");

var newBear = new _hungrybear.HungryBear("Fuzzy");

function startGame() {
  newBear.setHunger();
  // newBear.clearHunger();
  $("#start").slideUp();
  $("#game").slideDown();
}

function updateFoodLevelBar() {
  var interval = setInterval(function () {
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

$(document).ready(function () {
  $("#start").submit(function (event) {
    event.preventDefault();
    startGame();
    updateFoodLevelBar();
  });
  $("#isEaten").click(function () {
    isEaten();
  });
  $("#feed").click(function () {
    feedBear();
  });
  $("#restart-game").click(function () {
    location.reload();
  });
});

},{"./../js/hungrybear.js":1}]},{},[2]);
