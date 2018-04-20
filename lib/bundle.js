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

    // lags the game after you get to a certain point
      let background = new Image();
      background.src = "assets/images/S2E4_Diaz_Household_messy_kitchen.png";

      background.onload = function() {
      ctx.fillStyle = "#fffab5";

      ctx.font = "50px Arial";
      ctx.drawImage(background, 0, 0, background.width, background.height,
        0, 0, canvas.width, canvas.height);


        ctx.beginPath();
        ctx.rect(0,150,canvas.width,300);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = "black";
        ctx.fillText("Press space to start! ", 20, 300);
    };

    background.onload();



      //starts game only after user presss space so that they
      //have time to read instructions
      document.addEventListener("keydown", (e) => {
        if(e.keyCode === 32) {
          game.setUpGame();
          game.startGameLoop();
        } else if(e.keyCode === 77) {
          if(game.volumeOn) {
            game.volumeOn = false;
          } else {
            game.volumeOn = true;
          }
        }
      }, false);

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
const Y_OFFSET = 70;

const SPRITE_SX_INCREMENT = 192;
const MAX_SPRITE_WIDTH = 576;

//makes sure this number of frames has passed before the dogs sprite is updated
const SWITCH_TICK = 1000;


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

    this.direction = "right";



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

    if(this.direction === "left") {
      image.src = "assets/images/Dog-sprite-gold.png";
    } else {
      image.src = "assets/images/Dog-sprite-gold-flipped.png";
    }

    this.drawAnimal(ctx, image);
  }

  drawCat(ctx) {
    let image = new Image();
    if(this.direction === "left") {
      image.src = "assets/images/Cat-sprite.png";
    } else {
      image.src = "assets/images/Cat-sprite-flipped.png";
    }

    this.drawAnimal(ctx, image);
  }

  drawMonkey(ctx) {
    let image = new Image();

    if(this.direction === "left") {
      image.src = "assets/images/Monkey-sprite.png";
    } else {
      image.src = "assets/images/Monkey-sprite-flipped.png";
    }
    this.drawAnimal(ctx, image);
  }

  drawRabbit(ctx) {
    let image = new Image();

    if(this.direction === "left") {
      image.src = "assets/images/Rabbit-sprite.png";
    } else {
      image.src = "assets/images/Rabbit-sprite-flipped.png";
    }
    this.drawAnimal(ctx, image);
  }


  drawAnimal(ctx, image) {
    ctx.drawImage(image,this.spriteX,0,192,200,this.xPos,this.yPos - Y_OFFSET,this.width,this.width);

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


  drawGameOverAnimal(ctx, image) {
    ctx.drawImage(image,this.spriteX,0,192,200,200,300,this.width,this.width);

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
//if user presses left or right, set some instance variable to check direction
//then in the image above, either draw the normal animal OR you can draw
//the flipped animal
  keyDownHandler(e) {
    if (e.keyCode === RIGHT_CURSOR &&
      ((this.xPos + this.width) >= this.canvasWidth)) {
      this.xPos = 0;
      this.direction = "right";
    } else if(e.keyCode === RIGHT_CURSOR &&
      ((this.xPos + this.width) < this.canvasWidth)) {
      this.xPos += this.width;
      this.direction = "right";
    }

    else if (e.keyCode === LEFT_CURSOR && (this.xPos <= 0)) {
      this.xPos = this.canvasWidth - this.width;
      this.direction = "left";
    }

    else if (e.keyCode === LEFT_CURSOR && (this.xPos > 0)) {
      this.xPos -= this.width;
      this.direction = "left";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sound__ = __webpack_require__(7);
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

    //could increment this if the score goes up
    this.fallSpeed = 4;



    this.volumeOn = true;

    this.badGameOverSound = new __WEBPACK_IMPORTED_MODULE_2__sound__["a" /* default */]("assets/sounds/loser_music.mp3");
    this.goodGameOverSound = new __WEBPACK_IMPORTED_MODULE_2__sound__["a" /* default */]("assets/sounds/cartoon_success_fanfair.mp3");


    this.successSound = new __WEBPACK_IMPORTED_MODULE_2__sound__["a" /* default */]("assets/sounds/gulp.mp3");
    this.failSound = new __WEBPACK_IMPORTED_MODULE_2__sound__["a" /* default */]("assets/sounds/miss_catch3.mp3");

    this.startGameLoop = this.startGameLoop.bind(this);
    this.setUpGame = this.setUpGame.bind(this);
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
      if(this.volumeOn) {
        this.successSound.play();
      }
    } else if (fallBlock.yPos + this.height === this.canvasHeight &&
    !fallBlock.firstTouchGround) {
      this.lives--;
      fallBlock.firstTouchGround = true;
      if(this.volumeOn) {
        this.failSound.play();
      }
    }
  }

  drawScore() {
    this.ctx.font = "32px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Score: " + this.score, 8, 30);
  }

  drawLives() {
    //this was for the text if you want it back
    // this.ctx.font = "16px Arial";
    // this.ctx.fillStyle = "black";
    // this.ctx.fillText("Lives: " + this.lives, 100, 20);

    let image = new Image();
    const imageSize = 50;
    const imageOffset = 200;

    image.src = "assets/images/Lives-heart.png";

    //when lives are lost, the offset is changed.  The picture of the
    //three hearts are still there but it gets cut off to 2/3 the
    //size of the picture, showing only 2 hearts with 2 lives, etc.
    this.ctx.drawImage(image,0,0,(this.lives * imageOffset),
    (this.lives * imageOffset),0,20,
    (this.lives * imageSize),
    (this.lives * imageSize));
  }

  drawBackground() {
    //background was taken from https://radio.annaja7.com/?p=4772
    let background = new Image();
    background.src = "assets/images/S2E4_Diaz_Household_messy_kitchen.png";
    this.ctx.drawImage(background, 0, 0, background.width, background.height,
      0, 0, this.canvasWidth, this.canvasHeight);
  }


  drawGameOverScreen() {
    //game over background screen
    this.ctx.beginPath();
    this.ctx.fillStyle = "#fffab5";
    this.ctx.rect(0,150,this.canvasWidth,300);
    this.ctx.fill();
    this.ctx.closePath();

    //game over heading
    this.ctx.font = "50px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Game Over! ", 110, 200);

    this.ctx.font = "25px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Your score was " + this.score + "!", 140, 250);

    this.drawGameOverMessage();


    this.ctx.font = "25px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Press space to restart!", 110, 425);

    document.addEventListener("keydown", (e) => {
      if(e.keyCode === 32) {
        document.location.reload();
      }
    }, false);

    requestAnimationFrame(this.drawGameOverScreen);
  }

  drawGameOverMessage() {

    this.ctx.font = "25px Arial";
    this.ctx.fillStyle = "black";
    let image = new Image();

    if(this.score <= 100 ) {
      this.ctx.fillText("Quit monkeying around!!", 100, 300);
      image.src = "assets/images/Monkey-sprite.png";
    } else if (this.score < 200) {
      this.ctx.fillText("Ruff score ruff life", 140, 300);
      image.src = "assets/images/Dog-sprite-gold.png";
    } else if (this.score < 250) {
      this.ctx.fillText("Bunny hopping over the competition!", 50, 300);
      image.src = "assets/images/Rabbit-sprite.png";
    } else {
      this.ctx.fillText("You are the cat's meow!!", 110, 300);
      image.src = "assets/images/Cat-sprite.png";
    }
    this.player.drawGameOverAnimal(this.ctx, image);
  }

  drawKeyGuide() {
    let image = new Image();
    image.src = "assets/images/Key-guide-fixcat.png";
    this.ctx.drawImage(image, 0, 0, 1000, 1000, 195, 0, 400, 400);
  }

  //ctx.drawImage(image,-40,0,200,200,this.xPos,this.yPos,50,50);


  setUpGame() {
    this.score = 0;
    this.lives = 3;
    this.createPlayer();
    this.fallBlock1 = this.createFallBlock(0);
    this.fallBlock2 = this.createFallBlock(0);
    this.fallBlock3 = this.createFallBlock(0);
    this.fallBlock4 = this.createFallBlock(0);
  }

  checkGameOver() {
    if(this.lives === 0) {
      if(this.score < 200 && this.volumeOn) {
        this.badGameOverSound.play();
      } else if (this.volumeOn){
        this.goodGameOverSound.play();
      }
      cancelAnimationFrame(this.startGameLoop);
      this.drawGameOverScreen();
    } else {
      requestAnimationFrame(this.startGameLoop);
    }
  }

  startGameLoop() {

    this.ctx.clearRect(0,0, this.canvasWidth, this.canvasHeight);


    this.drawBackground();
    this.drawKeyGuide();

    this.player.draw(this.ctx);

    //more food drops the higher the score goes up
    this.fallBlock1.draw(this.ctx);
    this.checkCatchBlock(this.fallBlock1);

    if(this.score >= 50) {
      if(!this.generateBlock2) {
        this.fallBlock2.yPos = -this.height * 6;
        this.generateBlock2 = true;
      }

      this.fallBlock2.draw(this.ctx);
      this.checkCatchBlock(this.fallBlock2);
    }

    if(this.score >= 200) {
      if(!this.generateBlock3) {
          this.fallBlock3.yPos = -this.height * 4;
          this.generateBlock3 = true;
      }

      this.fallBlock3.draw(this.ctx);
      this.checkCatchBlock(this.fallBlock3);
    }

    if(this.score >= 300) {
      if(!this.generateBlock4) {
          this.fallBlock4.yPos = -this.height * 10;
          this.generateBlock4 = true;
      }

      this.fallBlock4.draw(this.ctx);
      this.checkCatchBlock(this.fallBlock4);
    }


    this.drawScore();
    this.drawLives();


    this.checkGameOver();

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
    } else if(this.color === "yellow") {
      this.drawBanana(ctx);
    }
    else {
      this.drawFish(ctx);
    }
  }

  drawBone(ctx) {
    let image = new Image();
    image.src = "assets/images/Dog-bone.png";

    ctx.drawImage(image,-40,0,200,200,this.xPos + 15,this.yPos,50,50);
  }

  drawCarrot(ctx) {
    let image = new Image();

    image.src = "assets/images/Rabbit-carrot.png";

    ctx.drawImage(image,-40,0,200,200,this.xPos + 15,this.yPos,50,50);
  }

  drawBanana(ctx) {
    let image = new Image();

    image.src = "assets/images/Monkey-banana.png";

    ctx.drawImage(image,-40,0,200,200,this.xPos + 15,this.yPos,50,50);
  }

  drawFish(ctx) {
    let image = new Image();

    image.src = "assets/images/Cat-fish.png";

    ctx.drawImage(image,-30,0,200,200,this.xPos + 15,this.yPos,50,50);
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


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Sound {
  constructor(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  }

  play() {
    this.sound.play();
  }

  stop() {
    this.sound.pause();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Sound);

//All sounds provided by zapsplat.com


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map