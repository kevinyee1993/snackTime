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

    document.addEventListener("keydown", this.keyDownHandler, false);
  }


  keyDownHandler(e) {
    if(e.keyCode === RIGHT_CURSOR &&
      ((this.xPos + this.width) < this.canvasWidth)) {
      this.xPos += this.width;
    } else if (e.keyCode === LEFT_CURSOR && (this.xPos > 0)) {
      this.xPos -= this.width;
    } else if (e.keyCode === A) {
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
//
// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);
//
// function keyDownHandler() {
//
// }
//
// function keyUpHandler() {
//
// }

export default Player;
