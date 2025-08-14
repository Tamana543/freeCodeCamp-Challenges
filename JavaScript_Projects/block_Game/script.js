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
     
} ;