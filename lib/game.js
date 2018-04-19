//may want to add parent class to this because it will share a lot of the same
//features as the falling blocks

const COLORS = ["red", "green", "blue", "yellow"];
const XPOS_MULTIPLIER = [0, 1, 2, 3, 4];
const PLAYER_HEIGHT = 10;

import Player from './player';
import FallBlock from './fall_block';
class Game {

  constructor(options) {
    this.canvasWidth = options.canvasWidth;
    this.canvasHeight = options.canvasHeight;
    this.ctx = options.ctx;
    this.width = this.canvasWidth / 5;
    this.height = this.canvasWidth / 5;

    //could increment this if the score goes up
    this.fallSpeed = 4;

    this.score = 0;
    this.lives = 3;

    this.gameBegin = true;

    //test
    this.drawGameOverScreen = this.drawGameOverScreen.bind(this);

    this.startGameLoop = this.startGameLoop.bind(this);
    this.setUpGame = this.setUpGame.bind(this);
  }

  getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  getRandomXPos() {
    return this.width * XPOS_MULTIPLIER[Math.floor(Math.random() * XPOS_MULTIPLIER.length)];
  }

  createPlayer() {
    //want to get player to start at the very center of the canvas
    this.player = new Player({ xPos: Math.floor((this.canvasWidth / 2) / 100) * 100,
      yPos: this.canvasHeight - PLAYER_HEIGHT,
      color: this.getRandomColor(),
      width: this.width,
      height: PLAYER_HEIGHT,
      canvasWidth: this.canvasWidth});
  }

  createFallBlock(yPos) {
    let fallBlock = new FallBlock({ xPos: this.getRandomXPos(),
      yPos: yPos,
      color: this.getRandomColor(),
      width: this.width,
      height: this.height,
      canvasWidth: this.canvasWidth,
      canvasHeight: this.canvasHeight,
      fallSpeed: this.fallSpeed,
    });

    return fallBlock;
  }

//have access to fallBlock's yPos + this.height (aka bottom of the square)
//also need access to range of player's x which you can get from this.player yes
  checkCatchBlock(fallBlock) {
    if(fallBlock.yPos + this.height === this.canvasHeight &&
    !fallBlock.firstTouchGround &&
    fallBlock.xPos === this.player.xPos &&
    fallBlock.color === this.player.color) {

      this.score += 10;
      fallBlock.firstTouchGround = true;
    } else if (fallBlock.yPos + this.height === this.canvasHeight &&
    !fallBlock.firstTouchGround) {
      this.lives--;
      fallBlock.firstTouchGround = true;
    }
  }

