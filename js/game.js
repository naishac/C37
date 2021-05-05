  class Game {
    
    constructor(){



    }

    getState(){

        database.ref("gameState").on("value",function(data){
            gameState= data.val()
        })

    }

    update(state){
        database.ref("/").update({
            gameState: state
        })
    }

    async start(){

        if(gameState === 0){
            player = new Player();
            var playerCountref = await database.ref("playerCount").once("value")
            if(playerCountref.exists()){
                playerCount = playerCountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }

    }

    play(){

        form.hide();
        textSize(25);
        text("game started",120,120);
        Player.getPlayerInfo();
        if(allPlayers != undefined){
            var displayPosition = 130;  
            for(var plr in allPlayers){
                if(plr ==="player"+ player.index){
                    fill("red")
                }

                else{
                    fill("black")
                }

                displayPosition += 20;
                textSize(30);
                text(allPlayers[plr].name+":"+allPlayers[plr].distance,200,displayPosition);

            }
        }

        if(keyDown(UP_ARROW)&& player.index != null){
            player.distance += 50;
            player.update();
        }

    }

  }