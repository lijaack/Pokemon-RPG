$( document ).ready(newGame());


function newGame(){
    var pikachuHP = ($("#pikachu").attr("hp"));
    $("#pikachu-hp").text(pikachuHP);
    var charmanderHP = ($("#charmander").attr("hp"));
    $("#charmander-hp").text(charmanderHP);
    var bulbasaurHP = ($("#bulbasaur").attr("hp"));
    $("#bulbasaur-hp").text(bulbasaurHP);
    var squirtleHP = ($("#squirtle").attr("hp"));
    $("#squirtle-hp").text(squirtleHP);
    var yourPokemonAttack = 0;
    var opponentPokemonAttack = 0;
    var yourPokemonHP = 0;
    var opponentPokemonHP = 0;
    var clonePokemon="";
    var pokemonKills=0;
    $("#nextMoves").text("choose your pokemon!");
    $("#yourAttackMessage").text("Defeat 3 Pokemons to win!");

    // if button is clicked, check if battle ares are occupied, then move the pokemon
    $(".button").click(function(){
        if ($("#yourPokemon").children().length===0){         
            // $(this).removeClass("pokemonimg button")
            clonePokemon=$(this).closest("div").clone();
            clonePokemon.children("img").attr("style","border:green solid 2px");
            ($(this).parent("div")).attr("style","display:none");
            $("#yourPokemon").append(clonePokemon);
            $("#yourPokemon").children().children("img").removeClass("pokemonimg button");
            $("#nextMoves").text("choose your opponent pokemon!");
            yourPokemonHP = ($("#yourPokemon").children().children("img").attr("hp"))
            yourPokemonAttack = ($("#yourPokemon").children().children("img").attr("attack"))

        }
        else if($("#opponentPokemon").children().length===0){
            // $(this).removeClass("pokemonimg button")
            clonePokemon=$(this).closest("div").clone();
            clonePokemon.children("img").attr("style","border:red solid 2px");
            ($(this).parent("div")).attr("style","display:none");
            $("#opponentPokemon").append(clonePokemon);
            $("#opponentPokemon").children().children("img").removeClass("pokemonimg button");
            $("#nextMoves").text("click attack to battle!");
            opponentPokemonHP = ($("#opponentPokemon").children().children("img").attr("hp"))
            opponentPokemonAttack = ($("#opponentPokemon").children().children("img").attr("attack"))

        }
    });
    // pokemons attack each other one time if attack button is clicked
    $("#attackButton").click(function(){
        console.log (($("#yourPokemon").children().children("img").attr("attack")))
        console.log (($("#yourPokemon").children().children("img").attr("hp")))
        
        if (($("#yourPokemon").children().length===1) && $("#opponentPokemon").children().length===1 && yourPokemonHP>0){
            var yourPokemonName = $("#yourPokemon").children().children("img").attr("name");
            var opponentPokemonName = $("#opponentPokemon").children().children("img").attr("name");
            yourPokemonHP = yourPokemonHP - opponentPokemonAttack;
            opponentPokemonHP = opponentPokemonHP - yourPokemonAttack;
            $("#yourPokemon").children().children("P").text(yourPokemonHP);
            $("#opponentPokemon").children().children("P").text(opponentPokemonHP);
            $("#yourAttackMessage").text(yourPokemonName + " attacks " + opponentPokemonName + " for " + yourPokemonAttack + " damage.")
            $("#opponentAttackMessage").text(opponentPokemonName + " attacks " + yourPokemonName + " for " + opponentPokemonAttack + " damage.")
            if (opponentPokemonHP<= 0){
                $("#opponentPokemon").empty();
                pokemonKills++;
                $("#nextMoves").text("choose your next opponnent!");
            }
            if (pokemonKills===3){
                $("#nextMoves").text("You Win!")
            }
            if(yourPokemonHP<=0) {
                $("#nextMoves").text("You Lose.")
            }
            yourPokemonAttack = Math.floor(yourPokemonAttack * (Math.random()+0.8));
            console.log(yourPokemonAttack);
        }

    });
    // if new game button is clicked, reset everything
    $("#newGameButton").click(function(){
        var pikachuHP = ($("#pikachu").attr("hp"));
        $("#pikachu-hp").text(pikachuHP);
        var charmanderHP = ($("#charmander").attr("hp"));
        $("#charmander-hp").text(charmanderHP);
        var bulbasaurHP = ($("#bulbasaur").attr("hp"));
        $("#bulbasaur-hp").text(bulbasaurHP);
        var squirtleHP = ($("#squirtle").attr("hp"));
        $("#squirtle-hp").text(squirtleHP);
        $("#pokemon1").removeAttr("style","display:none");
        $("#pokemon2").removeAttr("style","display:none");
        $("#pokemon3").removeAttr("style","display:none");
        $("#pokemon4").removeAttr("style","display:none");
        $("#yourPokemon").empty();
        $("#opponentPokemon").empty();
        $("#nextMoves").text("choose your pokemon!");
        $("#yourAttackMessage").text("Defeat 3 Pokemons to win!");
        $("#opponentAttackMessage").empty()
        pokemonKills=0;
        var yourPokemonName="";
        var opponentPokemonName="";
    });
}
