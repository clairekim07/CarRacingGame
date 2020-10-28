class Game{
    //get the state of the game and update to database
    //gives properties to objects and stores them
    constructor(){}
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
           player.getCount();
           form = new Form();
           form.display();
        }
    }
 }