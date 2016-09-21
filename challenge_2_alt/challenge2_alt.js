/**
 * Hockey is the game. Make it happen.
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a 
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 * 
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 * 
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

 $(function(){

 	// The code below answers #1 question for when teamone shots.
 	// The code below also answers #3 question in the "if statement" to change the background color of the body each time a team hits.
 	var goal = false;
	$( "#teamone-shoot" ).click(function( event ) {

		var teamoneShotsTaken = $("#teamone-numshots").text();
		teamoneShotsTaken++
		$("#teamone-numshots").text(teamoneShotsTaken);

		var teamoneCurrentGoals = $("#teamone-numhits").text();
		
		var teamPlayShoot =  Math.round(Math.random() * (100 - 0) + 0);
		
		if (teamPlayShoot % 2 == 0) {
			goal = true;
			teamoneCurrentGoals++
			$("#teamone-numhits").text(teamoneCurrentGoals);

		  $('body').css('background-color', 'red');

		  new Audio("sounds/Pew_Pew.mp3").play();
			
		} else if (teamPlayShoot % 2 == 1 ) {
			goal = false;
			$('body').css('background-color', 'white');
		}
	});

	// The code below also answers #1 question for when teamtwo shots.
	$( "#teamtwo-shoot" ).click(function( event ) {

		var teamtwoShotsTaken = $("#teamtwo-numshots").text();
		teamtwoShotsTaken++
		$("#teamtwo-numshots").text(teamtwoShotsTaken);

		var teamtwoCurrentGoals = $("#teamtwo-numhits").text();

		var teamPlayShoot =  Math.round(Math.random() * (100 - 0) + 0);
		
		if (teamPlayShoot % 2 == 0) {
			goal = true;
			teamtwoCurrentGoals++
			$("#teamtwo-numhits").text(teamtwoCurrentGoals);

			$('body').css('background-color', 'blue');

			new Audio("sounds/bizarre_guitar.mp3").play();

		} else if (teamPlayShoot % 2 == 1 ) {
			goal = false;
			$('body').css('background-color', 'white');
		}	
	});


	// The code below answers #2 question to reset the number of shots and scores for both teams and increase the reset count by 1.
	$( "#reset" ).click(function( event ) {

		var currentNumberOfResets = $("#num-resets").text();
		currentNumberOfResets++
		$("#num-resets").text(currentNumberOfResets);

		var resetTeamoneShots = $("#teamone-numshots").text();
		resetTeamoneShots = 0;
		$("#teamone-numshots").text(resetTeamoneShots);

		var resetTeamoneHits = $("#teamone-numhits").text();
		resetTeamoneHits = 0;
		$("#teamone-numhits").text(resetTeamoneHits);

		var resetTeamtwoShots = $("#teamtwo-numshots").text();
		resetTeamtwoShots = 0;
		$("#teamtwo-numshots").text(resetTeamtwoShots);

		var resetTeamoneHits = $("#teamtwo-numhits").text();
		resetTeamtwoHits = 0;
		$("#teamtwo-numhits").text(resetTeamtwoHits);
		
	});

 })