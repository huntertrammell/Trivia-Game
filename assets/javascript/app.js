//Create variables to house data
var qArr = [
q1 = {
  question:"",
  CorrectAnswer:"",
  incorrectAnswers: {
    choiceOne: "",
    choiceTwo: "",
    choiceThree: "",
  },
  answerComment:"",
  hint:"",
},
q2 = {
  question:"",
  CorrectAnswer:"",
  incorrectAnswers: {
    choiceOne: "",
    choiceTwo: "",
    choiceThree: "",
  },
  answerComment:"",
  hint:"",
},
q3 = {
  question:"",
  CorrectAnswer:"",
  incorrectAnswers: {
    choiceOne: "",
    choiceTwo: "",
    choiceThree: "",
  },
  answerComment:"",
  hint:"",
},
q4 = {
  question:"",
  CorrectAnswer:"",
  incorrectAnswers: {
    choiceOne: "",
    choiceTwo: "",
    choiceThree: "",
  },
  answerComment:"",
  hint:"",
},
q5 = {
  question:"",
  CorrectAnswer:"",
  incorrectAnswers: {
    choiceOne: "",
    choiceTwo: "",
    choiceThree: "",
  },
  answerComment:"",
  hint:"",
},
q6 = {
  question:"",
  CorrectAnswer:"",
  incorrectAnswers: {
    choiceOne: "",
    choiceTwo: "",
    choiceThree: "",
  },
  answerComment:"",
  hint:"",
},
q7 = {
  question:"",
  CorrectAnswer:"",
  incorrectAnswers: {
    choiceOne: "",
    choiceTwo: "",
    choiceThree: "",
  },
  answerComment:"",
  hint:"",
},
q8 = {
  question:"",
  CorrectAnswer:"",
  incorrectAnswers: {
    choiceOne: "",
    choiceTwo: "",
    choiceThree: "",
  },
  answerComment:"",
  hint:"",
},
q9 = {
  question:"",
  CorrectAnswer:"",
  incorrectAnswers: {
    choiceOne: "",
    choiceTwo: "",
    choiceThree: "",
  },
  answerComment:"",
  hint:"",
},
q10 = {
  question:"",
  CorrectAnswer:"",
  incorrectAnswers: {
    choiceOne: "",
    choiceTwo: "",
    choiceThree: "",
  },
  answerComment:"",
  hint:"",
}]

//Hides radio buttons until BEGIN button pressed
$(document).ready(function() {
  $('.gameBegin').hide();
})
//Main Game function
$('#btn').click(function() {
  $('#start').hide();
  $('.gameBegin').show();
  run();
  //master set timeout function for total game duration (10 questions @ :30 each + 10 answer reveals at :10 each, at the end this will trigger reset function total timer=7:40)
})

//Create timer that will count down from 30 and push to scoreboard
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

//Create a win/loss tracker and determine what percent of answers correct to be determined a win v loss

//Create reset that populates start screen, but keeps win/loss data presented on screen

/*ICEBOX - 
1-put Clippy in bottom corner and if clicked provide question hint.
2-create loading bar that is in the scoreboard that fills to show how much time is left
  -CSS animation triggers
3-animate objects on hover
4-customize radio buttons - past making them bigger
*/

/*//attempted to incorporate API into this to gen questions, but could not get around asyncronous uploading. Will try to revisit later
var queryURL = "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple"
var triviaQuestion;
var triviaAnswer;
var a;
var b;
var c;
var d;
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
    //need to review AJAX issues, will create rest of game using place holder text then swap out with AJAX once done
    $('#question').text(question);
    $('#a').text(choices[0]);
    $('#b').text(choices[1]);
    $('#c').text(choices[2]);
    $('#b').text(choices[3]); 
  })
  */