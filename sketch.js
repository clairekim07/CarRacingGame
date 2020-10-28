var database;
var ball;
var game;
var gameState = 0;
var player, playerCount,form;
//var showError;
function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    game = new Game();
    game.getState();
    game.wait();
}

function draw(){
    background("white");  
}


