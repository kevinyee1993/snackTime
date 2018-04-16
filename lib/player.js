class Player {
  constructor(options) {
    this.xPos = options.xPos;
    this.yPos = options.yPos;
    this.color = options.color;
    this.width = options.width;
    this.height = options.height;

    this.keyDownHandler = this.keyDownHandler.bind(this);

    document.addEventListener("keydown", this.keyDownHandler, false);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.xPos, this.yPos, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  keyDownHandler(e) {
    if(e.keyCode === 39) {
      this.xPos += this.width;
    } else if (e.keyCode === 37) {
      this.xPos -= this.width;
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
