
//Create variables to house data
var queryURL = "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple"
var triviaQuestion;
var triviaAnswer;
var a;
var b;
var c;
var d;

//Hides radio buttons until BEGIN button pressed
$(document).ready(function() {
  $('.gameBegin').hide();
})
//hides intro and populates buttons on screen

//Create ajax function to get question and formulate answers
//https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var question = response.results[0].question
    var choices = [response.results[0].incorrect_answers[0], response.results[0].incorrect_answers[1], response.results[0].incorrect_answers[2], response.results[0].correct_answer]
    var answer = choices.indexOf(response.results[0].correct_answer)
    console.log(question);
    console.log(choices);
    console.log(answer);
    //shuffle choice array
    shuffle(choices);
    function shuffle(choices) {
        for(var j, x, i = choices.length; i; j = parseInt(Math.random() * i), x = choices[--i], choices[i] = choices[j], choices[j] = x);
        return choices;
    }
    $('#btn').click(function() {
      $('#start').hide();
      $('.gameBegin').show();
      $('#question').text(question);
      $('#a').text(choices[0]);
      $('#b').text(choices[1]);
      $('#c').text(choices[2]);
      $('#b').text(choices[3]);
      run();
    })
    //need to review AJAX issues, will create rest of game using place holder text then swap out with AJAX once done
   /* $('#question').text(question);
    $('#a').text(choices[0]);
    $('#b').text(choices[1]);
    $('#c').text(choices[2]);
    $('#b').text(choices[3]); */
  })
//trying to get data to load from API and generate in box
/*function apiLoader(){
  $('.gameBegin').show();
  $('#question').text(question);
  $('#a').text(choices[0]);
  $('#b').text(choices[1]);
  $('#c').text(choices[2]);
  $('#b').text(choices[3]);
  run();
}*/

//Create timer that will determine how long a question can be present before showing answer.
var number = 30;
var intervalId;

function decrement(){
  number--;
  $("#timer").text(`:${number}`);
  if (number === 0) {
    stop();
  }
  if (number < 10) {
    $("#timer").text(`:0${number}`);
  }
}
function run(){
  intervalId = setInterval(decrement, 1000);
}
function stop(){
  clearInterval(intervalId);
}
//create function for shuffling array from API


//Create function that shows user if answer is correct or incorrect
//Create function that adds a counter to correct v incorrect questions.

//Push data into HTML


//Create a function that clones div to add css class to trigger card animation when changing the question.
//Create function that will generate a new question using AJAX

//Create a win/loss tracker and determine what percent of answers correct to be determined a win v loss

//Create reset that populates start screen, but keeps win/loss data presented on screen


//BONUS - Create session token to prevent duplicate answers and reset once all answers have been displayed


