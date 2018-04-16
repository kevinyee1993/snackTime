const FALL_INCREMENT = 50;

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
      } else {
        this.yPos += FALL_INCREMENT;
      }
    }, fallSpeed);
  }
}

export default FallBlock;
