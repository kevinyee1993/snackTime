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

export default GameHandler;
