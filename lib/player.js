import Square from './square';

const RIGHT_CURSOR = 39;
const LEFT_CURSOR = 37;
const A = 65;
const S = 83;
const D = 68;
const F = 70;

class Player extends Square{
  constructor(options) {
    super(options);

    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.draw = this.draw.bind(this);

    document.addEventListener("keydown", this.keyDownHandler, false);
  }



  //just checking but this works, now need to find out how to do sprites
  draw(ctx) {
    let image = new Image();
    image.src = "assets/images/Dog-sprite-midres.png";
    ctx.drawImage(image,0,0,200,200,this.xPos,this.yPos - 70,this.width,this.width);
    // requestAnimationFrame(this.drawDog);
  }


//change it so that player can loop around
  keyDownHandler(e) {
    if (e.keyCode === RIGHT_CURSOR &&
      ((this.xPos + this.width) >= this.canvasWidth)) {
      this.xPos = 0;
    } else if(e.keyCode === RIGHT_CURSOR &&
      ((this.xPos + this.width) < this.canvasWidth)) {
      this.xPos += this.width;
    }

    else if (e.keyCode === LEFT_CURSOR && (this.xPos <= 0)) {
      this.xPos = this.canvasWidth - this.width;
    }

    else if (e.keyCode === LEFT_CURSOR && (this.xPos > 0)) {
      this.xPos -= this.width;
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
