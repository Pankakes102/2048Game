//This file was created by Michael Szczepanski 

//Cube constructor takes x and y coordinate
function Cube(x,y) {
	//assignment
	this.x = x;
	this.y = y;
	
	//cube value
	this.value = random(1,4);
	if(this.value >= 3.5){
		this.value = 4;
	} else {
		this.value = 2;
	}

	//cube color, location, and text display
	this.display = function(){
		switch(this.value){
			case    2: fill(255, 64,  0); break;
			case    4: fill(255,128,  0); break;
			case    8: fill(255,191,  0); break;
			case   16: fill(255,255,  0); break;
			case   32: fill(191,255,  0); break;
			case   64: fill(128,255,  0); break;
			case  128: fill( 64,255,  0); break;
			case  256: fill(  0,255,  0); break;
			case  512: fill(  0,255, 64); break;
			case 1024: fill(  0,255,128); break;
			case 2048: fill(  0,255,191); break;
			case 4096: fill(  0,255,255); break;
			case 8192: fill(191,  0,255); break;
			default  : fill(255,255,255); break;
		}
		rect(this.x,this.y,80,80);
		fill(0);
		text(this.value,this.x+20,this.y+30);
	}
}