class GameHandler {
  constructor(game) {
    this.game = game;
  }

  start() {
    this.game.createPlayer();
  }


}

export default GameHandler;
