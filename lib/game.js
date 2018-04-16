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

    this.startGameLoop = this.startGameLoop.bind(this);
    this.setUpGame = this.setUpGame.bind(this);
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
      canvasWidth: this.canvasWidth});

      this.fallBlock.draw(this.ctx);
  }

  setUpGame() {
    this.createPlayer();
    this.createFallBlock();
  }

  startGameLoop() {
    this.ctx.clearRect(0,0, this.canvasWidth, this.canvasHeight);
    this.fallBlock.fall();

    this.fallBlock.draw(this.ctx);
    this.player.draw(this.ctx);


    requestAnimationFrame(this.startGameLoop);
  }
}

export default Game;
