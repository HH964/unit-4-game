// make all variables global for ease
var numofWins = 0;
    var numofLosses = 0;
        var pointsTallied = 0;
            var random1 = Math.floor((Math.random() * 102) + 19);
var image_1 = Math.floor((Math.random() * 12) + 1);
var image_2 = Math.floor((Math.random() * 12) + 1);
var image_3 = Math.floor((Math.random() * 12) + 1);
var image_4 = Math.floor((Math.random() * 12) + 1);
    



//generating number for user interaction
$(document).ready(function(){
    // making the random number
    $("#random-number-generated").html("<h3>" + random1 + "</h3>");
    
    // making the images have a random number
    $("#image1").on("click", function() {
        pointsTallied = pointsTallied + image_1;
        $("#score-counter").html("<h3>" + "Your score is: " + pointsTallied + "</h3>");
        // when the condition is met to run function in {} bracket
        if (pointsTallied === random1){
            money();
        }
        else if (pointsTallied > random1){
            broke();
        }
    });

    $("#image2").on("click", function() {
        pointsTallied = pointsTallied + image_2;
        $("#score-counter").html("<h3>" + "Your score is: " + pointsTallied + "</h3>");

        if (pointsTallied === random1){
            money();
        }
        else if (pointsTallied > random1){
            broke();
        }
    });

    $("#image3").on("click", function() {
        pointsTallied = pointsTallied + image_3;
        $("#score-counter").html("<h3>" + "Your score is: " + pointsTallied + "</h3>");

        if (pointsTallied === random1){
            money();
        }
        else if (pointsTallied > random1){
            broke();
        }
    });

    $("#image4").on("click", function() {
        pointsTallied = pointsTallied + image_4;
        $("#score-counter").html("<h3>" + "Your score is: " + pointsTallied + "</h3>");

        if (pointsTallied === random1){
            money();
        }
        else if (pointsTallied > random1){
            broke();
        }
    });

    // increase the number of wins and/or losses by 1 and run the repeat function 
    function money(){
        numofWins++;
        $("#winOrLoss").html("<h6>" + " Wins: " + numofWins +
        " Losses: "+ numofLosses + "</h6>");
        repeat();
    };

    function broke(){
        numofLosses++;
        $("#winOrLoss").html("<h6>" + " Wins: " + numofWins +
        " Losses: "+ numofLosses + "</h6>");
        repeat();
    };
 
    // make all values necessary 0 or randomize again to start the next round
    function repeat(){
        random1 = Math.floor((Math.random() * 102) + 19);
        $("#random-number-generated").html("<h3>" + random1 + "</h3>");
        pointsTallied = 0;
        $("#score-counter").html("<h3>" + "Your score is: " + pointsTallied + "</h3>");
    }
    
});



// console.log("image1 points " + pointsTallied + image_1);
// console.log("image2 points " + pointsTallied + image_2);
// console.log("image3 points " + pointsTallied + image_3);
// console.log("image4 points " + pointsTallied + image_4);
// console.log(random1);