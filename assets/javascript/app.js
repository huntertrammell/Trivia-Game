//Create variables to house data
var qArr = [
q1 = {
  //question to be displayed
  question:"What is the name of the Princess that Mario and friends are constantly having to save from Bowser?",
  //possible answers
  correctAnswer:"Princess Peach",
  incorrectAnswers: {
    choiceOne: "Waluigi",
    choiceTwo: "Meghan Markle",
    choiceThree: "Princess Zelda",
  },
  //provides answer explanation or comment
  answerComment:"You'd think she would have learned after her first run in with everyone's favorite spikey turtle-dragon",
},
q2 = {
  question:"What PC game release date was delayed due to a hidden picture of a developers buttocks?",
  correctAnswer:"Halo 2",
  incorrectAnswers: {
    choiceOne: "Nintendogs",
    choiceTwo: "GTA IV",
    choiceThree: "PUBG",
  },
  answerComment:"This developer wasn't wearing his 'Halo'!",
},
q3 = {
  question:"In what language to the Sim's speak in?",
  correctAnswer:"Simlish",
  incorrectAnswers: {
    choiceOne: "Simanese",
    choiceTwo: "Simpleton",
    choiceThree: "Simpsons",
  },
  answerComment:"Simlish is a 'language' made up of gibberish words that can be translated to phrases",
},
q4 = {
  question:"In the game series 'Mass Effect', what lovable Turian seems to always be too busy to talk?",
  correctAnswer:"Garrus",
  incorrectAnswers: {
    choiceOne: "Tali",
    choiceTwo: "Nien Nunb",
    choiceThree: "Blasto",
  },
  answerComment:"Now I'd love to chat, but this gun really needs calibrating.",
},
q5 = {
  question:"What videogame series does the character 'Kyle Katarn' appear in?",
  correctAnswer:"Jedi Knight",
  incorrectAnswers: {
    choiceOne: "Assassins Creed",
    choiceTwo: "BioShock",
    choiceThree: "Elder Scrolls",
  },
  answerComment:"Kyle Katarn is a fictional character in the Star Wars expanded universe, who appears in the five video games of the Jedi Knight series. Lets make him canon already Disney!",
},
q6 = {
  question:"Nathan Drake, the seemingly bullet-proof protagonist in the Uncharted series can be compared to what fictional character?",
  correctAnswer:"Indiana Jones",
  incorrectAnswers: {
    choiceOne: "Judge Dredd",
    choiceTwo: "Walter White",
    choiceThree: "John Wick",
  },
  answerComment:"These two treasure plotting hero's share a lot of similarities, give Indiana a parkour lesson and a luck charm and you've got yourself a doppleganger",
},
q7 = {
  question:"What is the social-network equivalent of FaceBook in Grand Theft Auto 5?",
  correctAnswer:"Lifeinvader",
  incorrectAnswers: {
    choiceOne: "Bleeter",
    choiceTwo: "Facepage",
    choiceThree: "Origin",
  },
  answerComment:"Pretty accurate.",
},
q8 = {
  question:"Kratos, the tragic protagonist from the God of War series is given what nickname after accidentaly killing his family?",
  correctAnswer:"Ghost of Sparta",
  incorrectAnswers: {
    choiceOne: "God of War",
    choiceTwo: "The Lumberjack",
    choiceThree: "The Chosen One",
  },
  answerComment:"Kratos was tricked into killing his family by the God of War Ares, he became the Ghost of Sparta and inherited the title God of War after killing Ares",
},
q9 = {
  question:"What is the protagonist's title given by the demons in DOOM (2016)?",
  correctAnswer:"DOOM Slayer",
  incorrectAnswers: {
    choiceOne: "DOOM Guy",
    choiceTwo: "Doomba",
    choiceThree: "Doctor Doom",
  },
  answerComment:"A bit more intimidating than DOOM Guy. On a side note, you should google Doomba - your welcome",
},
q10 = {
  question:"In the game Minecraft, what is the male players default name?",
  correctAnswer:"Steve",
  incorrectAnswers: {
    choiceOne: "Stinky Pete",
    choiceTwo: "Brad",
    choiceThree: "Alex",
  },
  answerComment:"Although the character was created to be genderless, the developer gave the 'minecraft guy' the default name steve as a joke",
}]

