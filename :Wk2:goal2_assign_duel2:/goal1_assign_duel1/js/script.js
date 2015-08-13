/*
Roddrecus Chames
Develop Duel #2 
August 12, 2015
*/

//self executing function
(function(){
    //Console.log fight to show that I am in the self executing function
    console.log("Fight!!!")    

	//Player one [name, damage inflicted, hp]
	var playerOne = ["Kabal", 50, 100];
	//Player two [name, damage inflicted, hp]
	var playerTwo = ["Kratos", 50, 100];
	
	
    //Before game starts there are no rounds so store 0 for current round
    var round = 0;
    
    //the fight will take place under this function
    function fight(){
        
        //this lets me know i've made it into the fight function
        console.log('in the fight function');
        
        //this is the first alert shown and where the fight will be initiated
        alert(playerOne[0] + ":" + playerOne[2] + " *Start* " + playerTwo[0] + ":" + playerTwo[2]);
        
        //the results variable store the function that checks for a winner at the end of each match
        var results = winnerCheck();
        //we will log the results to make sure a value is being returned from the loop
        console.log(results);
        
        //this syntax will create a loop that happens ten times
        for(var i = 0; i < 10; ++i){
            console.log(i);
            
            //this variable stores the minimum damage the player one can inflict so the player must inflict at least this much damage
            var minDamage1 = playerOne[1] *.5;
            //this variable stores the minimum damage the player two can inflict so the player must inflict at least this much damage
            var minDamage2 = playerTwo[1] *.5;
            
            // Random formula Math.floor(Math.random() * (max - min) + min)
            
            //this formula kicks out a random number between the min & max number of damage player one can inflict
            var f1 = Math.floor(Math.random() * (playerOne[1] - minDamage1) + minDamage1);
            //this formula kicks out a random number between the min & max number of damage player two can inflict
            var f2 = Math.floor(Math.random() * (playerTwo[1] - minDamage2) + minDamage2);
            
            //These two logs are breadcrumbs to make sure my code is working as planned
            //console.log(f1);
            //console.log(f2);
            
            //inflicted damage
            //the random number that is kicked out from the f1 variable is subtracted from the players remaining health
            playerOne[2]-=f1;
            //the random number that is kicked out from the f2 variable is subtracted from the players remaining health
            playerTwo[2]-=f2;
            
            //these two logs are breadcrumbs to ensure my code is functioning properly
            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);
            
            //the winner check function is stored in the results variable, and the winner check function will check for a winner at this point
            var results = winnerCheck();
            //the following log is breadcrumbs
            //console.log(results);
            
            //conditional for if there is no winner
            if(results === "no winner"){
                //if there is no winner the round will advance one number
                round++;
                //the players name and remaining health will be shown as well as the button to start the next round
                alert(playerOne[0] + ":" + playerOne[2] + " *Round Number " + round + " Over* " + playerTwo[0] + ":" + playerTwo[2]);
                //conditional for if anything besides no winner is sent to the results variable
            }else{
                //if anything besides no winner is returned show in an alert box what was retured from the winnercheck function
                alert(results);
                //if anything besides no winner is returned to the results variable then break the loop 
                break;
            }
        }
    };
    
    //this is the function that checks for a winner
    function winnerCheck(){
        
        //this log is breadcrumbs
        //console.log("in winnerCheck function"); 
        
        //the default result variable says there is no winner
        var result = "no winner";
        
        //if both player one and player two health equal 0 then result variable will change to you both die
        if(playerOne[2] < 1 && playerTwo[2] < 1){
            result = "You Both Die!!!";
        //if only player ones health is less than 1 result changes to player two wins    
        }else if(playerOne[2] < 1){ 
            result = playerTwo[0] + " Wins!!!";
            
        //if only player twos health is less than 1 result changes to player one wins        
        }else if(playerTwo[2] < 1){
            result = playerOne[0] + " Wins!!!";
        };
        
        //returns the result from this function and sends it to the winner check function stored in the loop
        return result;
        
        
    };
    
/************the program starts below***********/
    
    console.log('program starts')
    fight();
    
})();






