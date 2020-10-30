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
    }
  
    play(){
      form.hide();
      textSize(30);
      text("Game Start", 120, 100)
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
        var display_position = 130;
        for(var plr in allPlayers){
          if (plr === "player" + player.index)
            fill("red")
          else
            fill("black");
  
          display_position+=20;
          textSize(15);
          text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }
    }
  }