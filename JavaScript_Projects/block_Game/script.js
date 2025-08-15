const startBtn = document.getElementById('start-btn');
const canvas = document.getElementById('canvas');
const startScreen  = document.querySelector('.start-screen');
const checkpointScreen = document.querySelector('.checkpoint-screen');
const checkpointMessage = document.querySelector('.checkpoint-screen > p');

/**
 The Canvas API can be used to create graphics in games using JavaScript and the HTML canvas element.

You will need to use the getContext method which will provide the context for where the graphics will be rendered.
 */
const ctx = canvas.getContext("2d");
canvas.width = innerWidth
canvas.height = innerHeight
const gravity =0.5 ;
let isCheckpointCollisionDetectionActive = true;
/**
 As you are designing the game, you will need to make sure that the size of the elements in the game are responsive and adapt to different screen sizes.
 */
const proportionalSize =(size)=>{
     return innerHeight<500 ? Math.ceil((size / 500) * innerHeight) : size
} ;
class Player {
     constructor() {
          this.position = {
               x : proportionalSize(10),
               y:proportionalSize(400)
          }

          this.velocity = {
               x : 0,
               y:0
          }

          // width and height properties of your class to be proportional to the height of the screen.
          this.width =proportionalSize(40)
          this.height = proportionalSize(40)

     }
     draw(){
        // to set canvas color
        ctx.fillStyle =   "#99c9ff";
     //    to create the player's shape by calling the fillRect() method on the ctx object which you instantiated earlier.
     ctx.fillRect(this.position.x, this.position.y, this.width,this.height)
     }
     update(){
          this.draw()
           this.position.x += this.velocity.x;
           this.position.y += this.velocity.y;
           if (this.position.y + this.height  + this.velocity.y <= canvas.height) {
             if (this.position.y < 0) {
               this.position.y = 0;
               this.gravity = this.velocity.y;
               this.velocity.y = gravity;
              
             }  
             this.velocity.y +=gravity
           }else{
               this.velocity.y = 0
           }
           if(this.position.x < this.width){
             this.position.x = this.width
           }
           if(this.position.x >= canvas.width - this.width * 2){
               this.position.x = canvas.width - this.width * 2
           }
     }
}