import Square from './square';

class FallBlock extends Square {
  constructor(options) {
    super(options);
    this.fallSpeed = options.fallSpeed;
    // console.log(this.fallSpeed);
    // requestAnimationFrame(this.fall);
    this.fall(this.fallSpeed);

  }

  //get these blocks to fall in a discrete way not fluidly
  //can get back to this later
  fall(fallSpeed) {
    this.yPos += fallSpeed;
    console.log(this.yPos);
    setInterval( () => (this.yPos += fallSpeed), 1000);
  }
}

export default FallBlock;
