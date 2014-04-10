//level 1 game script

//canvas/context variables
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

//variables
var coinImage = new Sprite(canvas, '#', 5, 5, 'coinImage');
var score;

//end variables

//constants
NUM_INFANTRY = 10;
NUM_ELITES = 5;
FUNDS = 300;

//end constants

//tileset variables/constants
var tileset;
var ROWS = 20;
var COLUMNS = 20;
var grass = 0;
var road = 1;
var tree = 2;
var wood = 3;
var NUM_STATES = 4;

//end tileset variables/constants

function Tile(){
		tTile = new Sprite(canvas, "Images/GrassTile.png", 32, 32, tTile);
        tTile.state = GRASS;
        tTile.images = new Array("Images/GrassTile.png", "Images/WoodPlanksTile.png", "Images/Tree.png", "#");
        tTile.row = 0;
        tTile.col = 0;
        
        tTile.setState = function(state){
            this.state = state;
            this.setImage(this.images[this.state]);
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
    tRow = new Array(COLS);
    for (col = 0; col < COLS; col++){
      tRow[col] = new Tile();
      xPos = 16 + (32 * col);
      yPos = 16 + (32 * row);
      tRow[col].setPosition(xPos, yPos);
      tRow[col].row = row;
      tRow[col].col = col;
    } // end for
    tileset[row] = tRow;
  } // end for
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
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),  
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
    new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
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

	return tBasicGunman;
} //end BasicGunman()

//enemy infantry
function Infantry() {
	var tInfantry = new Sprite(canvas, '#', 15, 20, 'Infantry');
	tInfantry.health = 50;

	return tInfantry
} //end Infantry()

//enemy elite
function Elite() {
	var tElite = new Sprite(canvas, '#', 15, 20, 'Elite');
	tElite.health = 75;

	return tElite;
} //end Elite()

function makeEnemies() {
	var infantry = [];
    for (i = 0; i < NUM_INFANTRY; i++){
        infantry[i] = new Infantry();
        infantry[i].setPosition();
    } //end for
    
    var elites = [];
    for (i = 0; i < NUM_ELITES; i++){
        elites[i] = new Elite();
        elites[i].setPosition();
    } //end for
} //end makeEnemies()

function showFunds() {
	context.font = "10px Courier";
	context.fillText(coinImage + FUNDS, 15, 175);
}

function init() {
	alert("Welcome");
	var userName = prompt("Please enter your first name:", "Your Name");
	makeEnemies();
	setupTiles();
    loadMap();
} //end init()

function update() {
	showFunds();
} //end update()
