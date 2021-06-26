
var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var playerPattern=[];
var level=0;

function changeText()
{
  if($(".start").html("RESTART"))
  {
    $("h1").html("HAVE FUN PLAYING");
    $("body").css("background-color", "#222831");
  }
  $(".start").html("Level "+level);

  setTimeout(nextSequence(),3000);
}

// incrementing levels
function changeLevel()
{
  level++;
  $(".start").html("Level "+level);
}

// creating the gamePattern
function nextSequence()
{
  var randomNumber=Math.floor((Math.random()*4));
  var randomColor=buttonColors[randomNumber];
  gamePattern.push(randomColor);
  showSequence(gamePattern[gamePattern.length - 1]);
  changeLevel();
  playerPattern=[];
}

// adds sounds and animation to color blocks
function showSequence(element)
{
  switch (element)
  {
    case "red":
      var rAudio=new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
      $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      rAudio.play();
      break;
    case "blue":
      var bAudio= new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
      $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      bAudio.play();
      break;
    case "yellow":
      var yAudio=new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
      $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      yAudio.play();
      break;
    case "green":
      var gAudio=new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")
      $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      gAudio.play();
      break;
  }
}

// creating the playerPattern
$(".button").click(function()
{
  var userClick=$(this).attr("id");
  switch (userClick)
  {
    case ("red"):
      playerPattern.push("red");
      showSequence("red");
      break;
    case ("blue"):
      playerPattern.push("blue");
      showSequence("blue");
      break;
    case ("yellow"):
      playerPattern.push("yellow");
      showSequence("yellow");
      break;
    case ("green"):
      playerPattern.push("green");
      showSequence("green");
      break;
  }
  checkPattern(playerPattern.length-1);
}
)

// checking if playerPattern and gamePattern are equal
function checkPattern(indexOfArray)
{
  if(playerPattern[indexOfArray] === gamePattern[indexOfArray])
  {
    if(gamePattern.length === playerPattern.length)
    {
      setTimeout(function () {nextSequence();}, 2000);
    }
  }
  else
  {
    setTimeout(function ()
    {
      $("body").css("background-color", "#801336");
      var wrong= new Audio("https://www.soundjay.com/misc/sounds/fail-buzzer-01.mp3");
      wrong.play();
      $(".button .score").hide();
      $("h1").text("Game Over");
      $(".start").html("RESTART");}, 1000)
    level=0;
    gamePattern = [];
  }
}
