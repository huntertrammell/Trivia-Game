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
  //shown when Clippy is clicked during game
  hint:"WAAAA! - Waluigi's response when he heard he wasnt the answer",
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
  hint:"This 'cheeky' dev traded his halo in for some horns",
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
  hint:"'Ahhhh Molombia' - Roughly translated to 'This one I don't know'",
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
  hint:"Can it wait? I'm in the middle of some calibrations",
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
  hint:"This futuristic space-hero's name is Kyle?",
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
  hint:"Snakes? I hate snakes!",
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
  hint:"Bleeter is to Twitter as ******* is to Facebook in this satire",
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
  hint:"This spartan warrior is put a slippery slope after killing Ares and almost destroys the planet.",
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
  hint:"Arguments could be made on DOOM Slayer v. DOOM Guy. If you were a demon, what would you call the someone whose purpose is to kill demons?",
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
  hint:"You should try substituting Stevia for sugar in your tea!",
}]

console.log(qArr)
var number = 10;
var num2 = 6;
var intervalId;
var round = 0;
var wins = 0;
var losses = 0;
//Hides radio buttons until BEGIN button pressed
$(document).ready(function() {
  $('.gameBegin').hide();
  $('.reload').hide();
})
//Main Game function
$('#btn').click(function() {
  $('#start').hide();
  $('.gameBegin').show();
  shuffle(qArr)
  round++;
  $('#round').text(round)
  $('#qcounter').text('QUESTION #1')
  run()
  /*$('#question').text(qArr[0].question);
  $('#a').text(qArr[0].incorrectAnswers.choiceOne);
  $('#b').text(qArr[0].incorrectAnswers.choiceTwo);
  $('#c').text(qArr[0].correctAnswer);
  $('#d').text(qArr[0].incorrectAnswers.choiceThree);
  $('#c').on('click', function(){
    $('#c').addClass('correct')})
  $('#a, #b, #d').on('click', function(){
    ($('#c')).removeClass('correct')
  })
  run();
  setTimeout(function(){
    if ($('#c').hasClass('correct')){
      wins++
      $('#wins').text(wins)
    } else {
      losses++
      $('#losses').text(losses)
    }
    $('#a, #b, #d').addClass('text-danger')
    $('#correctAnswer').text(qArr[0].answerComment)
    stop()
  }, 10000)
  setTimeout(function(){
  $('#qcounter').text('QUESTION #2')
  $('#a, #b, #c, #d').removeClass('active')  
  $('#c').removeClass('correct')
  $('#question').text(qArr[1].question);
  $('#c').text(qArr[1].incorrectAnswers.choiceOne);
  $('#b').text(qArr[1].incorrectAnswers.choiceTwo);
  $('#a').text(qArr[1].correctAnswer);
  $('#d').text(qArr[1].incorrectAnswers.choiceThree);
  $('#a, #b, #d').removeClass('text-danger')
  $('#correctAnswer').text('')
  $('#timer').text(':10')
  $('#a').on('click', function(){
    $('#a').addClass('correct')})
  $('#c, #b, #d').on('click', function(){
    ($('#a')).removeClass('correct')})
  run();
  }, 20000)
  setTimeout(function(){
    if ($('#a').hasClass('correct')){
      wins++
      $('#wins').text(wins)
    } else {
      losses++
      $('#losses').text(losses)
    }
    $('#c, #b, #d').addClass('text-danger')
    $('#correctAnswer').text(qArr[1].answerComment)
    stop();
  }, 30000)
  setTimeout(function(){
    $('#qcounter').text('QUESTION #3')
    $('#a, #b, #c, #d').removeClass('active')
    $('#question').text(qArr[2].question);
    $('#c').text(qArr[2].incorrectAnswers.choiceOne);
    $('#a').text(qArr[2].incorrectAnswers.choiceTwo);
    $('#b').text(qArr[2].correctAnswer);
    $('#d').text(qArr[2].incorrectAnswers.choiceThree);
    $('#c, #b, #d').removeClass('text-danger')
    $('#correctAnswer').text('')
    $('#timer').text(':10')
    $('#a').removeClass('correct')
    $('#b').on('click', function(){
      $('#b').addClass('correct')})
    $('#c, #a, #d').on('click', function(){
      ($('#b')).removeClass('correct')})
    run();
    }, 40000)
  setTimeout(function(){
    if ($('#b').hasClass('correct')){
      wins++
      $('#wins').text(wins)
    } else {
      losses++
      $('#losses').text(losses)
    }
    $('#c, #a, #d').addClass('text-danger')
    $('#correctAnswer').text(qArr[2].answerComment)
    stop();
  }, 50000)
  setTimeout(function(){
    $('#qcounter').text('QUESTION #4')
    $('#a, #b, #c, #d').removeClass('active')
    $('#question').text(qArr[3].question);
    $('#c').text(qArr[3].incorrectAnswers.choiceOne);
    $('#b').text(qArr[3].incorrectAnswers.choiceTwo);
    $('#a').text(qArr[3].correctAnswer);
    $('#d').text(qArr[3].incorrectAnswers.choiceThree);
    $('#c, #a, #d').removeClass('text-danger')
    $('#correctAnswer').text('')
    $('#timer').text(':10')
    $('#b').removeClass('correct')
    $('#a').on('click', function(){
      $('#a').addClass('correct')})
    $('#c, #b, #d').on('click', function(){
      ($('#a')).removeClass('correct')})
    run();
    }, 60000)
  setTimeout(function(){
    $('#c, #b, #d').addClass('text-danger')
    $('#correctAnswer').text(qArr[3].answerComment)
    stop();
    if ($('#a').hasClass('correct')){
      wins++
      $('#wins').text(wins)
    } else {
      losses++
      $('#losses').text(losses)
    }
  }, 70000)
  setTimeout(function(){
    $('#qcounter').text('QUESTION #5')
    $('#a, #b, #c, #d').removeClass('active')
    $('#question').text(qArr[4].question);
    $('#c').text(qArr[4].incorrectAnswers.choiceOne);
    $('#b').text(qArr[4].incorrectAnswers.choiceTwo);
    $('#d').text(qArr[4].correctAnswer);
    $('#a').text(qArr[4].incorrectAnswers.choiceThree);
    $('#c, #b, #d').removeClass('text-danger')
    $('#correctAnswer').text('')
    $('#timer').text(':10')
    $('#a').removeClass('correct')
    $('#d').on('click', function(){
      $('#d').addClass('correct')})
    $('#c, #b, #a').on('click', function(){
      ($('#d')).removeClass('correct')})
    run();
    }, 80000)
  setTimeout(function(){
    $('#c, #b, #a').addClass('text-danger')
    $('#correctAnswer').text(qArr[4].answerComment)
    if ($('#d').hasClass('correct')){
      wins++
      $('#wins').text(wins)
    } else {
      losses++
      $('#losses').text(losses)
    }
    stop();
  }, 90000)
  //master set timeout function for total game duration 
  setTimeout(function(){
    reset()
  }, 100000)*/

})
var arrayPosition = 0;
//functions
$("li").click(function() {
  console.log("OTH CLICK EVENT")
  $(this).addClass("clicked");
  console.log("THIS TEXT: ", $(this).text())
  console.log("qArr0: ", qArr[arrayPosition].correctAnswer)
  if ($(this).text() == qArr[arrayPosition].correctAnswer) {
    $(this).addClass('correct')
    console.log("INSIDE LI CLICK");
    if ($(this).hasClass('correct')){
      wins++
      $('#wins').text(wins)
    } 
  } else {
      console.log("you lose: ", losses)
      losses++
      $('#losses').text(losses)
  }
  if ($(this).hasClass('clicked')) {
    stop()
  }
});

