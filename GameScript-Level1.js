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
var ENEMY_COUNTER = 0;
var DIFFICULTY = 1;
var ENEMY_RATE;
var NUM_INFANTRY = 10;
var NUM_ELITES = 5;
var NUM_RUNNERS = 3;
var NUM_GENERALS = 1;
var FUNDS = 300;

//end constants

function checkDifficulty() {
  DIFFICULTY = prompt("Enter a difficulty below (1 for easy and 2 for hard):");
}

if (DIFFICULTY === 1) {
  ENEMY_RATE = 10;
} if (DIFFICULTY === 2) {
  ENEMY_RATE = 5;
}

var tilesetImage = new Image();
tilesetImage.src = 'Assets/Media/Images/Tileset1.png';
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
      tile = layer1[ r ][ c ];
      tileRow = (tile / imageNumTiles) | 0;
      tileCol = (tile % imageNumTiles) | 0;
      ctx.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
    }
  }
}

var ground = [
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
 [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
 [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
 [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
 [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
 [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
 [44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79]
 ];

var layer1 = [
 [66, 67, 68, 69, 0, 0, 0, 0, 0, 252, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [82, 83, 84, 85, 0, 0, 0, 220, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [98, 99, 100, 101, 0, 0, 0, 236, 0, 0, 0, 204, 0, 0, 0, 252, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 252, 0, 221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 252, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 168, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 167, 0, 0, 0, 0, 0, 0, 0, 151, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 201, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 217, 218, 0, 0, 0, 0, 151, 0, 0, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 233, 234, 0, 0, 0, 0, 0, 215, 216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 249, 250, 0, 0, 0, 0, 0, 231, 232, 0, 0, 0, 168, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 168, 0, 0, 247, 248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 ];

function takeFunds(amount) {
	FUNDS = FUNDS - amount;
} //end takeFunds()

function addFunds(amount) {
	FUNDS = FUNDS + amount;
} //end addFunds()

//player gunmen
function BasicGunman() {
	var tBasicGunman = new Sprite(canvas, 'Assets/Media/Images/SoldierPic1.png', 15, 20, 'Basic Gunman');
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

/*

//I'm not sure about this code... I'll hold onto it for now and try something else until I can figure this out.

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
*/

function createInfantry() {
  return new Infantry();
  this.draw();
} //end createInfantry()

function createElite() {
  return new Elite();
  this.draw();
} //end createElite()

function createRunner() {
  return new Runner();
  this.draw();
} //end createRunner()

function createGeneral() {
  return new General();
  this.draw();
} //end createGeneral()



function showFunds() {
	ctx.font = "10px Courier";
	coinImage.setPosition(30, 175);
	ctx.fillText(FUNDS, 15, 175);
} //end showFunds()





function init() {
	var userName;
	
	localStorage.setItem("USERNAME", userName);
	
	makeEnemies();
} //end init()

function infantryGo() {
  if (ENEMY_COUNTER < NUM_INFANTRY) {
    createInfantry();
    ENEMY_COUNTER += 1;
  }
}

function update() {
	showFunds();
} //end update()

setInterval(update, 1000/FPS);

setInterval(infantryGo, ENEMY_RATE * 1000);
