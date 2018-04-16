/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_handler__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game__ = __webpack_require__(2);



document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");

    let game = new __WEBPACK_IMPORTED_MODULE_1__game__["a" /* default */]({ canvasWidth: canvas.width,
      canvasHeight: canvas.height,
      ctx: ctx });

    // game.createPlayer();
    game.setUpGame();
    game.startGameLoop();

    // let gameHandler = new GameHandler(canvas, ctx, game);
    // gameHandler.startGameLoop();
    //not sure why I need a game handler why am I making this complicated

  console.log("canvas working");
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__square__ = __webpack_require__(4);


const RIGHT_CURSOR = 39;
const LEFT_CURSOR = 37;
const A = 65;
const S = 83;
const D = 68;
const F = 70;

class Player extends __WEBPACK_IMPORTED_MODULE_0__square__["a" /* default */]{
  constructor(options) {
    super(options);

    this.keyDownHandler = this.keyDownHandler.bind(this);

    document.addEventListener("keydown", this.keyDownHandler, false);
  }


  keyDownHandler(e) {
    if(e.keyCode === RIGHT_CURSOR &&
      ((this.xPos + this.width) < this.canvasWidth)) {
      this.xPos += this.width;
    } else if (e.keyCode === LEFT_CURSOR && (this.xPos > 0)) {
      this.xPos -= this.width;
    } else if (e.keyCode === A) {
      this.color = "red";
    } else if (e.keyCode === S) {
      this.color = "green";
    } else if (e.keyCode === D) {
      this.color = "yellow";
    } else if (e.keyCode === F) {
      this.color = "blue";
    }
  }

}
//
// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);
//
// function keyDownHandler() {
//
// }
//
// function keyUpHandler() {
//
// }

/* harmony default export */ __webpack_exports__["a"] = (Player);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fall_block__ = __webpack_require__(6);
//may want to add parent class to this because it will share a lot of the same
//features as the falling blocks



class Game {

  constructor(options) {
    this.canvasWidth = options.canvasWidth;
    this.canvasHeight = options.canvasHeight;
    this.ctx = options.ctx;
    this.width = this.canvasWidth / 5;
    this.height = this.canvasWidth / 5;

    //this increments as score goes up
    this.fallSpeed = 2;

    this.score = 0;

    this.startGameLoop = this.startGameLoop.bind(this);
    this.setUpGame = this.setUpGame.bind(this);
    // this.generateFallBlocks = this.generateFallBlocks.bind(this);
  }

  createPlayer() {
    //want to get player to start at the very center of the canvas
    this.player = new __WEBPACK_IMPORTED_MODULE_0__player__["a" /* default */]({ xPos: Math.floor((this.canvasWidth / 2) / 100) * 100,
      yPos: this.canvasHeight - this.height,
      color: "green",
      width: this.width,
      height: this.height,
      canvasWidth: this.canvasWidth});
  }

  createFallBlock() {
    this.fallBlock = new __WEBPACK_IMPORTED_MODULE_1__fall_block__["a" /* default */]({ xPos: Math.floor((this.canvasWidth / 2) / 100) * 100,
      yPos: 0,
      color: "blue",
      width: this.width,
      height: this.height,
      canvasWidth: this.canvasWidth,
      fallSpeed: this.fallSpeed,
    });

      // return fallBlock;
  }

  setUpGame() {
    this.createPlayer();
    this.createFallBlock();
  }

  //handles creating all kinds of fallBlocks
  // generateFallBlocks() {
  //   let a = this.createFallBlock();
  //   a.draw(this.ctx);
  // }

  startGameLoop() {
    this.ctx.clearRect(0,0, this.canvasWidth, this.canvasHeight);
    // setInterval(this.fallBlock.fall(10), 10000);
    // this.fallBlock.fall(10);
    // this.generateFallBlocks();

    this.fallBlock.draw(this.ctx);
    this.player.draw(this.ctx);


    requestAnimationFrame(this.startGameLoop);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//handles all the stuff it takes to get the game running

class GameHandler {
  constructor(canvas, ctx, game) {
    this.game = game;
    this.canvas = canvas;
    this.ctx = ctx;
  }

  startGameLoop() {
    // this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    // this.player.draw();

  }


}

/* unused harmony default export */ var _unused_webpack_default_export = (GameHandler);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//parent class of all the square elements (player and falling squares)

class Square {
 constructor(options) {
   this.xPos = options.xPos;
   this.yPos = options.yPos;
   this.color = options.color;
   this.width = options.width;
   this.height = options.height;
   this.canvasWidth = options.canvasWidth;
 }


   draw(ctx) {
     ctx.beginPath();
     ctx.rect(this.xPos, this.yPos, this.width, this.height);
     ctx.fillStyle = this.color;
     ctx.fill();
     ctx.closePath();
   }

}

/* harmony default export */ __webpack_exports__["a"] = (Square);


/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__square__ = __webpack_require__(4);


class FallBlock extends __WEBPACK_IMPORTED_MODULE_0__square__["a" /* default */] {
  constructor(options) {
    super(options);
    this.fallSpeed = options.fallSpeed;
    // console.log(this.fallSpeed);
    // requestAnimationFrame(this.fall);
    this.fall(this.fallSpeed);

  }

  //get these blocks to fall in a discrete way not fluidly
  //can get back to this later
  fall(fallSpeed) {
    this.yPos += fallSpeed;
    console.log(this.yPos);
    setInterval( () => (this.yPos += fallSpeed), 1000);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (FallBlock);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map