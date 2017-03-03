//This file was created by Michael Szczepanski 

//holy heck. this took me a long time
//u know how many combinations there could be (0.o)... alot lol
function DIR(dir){
	//temp return value
	let retVal = false;
	for(var i = 0; i < 4; i++){
		//gets the values, in the column of the direction it is going
		//if there is no cube, value is 0, min value of cube is 2
		values[0] = (cubes[dest[dir][i][0]]===undefined?0:cubes[dest[dir][i][0]].value);
		values[1] = (cubes[dest[dir][i][1]]===undefined?0:cubes[dest[dir][i][1]].value);
		values[2] = (cubes[dest[dir][i][2]]===undefined?0:cubes[dest[dir][i][2]].value);
		values[3] = (cubes[dest[dir][i][3]]===undefined?0:cubes[dest[dir][i][3]].value); 
		//if column has 4 cubes
		//possible combinations and what to do       
		if(values[0] > 0 &&
		   values[1] > 0 &&
		   values[2] > 0 &&
		   values[3] > 0){
			if(values[0] == values[1] && values[2] == values[3]){
				cubes[dest[dir][i][0]].value += cubes[dest[dir][i][1]].value;
				score += cubes[dest[dir][i][0]].value;
				cubes[dest[dir][i][1]].value = cubes[dest[dir][i][2]].value + cubes[dest[dir][i][3]].value;
				score += cubes[dest[dir][i][1]].value;
				delete cubes[dest[dir][i][2]];
				delete cubes[dest[dir][i][3]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true; 
			} else if(values[0] == values[1]){
				cubes[dest[dir][i][0]].value += cubes[dest[dir][i][1]].value;
				score += cubes[dest[dir][i][0]].value;
				cubes[dest[dir][i][1]].value = cubes[dest[dir][i][2]].value;
				cubes[dest[dir][i][2]].value = cubes[dest[dir][i][3]].value;
				delete cubes[dest[dir][i][3]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = true;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true;
			} else if(values[1] == values[2]){
				cubes[dest[dir][i][1]].value += cubes[dest[dir][i][2]].value;
				score += cubes[dest[dir][i][1]].value;
				cubes[dest[dir][i][2]].value = cubes[dest[dir][i][3]].value;
				delete cubes[dest[dir][i][3]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = true;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true;
			} else if(values[2] == values[3]){
				cubes[dest[dir][i][2]].value += cubes[dest[dir][i][3]].value;
				score += cubes[dest[dir][i][2]].value;
				delete cubes[dest[dir][i][3]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = true;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true;
			}
		//if column has 3 cubes
		//possible combinations and what to do 
		} else if(values[0] > 0 &&
				  values[1] > 0 &&
				  values[2] > 0){
			if(values[0] == values[1]){
				cubes[dest[dir][i][0]].value += cubes[dest[dir][i][1]].value;
				score += cubes[dest[dir][i][0]].value;
				cubes[dest[dir][i][1]].value = cubes[dest[dir][i][2]].value;
				delete cubes[dest[dir][i][2]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true;
			} else if(values[1] == values[2]){
				cubes[dest[dir][i][1]].value += cubes[dest[dir][i][2]].value;
				score += cubes[dest[dir][i][1]].value;
				delete cubes[dest[dir][i][2]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true;
			}
		} else if(values[0] > 0 &&
				  values[1] > 0 &&
				  values[3] > 0){
			if(values[0] == values[1]){
				cubes[dest[dir][i][0]].value += cubes[dest[dir][i][1]].value;
				score += cubes[dest[dir][i][0]].value;
				cubes[dest[dir][i][1]].value = cubes[dest[dir][i][3]].value;
				delete cubes[dest[dir][i][3]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true;
			} else if(values[1] == values[3]){
				cubes[dest[dir][i][1]].value += cubes[dest[dir][i][3]].value;
				score += cubes[dest[dir][i][1]].value;
				delete cubes[dest[dir][i][3]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true;
			} else if(values[1] != values[3]) {
				cubes[dest[dir][i][2]] = new Cube(moves[dest[dir][i][2]][0],moves[dest[dir][i][2]][1]);
				cubes[dest[dir][i][2]].value = cubes[dest[dir][i][3]].value;
				delete cubes[dest[dir][i][3]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = true;
				moves[dest[dir][i][3]][2] = false;
				retVal = true;
			}
		} else if(values[0] > 0 &&
				  values[2] > 0 &&
				  values[3] > 0){
			if(values[0] == values[2]){
				cubes[dest[dir][i][0]].value += cubes[dest[dir][i][2]].value;
				score += cubes[dest[dir][i][0]].value;
				cubes[dest[dir][i][1]] = new Cube(moves[dest[dir][i][1]][0],moves[dest[dir][i][1]][1]);
				cubes[dest[dir][i][1]].value = cubes[dest[dir][i][3]].value;
				delete cubes[dest[dir][i][2]];
				delete cubes[dest[dir][i][3]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true;
			} else if(values[2] == values[3]){
				cubes[dest[dir][i][2]].value += cubes[dest[dir][i][3]].value;
				score += cubes[dest[dir][i][2]].value;
				cubes[dest[dir][i][1]] = new Cube(moves[dest[dir][i][1]][0],moves[dest[dir][i][1]][1]);
				cubes[dest[dir][i][1]].value = cubes[dest[dir][i][2]].value;
				delete cubes[dest[dir][i][2]];
				delete cubes[dest[dir][i][3]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true;
			} else if(values[0] != values[2]){
				cubes[dest[dir][i][1]] = new Cube(moves[dest[dir][i][1]][0],moves[dest[dir][i][1]][1]);
				cubes[dest[dir][i][1]].value = cubes[dest[dir][i][2]].value;
				cubes[dest[dir][i][2]].value = cubes[dest[dir][i][3]].value;
				delete cubes[dest[dir][i][3]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = true;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true;
			}
		} else if(values[1] > 0 &&
				  values[2] > 0 &&
				  values[3] > 0){
			if(values[1] == values[2]){
				cubes[dest[dir][i][0]] = new Cube(moves[dest[dir][i][0]][0],moves[dest[dir][i][0]][1]);
				cubes[dest[dir][i][1]].value += cubes[dest[dir][i][2]].value;
				score += cubes[dest[dir][i][1]].value;
				cubes[dest[dir][i][0]].value = cubes[dest[dir][i][1]].value;
				cubes[dest[dir][i][1]].value = cubes[dest[dir][i][3]].value;
				delete cubes[dest[dir][i][2]];
				delete cubes[dest[dir][i][3]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true;
			} else if(values[2] == values[3]){
				cubes[dest[dir][i][0]] = new Cube(moves[dest[dir][i][0]][0],moves[dest[dir][i][0]][1]);
				cubes[dest[dir][i][2]].value += cubes[dest[dir][i][3]].value;
				score += cubes[dest[dir][i][2]].value;				
				cubes[dest[dir][i][0]].value = cubes[dest[dir][i][1]].value;
				cubes[dest[dir][i][1]].value = cubes[dest[dir][i][2]].value;
				delete cubes[dest[dir][i][2]];
				delete cubes[dest[dir][i][3]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true;
			} else if(values[1] != values[2]){
				cubes[dest[dir][i][0]] = new Cube(moves[dest[dir][i][0]][0],moves[dest[dir][i][0]][1]);
				cubes[dest[dir][i][0]].value = cubes[dest[dir][i][1]].value;
				cubes[dest[dir][i][1]].value = cubes[dest[dir][i][2]].value;
				cubes[dest[dir][i][2]].value = cubes[dest[dir][i][3]].value;
				delete cubes[dest[dir][i][3]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = true;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true;
			}
		//if column has 2 cubes
		//possible combinations and what to do 
		} else if(values[0] > 0 &&
				  values[1] > 0){
			if(values[0] == values[1]){
				cubes[dest[dir][i][0]].value += cubes[dest[dir][i][1]].value;
				score += cubes[dest[dir][i][0]].value;				
				delete cubes[dest[dir][i][1]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = false;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true;
			}
		} else if(values[0] > 0 &&
				  values[2] > 0){
			if(values[0] == values[2]){
				cubes[dest[dir][i][0]].value += cubes[dest[dir][i][2]].value;
				score += cubes[dest[dir][i][0]].value;				
				delete cubes[dest[dir][i][2]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = false;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true;
			} else if(values[0] != values[2]){
				cubes[dest[dir][i][1]] = new Cube(moves[dest[dir][i][1]][0],moves[dest[dir][i][1]][1]);
				cubes[dest[dir][i][1]].value = cubes[dest[dir][i][2]].value;
				delete cubes[dest[dir][i][2]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				retVal = true;
			}
		} else if(values[0] > 0 &&
				  values[3] > 0){
			if(values[0] == values[3]){
				cubes[dest[dir][i][0]].value += cubes[dest[dir][i][3]].value;
				score += cubes[dest[dir][i][0]].value;				
				delete cubes[dest[dir][i][3]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = false;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true;
			} else if(values[0] != values[3]){
				cubes[dest[dir][i][1]] = new Cube(moves[dest[dir][i][1]][0],moves[dest[dir][i][1]][1]);
				cubes[dest[dir][i][1]].value = cubes[dest[dir][i][3]].value;
				delete cubes[dest[dir][i][3]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				retVal = true;
			}
		}  else if(values[1] > 0 &&
				   values[2] > 0){
			if(values[1] == values[2]){
				cubes[dest[dir][i][1]].value += cubes[dest[dir][i][2]].value;
				score += cubes[dest[dir][i][1]].value;
				cubes[dest[dir][i][0]] = new Cube(moves[dest[dir][i][0]][0],moves[dest[dir][i][0]][1]);
				cubes[dest[dir][i][0]].value = cubes[dest[dir][i][1]].value;
				delete cubes[dest[dir][i][1]];				
				delete cubes[dest[dir][i][2]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = false;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true;
			} else if(values[1] != values[2]){
				cubes[dest[dir][i][0]] = new Cube(moves[dest[dir][i][0]][0],moves[dest[dir][i][0]][1]);
				cubes[dest[dir][i][0]].value = cubes[dest[dir][i][1]].value;
				cubes[dest[dir][i][1]].value = cubes[dest[dir][i][2]].value;				
				delete cubes[dest[dir][i][2]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				retVal = true;
			}
		} else if(values[1] > 0 &&
				  values[3] > 0){
			if(values[1] == values[3]){
				cubes[dest[dir][i][1]].value += cubes[dest[dir][i][3]].value;
				score += cubes[dest[dir][i][1]].value;
				cubes[dest[dir][i][0]] = new Cube(moves[dest[dir][i][0]][0],moves[dest[dir][i][0]][1]);
				cubes[dest[dir][i][0]].value = cubes[dest[dir][i][1]].value;
				delete cubes[dest[dir][i][1]];					
				delete cubes[dest[dir][i][3]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = false;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true;
			} else if(values[1] != values[2]){
				cubes[dest[dir][i][0]] = new Cube(moves[dest[dir][i][0]][0],moves[dest[dir][i][0]][1]);
				cubes[dest[dir][i][0]].value = cubes[dest[dir][i][1]].value;
				cubes[dest[dir][i][1]].value = cubes[dest[dir][i][3]].value;				
				delete cubes[dest[dir][i][3]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				retVal = true;
			}
		} else if(values[2] > 0 &&
				  values[3] > 0){
			if(values[2] == values[3]){
				cubes[dest[dir][i][2]].value += cubes[dest[dir][i][3]].value;
				score += cubes[dest[dir][i][2]].value;
				cubes[dest[dir][i][0]] = new Cube(moves[dest[dir][i][0]][0],moves[dest[dir][i][0]][1]);
				cubes[dest[dir][i][0]].value = cubes[dest[dir][i][2]].value;
				delete cubes[dest[dir][i][2]];					
				delete cubes[dest[dir][i][3]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = false;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				document.getElementById("score").innerHTML = score;
				retVal = true;
			} else if(values[2] != values[3]){
				cubes[dest[dir][i][0]] = new Cube(moves[dest[dir][i][0]][0],moves[dest[dir][i][0]][1]);
				cubes[dest[dir][i][0]].value = cubes[dest[dir][i][2]].value;
				cubes[dest[dir][i][1]] = new Cube(moves[dest[dir][i][1]][0],moves[dest[dir][i][1]][1]);				
				cubes[dest[dir][i][1]].value = cubes[dest[dir][i][3]].value;	
				delete cubes[dest[dir][i][2]];			
				delete cubes[dest[dir][i][3]];
				moves[dest[dir][i][0]][2] = true;
				moves[dest[dir][i][1]][2] = true;
				moves[dest[dir][i][2]][2] = false;
				moves[dest[dir][i][3]][2] = false;
				retVal = true;
			}
		//if column has 1 cube
		//possible combinations and what to do 
		} else if(values[1] > 0){
			cubes[dest[dir][i][0]] = new Cube(moves[dest[dir][i][0]][0],moves[dest[dir][i][0]][1]);
			cubes[dest[dir][i][0]].value = cubes[dest[dir][i][1]].value;
			delete cubes[dest[dir][i][1]];					
			moves[dest[dir][i][0]][2] = true;
			moves[dest[dir][i][1]][2] = false;
			moves[dest[dir][i][2]][2] = false;
			moves[dest[dir][i][3]][2] = false;
			retVal = true;
		} else if(values[2] > 0){
			cubes[dest[dir][i][0]] = new Cube(moves[dest[dir][i][0]][0],moves[dest[dir][i][0]][1]);
			cubes[dest[dir][i][0]].value = cubes[dest[dir][i][2]].value;
			delete cubes[dest[dir][i][2]];					
			moves[dest[dir][i][0]][2] = true;
			moves[dest[dir][i][1]][2] = false;
			moves[dest[dir][i][2]][2] = false;
			moves[dest[dir][i][3]][2] = false;
			retVal = true;
		}else if(values[3] > 0){
			cubes[dest[dir][i][0]] = new Cube(moves[dest[dir][i][0]][0],moves[dest[dir][i][0]][1]);
			cubes[dest[dir][i][0]].value = cubes[dest[dir][i][3]].value;
			delete cubes[dest[dir][i][3]];					
			moves[dest[dir][i][0]][2] = true;
			moves[dest[dir][i][1]][2] = false;
			moves[dest[dir][i][2]][2] = false;
			moves[dest[dir][i][3]][2] = false;
			retVal = true;
		}
		//draws whatever happened. 
		//because of nested if statements, only one thing can happen
		//THIS HAPPENS FOR EVERY COLUMN IN THAT DIRECTION
		//THATS A LOT OF LOGIC HOLY KRAP
		reDrawMove();
	} 
	//returns retVal
	//if Ever set true, then there was at least one possible move
	//if stil false then no valid moves
	return retVal;
}

//cookie cutter copy of ^^^ but used it to determine if there was any moves
//without calling it and actually moving any thing around...
//in Board.GameOver(),
//if this returns "false" for all 4 directions, then there are no more
//possible moves and the game is over 
function ENDGAME(dir){
	let retVal = false;
	for(var i = 0; i < 4; i++){
		values[0] = (cubes[dest[dir][i][0]]===undefined?0:cubes[dest[dir][i][0]].value);
		values[1] = (cubes[dest[dir][i][1]]===undefined?0:cubes[dest[dir][i][1]].value);
		values[2] = (cubes[dest[dir][i][2]]===undefined?0:cubes[dest[dir][i][2]].value);
		values[3] = (cubes[dest[dir][i][3]]===undefined?0:cubes[dest[dir][i][3]].value);
		if(values[0] > 0 &&
		   values[1] > 0 &&
		   values[2] > 0 &&
		   values[3] > 0){
			if(values[0] == values[1] && values[2] == values[3]){
				retVal = true; 
			} else if(values[0] == values[1]){
				retVal = true;
			} else if(values[1] == values[2]){
				retVal = true;
			} else if(values[2] == values[3]){
				retVal = true;
			}
		} else if(values[0] > 0 &&
				  values[1] > 0 &&
				  values[2] > 0){
			if(values[0] == values[1]){
				retVal = true;
			} else if(values[1] == values[2]){
				retVal = true;
			}
		} else if(values[0] > 0 &&
				  values[1] > 0 &&
				  values[3] > 0){
			if(values[0] == values[1]){
				retVal = true;
			} else if(values[1] == values[3]){
				retVal = true;
			} else if(values[1] != values[3]) {
				retVal = true;
			}
		} else if(values[0] > 0 &&
				  values[2] > 0 &&
				  values[3] > 0){
			if(values[0] == values[2]){
				retVal = true;
			} else if(values[2] == values[3]){
				retVal = true;
			} else if(values[0] != values[2]){
				retVal = true;
			}
		} else if(values[1] > 0 &&
				  values[2] > 0 &&
				  values[3] > 0){
			if(values[1] == values[2]){
				retVal = true;
			} else if(values[2] == values[3]){
				retVal = true;
			} else if(values[1] != values[2]){
				retVal = true;
			}
		} else if(values[0] > 0 &&
				  values[1] > 0){
			if(values[0] == values[1]){
				retVal = true;
			}
		} else if(values[0] > 0 &&
				  values[2] > 0){
			if(values[0] == values[2]){
				retVal = true;
			} else if(values[0] != values[2]){
				retVal = true;
			}
		} else if(values[0] > 0 &&
				  values[3] > 0){
			if(values[0] == values[3]){
				retVal = true;
			} else if(values[0] != values[3]){
				retVal = true;
			}
		}  else if(values[1] > 0 &&
				   values[2] > 0){
			if(values[1] == values[2]){
				retVal = true;
			} else if(values[1] != values[2]){
				retVal = true;
			}
		} else if(values[1] > 0 &&
				  values[3] > 0){
			if(values[1] == values[3]){
				retVal = true;
			} else if(values[1] != values[2]){
				retVal = true;
			}
		} else if(values[2] > 0 &&
				  values[3] > 0){
			if(values[2] == values[3]){
				retVal = true;
			} else if(values[2] != values[3]){
				retVal = true;
			}
		} else if(values[1] > 0){
			retVal = true;
		} else if(values[2] > 0){
			retVal = true;
		}else if(values[3] > 0){
			retVal = true;
		}
	} 
	return retVal;
}
//congrats... u sifted through 500 lines of code. 
//whoop de do
//i wrote this..... git rekt m8 :D