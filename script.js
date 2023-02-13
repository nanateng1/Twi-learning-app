let question = {
    title: 'kraman',
    alternatives: ['mouse', 'cat', 'dog', 'parrot'],
    correctAnswer: 3
};



function showQuestion (question) {
    //select title ID in html
    let titleDiv = document.getElementById('title')

    //modify title div to appear in the DOM
    titleDiv.textContent = question.title

    //showing alternatives in the DOM
    let alternatives = document.querySelectorAll('.alternatives')
    console.log(alternatives);
    alternatives.forEach(function(element, index) {
        element.textContent = question.alternatives[index]
    })
}

showQuestion(question)