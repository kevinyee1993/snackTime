//may want to add parent class to this because it will share a lot of the same
//features as the falling blocks

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
    this.fallSpeed = 2;

    this.score = 0;

    this.startGameLoop = this.startGameLoop.bind(this);
    this.setUpGame = this.setUpGame.bind(this);
    // this.generateFallBlocks = this.generateFallBlocks.bind(this);
  }

  createPlayer() {
    //want to get player to start at the very center of the canvas
    this.player = new Player({ xPos: Math.floor((this.canvasWidth / 2) / 100) * 100,
      yPos: this.canvasHeight - this.height,
      color: "green",
      width: this.width,
      height: this.height,
      canvasWidth: this.canvasWidth});
  }

  createFallBlock() {
    this.fallBlock = new FallBlock({ xPos: Math.floor((this.canvasWidth / 2) / 100) * 100,
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

export default Game;
