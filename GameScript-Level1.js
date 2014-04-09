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

//end tileset variables/constants

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
	//this creates all the enemies for this level
} //end makeEnemies()

function showFunds() {
	context.font = "10px Courier";
	context.fillText(coinImage + FUNDS, 15, 175);
}

function init() {
	alert("Welcome");
	var userName = prompt("Please enter your first name:", "Your Name");
} //end init()

function update() {
	makeEnemies();
	showFunds();
} //end update()