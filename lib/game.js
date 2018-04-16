//pretty much handles the view of the game?

import Player from './player';

class Game {

  constructor(options) {
    this.canvasWidth = options.canvasWidth;
    this.canvasHeight = options.canvasHeight;
    this.ctx = options.ctx;
    this.width = this.canvasWidth / 5;
    this.height = this.canvasWidth / 5;

    this.startGameLoop = this.startGameLoop.bind(this);
  }

  createPlayer() {
    //want to get player to start at the very center of the canvas
    this.player = new Player({ xPos: Math.floor((this.canvasWidth / 2) / 100) * 100,
      yPos: this.canvasHeight - this.height,
      color: "green",
      width: this.width,
      height: this.height });
    // this.player = new Player({ xPos: this.canvasWidth / 2 - this.width / 2,
    //   yPos: this.canvasHeight - this.height,
    //   color: "green",
    //   width: this.width,
    //   height: this.height });

      // this.player.draw(this.ctx);
  }

  startGameLoop() {
    this.ctx.clearRect(0,0, this.canvasWidth, this.canvasHeight);

    this.player.draw(this.ctx);

    requestAnimationFrame(this.startGameLoop);
  }
}

export default Game;
