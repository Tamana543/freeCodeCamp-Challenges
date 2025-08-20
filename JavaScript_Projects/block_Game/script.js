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
const player = new Player();
const startGame = ()=>{
     canvas.style.display = "block";
     startScreen.style.display = "none"
     animate()

}
startBtn.addEventListener('click',startGame)
const animate = ()=>{
     requestAnimationFrame(animate)//requestAnimationFrame() web API, takes in a callback and is used to update the animation on the screen. The animate function will be responsible for updating the player's position and continually drawing it on the canvas.
     // first clear the canvas to move the player
     ctx.clearRect(0, 0, canvas.width, canvas.height)
     // next update the player's position
     player.update()

     //To manage the player's movement in the game, you will need to monitor when the left and right arrow keys are pressed.
     // increasing or decreasing a player's velocity based on if they move to the left or right of the screen.
     if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
          player.velocity.x  = 5
     }else if(keys.leftKey.pressed && player.position.x > proportionalSize(100)){
 player.velocity.x  = -5
}else{
          player.velocity.x  = 0

     }
     
};
const keys = {
     rightKey : {
          pressed : false
     },
     leftKey : {
          pressed : false
     }
};
const movePlayer=( key, xVelocity, isPressed)=>{
if(!isCheckpointCollisionDetectionActive){
player.velocity.x  = 0
player.velocity.y  = 0
return
}
switch (key) {
     case "ArrowLeft":
         keys.leftKey.pressed = isPressed
          if(xVelocity === 0 ){
                player.velocity.x=xVelocity 
          }
          player.velocity.x -= xVelocity
          break;
     
          case "ArrowUp" :
          player.velocity.y -=8
          case " " : 
          player.velocity.y -=8
          case "Spacebar" : 
          player.velocity.y -=8
          break;
          case "ArrowRight" : 
          keys.rightKey.pressed = isPressed
          if(xVelocity===0){
               player.velocity.x = xVelocity
          }
          player.velocity.x +=xVelocity
          break;
          
     default:
          break;
}
}
window.addEventListener("keydown",({key})=>{
   movePlayer(key,8,true)  
})
window.addEventListener('keyup',({key})=>{
   movePlayer(key,0,false)  
})
class Platform {
constructor(x,y){
// omit the property value if it is the same as the property name.
this.position = {
     x,y
},
this.width = 200,
this.height = proportionalSize(40)//use the proportionalSize() function to make sure the height is proportional to the screen size.
}
}