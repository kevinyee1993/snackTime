//pretty much handles the view of the game?

import Player from './player';

class Game {

  constructor(options) {
    this.canvasWidth = options.canvasWidth;
    this.canvasHeight = options.canvasHeight;
    this.ctx = options.ctx;
    this.width = 50;
    this.height = 50;

    this.startGameLoop = this.startGameLoop.bind(this);
  }

  createPlayer() {
    this.player = new Player({ xPos: this.canvasWidth / 2 - this.width / 2,
      yPos: this.canvasHeight - this.height,
      color: "green",
      width: this.width,
      height: this.height });

      // this.player.draw(this.ctx);
  }

  startGameLoop() {
    this.ctx.clearRect(0,0, this.canvasWidth, this.canvasHeight);

    this.player.draw(this.ctx);

    requestAnimationFrame(this.startGameLoop);
  }
}

export default Game;
