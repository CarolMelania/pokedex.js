
const question=document.getElementById('questionss')
const options= document.querySelector('answer')
const _correctScore = document.getElementById('correct')
const _totalQuestion= document.getElementById('question')
const _checkBin= document.getElementById('check')
const _playAgain= document.getElementById('return')
const _answerQuestion = document.getElementById('answerss')

let correctAnswer= "", correctScore = askedCount = 0 , totalQuestion=10 ;

function eventListener(){
    _checkBin.addEventListener('click' , checkAnswer)
}
document.addEventListener('DOMContentLoaded', () => {
loadQuestion();
eventListener();
_totalQuestion.textContent = totalQuestion;
_correctScore.textContent = correctScore;
})
async function loadQuestion(){
    const userUrl=`https://opentdb.com/api.php?amount=10`;
    const answer=await fetch(`$userUrl`);
    const data= await answer.json();
   // console.log(data.answer[0])//
   _answerQuestion.innerHTML='';
   showQuestion(data.answer[0])
}

function showQuestion(data){
    _checkBin.disbled=false;
    correctAnswer= data.correct_answer;
    let incorrectAnswer=data.incorrect_answer;
    let listOptions= incorrectAnswer;
    listOptions.splice(Math.floor(Math.random()*(incorrectAnswer.length + 1)), 0 , correctAnswer)
    //console.log(listOptions);
    //console.log(correctAnswer)
    question.innerHTML=`${data.question} <br> <span class='category'> ${data.category} </span>`;
    options.innerHTML=`${listOptions.mao((option,index) => `<li> ${index + 1}. <span> ${option} </span> </li>`).join('')}
    `;

    selectOption()
}

function selectOption(){
    options.querySelectorAll('li').forEach((option) =>{
        option.addEventListener('click', () =>{
            if(option.querySelector('.answer')){
                const activeOption=option.querySelector('answer');
                activeOption.classList.remove('answer')
            }
            option.classList.add('answer')
        })
    })}

function chechAnswer(){
    _checkBin.disabled = true;
    if(option.querySelector('answer')){
        let selectedCorrect = option.querySelector('.answer span').
        textContent;
        if(selectedCorrect == HTMLDecade(correctAnswer)){
            correctScore++;
            _answerQuestion.innerHTML=`<p> <i class='fas fa-check'></i> Correct Answer! </p>`;
        } else {
            _answerQuestion.innerHTML = `<p> <i class='fas fa-line'></i> Incorrect Answer! </p> <p> <small> <b> Correct Answer: </b> ${answer}</small></p>`;
        }
        checkList();
    }
}

function HTMLDecode(textString){
    askedCount++;
    setCount();
    if(askedCount== question){
        _answerQuestion.innerHTML+= `<p> Your answer is ${answer} ,</p>`;
        _playAgain.style.display='block';
        _checkBin.style.display="none";
        alert("hello");
    } else{
        setTimeout(() =>{
            loadQuestion()
        },300);
    }
}

function setCount(){
    _answerQuestion.textContent= totalQuestion; 
    answer.testContent=answer;
}