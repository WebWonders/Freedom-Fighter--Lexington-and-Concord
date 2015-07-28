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

var tilesetImage = new Image();
tilesetImage.src = 'http://lunar.lostgarden.com/uploaded_images/ExteriorTest-760306.jpg';
tilesetImage.onload = drawImage;
var tileSize = 32;       // The size of a tile (32×32)
var rowTileCount = 20;   // The number of tiles in a row of our background
var colTileCount = 32;   // The number of tiles in a column of our background
var imageNumTiles = 16;  // The number of tiles per row in the tileset image
function drawImage () {
   for (var r = 0; r < rowTileCount; r++) {
      for (var c = 0; c < colTileCount; c++) {
         var tile = ground[ r ][ c ];
         var tileRow = (tile / imageNumTiles) | 0; // Bitwise OR operation
         var tileCol = (tile % imageNumTiles) | 0;
         ctx.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
      }
   }
}

var ground = [
 [172, 172, 172, 79, 34, 34, 34, 34, 34, 34, 34, 34, 56, 57, 54, 55, 56, 147, 67, 67, 68, 79, 79, 171, 172, 172, 173, 79, 79, 55, 55, 55],
 [172, 172, 172, 79, 34, 34, 34, 34, 34, 34, 146, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 159, 189, 79, 79, 55, 55, 55],
 [172, 172, 172, 79, 79, 34, 34, 34, 34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 159, 189, 79, 79, 79, 55, 55, 55],
 [188, 188, 188, 79, 79, 79, 79, 34, 34, 34, 36, 172, 172, 143, 142, 157, 79, 79, 79, 79, 79, 79, 187, 159, 189, 79, 79, 79, 55, 55, 55, 55],
 [79, 79, 79, 79, 79, 79, 79, 79, 34, 34, 36, 172, 159, 158, 172, 143, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 39, 51, 51, 51, 55, 55],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 34, 36, 172, 143, 142, 172, 172, 143, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 55],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 34, 52, 172, 172, 172, 172, 172, 172, 143, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 34, 52, 172, 172, 172, 172, 172, 172, 159, 188, 189, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 188, 158, 172, 172, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 187, 158, 159, 189, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 159, 188, 189, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
 [155, 142, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 187, 188, 188, 189, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
 [171, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
 [171, 172, 143, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 187, 189, 79, 79, 79, 79],
 [187, 188, 158, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
 [79, 79, 79, 188, 189, 79, 79, 79, 79, 79, 79, 155, 156, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 156],
 [34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172],
 [34, 34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172],
 [34, 34, 34, 34, 79, 79, 79, 79, 79, 79, 155, 172, 172, 159, 189, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172],
 [34, 34, 34, 34, 34, 34, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172]
 ];
        

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
} //end init()

function update() {
	showFunds();
} //end update()

setInterval(update, 1000/FPS);
