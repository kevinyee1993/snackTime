class Player {
  constructor(options) {
    this.xPos = options.xPos;
    this.yPos = options.yPos;
    this.color = options.color;
    this.width = options.width;
    this.height = options.height;

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

  keyDownHandler() {
    console.log("Hello key down pressed");
  }

  keyUpHandler() {
    console.log("Hello key up pressed");
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
