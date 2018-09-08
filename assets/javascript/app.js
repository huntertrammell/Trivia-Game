
//Create variables to house data
var queryURL = "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple"

//Create ajax function to get question and formulate answers
//https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var question = response.results[0].question;
    var choices = [response.results[0].incorrect_answers[0], response.results[0].incorrect_answers[1], response.results[0].incorrect_answers[2], response.results[0].correct_answer]
    var answer = choices.indexOf(response.results[0].correct_answer);
    console.log(question);
    console.log(choices);
    console.log(answer);
  });

//Create timer that will determine how long a question can be present before showing answer.

//Create function to decide wether question is correct or incorrect.

//Create function that shuffles choices array

//Push data into HTML

//Create function that shows user if answer is correct or incorrect
//Create function that adds a counter to correct v incorrect questions.

//Push data into HTML


//Create a function that clones div to add css class to trigger card animation when changing the question.
//Create function that will generate a new question using AJAX

//Create a win/loss tracker and determine what percent of answers correct to be determined a win v loss

//Create reset that populates start screen, but keeps win/loss data presented on screen


//BONUS - Create session token to prevent duplicate answers and reset once all answers have been displayed


