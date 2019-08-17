//GLOBAL VARIABLES
//============================================================
//Arrays and Variables for holding data
// create variable object crystall with name and value
var crystal ={
    ruby:{
        name: "ruby",
        value: 0
    },
    emerald:{
        name: "emerald",
        value: 0
    },
    sapphire:{
        name: "sapphire",
        value: 0
    },
    topaz:{
        name: "topaz",
        value: 0
    }
};

// variable randomNumber and yourscore
var randomNumber = 0;
var yourScore = 0;

//game counters
var winCount = 0;
var lossCount = 0;

//functions
//=====================================

// a function to get random number
function getrandomNum(min, max){
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

//a function to start and reset the game
function startGame(){

    // reset yourScore to zero
    yourScore = 0;

    // random number from 19 to 120
    randomNumber = getrandomNum( 19, 120 );
    crystal.ruby.value = getrandomNum (1 , 12);
    crystal.sapphire.value = getrandomNum(1 , 12);
    crystal.emerald.value = getrandomNum(1, 12);
    crystal.topaz.value = getrandomNum(1, 12);

    // put variable to html
    $("#randomNumber").html(randomNumber);
    $("#wins").html("wins   " + winCount);
    $("#losses").html("losses   " + lossCount);
    
    // test: concole.log to see all the variables
    console.log("start yourScore " + yourScore);
    console.log("start randomNumber " + randomNumber);
    console.log("ruby " + crystal.ruby.value);
    console.log("emerald " + crystal.emerald.value);
    console.log("sapphire " + crystal.sapphire.value);
    console.log("topaz " + crystal.topaz.value);

}


function addingNumber(crystal){

    // console.log the variable to make sure variable value get pass to this function
    console.log("add yourScore" + yourScore);
    console.log("add rendomNumber" + randomNumber);
    
    // a function to add the value of each click
    yourScore = yourScore + crystal.value;
    // change yourscore in HTML
    $('#yourscore').html("yourscore: "+ yourScore);   

    //call the reset function in here to use the local variable in addingnumber function
    resetgame();

    console.log("your add score " +yourScore);
}

function resetgame(){

    console.log("rest yourScore" + yourScore);
    console.log("rest rendomNumber" + randomNumber);

    // if yourScore larger than randomNumber you loss
    if ( yourScore > randomNumber){
        alert("you lose");
        //increase losscount
        lossCount++;
        $("#losses").html("losses " + lossCount);
        startGame();
    }
    // if yourscore equal the randomnumber you won
    else if (yourScore == randomNumber){
        alert("you won");
        //increase wincount
        winCount++;
        $("#wins").html("wins " + winCount);
        startGame();
    }

    
    console.log("end game" + yourScore)

}

//initiates the code the first time
startGame();

$('#ruby').click(function(){
    addingNumber(crystal.ruby);
});

$('#emerald').click(function(){
    addingNumber(crystal.emerald);
});

$('#sapphire').click(function(){
    addingNumber(crystal.sapphire);
});

$('#topaz').click(function(){
    addingNumber(crystal.topaz);
});

resetgame();