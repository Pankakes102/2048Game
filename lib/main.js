//This file was created by Michael Szczepanski 

//variables
var mBoard;
var spot;
var score;
var username;
var ref;
var database;
var counter = 0;
//current values of each cube in a specific column
var values = [4];
//movable
var flag = false;
//cube holder
var cubes = [16];
//possible moves for a cube, x,y,occupied
var moves = [[10 ,10 ,false],[10 ,100,false],[10 ,190,false],[10 ,280,false],
             [100,10 ,false],[100,100,false],[100,190,false],[100,280,false],
             [190,10 ,false],[190,100,false],[190,190,false],[190,280,false],
             [280,10 ,false],[280,100,false],[280,190,false],[280,280,false]];

//destination indexs for the directional input
//dest[direction][for loop interation][specific dir index]
var dest = [[[ 0, 1, 2, 3],[ 4, 5, 6, 7],[ 8, 9,10,11],[12,13,14,15]],
		    [[12, 8, 4, 0],[13, 9, 5, 1],[14,10, 6, 2],[15,11, 7, 3]],
		    [[ 3, 2, 1, 0],[ 7, 6, 5, 4],[11,10, 9, 8],[15,14,13,12]],
		    [[ 0, 4, 8,12],[ 1, 5, 9,13],[ 2, 6,10,14],[ 3, 7,11,15]]];   

//sets a move equal to true... could be inlined or more functional
function move(index){
	moves[index][2] = true;
}

//keyPressed, determines what key is pressed and what to do
//when pressed. valid keys are a s w d or uA dA lA rA
//if it is anything else nothing will happen
function keyPressed() {
	if(keyCode === UP_ARROW || keyCode === 87){
		flag = DIR(0);
	} else if(keyCode === RIGHT_ARROW || keyCode === 68){
		flag = DIR(1);
	} else if(keyCode === DOWN_ARROW || keyCode === 83){
		flag = DIR(2);
	} else if(keyCode === LEFT_ARROW || keyCode === 65){
		flag = DIR(3);
	} else {
		flag = false;
	}
}

//used in setup to initialize page.
//made a seperate function because i was calling setup()
//didnt want to mess up the firebase stuff :/
function begin(){
	canvas = createCanvas(370,370);
	canvas.parent('canvasContainer');
	background(218,165,32);
	mBoard = new Board();
	mBoard.reset();
	score = 0;
	for(var i = 0; i < 4; i++){
		values[i] = 0;
	}
	spot = round(random(0,15));
	move(spot);
	cubes[spot] = new Cube(moves[spot][0],moves[spot][1]);
	cubes[spot].display();
}

//javascript p5 setup function thingy
function setup(){
	begin();

	//firebase stuff
	var config = {
   		apiKey: "...",
	    authDomain: "...",
	    databaseURL: "https://ms2048-796e8.firebaseio.com",
	    storageBucket: "",
	    messagingSenderId: ""
  	};

  	firebase.initializeApp(config);
  	database = firebase.database();
  	ref = database.ref('2048/scores');
  	ref.on('value',
  		function(data){
  			counter = 0;
  			//clears current leaderboards when new one issued
  			var scoreListingsC = selectAll('.scoreListingC');
  			for(var i = 0; i < scoreListingsC.length; i++){
  				scoreListingsC[i].remove();  			
  			}

  			var scores = data.val();
  			var keys = Object.keys(scores);
  			
  			//assigns current leaderboards, maximum of 20 logs
  			//the most current entry to the database will appear on the top
			for(var i = keys.length-1; i >= 0 && counter < 20; i--){
				var k = keys[i];
				var tempname = scores[k].name;
				var tempscore = scores[k].score;
				var li = createElement('li',tempname + ' : ' + tempscore);
				li.class('scoreListingC');
				li.parent('LocalLeaderBoard');
				counter++;
			}
			counter = 0;

			//sorts the data... h -> l
			for(var pass = 1; pass < keys.length; pass++){
				for(var i = 0; i < keys.length-pass; i++){
					var k = keys[i];
					var k1 = keys[i+1];
					if(scores[k].score < scores[k1].score){
						var hold = keys[i];
						keys[i] = keys[i+1];
						keys[i+1] = hold;
					}
				}
			}

			//clears the global leader boards
			var scoreListingsG = selectAll('.scoreListingG');
  			for(var i = 0; i < scoreListingsG.length; i++){
  				scoreListingsG[i].remove();  			
  			}

  			//assigns the global leaderboards, maximum of 20
  			//the higest score in the whole db will appear on top of the list
  			//following the other highest scores
			for(var i = 0; i < keys.length && i < 20; i++){
				var k = keys[i];
				var tempname = scores[k].name;
				var tempscore = scores[k].score;
				var li = createElement('li',tempname + ' : ' + tempscore);
				li.class('scoreListingG');
				li.parent('GlobalLeaderBoard');
			}

			counter = 0;
			//error log if something goes wrong :D
  		},function(err){
  			console.log("Error!");
			console.log(err);
  	});
}

//if there was a move, i.e. flag
//picks a spot and uses moves[occupied] to go there
//**problem when there is only one or two spots, it
//takes time to appear because it might not get a valid spot
//right away, should fix but lazy :| #itsNotDumbIfItWorks lol
function spawnCube(){
	if(flag){
		if(!mBoard.GameOver()){
			spot = round(random(-1,15));
			if(spot < 0){
				spot = 0;
			}
			if(!moves[spot][2]){
				move(spot);
				cubes[spot] = new Cube(moves[spot][0],moves[spot][1]);
				cubes[spot].display(25);
				flag = false;
			}
		}
	}
}

//when flag, redraws the board with correct cube placement
function reDrawMove(){
	createCanvas(370,370);
	background(218,165,32);
	mBoard.reDraw();
	for(var i = 0; i < 16; i++){
	if(cubes[i] !== undefined)
		cubes[i].display();
	}
}

//restarts the game -_-
function restartGame(){
	document.getElementById("score").innerHTML = 0;
	mBoard.reset();
	begin();
}

//built in p5 js stuff i think
//runs 60 times every second. cool.
function draw(){
	spawnCube();
	if(mBoard.GameOver()){
		document.getElementsByClassName('overlay2')[0].style.display = 'block';
	}
}

//called when game is over, submits Valid information into firebase
function submitScore(){
	if(username !== null && score > 0 && score <= 999999){
		if(username !== ""){
			var data = {
				name:username,
				score:score
			}
			ref.push(data);
		}
	}
}

var form = document.getElementById('input');

//checksEnter pressed, if so then will submit form
//this only workd when overlay2 is open :D
function checkEnter(e){
	if(e && e.keyCode === 13){
		form.submit();
	}
}

//form submit function to get the name the user inputed
//reset the game and submit the info to firebase if they want
function onSubmit(){
	username = document.getElementById('username').value;
	document.getElementsByClassName('overlay2')[0].style.display = 'none';
	document.getElementById("score").innerHTML = 0;
	submitScore();
	restartGame();
	return false;
}

//special function so that if the X is pressed after the game is over
//it will reset properly and make username "null" so it wont go into firebase
function closeNameBtn(){
	document.getElementsByClassName('overlay2')[0].style.display = 'none';
	username = "";
	document.getElementById("score").innerHTML = 0;
	begin();
}