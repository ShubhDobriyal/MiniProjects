var numofSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector('h1');
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){
   setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(var i = 0; i< modeButtons.length; i++){
        modeButtons[i].addEventListener('click', function(){
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
    
            this.textContent === 'Easy' ? numofSquares = 3 : numofSquares = 6;
    
            reset();
        });
    }
}

function setupSquares(){
    for (var i  = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener('click', function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color with picked color
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again";
            }
            else{
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}


function reset(){
    //generate all new colors
    colors = generateRandomColors(numofSquares);
    //pick a new random color
    pickedColor = pickColor();
    //chnage colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i  = 0; i < squares.length; i++) {
        if(colors[i]){
                squares[i].style.display = "block";
                squares[i].style.backgroundColor = colors[i];
            }
            else{
                squares[i].style.display = 'none';
            }
       
    }
    resetButton.textContent = "New Colors";
    h1.style.backgroundColor = 'steelblue';
    messageDisplay.textContent = "";

}


resetButton.addEventListener('click', function(){
    reset();
});


colorDisplay.textContent = pickedColor;



function changeColor(color){
    //loop through all the squares
    for (var i  = 0; i < squares.length; i++) {
        //chnage each color to match given color
        squares[i].style.backgroundColor = color;
    }   
}

function pickColor(){
    //Pick a random number 
    var random = Math.floor(Math.random() * colors.length); //This is basically selecting a random number basedon the number of items in the colors array
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num ramdom colors to array
    for(var i=0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return the array
    return arr;
}

function randomColor(){
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256); //we are doing here muliply by 256 because we need 255 to be the largest number
    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", " + g + ", " + b + ")";//whitespace is added after comma as css adds white space in rgb colors after comma and if not added the comparision will fail 

}