function reset(){
    run2()
    setTimeout(function(){
    $('#a, #b, #c, #d').removeClass('text-danger')
    $('#question').text('')
    $('#correctAnswer').text('')
    $('.gameBegin').hide()
    $('#start').show()
    $('.reload').hide();
    $('#bsod').attr('src', '')
    $('#qcounter').text('VIDEOGAME TRIVIA!')
    }, 7000)
    
}
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
function decrement2(){
  num2--;
  $(".bsod").text(`Your game will reload in: ${num2}`);
  if (num2 === 0) {
    $(".bsod").text(`Initializing Startup...`)
    stop();
  }
  if (num2 === 4){
  $(".bsod").text(`Your game will reload in: 5...${num2}`)
  }
  if (num2 === 3){
    $(".bsod").text(`Your game will reload in: 5...4...${num2}`)
  }
  if (num2 === 2){
    $(".bsod").text(`Your game will reload in: 5...4...3...${num2}`)
  }
  if (num2 === 1){
    $(".bsod").text(`Your game will reload in: 5...4...3...2...${num2}`)
  }
  
}
function run2(){
  $('.reload').show();
  $('#bsod').attr('src', 'assets/images/BSOD.png')
  intervalId = setInterval(decrement2, 1000);
}
function run(){
  //var qArr=[q1.question, q2.question, q3.question, q4.question, q5.question, q6.question, q7.question, q8.question, q9.question, q10.question]
  clearInterval(intervalId)
  number = 10
  intervalId = setInterval(decrement, 1000);
  var ansArr = [qArr[arrayPosition].correctAnswer, qArr[arrayPosition].incorrectAnswers.choiceOne, qArr[arrayPosition].incorrectAnswers.choiceTwo, qArr[arrayPosition].incorrectAnswers.choiceThree,]
  shuffle(ansArr)
  $('#question').text(qArr[arrayPosition].question)
  $('#a').text(ansArr[0])
  $('#b').text(ansArr[1])
  $('#c').text(ansArr[2])
  $('#d').text(ansArr[3])
}
function stop(){
  clearInterval(intervalId);
  $("#timer").text(`:${number}`);
  if (number === 0) {
    $("#timer").text(`:0${number}`)
    $('#losses').text(losses)
    stop();
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
  $("#timer").text(`:${number}`)
  if (wins++) {
    $('#answerComment').text('You Guessed Correct!')
  } else {
    $('#answerComment').text('You Guessed Incorrect!')
  }
  setTimeout(function(){
    $("#timer").text(`:10`)
    $('#answerIs').text('')
    $('#correctAnswer').text('')
    $('#answerComment').text('')
    arrayPosition++
    run()
  }, 5000)
  
}
function shuffle(qArr) {
    for(var j, x, i = qArr.length; i; j = parseInt(Math.random() * i), x = qArr[--i], qArr[i] = qArr[j], qArr[j] = x);
    return qArr;
}
function shuffle(ansArr) {
  for(var j, x, i = ansArr.length; i; j = parseInt(Math.random() * i), x = ansArr[--i], ansArr[i] = ansArr[j], ansArr[j] = x);
  return ansArr;
}

/*ICEBOX - 
1-put Clippy in bottom corner and if clicked provide question hint.
2-create loading bar that is in the scoreboard that fills to show how much time is left
  -CSS animation triggers
3-animate objects on hover
4-customize radio buttons - past making them bigger
5-Add BSOD with rebooting in... using jquery/timeouts at end of game during reset function
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