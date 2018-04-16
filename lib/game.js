import Player from './player';

class Game {

  constructor(options) {
    this.canvasWidth = options.canvasWidth;
    this.canvasHeight = options.canvasHeight;
    this.ctx = options.ctx;
    this.width = 50;
    this.height = 50;
  }

  createPlayer() {
    let player = new Player({ xPos: this.canvasWidth / 2 - this.width / 2,
      yPos: this.canvasHeight - this.height,
      color: "green",
      width: this.width,
      height: this.height });

    player.draw(this.ctx);
  }
}

export default Game;
