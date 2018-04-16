//may want to add parent class to this because it will share a lot of the same
//features as the falling blocks

const COLORS = ["red", "green", "blue", "yellow"];
const XPOS_MULTIPLIER = [0, 1, 2, 3, 4];

import Player from './player';
import FallBlock from './fall_block';
class Game {

  constructor(options) {
    this.canvasWidth = options.canvasWidth;
    this.canvasHeight = options.canvasHeight;
    this.ctx = options.ctx;
    this.width = this.canvasWidth / 5;
    this.height = this.canvasWidth / 5;

    //this increments as score goes up
    this.fallSpeed = 200;

    this.score = 0;

    this.startGameLoop = this.startGameLoop.bind(this);
    this.setUpGame = this.setUpGame.bind(this);
    // this.generateFallBlocks = this.generateFallBlocks.bind(this);
  }

  getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  getRandomXPos() {
    return this.width * XPOS_MULTIPLIER[Math.floor(Math.random() * XPOS_MULTIPLIER.length)];
  }

  createPlayer() {
    //want to get player to start at the very center of the canvas
    this.player = new Player({ xPos: Math.floor((this.canvasWidth / 2) / 100) * 100,
      yPos: this.canvasHeight - this.height,
      color: this.getRandomColor(),
      width: this.width,
      height: this.height,
      canvasWidth: this.canvasWidth});
  }

  createFallBlock() {
    this.fallBlock = new FallBlock({ xPos: this.getRandomXPos(),
      yPos: 0,
      color: this.getRandomColor(),
      width: this.width,
      height: this.height,
      canvasWidth: this.canvasWidth,
      canvasHeight: this.canvasHeight,
      fallSpeed: this.fallSpeed,
    });

  }

  setUpGame() {
    this.createPlayer();
    this.createFallBlock();
  }

  //handles creating all kinds of fallBlocks
  //as soon as a fall block is created, it handles all the falling by itself
  // generateFallBlocks() {
  //   let newBlock = this.createFallBlock();
  //   // console.log(newBlock);
  //
  //   // console.log(newBlock);
  //   // newBlock.draw(this.ctx);
  //   return newBlock;
  // }

  startGameLoop() {
    this.ctx.clearRect(0,0, this.canvasWidth, this.canvasHeight);
    // setInterval(this.fallBlock.fall(10), 10000);
    // this.fallBlock.fall(1000);
    // let a = this.generateFallBlocks();
    // a.draw(this.ctx);

    this.fallBlock.draw(this.ctx);
    this.player.draw(this.ctx);


    requestAnimationFrame(this.startGameLoop);
  }

}

export default Game;
