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

questIndex = 0;

//examples of how to reference questions/choices/answers
// console.log(questList.length);
// console.log(questList[1].question);
console.log(questList[0].answers[0]);


function gamePlay() {

    $("#answer").html("");

    if (questIndex <= (questList.length - 1)) {
        $("#question").text(questList[questIndex].question);
        // console.log(questIndex);
        // console.log(questList.length)

        for (i = 0; i < 4; i++) {
            var choice = $("<button>");
            choice.addClass("btn btn-light");
            choice.addClass("answerCheck", [i]);
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


window.onload = function () {

    //sets-up start button
    $("#answer").html("<button type='button' class='btn btn-primary'>START?</button>");


    $("#answer").click(gamePlay);

















}