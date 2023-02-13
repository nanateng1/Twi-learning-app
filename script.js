let question = {
    title: 'kraman',
    alternatives: ['mouse', 'cat', 'dog', 'parrot'],
    correctAnswer: 2
};

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
            console.log("this is correct");
        } else {
            console.log('this is not correct')
        }
    }
}



//initialize application
 app.start()


