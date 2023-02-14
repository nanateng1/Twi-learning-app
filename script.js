

let questions = [{
    title: 'kraman',
    alternatives: ['mouse', 'cat', 'dog', 'parrot'],
    correctAnswer: 2
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


    showQuestion: function(question){
        //keep track of current question
  
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

        let currQuestion = questions[this.currPosition]

        if (currQuestion.correctAnswer == userSelected ) {
            console.log("this is correct");
        } else {
            console.log('this is not correct')
        }

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
    }
}



//initialize application
 app.start()


