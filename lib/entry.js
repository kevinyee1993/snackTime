import GameHandler from './game_handler';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");

    let game = new Game({ canvasWidth: canvas.width,
      canvasHeight: canvas.height,
      ctx: ctx });

    //lags the game after you get to a certain point
    //   let background = new Image();
    //
    //   background.onload = function() {
    //   background.src = "assets/images/S2E4_Diaz_Household_messy_kitchen.png";
    //
    //   ctx.drawImage(background, 0, 0, background.width, background.height,
    //     0, 0, canvas.width, canvas.height);
    // };
    //
    // background.onload();

      ctx.beginPath();
      ctx.fillStyle = "#fffab5";
      ctx.rect(0,150,canvas.width,300);
      ctx.fill();
      ctx.closePath();

    game.setUpGame();
    game.startGameLoop();
});
