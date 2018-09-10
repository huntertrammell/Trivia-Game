//Create variables to house data
var qArr = [
q1 = {
  question:"What is the name of the Princess that Mario and friends are constantly having to save from Bowser?",
  CorrectAnswer:"Princess Peach",
  incorrectAnswers: {
    choiceOne: "Waluigi",
    choiceTwo: "Meghan Markle",
    choiceThree: "Princess Zelda",
  },
  answerComment:"You'd think she would have learned after her first run in with everyone's favorite spikey turtle-dragon",
  hint:"WAAAA! - Waluigi's response when he heard he wasnt the answer",
},
q2 = {
  question:"What PC game release date was delayed due to a hidden picture of a developers buttocks?",
  CorrectAnswer:"Halo 2",
  incorrectAnswers: {
    choiceOne: "Nintendogs",
    choiceTwo: "GTA IV",
    choiceThree: "PUBG",
  },
  answerComment:"This developer wasn't wearing his 'Halo'!",
  hint:"This 'cheeky' dev traded his halo in for some horns",
},
q3 = {
  question:"In what language to the Sim's speak in?",
  CorrectAnswer:"Simlish",
  incorrectAnswers: {
    choiceOne: "Simanese",
    choiceTwo: "Simpleton",
    choiceThree: "Simpsons",
  },
  answerComment:"",
  hint:"'Ahhhh Molombia' - Roughly translated to 'This one I don't know'",
},
q4 = {
  question:"In the game series 'Mass Effect', what lovable Turian seems to always be too busy to talk?",
  CorrectAnswer:"Garrus",
  incorrectAnswers: {
    choiceOne: "Tali",
    choiceTwo: "Nien Nunb",
    choiceThree: "Blasto",
  },
  answerComment:"Now I'd love to chat, but this gun really needs calibrating.",
  hint:"Can it wait? I'm in the middle of some calibrations",
},
q5 = {
  question:"What videogame series does the character 'Kyle Katarn' appear in?",
  CorrectAnswer:"Jedi Knight",
  incorrectAnswers: {
    choiceOne: "Assassins Creed",
    choiceTwo: "BioShock",
    choiceThree: "Elder Scrolls",
  },
  answerComment:"Kyle Katarn is a fictional character in the Star Wars expanded universe, who appears in the five video games of the Jedi Knight series. Lets make him canon already Disney!",
  hint:"This futuristic space-hero's name is Kyle?",
},
q6 = {
  question:"Nathan Drake, the seemingly bullet-proof protagonist in the Uncharted series can be compared to what fictional character?",
  CorrectAnswer:"Indiana Jones",
  incorrectAnswers: {
    choiceOne: "Judge Dredd",
    choiceTwo: "Walter White",
    choiceThree: "John Wick",
  },
  answerComment:"These two treasure plotting hero's share a lot of similarities, give Indiana a parkour lesson and a luck charm and you've got yourself a doppleganger",
  hint:"Snakes? I hate snakes!",
},
q7 = {
  question:"What is the social-network equivalent of FaceBook in Grand Theft Auto 5?",
  CorrectAnswer:"Lifeinvader",
  incorrectAnswers: {
    choiceOne: "Bleeter",
    choiceTwo: "Facepage",
    choiceThree: "Origin",
  },
  answerComment:"Pretty accurate",
  hint:"Bleeter is to Twitter as ******* is to Facebook in this satire",
},
q8 = {
  question:"Kratos, the tragic from the God of War series is given what nickname after accidentaly killing his family?",
  CorrectAnswer:"Ghost of Sparta",
  incorrectAnswers: {
    choiceOne: "God of War",
    choiceTwo: "The Lumberjack",
    choiceThree: "The Chosen One",
  },
  answerComment:"Kratos was tricked into killing his family by the God of War Ares, he became the Ghost of Sparta and inherited the title God of War after killing Ares",
  hint:"This spartan warrior is put a slippery slope after killing Ares and almost destroys the planet.",
},
q9 = {
  question:"What is the protagonist's title given by the demons in DOOM (2016)?",
  CorrectAnswer:"DOOM Slayer",
  incorrectAnswers: {
    choiceOne: "DOOM Guy",
    choiceTwo: "Doomba",
    choiceThree: "Doctor Doom",
  },
  answerComment:"A bit more intimidating than DOOM Guy. On a side note, you should google Doomba - your welcome",
  hint:"Arguments could be made on DOOM Slayer v. DOOM Guy. If you were a demon, what would you call the someone whose purpose is to kill demons?",
},
q10 = {
  question:"In the game Minecraft, what is the male players default name?",
  CorrectAnswer:"Steve",
  incorrectAnswers: {
    choiceOne: "Stinky Pete",
    choiceTwo: "Brad",
    choiceThree: "Alex",
  },
  answerComment:"Although the character was created to be genderless, the developer gave the 'minecraft guy' the default name steve as a joke",
  hint:"You should try substituting Stevia for sugar in your tea!",
}]
console.log(qArr)
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