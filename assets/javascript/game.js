$( document ).ready(function() {
});

var pikachuHP = 100;
$("#pikachu-hp").text(pikachuHP);

var charmanderHP = 100;
$("#charmander-hp").text(charmanderHP);

var bulbasaurHP = 100;
$("#bulbasaur-hp").text(bulbasaurHP);

var squirtleHP = 100;
$("#squirtle-hp").text(squirtleHP);

function pikachu(){
    console.log("hi");
}

$("#pikachu").click(function(){
    $(this).removeClass("pokemonimg");
    var img= $("#pikachu2").clone();
    $("#pikachu2").attr("style","display:none");
    $("#newdiv").append(img);
  });

  $("#bulbasaur").click(function(){
    $(this).removeClass("pokemonimg");
    var img= $("#bulbasaur2").clone();
    $("#bulbasaur2").attr("style","display:none");
    $("#newdiv3").append(img);
  });

  if ( $('#myfav').children().length > 0 ) {
}
