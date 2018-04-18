import Square from './square';

const RIGHT_CURSOR = 39;
const LEFT_CURSOR = 37;
const A = 65;
const S = 83;
const D = 68;
const F = 70;

//sets the y position for the dog sprite on the canvas
const Y_OFFSET = 70;

const SPRITE_SX_INCREMENT = 192;
const MAX_SPRITE_WIDTH = 576;

//makes sure this number of frames has passed before the dogs sprite is updated
const SWITCH_TICK = 600;


class Player extends Square{
  constructor(options) {
    super(options);

    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.draw = this.draw.bind(this);

    //may want to rename or change this but this is for dog sprite sheets
    //if rename, rename it more general
    this.spriteX = 0;

    //keeps the dog from bugging out when animating
    this.tickBuffer = 0;

    this.direction = "right";


    document.addEventListener("keydown", this.keyDownHandler, false);
  }

  draw(ctx) {
    if(this.color === "red") {
      this.drawDog(ctx);
    } else if(this.color === "green") {
      this.drawCat(ctx);
    } else if(this.color === "yellow") {
      this.drawMonkey(ctx);
    } else {
      this.drawRabbit(ctx);
    }
  }


  //just checking but this works, now need to find out how to do sprites
  drawDog(ctx) {
    let image = new Image();

    if(this.direction === "left") {
      image.src = "assets/images/Dog-sprite-gold.png";
    } else {
      image.src = "assets/images/Dog-sprite-gold-flipped.png";
    }

    this.drawAnimal(ctx, image);
  }

  drawCat(ctx) {
    let image = new Image();
    if(this.direction === "left") {
      image.src = "assets/images/Cat-sprite.png";
    } else {
      image.src = "assets/images/Cat-sprite-flipped.png";
    }

    this.drawAnimal(ctx, image);
  }

  drawMonkey(ctx) {
    let image = new Image();

    if(this.direction === "left") {
      image.src = "assets/images/Monkey-sprite.png";
    } else {
      image.src = "assets/images/Monkey-sprite-flipped.png";
    }
    this.drawAnimal(ctx, image);
  }

  drawRabbit(ctx) {
    let image = new Image();

    if(this.direction === "left") {
      image.src = "assets/images/Rabbit-sprite.png";
    } else {
      image.src = "assets/images/Rabbit-sprite-flipped.png";
    }
    this.drawAnimal(ctx, image);
  }


  drawAnimal(ctx, image) {
    ctx.drawImage(image,this.spriteX,0,192,200,this.xPos,this.yPos - Y_OFFSET,this.width,this.width);

    setInterval( () => {
      this.tickBuffer++;

      if(this.tickBuffer >= SWITCH_TICK ) {

        if(this.spriteX === MAX_SPRITE_WIDTH) {
          this.spriteX = 0;
        } else {
          this.spriteX += SPRITE_SX_INCREMENT;
        }

        this.tickBuffer = 0;
      }
    }, 500 );

  }


  drawGameOverAnimal(ctx, image) {
    ctx.drawImage(image,this.spriteX,0,192,200,200,300,this.width,this.width);

    setInterval( () => {
      this.tickBuffer++;

      if(this.tickBuffer >= SWITCH_TICK ) {

        if(this.spriteX === MAX_SPRITE_WIDTH) {
          this.spriteX = 0;
        } else {
          this.spriteX += SPRITE_SX_INCREMENT;
        }

        this.tickBuffer = 0;
      }
    }, 500 );

  }


//change it so that player can loop around
//if user presses left or right, set some instance variable to check direction
//then in the image above, either draw the normal animal OR you can draw
//the flipped animal
  keyDownHandler(e) {
    if (e.keyCode === RIGHT_CURSOR &&
      ((this.xPos + this.width) >= this.canvasWidth)) {
      this.xPos = 0;
      this.direction = "right";
    } else if(e.keyCode === RIGHT_CURSOR &&
      ((this.xPos + this.width) < this.canvasWidth)) {
      this.xPos += this.width;
      this.direction = "right";
    }

    else if (e.keyCode === LEFT_CURSOR && (this.xPos <= 0)) {
      this.xPos = this.canvasWidth - this.width;
      this.direction = "left";
    }

    else if (e.keyCode === LEFT_CURSOR && (this.xPos > 0)) {
      this.xPos -= this.width;
      this.direction = "left";
    }

     else if (e.keyCode === A) {
      this.color = "red";
    } else if (e.keyCode === S) {
      this.color = "green";
    } else if (e.keyCode === D) {
      this.color = "yellow";
    } else if (e.keyCode === F) {
      this.color = "blue";
    }
  }

}

export default Player;
