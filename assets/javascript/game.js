$( document ).ready(function() {

});

function pikachu(){
    console.log("hi");
}

$("#pikachu").click(function(){
    var img= $(this).clone();
    $(this).attr("style","display:none");
    $("#newdiv").append(img.removeAttr("class","pokemonimg"));
  });