/*class Game{
    //get the state of the game and update to database
    //gives properties to objects and stores them
    constructor(){

    }
    //reading from database
     getState(){
        var gameStateRef = database.ref('gameState');
        //listening function when called ".on" from the database
        gameStateRef.on('value',function(data){
            gameState = data.val();
        });
        
    }
    //updating the state
    update(state){
        database.ref('/').update({
            gameState: state
        });

        }
   
//wait state
async wait(){
        if(gameState === 0){ 
        //() invoking constructor
           player = new Player();
           var playerCountRef = await database.ref('playerCount').once("value");
           if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
           }
           form = new Form();
           form.display();
        }
    }
     play(){
        form.hide();
        fill("blue");
        noStroke();
        textSize(15);
        text("Game Starts",120,100);
        
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var display_position = 130;
            display_position += 20;
            if(plr === "player" + player.index){
                fill("red");
            }else{
                fill("black");
            }
            text(allPlayers[plr].name + " " + allPlayers[plr].distance, 120,display_position);
            
        }
        if(keyDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 30;
            player.update();

        }
        
    }

 }*/

 class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }

      car1 = createSprite(300,250,50,50);
      car2 = createSprite(400,250,50,50);
      car3 = createSprite(500,250,50,50);
        car4 = createSprite(600,250,50,50);

        cars = [car1,car2,car3,car4];
    }
  
    play(){

      form.hide();
      textSize(30);
      text("Game Start", 120, 100)

      Player.getPlayerInfo();

      if(allPlayers !== undefined){
        //var display_position = 13console.log("hi");
         //car indentification index
        var index = 0;

        // position of the car
        var x = 0;
        var y;

       //plr is an iterator for array var allPlayers
        for(var plr in allPlayers){
          index = index + 1;
          //console.log(index);
          x = x + 200;
    
          y = displayHeight - allPlayers[plr].distance;
          //car indentification index
          cars[index - 1].x = x;
          cars[index - 1].y = y;
  
          
          if(index === player.index){
            console.log(player.index);
            cars[index-1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index - 1].y ;
  
          }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }
    }
    drawSprites();

  }
}