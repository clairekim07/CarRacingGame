/*class Form {
    constructor() {
      
    }
  
    display(){
      var title = createElement('h2')
      title.html("Car Racing Game");
      title.position(200, 100);
      
      var input = createInput("Name");
      var button = createButton('Play');
      
      input.position(350,110);
      button.position(450,150);
        
      //defining a function while calling it
        button.mousePressed(function(){
        input.hide();
        button.hide();
  
        var name = input.value();
        
        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount);
        var greeting = createElement('h3');
        greeting.html("Hello " + name )
        greeting.position(130, 160)
      });
  
    }
  }*/

  class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("Car Racing Game");
      title.position(500, 120);
  
      this.input.position(500, 250);
      this.button.position(550, 290);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(130, 100);
      });
  
    }
  }
  

 
