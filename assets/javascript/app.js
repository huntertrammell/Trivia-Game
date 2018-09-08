
//Create variable to house question data
//https://www.sitepoint.com/simple-javascript-quiz/
var triviaQuestion = [
    {
    question: "What is Superman's birthname?", 
    answer: { 
        a: "Bruce Wayne",
        b: "Kal-El",
        c: "Clark Kent",
        d: "Henry Cavil",
        },
    //https://stackoverflow.com/questions/4616202/self-references-in-object-literal-declarations
    correctAnswer: "B: Kal-el is Supermans real name, Clark Kent was given too him by his earth parents when they found him on the ground in Kansas.",
}];

//https://opentdb.com/api.php?amount=9&category=29&difficulty=easy
console.log(triviaQuestion[0].correctAnswer)
//Create function that will generate question into the htmlcard.
//Create function that will determine what match button value to variable.
//Create function to decide wether question is correct or incorrect.
//Create function that shows user correct/incorrect and displays var.answer.
//Create function that adds a counter to correct v incorrect questions.
//Create timer that will determine how long a question can be present before showing answer.
//Create a win/loss tracker and determine what percent of answers correct to be determined a win v loss
//Create a function that clones div to add css class to trigger card animation when changing the question.
