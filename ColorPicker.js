var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var pickedColor = pickColor();
var messageDisplay = document.querySelector('#message');
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove('selected');
	easyBtn.classList.add('selected');
	numOfSquares = 3;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
})
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove('selected');
	hardBtn.classList.add('selected');
	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "none";
	}
})


resetButton.addEventListener('click', function() {
	//generate all new color
	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
	//change the color of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

// runs through all the squares 
for (var i = 0; i < squares.length; i++) {
	// add inital color to squares
	squares[i].style.backgroundColor=colors[i];
	// add click listenrs to squares
	squares[i].addEventListener('click', function() {
		//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;
		//compare clickedColor to pickedColor
		if(clickedColor===pickedColor){
			messageDisplay.textContent="Correct";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor); //changing them all to the same color
			h1.style.backgroundColor = clickedColor;
		}else{
			//this will fade the wrong color to background color
			this.style.backgroundColor= "#232323";
			messageDisplay.textContent="Try Again!"
		}
	});
}	
// if the clickedColor equals pickedColor, this will make 
// them all the same color
function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}
// picking a random color to be displayed at the top
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array and repeat it num times
	for (var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}