var database,backImg;
var form,player,game;
var gamestate = 0;
var playerCount;
var allPlayers;

function setup(){
    createCanvas(600,600);
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