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

    var gifList = ["assets/images/gifOne.gif", "assets/images/gifTwo.gif"]

    var questIndex = 0;

    var time;
    var clockRunning = false;
    var intervalID;
    
    var correct = 0;
    var wrong = 0;
    var timeOut = 0;

    //examples of how to reference questions/choices/answers
    // console.log(questList.length);
    // console.log(questList[1].question);
    console.log(questList[0].answers[0]);


    function promptQuestion() {

        $("#answer").html("");
        // $("$answer").removeAttr("type");

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
                choice.attr("answer-check", [i]);
                choice.text(questList[questIndex].answers[i]);
                $("#choice" + i).append(choice);
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


    function nextQuest () {
        if (questIndex <= (questList.length - 1)) {
            promptQuestion();
        }
        else {
            $("#question").text("Game Over!");
            $("#answer").empty();
            $("#choice0").text("Correct: " + correct);
            $("#choice1").text("Incorrect: " + wrong);
            $("#choice2").text("Unanswered: " + timeOut);

        }



    // if (questionIndex <= (questions.length - 1)) {
    //     document.querySelector("#question").innerHTML = questions[questionIndex].q;
    //   }
    //   // If there aren't, render the end game screen.
    //   else {
    //     document.querySelector("#question").innerHTML = "Game Over!";
    //     document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
    //   }
    // }
    }

    // ran if player runs out of time.
    function timeRunOut() {
        stop();
        $("#question").text("Ran out of time!");
        timeOut++;

        for (i = 0; i < 4; i++) {
            $("#choice" + [i]).empty();
        }
        var currentGif = $("<img>");
        currentGif.attr({"src":gifList[questIndex], "width":"200px"});
        $("#answer").append(currentGif);

        questIndex++;
        setTimeout(nextQuest, 5*1000);
    }



    //function to call when starting timer
    function timerStart() {
        time = 30;
        intervalID = setInterval(count, 1000);

        clockRunning = true;

        // keeps track if player runs out of time
        if (time === 0 ) {
            timeRunOut();
        }
    }

    function count() {
        time--;
        var converted = timeConverter(time);
        $("#timer").text(converted);
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

    for (i = 0; i < 4; i++) {
        $("#choice" + [i]).attr("answer-check", [i]);
    }

    // $("#answer").click(checkAnswer);

  
    console.log(questList[questIndex].correctAnswer);
    console.log(time);

    $("#choice0").on("click", function() {
        console.log("what choice0");
        stop();
        var chosenAnswer = ($(this).attr("answer-check"));
        console.log(chosenAnswer);
        if (chosenAnswer == questList[questIndex].correctAnswer) {
            $("#question").text("Correct!");
            correct++;
        }
        else {
            $("#question").text("Nope!");
            wrong++;
        }
        for (i = 0; i < 4; i++) {
            $("#choice" + [i]).empty();
        }
         
        var currentGif = $("<img>");
        currentGif.attr({"src":gifList[questIndex], "width":"200px"});
        $("#answer").append(currentGif);

        questIndex++;
        setTimeout(nextQuest, 5*1000);
        

    });

    $("#choice1").on("click", function() {
        console.log("what choice1");
        stop();
        var chosenAnswer = ($(this).attr("answer-check"));
        console.log(chosenAnswer);
        if (chosenAnswer == questList[questIndex].correctAnswer) {
            $("#question").text("Correct!");
            correct++;
        }
        else {
            $("#question").text("Nope!");
            wrong++;
        }
        for (i = 0; i < 4; i++) {
            $("#choice" + [i]).empty();
        }
         
        var currentGif = $("<img>");
        currentGif.attr({"src":gifList[questIndex], "width":"200px"});
        $("#answer").append(currentGif);

        questIndex++;
        setTimeout(nextQuest, 5*1000);
        

    });
    $("#choice2").on("click", function() {
        console.log("what choice2");
        stop();
        var chosenAnswer = ($(this).attr("answer-check"));
        console.log(chosenAnswer);
        if (chosenAnswer == questList[questIndex].correctAnswer) {
            $("#question").text("Correct!");
            correct++;
        }
        else {
            $("#question").text("Nope!");
            wrong++;
        }
        for (i = 0; i < 4; i++) {
            $("#choice" + [i]).empty();
        }
         
        var currentGif = $("<img>");
        currentGif.attr({"src":gifList[questIndex], "width":"200px"});
        $("#answer").append(currentGif);

        questIndex++;
        setTimeout(nextQuest, 5*1000);
        

    });
    $("#choice3").on("click", function() {
        console.log("what choice3");
        stop();
        var chosenAnswer = ($(this).attr("answer-check"));
        console.log(chosenAnswer);
        if (chosenAnswer == questList[questIndex].correctAnswer) {
            $("#question").text("Correct!");
            correct++;
        }
        else {
            $("#question").text("Nope!");
            wrong++;
        }
        for (i = 0; i < 4; i++) {
            $("#choice" + [i]).empty();
        }
         
        var currentGif = $("<img>");
        currentGif.attr({"src":gifList[questIndex], "width":"200px"});
        $("#answer").append(currentGif);

        questIndex++;
        setTimeout(nextQuest, 5*1000);
        

    });

















})