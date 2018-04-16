import GameHandler from './game_handler';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");

    let game = new Game({ canvasWidth: canvas.width,
      canvasHeight: canvas.height,
      ctx: ctx });

    let gameHandler = new GameHandler(game);
    gameHandler.start();

  console.log("canvas working");
});
