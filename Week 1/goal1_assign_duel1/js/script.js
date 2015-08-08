//self executing function
(function(){

    console.log("Fight!!!")    

        //players name
    var playerOneName = "Kabal";
    var playerTwoName = "Kratos";

    //players health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //players damage
    var playerOneDamage = 50;
    var playerTwoDamage = 50;

    var round = 0;
    
    function fight(){
        
        console.log('in the fight function');
        
        alert(playerOneName + ":" + playerOneHealth + " *Start* " + playerTwoName + ":" + playerTwoHealth);
        
        var results = winnerCheck();
        console.log(results);
        
        for(var i = 0; i < 10; ++i){
            console.log(i);
            
            //minimum damage inflicted
            var minDamage1 = playerOneDamage *.5;
            var minDamage2 = playerTwoDamage *.5;
            
            // Random formula Math.floor(Math.random() * (max - min) + min)
            var f1 = Math.floor(Math.random() * (playerOneDamage - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (playerTwoDamage - minDamage2) + minDamage2);
            
            //console.log(f1);
            //console.log(f2);
            
            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;
            
            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);
             
            var results = winnerCheck();
            console.log(results);
            
            if(results === "no winner"){
                round++;
                alert(playerOneName + ":" + playerOneHealth + " *Round Number " + round + " Over* " + playerTwoName + ":" + playerTwoHealth);   
            }else{
                alert(results);
                break;
            }
        }
    };
    
    function winnerCheck(){
        
        console.log("in winnerCheck function");    
        var result = "no winner";
        
        if(playerOneHealth < 1 && playerTwoHealth < 1){
            result = "You Both Die!!!";
        }else if(playerOneHealth < 1){
            result = playerTwoName + " Wins!!!";
        }else if(playerTwoHealth < 1){
            result = playerOneName + " Wins!!!";
        };
        
        return result;
        
        
    };
    
/************the program starts below***********/
    
    console.log('program starts')
    fight();
    
})();






