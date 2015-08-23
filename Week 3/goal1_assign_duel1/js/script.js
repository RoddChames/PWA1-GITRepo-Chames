/*
Roddrecus Chames
Develop Duel #2 
August 12, 2015
*/
//self executing function
(function() {

    //lets me know I'm in the fight function
    console.log("Fight!!!")
    
        //The following variables include keys for each fighter    
        //object keys for player one
    var playerOne = {
        name: 'Kabal',
        damage: '50',
        hp: '100'
    };
    
    //object keys for player two
    var playerTwo = {
        name: 'Kratos',
        damage: '50',
        hp: '100'
    };
    
    //arrays that contain each object (which contain keys)
    var players = [playerOne, playerTwo];
    
    //Before game starts there are no rounds so store 0 for current round
    var round = 0;
    
    //the fight will take place under this function
    function fight() {
    
        //this lets me know i've made it into the fight function
        console.log('in the fight function');
        
        //the following two lines display the players name and hp at the top of the screen.
        document.getElementById("kabal").innerHTML = players[0].name + ":" + players[0].hp;
        document.getElementById("kratos").innerHTML = players[1].name + ":" + players[1].hp;
        
        //the results variable store the function that checks for a winner at the end of each match
        var results = winnerCheck();
        
        //we will log the results to make sure a value is being returned from the loop
        console.log(results);
        
        //this syntax will create a loop that happens ten times
        for (i = 0; i < 10; i++) {
        	
        	//this logs what loop i'm on.
            console.log(i);
            
            //this variable stores the minimum damage the player one can inflict so the player must inflict at least this much damage
            var minDamage1 = players[0].damage * .5;
            
            //this variable stores the minimum damage the player two can inflict so the player must inflict at least this much damage
            var minDamage2 = players[1].damage * .5;
            
            // Random formula Math.floor(Math.random() * (max - min) + min)
            //this formula kicks out a random number between the min & max number of damage player one can inflict
            var f1 = Math.floor(Math.random() * (players[0].damage - minDamage1) + minDamage1);
            
            //this formula kicks out a random number between the min & max number of damage player two can inflict
            var f2 = Math.floor(Math.random() * (players[1].damage - minDamage2) + minDamage2);
            
            //These two logs are breadcrumbs to make sure my code is working as planned
            //console.log(f1);
            //console.log(f2);
            //inflicted damage
            
            //the random number that is kicked out from the f1 variable is subtracted from the players remaining health
            players[0].hp -= f1;
            
            //the random number that is kicked out from the f2 variable is subtracted from the players remaining health
            players[1].hp -= f2;
            
            //these two logs are breadcrumbs to ensure my code is functioning properly
            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);
            
            //the winner check function is stored in the results variable, and the winner check function will check for a winner at this point
            var results = winnerCheck();
            
            //the following log is breadcrumbs
            //console.log(results);
            
            //conditional for if there is no winner
            if (results === "no winner") {
            
                //if there is no winner the round will advance one number
                round++;
                
                //shows player ones health and hp at the top of the screen
				document.getElementById("kabal").innerHTML = players[0].name + ":" + players[0].hp;
				
				//shows player two's health and hp at the top of the screen
				document.getElementById("kratos").innerHTML = players[1].name + ":" + players[1].hp;
				
				//this displays the rounds in the in the middle of the screen
				document.getElementsByTagName('form').innerHTML = "Round " + round + " over.";

                //conditional for if anything besides no winner is sent to the results variable
            } else {
            
                //this displays the results in the middle of the scree
                document.getElementById('round_number').innerHTML = results;
                
                //if anything besides no winner is returned to the results variable then break the loop 
                break;
                
            }
        }
    };
    //this is the function that checks for a winner
    function winnerCheck() {
    
        //this log is breadcrumbs
        console.log("in winnerCheck function"); 
        
        //the default result variable says there is no winner
        var result = "no winner";
        
        //if both player one and player two health equal 0 then result variable will change to you both die
        if (players[0].hp < 1 && players[1].hp < 1) {
            result = "You Both Die!!!";
            
            //if only player ones health is less than 1 result changes to player two wins    
        } else if (players[0].hp < 1) {
            result = players[1].name + " Wins!!!";
            
            //if only player twos health is less than 1 result changes to player one wins        
        } else if (players[1].hp < 1) {
            result = players[0].name + " Wins!!!";
        };
        //returns the result from this function and sends it to the winner check function stored in the loop
        return result;
    };
    /************the program starts below***********/
    console.log('program starts');
    
    //the fight starts here
    fight();
})();