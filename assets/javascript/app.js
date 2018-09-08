
//Create variable to house question data
let question1 = {
    text: "What is Superman's birthname?",
    a: "Bruce Wayne",
    b: "Kal-El",
    c: "Clark Kent",
    d: "Henry Cavil",
    //https://stackoverflow.com/questions/4616202/self-references-in-object-literal-declarations
    get answer() {
        return "B: " + this.b + " is Supermans real name, Clark Kent was given too him by his earth parents when they found him on the ground in Kansas."
    }
}
console.log (question1.answer);

//Create function that will generate question into the htmlcard.
//Create function that will determine what match button value to variable.
//Create function to decide wether question is correct or incorrect.
//Create function that shows user correct/incorrect and displays var.answer.
//Create function that adds a counter to correct v incorrect questions.
//Create timer that will determine how long a question can be present before showing answer.
//Create a win/loss tracker and determine what percent of answers correct to be determined a win v loss
//Create a function that clones div to add css class to trigger card animation when changing the question.
