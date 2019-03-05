var questList = [
    {
        questions: "Who famously wrote a total of nine symphonies, beginning the so called 'curse of the ninth'?",
        // make answers into an array? then set correctAnswer = the "string" within the answers array
        answers: {
            a: "Johann Sebastian Bach",
            b: "Franz Joseph Haydn",
            c: "Wolfgang Amadeus Mozart",
            d: "Ludwig van Beethoven"}, 
            correctAnswer: "d"
        },
    {
        question: "Who fathered 20 children?",
        answers: {
            a: "Johann Sebastian Bach",
            b: "Franz Joseph Haydn",
            c: "Wolfgang Amadeus Mozart",
            d: "Ludwig van Beethoven"}, 
            correctAnswer: "a"
        }, 
] 

//examples of how to reference questions/choices/answers
// console.log(questList.length);
// console.log(questList[1].question);
// console.log(questList[1].answers.a);


function gamePlay() {





}


window.onload = function () {

    //sets-up start button
    $("#answer").html("<button type='button' class='btn btn-primary'>START?</button>");


    $("#answer").click(gamePlay);

















}