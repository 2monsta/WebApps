var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var pickedColor = pickColor();
var messageDisplay = document.querySelector('#message');
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector('h1');
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





