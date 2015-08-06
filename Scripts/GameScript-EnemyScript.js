//enemy infantry
function Infantry() {
	var tInfantry = new Sprite(canvas, 'Assets/Media/Images/SoldierPic1.png', 25, 25, 50, 50, 'Infantry');
	tInfantry.health = 50;
	tInfantry.MAXSPEED = 10;
  tInfantry.bounty = 25;

	return tInfantry
} //end Infantry()

//enemy elite
function Elite() {
	var tElite = new Sprite(canvas, '#', 15, 20, 50, 50, 'Elite');
	tElite.health = 75;
	tElite.MAXSPEED = 15;
	tElite.range = 10;
  tElite.bounty = 50;

	return tElite;
} //end Elite()

//enemy runner
function Runner() {
  var tRunner = new Sprite(canvas, '#', 15, 20, 50, 50, 'Runner');
  tRunner.health = 20;
  tRunner.MAXSPEED = 25;
  tRunner.bounty = 25;
}

//enemy general
function General() {
  var tGeneral = new Sprite(canvas, '#', 15, 20, 50, 50, 'General');
  tGeneral.health = 150;
  tGeneral.MAXSPEED = 10;
  tGeneral.bounty = 100;
} //end General()
