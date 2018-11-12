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

    $("#nextMoves").text("choose your pokemon!");

    // if btn is clicked, check if battle ares are occupied, then move the pokemon
    $(".btn").click(function(){
        if ($("#yourPokemon").children().length===0){         
            $(this).removeClass("pokemonimg btn")
            clonePokemon=$(this).closest("div").clone();
            ($(this).parent("div")).remove();
            $("#yourPokemon").append(clonePokemon);    
            $("#nextMoves").text("choose your opponent pokemon!");
            yourPokemonHP = ($("#yourPokemon").children().children("img").attr("hp"))
            yourPokemonAttack = ($("#yourPokemon").children().children("img").attr("attack"))

        }
        else if($("#opponentPokemon").children().length===0){
            $(this).removeClass("pokemonimg btn")
            clonePokemon=$(this).closest("div").clone();
            ($(this).parent("div")).remove();
            $("#opponentPokemon").append(clonePokemon);
            $("#nextMoves").text("click attack to battle!");
            opponentPokemonHP = ($("#opponentPokemon").children().children("img").attr("hp"))
            opponentPokemonAttack = ($("#opponentPokemon").children().children("img").attr("attack"))

        }
    });
    // pokemons attack each other one time if attack button is clicked
    $("#attackButton").click(function(){
        console.log (($("#yourPokemon").children().children("img").attr("attack")))
        console.log (($("#yourPokemon").children().children("img").attr("hp")))
        
        if (($("#yourPokemon").children().length===1) && $("#opponentPokemon").children().length===1){
            yourPokemonHP = yourPokemonHP - opponentPokemonAttack;
            console.log(yourPokemonHP)
        }

    });
   
    
    
    
    
    // var yourPokemonAttack = ($("#yourPokemon").children().children("img").attr("attack"));
    // var opponentPokemonAttack = ($("#opponentPokemon").children().children("img").attr("attack"));
    // var yourPokemonHP = ($("#yourPokemon").children().children("img").attr("hp"));
    // var opponentPokemonHP = ($("#opponentPokemon").children().children("img").attr("hp"));



    // check if "yourpokemon" or "opponentpokemon" area is occupied 
    // function movePokemon(){
    //     if ($("#yourPokemon").children().length===0){   
    //         $("originalPokemon").attr("style","display:none");
    //         $("#yourPokemon").append(clonePokemon);

    //         moveToBattle();
    //     }
    //     else if($("#opponentPokemon").children.length===1){
    //         console.log("i am 2");
    //     }
    // }

    // function moveToBattle(){
    //     // console.log(mom);
    //     // $(this).removeClass("btn");
    //     // var clickedPokemon =$(this).clone();
    // }



    // $("#pokemon1").click(function(){
    //     $(this).removeClass("pokemonimg");
    //     var img= $("#pokemon1").clone();
    //     $("#pokemon1").attr("style","display:none");
    //     $("#yourPokemon").append(img);
    // });

    // $("#bulbasaur").click(function(){
    //     $(this).removeClass("pokemonimg");
    //     var img= $("#bulbasaur2").clone();
    //     $("#bulbasaur2").attr("style","display:none");
    //     $("#newdiv3").append(img);
    // });

    // if ( $('#myfav').children().length > 0 ) {
    // }
}
