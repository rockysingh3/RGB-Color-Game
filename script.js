var squares = document.querySelectorAll(".square");
var displaying_picked_color = document.querySelector("#displaying_picked_color")
var message_display = document.querySelector("#message")
var h1 = document.querySelector("h1");
var reset_button = document.querySelector("#reset");
var easy_btn = document.querySelector("#easy_btn");
var hard_btn = document.querySelector("#hard_btn");


var number_of_squares = 6;
// assinging six colors
var colors = generate_random_colors(number_of_squares);
var pickedcolor = pickcolor();  // The color that game will pick as goal color
displaying_picked_color.textContent = pickedcolor;

// This eventlistener is for th easy button
easy_btn.addEventListener("click", function(){
  hard_btn.classList.remove("selected_on_button");
  easy_btn.classList.add("selected_on_button");
  number_of_squares = 3;
  colors = generate_random_colors(number_of_squares);
  pickedcolor = pickcolor();
  message_display.textContent = pickedcolor;
  for(var i=0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});
// This event listener is for the hard button
hard_btn.addEventListener("click", function(){
  hard_btn.classList.add("selected_on_button");
  easy_btn.classList.remove("selected_on_button");
  number_of_squares = 6;
  colors = generate_random_colors(number_of_squares);
  pickedcolor = pickcolor();
  message_display.textContent = pickedcolor;
  for(var i=0; i < squares.length; i++){
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
  }
});
// This event listener is for the play again button
reset_button.addEventListener("click", function(){
  // generate all new colors
  colors = generate_random_colors(number_of_squares);
  // pick new random color from an array
  pickedcolor = pickcolor();
  message_display.textContent = pickedcolor;
  this.textContent = "New colors";

  message_display.textContent = "";
  // change colors of squares
  for (var i =0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
})

// We'r looping around the rgb colors and assigning them to the squares
for(var i = 0; i< squares.length; i++){
    squares[i].style.background = colors[i];
    // add the click listener
    squares[i].addEventListener("click", function(){
    // grab color of clicked squre
    var clicked_color = this.style.background;
    // compare color pickedColor
    if(clicked_color === pickedcolor){
      // if the right color is picked
      message_display.textContent = "Correct";
      all_square_same_color(clicked_color);
      h1.style.background = clicked_color;
      reset_button.textContent = "Play Again";
    }else {
      // this turns the square color into the background color
      this.style.background = "#232323";
      // if the wrong color is picked
      message_display.textContent = "Try Again";
    }
  });
}

// This function makes all the squares the same colors in the end
function all_square_same_color(color){
  // loop through all squares
  for(var i=0; i<squares.length; i++){
    // change each color
    squares[i].style.background = color;
  }
}

// This function picks a random color for the squares
function pickcolor(){
  var random_number = Math.floor(Math.random() * colors.length )
  return colors[random_number];
}

// This function loops through random colors
function generate_random_colors(num){
  //make an array
  var arr = [];
  for(var i=0; i < num; i++){
    //get random color and puch into arr
    arr.push(random_color())
  }
  // returns an arr
  return arr;
}

function random_color(){
  // pick a "red" from 0 to 255
  var red = Math.floor(Math.random() * 256); //this picks a random number between 0 and 255
  // pick "green" form 0 to 255
  var green = Math.floor(Math.random() * 256);
  // pick a "blue" form 0 to 255
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
