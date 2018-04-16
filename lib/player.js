class Player {
  constructor(options) {
    this.xPos = options.xPos;
    this.yPos = options.yPos;
    this.color = options.color;
    this.width = options.width;
    this.height = options.height;

    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);

    document.addEventListener("keydown", this.keyDownHandler, false);
    document.addEventListener("keyup", this.keyUpHandler, false);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.xPos, this.yPos, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  //have to do game loop to get this to update
  keyDownHandler() {
    this.xPos += 5;
    console.log(this.xPos);
  }

  keyUpHandler() {

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
