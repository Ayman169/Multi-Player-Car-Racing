var database,backImg;
var form,player,game;
var gamestate = 0;
var playerCount;

function setup(){
    createCanvas(600,600);
    database = firebase.database();

    game=new Game();
    game.getState();
    game.start();
}
function draw(){
    background("Blue")
}