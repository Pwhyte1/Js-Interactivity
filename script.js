const questions = [
    {
        question: 'Which tag create a link in HTML?',
        option: ['<link>', '<a>', '<href>', '<url>'],
         correctans: 1
        
    },
    {
        question: 'How many main should be in website?',
        option: ['<2>', '<8>', '<1>', '<5>'],
        correctans: 2
        }
]
let questionNumber = 0;
let count = 0;

const h2question = document.querySelector('.question h2')

const optionList = document.querySelector('.flex');
const message = document.getElementById('message')
const progress = document.getElementById('remainingNumber')
const optionListItem = document.querySelectorAll('.answer-btn');
const score = document.getElementById('count')
const nxtbtn = document.getElementById('next')

console.log(optionListItem);

const answer = document.querySelector('.answer');

function showcontent() {
    progress.textContent = ' Question ' + (questionNumber + 1) + ' of ' + questions.length;
    let current = questions[questionNumber];
    h2question.textContent = current.question;

    for (let i = 0; i < optionListItem.length; i++) {
        optionListItem[i].textContent = current.option[i];
        
   
    }
       optionListItem.forEach((btn)=>{
        btn.disabled =false
        btn.style.backgroundColor = ""
      })

}
optionList.addEventListener('click', (e) => {
  let action = e.target.closest('.answer-btn');
  


  
  let answerindex = Array.from(optionListItem).indexOf(action);
  let currentquestion = questions[questionNumber];

  if (answerindex === currentquestion.correctans) {
     count++;
      score.textContent = count;
    action.style.backgroundColor = 'aqua';
answer.classList.add('active')
  }
  else{ 
    action.style.backgroundColor = 'red';
    message.style.color = 'red'
    message.textContent = `Wrong Answer the correct answer is ${optionListItem[currentquestion.correctans].textContent}` ;
    optionListItem[currentquestion.correctans].style.backgroundColor = 'aqua';
    answer.classList.add('active')
   
  }
  optionListItem.forEach((btn)=>{
    btn.disabled = true
  })
  console.log(answerindex); 
});

nxtbtn.addEventListener('click',()=>{
    
    if(questionNumber < questions.length - 1){
    questionNumber++
    showcontent()
    }
    else{
        message.textContent = "Quiz Completed";
        nxtbtn.disabled = true
    }
});
showcontent();