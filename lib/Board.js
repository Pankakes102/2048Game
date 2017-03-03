//This file was created by Michael Szczepanski 

//Board constructor

function Board() {
	//Draws the board background and the grid
	this.reDraw = function(){
		stroke(0);
		strokeWeight(10);
		line(0,0,1,1);
		for(var i = 5; i < 370; i+=90){
			for(var j = 5; j < 370; j+=90){
				line(i,j,i,j+90);
				line(i,j,i+90,j);

			}
		}
		textSize(20);
		noStroke();
	}

	//determines if the game is over,
	//idk why i put it here but whatever
	this.GameOver = function(){
		return (!ENDGAME(0) && 
				!ENDGAME(1) &&
				!ENDGAME(2) &&
				!ENDGAME(3));
	}

	//resets the board, clears the moves
	//and the cubes for proper playing
	this.reset = function(){
		for(var i = 0; i < 16; i++){
			moves[i][2] = false;
			delete cubes[i];
		}
	}

	//initialized the board.
	//when the object is created this is called.
	this.reDraw();
}