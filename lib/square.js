//parent class of all the square elements (player and falling squares)

class Square {
 constructor(options) {
   this.xPos = options.xPos;
   this.yPos = options.yPos;
   this.color = options.color;
   this.width = options.width;
   this.height = options.height;
   this.canvasWidth = options.canvasWidth;
   this.canvasHeight = options.canvasHeight;
 }


   draw(ctx) {
     ctx.beginPath();
     ctx.rect(this.xPos, this.yPos, this.width, this.height);
     ctx.fillStyle = this.color;
     ctx.strokeStyle = "black";
     ctx.lineWidth = 5;
     ctx.stroke();
     ctx.fill();
     ctx.closePath();
   }

}

export default Square;
