const buttonColours = ["red", "blue" , "green" , "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var UserChosenColour;
var started = false;

$(document).on("keypress",function(e) {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});



    $(".btn").on("click",function(){

        UserChosenColour = $(this).attr("id");
        userClickedPattern.push(UserChosenColour);
        PlaySound(UserChosenColour);
        animatePress(UserChosenColour);
        GameLogic(userClickedPattern.length-1);
       
       });








function nextSequence(){


    userClickedPattern = [];  
    var randomNumber = Math.floor(Math.random()*4);
    gamePattern.push(buttonColours[randomNumber]);
    var randomButton = $("#"+buttonColours[randomNumber]);
    randomButton.fadeOut(100).fadeIn(100);
    PlaySound(buttonColours[randomNumber]);
    level++;
    $("h1").text("Level" + " " + level);
    
}

function PlaySound(name){
    var audio  = new Audio("name+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");

    setTimeout(() => {
        $("#"+currentColour).removeClass("pressed");
    },50);
}



function GameOver(){
    $("body").addClass("game-over");

    setTimeout(() =>{
        $("body").removeClass("game-over");
    },100);
    var audio  = new Audio("wrong.mp3");
    audio.play();
    $("h1").text("Press A Key to Start");
    StartOver();
}


function GameLogic(currentlevel){
        if(userClickedPattern[currentlevel] == gamePattern[currentlevel]){
           if(userClickedPattern.length == gamePattern.length){
            setTimeout(nextSequence,1000);
           }
        }
        else{
        GameOver();
        }
    }
    
   



function StartOver(){
level = 0;
gamePattern = [];
started = false;
}