var number = 10;
var intervalId;
var round = 0;
var wins = 0;
var losses = 0;
var arrayPosition = 0;
var questionNum = 1;
var userGuess = "";
//hides some items until next function
$(document).ready(function() {
  $('.gameBegin').hide();
})
//on load Game start function
$('#btn').click(function() {
  $('#start').hide();
  $('#prompt').text('');
  $('#question').show();
  $('li').show();
  $('.gameBegin').show();
  qArr = qArr
  shuffle(qArr)
  round++;
  $('#round').text(round)
  $('#qcounter').text(`QUESTION #${questionNum}`)
  run()
})
//what happens when user makes choice
$("li").click(function() {
  console.log("OTH CLICK EVENT")
  $(this).addClass("clicked");
  userGuess = $(this).text();
  console.log("THIS TEXT: ", $(this).text())
  console.log("qArr0: ", qArr[arrayPosition].correctAnswer)
  if ($(this).text() == qArr[arrayPosition].correctAnswer) {
    $(this).addClass('correct')
    console.log("INSIDE LI CLICK");
    if ($(this).hasClass('correct')){
      wins++
      $('#wins').text(wins)
      $('#answerComment').text(qArr[arrayPosition].answerComment)
      $('#youGuessed').text(`You guessed "${userGuess}"`)
    }
  } else {
      console.log("you lose: ", losses)
      losses++
      $('#losses').text(losses)
      $('#answerComment').text(qArr[arrayPosition].answerComment)
      $('#youGuessed').addClass("text-danger")
      $('#youGuessed').text(`You guessed "${userGuess}"`)
  }
  if ($(this).hasClass('clicked')) {
    stop()
  }
});
//Timer speed
function decrement(){
  number--;
  $("#timer").text(`:10`);
  if (number === 0) {
    $("#timer").text(`:0${number}`);
    losses++
    console.log(number)
    $('#losses').text(losses)
    $('#answerComment').text('You Did Not Guess in Time!')
    stop();
  }
  if (number < 10) {
    $("#timer").text(`:0${number}`);
  }
  console.log(number)
}
//Timer and data function
function run(){
  clearInterval(intervalId)
  $('#qcounter').text(`QUESTION #${questionNum}`)
  number = 10
  intervalId = setInterval(decrement, 1000);
  var ansArr = [qArr[arrayPosition].correctAnswer, qArr[arrayPosition].incorrectAnswers.choiceOne, qArr[arrayPosition].incorrectAnswers.choiceTwo, qArr[arrayPosition].incorrectAnswers.choiceThree,]
  shuffle(ansArr)
  $('#question').text(qArr[arrayPosition].question)
  $('#a').text(ansArr[0])
  $('#b').text(ansArr[1])
  $('#c').text(ansArr[2])
  $('#d').text(ansArr[3])
  reset()
}
//Timer pause and question regen
function stop(){
  clearInterval(intervalId);
  $("#timer").text(`:0${number}`);
  if (number === 0) {
    $("#timer").text(`:0${number}`)
    $('#losses').text(losses)
  }
  if (number < 10) {
    $("#timer").text(`:0${number}`);
  }
  $('#a').text('')
  $('#b').text('')
  $('#c').text('')
  $('#d').text('')
  $('#answerIs').text('The answer is:')
  $('#correctAnswer').text(qArr[arrayPosition].correctAnswer)
  $("#timer").text(`:0${number}`)
  setTimeout(function(){
    $("#timer").text(`:10`)
    $('#answerIs').text('')
    $('#correctAnswer').text('')
    $('#answerComment').text('')
    $('#userAnswer').text('')
    $('#youGuessed').text('')
    $('#youGuessed').removeClass("text-danger")
    arrayPosition++
    questionNum++
    run()
  }, 5000)
  
}

//Array Shufflers
function shuffle(qArr) {
  for(var j, x, i = qArr.length; i; j = parseInt(Math.random() * i), x = qArr[--i], qArr[i] = qArr[j], qArr[j] = x);
  return qArr;
}
function shuffle(ansArr) {
  for(var j, x, i = ansArr.length; i; j = parseInt(Math.random() * i), x = ansArr[--i], ansArr[i] = ansArr[j], ansArr[j] = x);
  return ansArr;
}

//game reset function
function reset() {
  if (questionNum === 6) {
    clearInterval(intervalId);
    shuffle(qArr)
    $('#qcounter').text(`VIDEOGAME TRIVIA!`)
    $("#timer").text(`:10`);
    $('#start').show();
    $('#prompt').text('Play Again?');
    $('#reload').hide();
    $('#question').hide();
    $('li').hide();
    arrayPosition = 0;
    questionNum = 1;
    wins = 0;
    $('#wins').text(wins)
    losses = 0;
    $('#losses').text(losses)
  }
}