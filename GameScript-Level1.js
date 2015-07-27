//level 1 game script

//canvas/context code
var FPS = 30;

var canvas = document.getElementById("game_level1");
console.log(canvas);
var ctx = canvas.getContext("2d");
console.log(ctx);

canvas.width = 700;
canvas.height = 675;
console.log(canvas.width + "   " + canvas.height);

//variables
var coinImage = new Sprite(canvas, 'Assets/Media/Images/Coin.png', 32, 32, 'coinImage');
var score;

//end variables

//constants
var NUM_INFANTRY = 10;
var NUM_ELITES = 5;
var NUM_RUNNERS = 3;
var NUM_GENERALS = 1;
var FUNDS = 300;

//end constants

//tileset variables/constants
var tileset;
var ROWS = 20;
var COLS = 20;
var grass = 0;
var road = 1;
var tree = 2;
var wood = 3;
var NUM_STATES = 4;

//end tileset variables/constants

function Tile(){
	var tTile = new Sprite(canvas, "Assets/Media/Images/Tiles/GrassTile.png", 32, 32, tTile);
	tTile.state = grass;
	tTile.images = new Array("Assets/Media/Images/Tiles/GrassTile.png", "Assets/Media/Images/Tiles/WoodPlanksTile.png", "Assets/Media/Images/Tiles/Tree.png", "Assets/Media/Images/Tiles/Road.png");
	tTile.row = 0;
	tTile.col = 0;
	
	tTile.setState = function(state){
		this.state = state;
		this.setImageFile(this.images[this.state]);
	} // end setState()
	
	tTile.getRow = function(){
		return this.row;
	} // end getRow()
        
	tTile.getCol = function(){
		return this.col;
	} // end getCol()
        
	tTile.getState = function(){
		return this.state;
	} // end getState()
        
	return tTile;
} //end Tile()
    
function setupTiles(){
  tileset = new Array(ROWS);
  for (row = 0; row < ROWS; row++){
    var tRow = new Array(COLS);
    for (col = 0; col < COLS; col++){
      tRow[col] = new Tile();
      var xPos = 16 + (32 * col);
      var yPos = 16 + (32 * row);
      tRow[col].setPosition(xPos, yPos);
      tRow[col].row = row;
      tRow[col].col = col;
    } // end for
    tileset[row] = tRow;
  } // end for
  tileset.draw();
} // end setupTiles()
    
function updateTiles(){
  for (row = 0; row < ROWS; row++){
    for (col = 0; col < COLS; col++){
      tileset[row][col].update();
    } // end for
  } // end for
} // end updateTiles()
    
function loadMap() {
  map = [
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,2,0,0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1),  
    new Array(0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1),  
    new Array(0,0,0,0,2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1),  
    new Array(0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,2,0,0,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,0,0,0,0,1,1,1,0,3,3,0,0,0,0,0,0,0,0),  
    new Array(0,2,0,2,0,0,1,1,1,0,3,3,0,0,0,0,0,0,0,0),  
    new Array(0,0,2,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,2,0,2,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0),
    new Array(1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0),
    new Array(1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0),
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
  ];
        
  for (row = 0; row < ROWS; row++){
    for (col = 0; col < COLS; col++){
      currentVal = map[row][col];
      tileset[row][col].setState(currentVal);
    } // end for
  } // end for
} //end loadMap()

function takeFunds(amount) {
	FUNDS = FUNDS - amount;
} //end takeFunds()

function addFunds(amount) {
	FUNDS = FUNDS + amount;
} //end addFunds()

//player gunmen
function BasicGunman() {
	var tBasicGunman = new Sprite(canvas, '#', 15, 20, 'Basic Gunman');
	tBasicGunman.health = 50;
	tBasicGunman.range = 10;
  tBasicGunman.cost = 50;

	return tBasicGunman;
} //end BasicGunman()

//player cannon
function Cannon() {
	var tCannon = new Sprite(canvas, '#', 20, 20, 'Cannon Pic');
	tCannon.range = 20;
  tCannon.cost = 150;
	
	return tCannon;
} //end Cannon()

//enemy infantry
function Infantry() {
	var tInfantry = new Sprite(canvas, '#', 15, 20, 'Infantry');
	tInfantry.health = 50;
	tInfantry.MAXSPEED = 10;
  tInfantry.bounty = 25;

	return tInfantry
} //end Infantry()

//enemy elite
function Elite() {
	var tElite = new Sprite(canvas, '#', 15, 20, 'Elite');
	tElite.health = 75;
	tElite.MAXSPEED = 15;
	tElite.range = 10;
  tElite.bounty = 50;

	return tElite;
} //end Elite()

//enemy runner
function Runner() {
  var tRunner = new Sprite(canvas, '#', 15, 20, 'Runner');
  tRunner.health = 20;
  tRunner.MAXSPEED = 25;
  tRunner.bounty = 25;
}

//enemy general
function General() {
  var tGeneral = new Sprite(canvas, '#', 15, 20, 'General');
  tGeneral.health = 150;
  tGeneral.MAXSPEED = 10;
  tGeneral.bounty = 100;
} //end General()

function makeEnemies() {
	var infantry = [];
    for (i = 0; i < NUM_INFANTRY; i++){
        infantry[i] = new Infantry();
        infantry[i].draw();
        infantry[i].setPosition();
    } //end for
    
    var elites = [];
    for (j = 0; j < NUM_ELITES; j++){
        elites[j] = new Elite();
        elites[j].draw();
        elites[j].setPosition(1, 1); //change this position later...
    } //end for

    var runners = [];
    for (q = 0; q < NUM_RUNNERS; q++){
      runners[q] = new Runner();
      runners[q].draw();
      runners[q].setPosition(10, 10); //change this position later...
    }
} //end makeEnemies()

function showFunds() {
	ctx.font = "10px Courier";
	coinImage.setPosition(30, 175);
	ctx.fillText(FUNDS, 15, 175);
}

function init() {
	var userName;
	
	localStorage.setItem("USERNAME", userName);
	
	makeEnemies();
	setupTiles();
  loadMap();
} //end init()

function update() {
	showFunds();
  updateTiles();
} //end update()

setInterval(update, 1000/FPS);