  drawScore() {
    this.ctx.font = "32px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Score: " + this.score, 8, 30);
  }

  drawLives() {
    //this was for the text if you want it back
    // this.ctx.font = "16px Arial";
    // this.ctx.fillStyle = "black";
    // this.ctx.fillText("Lives: " + this.lives, 100, 20);

    let image = new Image();
    const imageSize = 50;
    const imageOffset = 200;

    image.src = "assets/images/Lives-heart.png";

    //when lives are lost, the offset is changed.  The picture of the
    //three hearts are still there but it gets cut off to 2/3 the
    //size of the picture, showing only 2 hearts with 2 lives, etc.
    this.ctx.drawImage(image,0,0,(this.lives * imageOffset),
    (this.lives * imageOffset),0,20,
    (this.lives * imageSize),
    (this.lives * imageSize));
  }

  drawBackground() {
    //background was taken from https://radio.annaja7.com/?p=4772
    let background = new Image();
    background.src = "assets/images/S2E4_Diaz_Household_messy_kitchen.png";
    this.ctx.drawImage(background, 0, 0, background.width, background.height,
      0, 0, this.canvasWidth, this.canvasHeight);
  }


  drawGameOverScreen() {
    //game over background screen
    this.ctx.beginPath();
    this.ctx.fillStyle = "#fffab5";
    this.ctx.rect(0,150,this.canvasWidth,300);
    this.ctx.fill();
    this.ctx.closePath();

    //game over heading
    this.ctx.font = "50px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Game Over! ", 110, 200);

    this.ctx.font = "25px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Your score was " + this.score + "!", 140, 250);

    this.drawGameOverMessage();


    this.ctx.font = "25px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Press any key to restart!", 110, 425);

    document.addEventListener("keydown", () => document.location.reload(), false);

    requestAnimationFrame(this.drawGameOverScreen);
  }

  drawGameOverMessage() {

    this.ctx.font = "25px Arial";
    this.ctx.fillStyle = "black";
    let image = new Image();

    if(this.score <= 100 ) {
      this.ctx.fillText("Quit monkeying around!!", 100, 300);
      image.src = "assets/images/Monkey-sprite.png";
      // this.ctx.drawImage(image,0,0,192,200,200,300,this.width,this.width);
    } else if (this.score <= 200) {
      this.ctx.fillText("Ruff score ruff life", 140, 300);
      image.src = "assets/images/Dog-sprite-gold.png";
      // this.ctx.drawImage(image,0,0,192,200,200,300,this.width,this.width);
    } else if (this.score <= 250) {
      this.ctx.fillText("Bunny hopping over the competition!", 50, 300);
      image.src = "assets/images/Rabbit-sprite.png";
      // this.ctx.drawImage(image,0,0,192,200,200,300,this.width,this.width);
    } else {
      this.ctx.fillText("You are the cat's meow!!", 110, 300);
      image.src = "assets/images/Cat-sprite.png";
      // this.ctx.drawImage(image,0,0,192,200,200,300,this.width,this.width);
    }
    this.player.drawGameOverAnimal(this.ctx, image);
  }

  drawKeyGuide() {
    let image = new Image();
    image.src = "assets/images/key-guide.png";
    this.ctx.drawImage(image, 0, 0, 1000, 1000, 195, 0, 400, 400);
  }

  //ctx.drawImage(image,-40,0,200,200,this.xPos,this.yPos,50,50);


  setUpGame() {
    this.createPlayer();
    this.fallBlock1 = this.createFallBlock(0);
    this.fallBlock2 = this.createFallBlock(0);
    this.fallBlock3 = this.createFallBlock(0);
    this.fallBlock4 = this.createFallBlock(0);
  }

  checkGameOver() {
    if(this.lives === 0) {
      cancelAnimationFrame(this.startGameLoop);
      this.drawGameOverScreen();
    } else {
      requestAnimationFrame(this.startGameLoop);
    }
  }

  drawInstructions() {

    this.drawBackground();

    if(this.gameBegin) {
      this.ctx.beginPath();
      this.ctx.fillStyle = "#fffab5";
      this.ctx.rect(0,150,this.canvasWidth,300);
      this.ctx.fill();
      this.ctx.closePath();

      this.ctx.font = "50px Arial";
      this.ctx.fillStyle = "black";
      this.ctx.fillText("Instructions ", 110, 200);
    } else {
      this.startGameLoop();
      // cancelAnimationFrame(this.drawInstructions);
    }

    // document.addEventListener("keydown", () => this.exitInstructions(), false);
    // requestAnimationFrame(this.drawInstructions);


  }
  //
  // exitInstructions() {
  //   this.gameBegin = false;
  //   this.setUpGame();
  // }

  startGameLoop() {


    this.ctx.clearRect(0,0, this.canvasWidth, this.canvasHeight);


    this.drawBackground();
    this.drawKeyGuide();

    this.player.draw(this.ctx);

    //more food drops the higher the score goes up
    this.fallBlock1.draw(this.ctx);
    this.checkCatchBlock(this.fallBlock1);

    if(this.score >= 50) {
      if(!this.generateBlock2) {
        this.fallBlock2.yPos = -this.height * 6;
        this.generateBlock2 = true;
      }

      this.fallBlock2.draw(this.ctx);
      this.checkCatchBlock(this.fallBlock2);
    }

    if(this.score >= 200) {
      if(!this.generateBlock3) {
          this.fallBlock3.yPos = -this.height * 4;
          this.generateBlock3 = true;
      }

      this.fallBlock3.draw(this.ctx);
      this.checkCatchBlock(this.fallBlock3);
    }

    if(this.score >= 300) {
      if(!this.generateBlock4) {
          this.fallBlock4.yPos = -this.height * 10;
          this.generateBlock4 = true;
      }

      this.fallBlock4.draw(this.ctx);
      this.checkCatchBlock(this.fallBlock4);
    }


    this.drawScore();
    this.drawLives();


    this.checkGameOver();
    
  }

}

export default Game;
