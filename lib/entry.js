import GameHandler from './game_handler';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");

    let game = new Game({ canvasWidth: canvas.width,
      canvasHeight: canvas.height,
      ctx: ctx });

    // lags the game after you get to a certain point
      let background = new Image();
      background.src = "assets/images/S2E4_Diaz_Household_messy_kitchen.png";

      background.onload = function() {
      ctx.fillStyle = "#fffab5";

      ctx.font = "50px Arial";
      ctx.drawImage(background, 0, 0, background.width, background.height,
        0, 0, canvas.width, canvas.height);


        ctx.beginPath();
        ctx.rect(0,150,canvas.width,300);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = "black";
        ctx.fillText("Press space to start! ", 20, 300);
    };

    background.onload();



      //starts game only after user presss space so that they
      //have time to read instructions
      document.addEventListener("keydown", (e) => {
        if(e.keyCode === 32) {
          game.setUpGame();
          game.startGameLoop();
        } else if(e.keyCode === 77) {
          if(game.volumeOn) {
            game.volumeOn = false;
          } else {
            game.volumeOn = true;
          }
        }
      }, false);

});
