class Player {
  constructor(options) {
    this.xPos = options.xPos;
    this.yPos = options.yPos;
    this.color = options.color;
    this.width = options.width;
    this.height = options.height;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.xPos, this.yPos, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

}

export default Player;
