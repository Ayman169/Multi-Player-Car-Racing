var database,backImg;
var form,player,game;
var gamestate = 0;
var playerCount;
var allPlayers;
var cars,car1,car2,car3,car4;
var track,c1,c2,c3,c4;

function preload(){
    c1=loadImage(C:/Users/drhus/OneDrive/Desktop/Whitehat/Multi-Player car racing/images)
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
}