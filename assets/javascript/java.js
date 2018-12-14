$(document).ready(function () {

    // selects a random number between the values of 19 to 120
    var randomize = Math.floor(Math.random() * 121);

    // random values for each jewel between the numbers 1 to 12
    var value1 = Math.floor(Math.random() * 13);
    var value2 = Math.floor(Math.random() * 13);
    var value3 = Math.floor(Math.random() * 13);
    var value4 = Math.floor(Math.random() * 13);

    var playerTotal = 0;
    var wins = 0;
    var losses = 0;


    // appends random number choosen to the id of randomNumber
    $('#randomNumber').text(randomize);
    // applys the values of 0
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);


    // resets the game
    function reset() {
        randomize = Math.floor(Math.random() * 121);
        $('#randomNumber').text(randomize);
        value1 = Math.floor(Math.random() * 13);
        value2 = Math.floor(Math.random() * 13);
        value3 = Math.floor(Math.random() * 13);
        value4 = Math.floor(Math.random() * 13);
        playerTotal = 0;
        $('#finalTotal').text(playerTotal);
    }


    // functions for winning and losing which updates the counts on the page
    function winner() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }
    function loser() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset();
    }

    // Clicks for all 4 jewels and the conditions for winning and lossing after resulting clicks
    $('#gemOne').on('click', function () {
        playerTotal = playerTotal + value1;
        $('#finalTotal').text(playerTotal);

        if (playerTotal == randomize) {
            winner();
        }
        else if (playerTotal > randomize) {
            loser();
        }
    })

    $('#gemTwo').on('click', function () {
        playerTotal = playerTotal + value2;
        $('#finalTotal').text(playerTotal);

        if (playerTotal == randomize) {
            winner();
        }
        else if (playerTotal > randomize) {
            loser();
        }
    })

    $('#gemThree').on('click', function () {
        playerTotal = playerTotal + value3;
        $('#finalTotal').text(playerTotal);

        if (playerTotal == randomize) {
            winner();
        }
        else if (playerTotal > randomize) {
            loser();
        }
    })
    
    $('#gemFour').on('click', function () {
        playerTotal = playerTotal + value4;
        $('#finalTotal').text(playerTotal);

        if (playerTotal == randomize) {
            winner();
        }
        else if (playerTotal > randomize) {
            loser();
        }
    })


});