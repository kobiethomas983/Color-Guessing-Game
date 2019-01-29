var colors = colorGen(6);
var squares = document.querySelectorAll(".squares");
var rightColor = randColor();
var answer = document.getElementById('message');
var colorDisplay = document.getElementById('title');
var h1 = document.querySelector("h1");
colorDisplay.textContent = rightColor;
var New = document.getElementById('reset');
var hard = document.getElementById('hardBtn');
var easy = document.getElementById('easyBtn');
var isSix = true;
//answer.style.color = "black";

//the user is going to click on a box to
//see if it is the right color
for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  //guess color
  squares[i].addEventListener("click", function(){
        var userPick = this.style.backgroundColor;
        //check to see if user picked right color
        if(userPick === rightColor){
          answer.textContent = "Correct";
          Setall();
          h1.style.backgroundColor = rightColor;
          New.textContent = "Play again?"
        }else {
          //when they click on the wrong one the
          //box disappears and text says "try again"
          this.style.backgroundColor = "#383838";
          answer.textContent = "Try again";
      }
  });

};

easy.addEventListener("click", function(){
  easy.classList.add("Selected");
  hard.classList.remove("Selected");
  isSix = false;
  colorSetter();
  reset();
});
hard.addEventListener("click", function(){
  easy.classList.remove("Selected");
  hard.classList.add("Selected");
  isSix = true;
  colorSetter();
  reset();
});

//this is if the user clicks on new color
New.addEventListener("click", function(){
  colorSetter();
  reset();
});

//this sets all of the colors to the right color answer
function Setall(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = rightColor;
  }
}

//this is chooses a random color out of the colors in the array
function randColor(){
  var rand = Math.floor(Math.random() * colors.length);
  return colors[rand];
}

function colorGen(number){
  //create an array
  //generates random colors
 //store the elements inside of the array
 var array = [];
 for (var i = 0; i < number; i++) {
   //call another function to generate the colors
   //push color into array number times
   array.push(Color());
 };
 return array;
}

function Color(){
  //create a random color for green red and blue;
  // rgb(red , green , blue)

  red = Math.floor(Math.random()*256);
  green = Math.floor(Math.random()*256);
  blue = Math.floor(Math.random()*256);

  return "rgb(" + red + ", " + green + ", "+ blue + ")";
}

//this is going to set all the squares to new colors for me
function colorSetter(){
  if(isSix){
    colors = colorGen(6);
    for(var i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = colors[i];
    };
    rightColor = randColor();
  }
  else{
      colors = colorGen(3);
      for (var i = 0; i < squares.length; i++) {
          if(i <= 2){
          squares[i].style.backgroundColor = colors[i];
        }
        else{
          squares[i].style.backgroundColor = "#383838";
        }
    };
    rightColor = randColor();
  }
}

function reset(){
  New.textContent = "New Colors";
  answer.textContent = "";
  h1.style.backgroundColor = "steelblue";
  colorDisplay.textContent = rightColor;
}
