var database;
var ball;
var game;
var gameState = 0;
var allPlayers = 0;
var player, playerCount = 0;
var form;
var car1, car2, car3, car4;
var cars;

//var showError;
function setup(){
    database = firebase.database();
    //console.log(database);
    createCanvas(displayWidth-900, displayHeight-400);
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    background("white");  
    if(playerCount === 4){
        game.update(1);
    }
    if(gameState === 1){
        clear();                 
        game.play(); 
    }
}


