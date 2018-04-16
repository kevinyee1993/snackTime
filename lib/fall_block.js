const FALL_INCREMENT = 50;
const COLORS = ["red", "green", "blue", "yellow"];
const XPOS_MULTIPLIER = [0, 1, 2, 3, 4];

import Square from './square';

class FallBlock extends Square {
  constructor(options) {
    super(options);
    this.fallSpeed = options.fallSpeed;
    // console.log(this.fallSpeed);
    // requestAnimationFrame(this.fall);

    this.fall(this.fallSpeed);
    // setTimeout(this.fall(FALL_INCREMENT), 2000);

  }

  //get these blocks to fall in a discrete way not fluidly
  //can get back to this later
  fall(fallSpeed) {
    setInterval( () => {

      if(this.yPos + this.height >= this.canvasHeight) {
        this.yPos = 0;
        this.xPos = this.width * XPOS_MULTIPLIER[Math.floor(Math.random() * XPOS_MULTIPLIER.length)];
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      } else {
        this.yPos += FALL_INCREMENT;
      }
    }, fallSpeed);
  }
}

export default FallBlock;
