var database,backImg;
var form,player,game;
var gamestate = 0;
var playerCount;
var allPlayers;
var cars,car1,car2,car3,car4;
var track,c1,c2,c3,c4;

function preload(){
    /*c1=loadImage("C:\Users\drhus\OneDrive\Desktop\Whitehat\Multi-PlayerCarRacing\images\car1.png");
    c2=loadImage("C:\Users\drhus\OneDrive\Desktop\Whitehat\Multi-PlayerCarRacing\images\car2.png");
    c3=loadImage("C:\Users\drhus\OneDrive\Desktop\Whitehat\Multi-PlayerCarRacing\images\car3.png");
    c4=loadImage("C:\Users\drhus\OneDrive\Desktop\Whitehat\Multi-PlayerCarRacing\images\car4.png");
    track=loadImage("C:\Users\drhus\OneDrive\Desktop\Whitehat\Multi-PlayerCarRacing\images\track.jpg");
    ground=loadImage("C:\Users\drhus\OneDrive\Desktop\Whitehat\Multi-PlayerCarRacing\images\ground.png");
    */

    c1 = loadImage("images/car1.png");
    c2 = loadImage("images/car2.png");
    c3 = loadImage("images/car3.png");
    c4 = loadImage("images/car4.png");
    track = loadImage("images/track.jpg");
    ground= loadImage("images/ground.png");
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();

    game=new Game();
    game.getState();
    game.start();
}
function draw(){
   if(playerCount === 4){
       game.update(1);
   }
   if(gamestate === 1){
       clear();
       game.play();
   }
   if(gamestate===2){
       game.end();
   }
}