class Form{


    constructor(){

       this.title = createElement("h2");
       this.input = createInput("name");
       this.button = createButton("play");
       this.greeting = createElement("h3");

    }

    display(){

        this.title.html("Car Racing Game");
        this.title.position(150,150);
        this.input.position(170,250);
        this.button.position(220,315);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html(" hello "+player.name);
            this.greeting.position(250,250);
        })

    }

    hide(){

        this.input.hide();
        this.button.hide();
        this.greeting.hide();

    }

}
