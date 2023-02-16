let question = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
  };
  
  // define the array that stores all questions
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
}];
  
  let app = {
    start: function() {
      
      // keep track of current position in the questions array
      this.currPosition = 0;
      this.score = 0; //keeps track of score
      
      // get alternatives
      let alts = document.querySelectorAll('.alternatives');
    
      alts.forEach((element, index) => {
              
        element.addEventListener('click', () => {
          // check correct answer
          this.checkAnswer(index);
        });
      });

      //refresh stats
      this.updateStats();
      
      // show first question
      this.showQuestion(questions[this.currPosition]);
    },
    
    showQuestion: function(q) {
      
      // show question title
      let titleDiv = document.getElementById('title');
      titleDiv.textContent = q.title; 
    
      // show alternatives
      let alts = document.querySelectorAll('.alternatives');
    
      alts.forEach(function(element, index){
        element.textContent = q.alternatives[index];
      });
    },
    
    checkAnswer: function(userSelected) {
      
      let currQuestion = questions[this.currPosition];
      
      if(currQuestion.correctAnswer == userSelected) {
        // correct
        console.log('correct');
        this.score++;
      }
      else {
        // not correct
        console.log('wrong');
      }
      
      // increase position
      this.increasePosition();
      
      // show next question
      this.showQuestion(questions[this.currPosition]);
    },
    
    increasePosition: function() {
      // increase the current position
      this.currPosition++;
      
      // if reached the end of the database
      if(this.currPosition == questions.length){
        // send back to the beginning
        this.currPosition = 0;
      }
    },

    updateStats: function() {
        let scoreDiv = document.getElementById('score')
        scoreDiv.textContext = this.score
    }
    
  };
  
  // initialize the application
  app.start();