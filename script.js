const questions = [
    {
        question: 'Which tag create a link in HTML?',
        option: ['<link>', '<a>', '<href>', '<url>']
    },
    {
        question: 'How many main should be in website?',
        option: ['<2>', '<8>', '<1>', '<5>']
    }
]
let questionNumber = 1;

const h2question = document.querySelector('.question h2')

const optionList = document.querySelector('.flex');

const progress = document.getElementById('remainingNumber')
const optionListItem = document.querySelectorAll('button');

console.log(optionListItem);

const answer = document.querySelector('.answer');

function showcontent() {
    progress.textContent = ' Question ' + (questionNumber + 1) + ' of ' + questions.length;
    let current = questions[questionNumber];
    h2question.textContent = current.question;

    for (let i = 0; i < optionListItem.length; i++) {
        optionListItem[i].textContent = current.option[i];
        
      
    }
}
  optionListItem[0].addEventListener('click', () => {
            answer.classList.toggle("active");
        });
showcontent();
