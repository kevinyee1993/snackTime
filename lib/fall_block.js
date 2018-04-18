const INTERVAL = 20;
const COLORS = ["red", "green", "blue", "yellow"];
const XPOS_MULTIPLIER = [0, 1, 2, 3, 4];

import Square from './square';

class FallBlock extends Square {
  constructor(options) {
    super(options);
    this.fallSpeed = options.fallSpeed;

    //if don't have this check, score or lives would increment too many times
    //because the block stays on the ground for a certain amount of time
    this.firstTouchGround = false;

    this.fall(this.fallSpeed);
  }

  draw(ctx) {
    if(this.color === "red") {
      this.drawBone(ctx);
    } else if(this.color === "blue") {
      this.drawCarrot(ctx);
    }
    else {
      super.draw(ctx);
    }
  }

  drawBone(ctx) {
    let image = new Image();
    image.src = "assets/images/Dog-bone.png";

    ctx.drawImage(image,0,0,200,200,this.xPos,this.yPos,50,50);
  }
  drawCarrot(ctx) {
    let image = new Image();

    image.src = "assets/images/Rabbit-carrot.png";

    ctx.drawImage(image,0,0,200,200,this.xPos,this.yPos,50,50);
  }


  fall(fallSpeed) {
    setInterval( () => {

      if(this.yPos + this.height === this.canvasHeight) {
        this.yPos = -(this.height) * 2;
        this.xPos = this.width * XPOS_MULTIPLIER[Math.floor(Math.random() * XPOS_MULTIPLIER.length)];
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];

      } else {
        this.yPos += fallSpeed;

        this.firstTouchGround = false;

      }
    }, INTERVAL);
  }
}

export default FallBlock;
