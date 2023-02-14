

let questions = [{
    title: 'kraman',
    alternatives: ['mouse', 'cat', 'dog', 'parrot'],
    correctAnswer: 2
<<<<<<< HEAD
},
{
    title: 'anomaa',
    alternatives: ['mouse', 'hamster', 'lizard', 'bird'],
    correctAnswer: 3
},
{
    title: 'Okusie',
    alternatives: ['cat', 'fish', 'rat', 'shark'],
    correctAnswer: 2
},
{
    title: 'nwasena',
    alternatives: ['fly', 'puma', 'fish', 'dog'],
    correctAnswer: 0
}]

let app = {
    start: function(){

        this.currPosition = 0

        //showing alternatives in the DOM
        let alternatives = document.querySelectorAll('.alternatives')
        console.log(alternatives);
        //looping through alternatives 
        alternatives.forEach((element, index) => {
            element.addEventListener('click', () =>{
                //check correct answer
                this .checkAnswer(index)
            })
        })
        //show question
    this.showQuestion(questions[this.currPosition])
    },
=======
};
>>>>>>> bdb9d185413b53edca2a17608a93e9a333fe2374

let app = {
    start: function(){
        //showing alternatives in the DOM
        let alternatives = document.querySelectorAll('.alternatives')
        console.log(alternatives);
        //looping through alternatives 
        alternatives.forEach((element, index) => {
            element.addEventListener('click', () =>{
                //check correct answer
                this .checkAnswer(index)
            })
        })
        //show question
    this.showQuestion(question)
    },

    showQuestion: function(question){
        //keep track of current question
  
            //select title ID in html
        let titleDiv = document.getElementById('title')
        //displays in the dom
        titleDiv.textContent = question.title

<<<<<<< HEAD
        //show alternatives in DOM
        let alternatives = document.querySelectorAll('.alternatives')
        console.log(alternatives);
        //looping through alternatives to show in DOM
        alternatives.forEach(function(element, index) {
            element.textContent = question.alternatives[index]
            
        }) 
    },

    checkAnswer: function(userSelected){

        let currQuestion = questions[this.currPosition]

        if (currQuestion.correctAnswer == userSelected ) {
=======
    showQuestion: function(question){
        //keep track of current question
        this.currQuestion = question

            //select title ID in html
        let titleDiv = document.getElementById('title')
        //displays in the dom
        titleDiv.textContent = question.title

        //show alternatives in DOM
        let alternatives = document.querySelectorAll('.alternatives')
        console.log(alternatives);
        //looping through alternatives to show in DOM
        alternatives.forEach(function(element, index) {
            element.textContent = question.alternatives[index]
            
        }) 
    },

    checkAnswer: function(userSelected){
        if (this.currQuestion.correctAnswer == userSelected ) {
>>>>>>> bdb9d185413b53edca2a17608a93e9a333fe2374
            console.log("this is correct");
        } else {
            console.log('this is not correct')
        }
<<<<<<< HEAD

        //increase position
        this.increaseQuestionPosition()

        //show next question
        this.showQuestion(questions[this.currPosition])
    },

    increaseQuestionPosition: function() {
        this.currPosition++

        if(this.currPosition == questions.length) {
            this.currPosition = 0
        } 
=======
>>>>>>> bdb9d185413b53edca2a17608a93e9a333fe2374
    }
}



//initialize application
 app.start()
