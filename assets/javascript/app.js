$(document).ready(function() {    
    var questList = [
        {
            question: "Who famously wrote a total of nine symphonies, beginning the so called 'curse of the ninth'?",
            answers: ["Johann Sebastian Bach", "Franz Joseph Haydn", "Wolfgang Amadeus Mozart","Ludwig van Beethoven"],
            correctAnswer: 3,
            correctAnswerText: "Ludwig van Beethoven"
            },
        {
            question: "Which of the following fathered 20 children?",
            answers: {
                0: "Johann Sebastian Bach",
                1: "Franz Joseph Haydn",
                2: "Wolfgang Amadeus Mozart",
                3: "Ludwig van Beethoven"}, 
                correctAnswer: 0,
                correctAnswerText: "Johann Sebastian Bach"
            }, 
        {
            question: "In Mozart's opera 'Don Giovanni,' how many women has Don Giovanni seduced?",
            answers: {
                0: "100",
                1: "748",
                2: "1375",
                3: "2063"}, 
                correctAnswer: 3,
                correctAnswerText: "2063"
            }, 
        {
            question: "Which modern composer wrote a piece consisting only of silence?",
            answers: {
                0: "Philip Glass",
                1: "John Cage",
                2: "John Williams",
                3: "Arnold Schoenberg"}, 
                correctAnswer: 1,
                correctAnswerText: "John Cage"
            }, 
        {
            question: "In 2018, a box set of Johann Sebastian Bach's complete works required how many CD's?",
            answers: {
                0: "44",
                1: "111",
                2: "222",
                3: "333"}, 
                correctAnswer: 2,
                correctAnswerText: "222"
            }, 
        {
            question: "Modern composer Karlheinz Stockhausen wrote a string quartet that also requires four of the following:",
            answers: {
                0: "Other Composers",
                1: "Computers",
                2: "Extra Instruments To Smash Onstage",
                3: "Helicopters"}, 
                correctAnswer: 3,
                correctAnswerText: "Helicopters"
            }, 
        {
            question: "In separate classic cartoons, Bugs Bunny and Tom & Jerry both perform which piano piece?",
            answers: {
                0: "Hungarian Rhapsody No.2 by Franz Liszt",
                1: "Für Elise by Ludwig van Beethoven",
                2: "Fantaisie-Impromptu by Frédéric Chopin",
                3: "Claire de Lune by Claude Debussy"}, 
                correctAnswer: 0,
                correctAnswerText: "Hungarian Rhapsody No.2 by Franz Liszt"
            }, 
        {
            question: "Who composed the piece featured in the background here?",
            answers: {
                0: "Jan Ladislav Dussek",
                1: "Johann Nepomuk Hummel",
                2: "Antoine Reicha",
                3: "Leopold Koželuch"}, 
                correctAnswer: 1,
                correctAnswerText: "Johann Nepomuk Hummel"
            }, 
        
    ] 

    var gifList = ["assets/images/gifOne.gif",
                    "assets/images/gifTwo.gif",
                    "assets/images/gifThree.gif",
                    "assets/images/gifFour.gif",
                    "assets/images/gifFive.gif",
                    "assets/images/gifSix.gif",
                    "assets/images/gifSeven.gif",
                    "assets/images/gifEight.gif"]

    //Define global variables
    var questIndex = 0;
    var time;
    var clockRunning = false;
    var intervalID;
    
    var correct = 0;
    var wrong = 0;
    var timeOut = 0;

    //Prompts each subsequent question
    function promptQuestion() {

        $("#answer").html("");
        $("#restart").empty();

        // sets the timer for each questions
        $("#timer").text("Time Remaining: 00:20");
        $("#timer").css("visibility", "visible")
        timerStart();

        if (questIndex <= (questList.length - 1)) {
            $("#question").text(questList[questIndex].question);

            for (i = 0; i < 4; i++) {
                var choice = $("<button>");
                choice.addClass("btn btn-outline-light btn-lg btn-block");
                choice.attr("id","possibleChoice");
                choice.attr("answer-check", [i]);
                choice.text(questList[questIndex].answers[i]);
                $("#choice" + i).append(choice);
            }
        }
    }

    //Kicks game to next question or final result page
    function nextQuest () {
        if (questIndex <= (questList.length - 1)) {
            promptQuestion();
        }
        else {
            $("#timer").empty();
            $("#question").text("All done! Here's how you did...");
            $("#answer").empty();
            $("#choice0").text("Correct: " + correct);
            $("#choice1").text("Incorrect: " + wrong);
            $("#choice2").text("Unanswered: " + timeOut);

            $("#restart").html("<button type='button' class='btn btn-primary restartButton btn-lg'>START OVER?</button>");
        }
    }

    // ran if player runs out of time.
    function timeRunOut() {
        stop();
        $("#question").text("Ran out of time! The correct answer was " + questList[questIndex].correctAnswerText + ".");
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
        time = 20;
        intervalID = setInterval(count, 1000);

        clockRunning = true;
    }

    function count() {
        time--;
        var converted = timeConverter(time);
        $("#timer").text("Time Remaining: " + converted);

        // keeps track if player runs out of time
        if (time === 0) {
            timeRunOut();
        }
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
      

// GAME BEGINS WITH FOLLOWING CODE

    //sets-up start button
    $("#answer").html("<button type='button' class='btn btn-primary startButton btn-lg'>START</button>");

    //allows empty space on start screen
    $("#timer").text("Time Remaining: 00:20");
    $("#timer").css("visibility", "hidden")

    $(".startButton").on("click", function() {
        promptQuestion();
    });

    //Sets-up each answer choice button
    for (i = 0; i < 4; i++) {
        $("#choice" + [i]).attr("answer-check", [i]);
    }

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
            $("#question").text("Nope! The correct answer was " + questList[questIndex].correctAnswerText+ ".");
            wrong++;
        }
        for (i = 0; i < 4; i++) {
            $("#choice" + [i]).empty();
        }
         
        var currentGif = $("<img>");
        currentGif.attr({"src":gifList[questIndex], "width":"250px"});
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
            $("#question").text("Nope! The correct answer was " + questList[questIndex].correctAnswerText+ ".");
            wrong++;
        }
        for (i = 0; i < 4; i++) {
            $("#choice" + [i]).empty();
        }
         
        var currentGif = $("<img>");
        currentGif.attr({"src":gifList[questIndex], "width":"250px"});
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
            $("#question").text("Nope! The correct answer was " + questList[questIndex].correctAnswerText+ ".");
            wrong++;
        }
        for (i = 0; i < 4; i++) {
            $("#choice" + [i]).empty();
        }
         
        var currentGif = $("<img>");
        currentGif.attr({"src":gifList[questIndex], "width":"250px"});
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
            $("#question").text("Nope! The correct answer was " + questList[questIndex].correctAnswerText+ ".");
            wrong++;
        }
        for (i = 0; i < 4; i++) {
            $("#choice" + [i]).empty();
        }
         
        var currentGif = $("<img>");
        currentGif.attr({"src":gifList[questIndex], "width":"250px"});
        $("#answer").append(currentGif);

        questIndex++;
        setTimeout(nextQuest, 5*1000);
        

    });

    //restarts game if "restart" button pressed on final page
    $("#restart").on("click", function() {
        questIndex = 0;

        clockRunning = false;
        
        time=20;
        correct = 0;
        wrong = 0;
        timeOut = 0;
        for (i = 0; i < 4; i++) {
            $("#choice" + [i]).empty();
        }
        promptQuestion();
    });

















})