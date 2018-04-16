import Square from './square';

class FallBlock extends Square {
  constructor(options) {
    super(options);
  }

  fall() {
    this.yPos += 2;
  }
}

export default FallBlock;
