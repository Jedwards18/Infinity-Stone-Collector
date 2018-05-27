$(document).ready(function() {

    var winsCounter = 0;
    var lossCounter = 0;
    var playerNumber = 0

    //ssign random value for computer on load
    function randomComputerNumber() {
        var computerNumber = [Math.floor(Math.random() * (121 - 19 + 1)) + 19]
        $("#number-to-guess").val(computerNumber);
    }

    //Function to assign different random value to each crystal
    function calculateCrystalValue() {
        $(".crystal").each(function() {
            $(this).attr("value", [Math.floor(Math.random() * (12 - 1 + 1)) + 1]);
        });
    }

    //On click function to add player score
    $(".crystal").on("click", function() {
        crystalValue = $(this).attr("value");
        playerNumber += parseInt(crystalValue);

        if (playerNumber == computerNumber) {
            alert("You Defeated Thanos!");
            ++winsCounter;
            $("#wins").val(winsCounter);
            playerNumber = 0;
            //computerNumber = [Math.floor(Math.random() * (121 - 19 + 1)) + 1];
            //$("#number-to-guess").val(computerNumber);
            //$(".crystal").each(function() {
                //$(this).attr("value", [Math.floor(Math.random() * (12 - 1 + 1)) + 1]);
            //});
            randomComputerNumber();
            calculateCrystalValue();
        }
        else if (playerNumber > computerNumber) {
            alert("You Lose! Thanos wipes out half of the universe.");
            ++lossCounter;
            $("#losses").val(lossCounter);
            playerNumber = 0;
            //computerNumber = [Math.floor(Math.random() * (121 - 19 + 1)) + 1];
            //$("#number-to-guess").val(computerNumber);
            //$(".crystal").each(function() {
                //$(this).attr("value", [Math.floor(Math.random() * (12 - 1 + 1)) + 1]);
            //});
        }
        $("#player-score").val(playerNumber);
    })
})