import GameHandler from './game_handler';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");

    let game = new Game({ canvasWidth: canvas.width,
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
