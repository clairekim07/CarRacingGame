var database;
var ball;
var game;
var gameState = 0;
var allPlayers = 0;
var player, playerCount = 0;
var form;
var car1, car2, car3, car4;
var car1img, car2img, car3img, car4img;
var cars, track1, track2, ground;

function preload(){
    car1img = loadImage("images/car1.png");
    car2img = loadImage("images/car2.png");
    car3img = loadImage("images/car3.png");
    car4img = loadImage("images/car4.png");
    ground = loadImage("images/ground.png");
    track1 = loadImage("images/track.jpg");
    track2 = loadImage("images/track.png");
}

//var showError;
function setup(){
    database = firebase.database();
    //console.log(database);
    createCanvas(displayWidth-500, displayHeight-200);
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
    if(gameState === 2){                
        game.end(); 
    }
    
    
}


