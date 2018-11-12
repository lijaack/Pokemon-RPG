$( document ).ready(newGame());


function newGame(){
    var pikachuHP = 120;
    $("#pikachu-hp").text(pikachuHP);
    var charmanderHP = 150;
    $("#charmander-hp").text(charmanderHP);
    var bulbasaurHP = 140;
    $("#bulbasaur-hp").text(bulbasaurHP);
    var squirtleHP = 130;
    $("#squirtle-hp").text(squirtleHP);
    var yourPokemonHP = 0;
    var opponentPokemonHP = 0;
    var clonePokemon="";

    $("#nextMoves").text("choose your pokemon!");

    // if btn is clicked, check if battle ares are occupied, then move the pokemon
    $(".btn").click(function(){
        if ($("#yourPokemon").children().length===0){
            console.log(this);         
            $(this).removeClass("pokemonimg btn")
            clonePokemon=$(this).closest("div").clone();
            ($(this).parent("div")).attr("style", "display:none");
            $("#yourPokemon").append(clonePokemon);    
            $("#nextMoves").text("choose your opponent pokemon!");

        }
        else if($("#opponentPokemon").children().length===0){
            $(this).removeClass("pokemonimg btn")
            clonePokemon=$(this).closest("div").clone();
            ($(this).parent("div")).attr("style", "display:none");
            $("#opponentPokemon").append(clonePokemon);
            $("#nextMoves").text("click attack to battle!");

        }
    });
   
    
    
    
    
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
