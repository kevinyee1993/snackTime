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

//sets the y position for the dog sprite on the canvas
const DOGY_OFFSET = 70;

const SPRITE_SX_INCREMENT = 192;
const MAX_SPRITE_WIDTH = 576;

//makes sure this number of frames has passed before the dogs sprite is updated
const SWITCH_TICK = 600;


class Player extends __WEBPACK_IMPORTED_MODULE_0__square__["a" /* default */]{
  constructor(options) {
    super(options);

    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.draw = this.draw.bind(this);

    //may want to rename or change this but this is for dog sprite sheets
    //if rename, rename it more general
    this.spriteX = 0;

    //keeps the dog from bugging out when animating
    this.tickBuffer = 0;


    document.addEventListener("keydown", this.keyDownHandler, false);
  }

  draw(ctx) {
    if(this.color === "red") {
      this.drawDog(ctx);
    } else if(this.color === "green") {
      this.drawCat(ctx);
    } else if(this.color === "yellow") {
      this.drawMonkey(ctx);
    } else {
      this.drawRabbit(ctx);
    }
  }


  //just checking but this works, now need to find out how to do sprites
  drawDog(ctx) {
    let image = new Image();
    image.src = "assets/images/Dog-sprite-gold.png";

    this.drawAnimal(ctx, image);
  }

  drawCat(ctx) {
    let image = new Image();
    image.src = "assets/images/Cat-sprite.png";

    this.drawAnimal(ctx, image);
  }

  drawMonkey(ctx) {
    let image = new Image();
    image.src = "assets/images/Monkey-sprite.png";

    this.drawAnimal(ctx, image);
  }

  drawRabbit(ctx) {
    let image = new Image();
    image.src = "assets/images/Rabbit-sprite.png";

    this.drawAnimal(ctx, image);
  }


