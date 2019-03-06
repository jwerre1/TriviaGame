$(document).ready(function() {    
    var questList = [
        {
            question: "Who famously wrote a total of nine symphonies, beginning the so called 'curse of the ninth'?",
            // make answers into an array? then set correctAnswer = the "string" within the answers array
            answers: ["Johann Sebastian Bach", "Franz Joseph Haydn", "Wolfgang Amadeus Mozart","Ludwig van Beethoven"],
            correctAnswer: 3
            },
        {
            question: "Who fathered 20 children?",
            answers: {
                0: "Johann Sebastian Bach",
                1: "Franz Joseph Haydn",
                2: "Wolfgang Amadeus Mozart",
                3: "Ludwig van Beethoven"}, 
                correctAnswer: 0
            }, 
    ] 

    var gifList = ["assets/images/gifOne.gif"]

    var questIndex = 0;

    var time = 0;
    var clockRunning = false;
    var intervalID;

    //examples of how to reference questions/choices/answers
    // console.log(questList.length);
    // console.log(questList[1].question);
    console.log(questList[0].answers[0]);


    function promptQuestion() {

        $("#answer").html("");

        // sets the timer for each questions
        $("#timer").text("00:30");
        timerStart();

        if (questIndex <= (questList.length - 1)) {
            $("#question").text(questList[questIndex].question);
            // console.log(questIndex);
            // console.log(questList.length)

            for (i = 0; i < 4; i++) {
                var choice = $("<button>");
                choice.addClass("btn btn-light");
                choice.attr("id","possibleChoice");
                choice.attr("answerCheck", [i]);
                choice.text(questList[questIndex].answers[i]);
                $("#answer").append(choice);
            }
        }

        else {
            $("#question").text("Game Over!");
        }
            // // Function to render questions.
            // function renderQuestion() {
            //     // If there are still more questions, render the next one.
            //     if (questionIndex <= (questions.length - 1)) {
            //       document.querySelector("#question").innerHTML = questions[questionIndex].q;
            //     }
            //     // If there aren't, render the end game screen.
            //     else {
            //       document.querySelector("#question").innerHTML = "Game Over!";
            //       document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
            //     }
            //   }
    }

    function checkAnswer() {
        var chosenAnswer = ($(this).attr("answerCheck"));
        console.log(chosenAnswer);
        if (chosenAnswer === questList[questIndex].correctAnswer) {
            $("#question").text("Correct!");

            $("#answer").remove(choice);
            var currentGif = $("<img>");
            curentGif.attr("src", gifList[questIndex]);
            $("#answer").append(currentGif);
            

        }
    }
    //function to call when starting timer
    function timerStart() {
        time = 30;
        intervalID = setInterval(count, 1000);
        clockRunning = true;
    }

    function count() {
        time--;
        var converted = timeConverter(time);
        $("#timer").text(converted)
    }
    //function to stop timer when question answers or timer = 00:00
    function stop() {
        clearInterval(intervalID);
        clockRunning = false;
      }

    function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    if (minutes === 0) {
        minutes = "00";
    }
    
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    return minutes + ":" + seconds;
    }
      


    //sets-up start button
    $("#answer").html("<button type='button' class='btn btn-primary startButton'>START?</button>");


    $(".startButton").on("click", function() {
        promptQuestion();
    });

    // $("#answer").click(checkAnswer);

    $("#answer").on("click", function() {
        console.log("what");
        var chosenAnswer = ($(this).attr("answerCheck"));
        console.log(chosenAnswer);
        if (chosenAnswer === questList[questIndex].correctAnswer) {
            $("#question").text("Correct!");

            $("#answer").remove(choice);
            var currentGif = $("<img>");
            curentGif.attr("src", gifList[questIndex]);
            $("#answer").append(currentGif);

        }

    });

















})