  drawAnimal(ctx, image) {
    ctx.drawImage(image,this.spriteX,0,200,200,this.xPos,this.yPos - DOGY_OFFSET,this.width,this.width);

    setInterval( () => {
      this.tickBuffer++;

      if(this.tickBuffer >= SWITCH_TICK ) {

        if(this.spriteX === MAX_SPRITE_WIDTH) {
          this.spriteX = 0;
        } else {
          this.spriteX += SPRITE_SX_INCREMENT;
        }

        this.tickBuffer = 0;
      }
    }, 500 );

  }


//change it so that player can loop around
  keyDownHandler(e) {
    if (e.keyCode === RIGHT_CURSOR &&
      ((this.xPos + this.width) >= this.canvasWidth)) {
      this.xPos = 0;
    } else if(e.keyCode === RIGHT_CURSOR &&
      ((this.xPos + this.width) < this.canvasWidth)) {
      this.xPos += this.width;
    }

    else if (e.keyCode === LEFT_CURSOR && (this.xPos <= 0)) {
      this.xPos = this.canvasWidth - this.width;
    }

    else if (e.keyCode === LEFT_CURSOR && (this.xPos > 0)) {
      this.xPos -= this.width;
    }

     else if (e.keyCode === A) {
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

/* harmony default export */ __webpack_exports__["a"] = (Player);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fall_block__ = __webpack_require__(6);
//may want to add parent class to this because it will share a lot of the same
//features as the falling blocks

const COLORS = ["red", "green", "blue", "yellow"];
const XPOS_MULTIPLIER = [0, 1, 2, 3, 4];
const PLAYER_HEIGHT = 10;



class Game {

  constructor(options) {
    this.canvasWidth = options.canvasWidth;
    this.canvasHeight = options.canvasHeight;
    this.ctx = options.ctx;
    this.width = this.canvasWidth / 5;
    this.height = this.canvasWidth / 5;

    //this increments as score goes up
    this.fallSpeed = 4;

    //doing score first then do lives
    this.score = 0;
    this.lives = 3;

    this.startGameLoop = this.startGameLoop.bind(this);
    this.setUpGame = this.setUpGame.bind(this);

    //TESTING THIS
    // this.drawDog = this.drawDog.bind(this);
  }

  getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  getRandomXPos() {
    return this.width * XPOS_MULTIPLIER[Math.floor(Math.random() * XPOS_MULTIPLIER.length)];
  }

  createPlayer() {
    //want to get player to start at the very center of the canvas
    this.player = new __WEBPACK_IMPORTED_MODULE_0__player__["a" /* default */]({ xPos: Math.floor((this.canvasWidth / 2) / 100) * 100,
      yPos: this.canvasHeight - PLAYER_HEIGHT,
      color: this.getRandomColor(),
      width: this.width,
      height: PLAYER_HEIGHT,
      canvasWidth: this.canvasWidth});
  }

  createFallBlock(yPos) {
    let fallBlock = new __WEBPACK_IMPORTED_MODULE_1__fall_block__["a" /* default */]({ xPos: this.getRandomXPos(),
      yPos: yPos,
      color: this.getRandomColor(),
      // color: "red",
      width: this.width,
      height: this.height,
      canvasWidth: this.canvasWidth,
      canvasHeight: this.canvasHeight,
      fallSpeed: this.fallSpeed,
    });

    return fallBlock;
  }

//have access to fallBlock's yPos + this.height (aka bottom of the square)
//also need access to range of player's x which you can get from this.player yes
  checkCatchBlock(fallBlock) {
    if(fallBlock.yPos + this.height === this.canvasHeight &&
    !fallBlock.firstTouchGround &&
    fallBlock.xPos === this.player.xPos &&
    fallBlock.color === this.player.color) {

      this.score += 10;
      fallBlock.firstTouchGround = true;
    } else if (fallBlock.yPos + this.height === this.canvasHeight &&
    !fallBlock.firstTouchGround) {
      this.lives--;
      fallBlock.firstTouchGround = true;
    }
  }

  drawScore() {
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Score: " + this.score, 8, 20);
  }

  drawLives() {
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Lives: " + this.lives, 100, 20);
  }




  setUpGame() {
    this.createPlayer();
    this.fallBlock1 = this.createFallBlock(0);
    this.fallBlock2 = this.createFallBlock(-(this.height * 2));
    this.fallBlock3 = this.createFallBlock(-(this.height * 4));

    let img = new Image();

  }

  checkGameOver() {
    if(this.lives === 0) {
      cancelAnimationFrame(this.startGameLoop);
    } else {
      requestAnimationFrame(this.startGameLoop);
    }
  }

  startGameLoop() {
    this.ctx.clearRect(0,0, this.canvasWidth, this.canvasHeight);
    this.player.draw(this.ctx);

    // this.ctx.drawImage(image,0,0,200,200,0,0,200,200);

    //COMMENT THIS BACK IN ONCE YOU FINISH SPRITES
    this.fallBlock1.draw(this.ctx);
    // this.fallBlock2.draw(this.ctx);
    // this.fallBlock3.draw(this.ctx);
    //
    //
    this.checkCatchBlock(this.fallBlock1);
    // this.checkCatchBlock(this.fallBlock2);
    // this.checkCatchBlock(this.fallBlock3);
    //END OF CODE YOU NEED DO NOT DELETE


    this.drawScore();
    this.drawLives();


    this.checkGameOver();
    // requestAnimationFrame(this.startGameLoop);
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
   this.canvasHeight = options.canvasHeight;
 }


   draw(ctx) {
     ctx.beginPath();
     ctx.rect(this.xPos, this.yPos, this.width, this.height);
     ctx.fillStyle = this.color;
     ctx.strokeStyle = "black";
     ctx.lineWidth = 5;
     ctx.stroke();
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
const INTERVAL = 20;
const COLORS = ["red", "green", "blue", "yellow"];
const XPOS_MULTIPLIER = [0, 1, 2, 3, 4];



class FallBlock extends __WEBPACK_IMPORTED_MODULE_0__square__["a" /* default */] {
  constructor(options) {
    super(options);
    this.fallSpeed = options.fallSpeed;

    //if don't have this check, score or lives would increment too many times
    //because the block stays on the ground for a certain amount of time
    this.firstTouchGround = false;

    this.fall(this.fallSpeed);
  }

  draw(ctx) {
    if(this.color === "red") {
      this.drawBone(ctx);
    } else if(this.color === "blue") {
      this.drawCarrot(ctx);
    }
    else {
      super.draw(ctx);
    }
  }

  drawBone(ctx) {
    let image = new Image();
    image.src = "assets/images/Dog-bone.png";

    ctx.drawImage(image,0,0,200,200,this.xPos,this.yPos,50,50);
  }
  drawCarrot(ctx) {
    let image = new Image();

    image.src = "assets/images/Rabbit-carrot.png";

    ctx.drawImage(image,0,0,200,200,this.xPos,this.yPos,50,50);
  }


  fall(fallSpeed) {
    setInterval( () => {

      if(this.yPos + this.height === this.canvasHeight) {
        this.yPos = -(this.height) * 2;
        this.xPos = this.width * XPOS_MULTIPLIER[Math.floor(Math.random() * XPOS_MULTIPLIER.length)];
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];

      } else {
        this.yPos += fallSpeed;

        this.firstTouchGround = false;

      }
    }, INTERVAL);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (FallBlock);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map