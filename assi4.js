
const startButton=document.getElementById('start-btn');
const nextButton=document.getElementById('next-btn');
const bigTitle=document.getElementById('big-header');
const description=document.getElementById('descritption');
let displayQuestion=document.getElementById('question');
let buttonA= document.getElementById('btnA');
let buttonB= document.getElementById('btnB');
let buttonC= document.getElementById('btnC');
let buttonD= document.getElementById('btnD');

let score=0;

startButton.addEventListener('click',startQuestion);
nextButton.addEventListener('click',nextQuestion);



question=['Commonly used data types Do not include:','The condition in an if/else statement is enclosed with______.'];
Answer=['strings','booleans','alerts','numbers']


function startQuestion(){
    console.log('Game Started');
    startButton.classList.add('hide');
    bigTitle.classList.add('hide');
    description.classList.add('hide');
    displayQuestion.classList.remove('hide');
    buttonA.classList.remove('hide');
    buttonB.classList.remove('hide');
    buttonC.classList.remove('hide');
    buttonD.classList.remove('hide');

    
    document.getElementById('question').textContent=question[0]
    document.getElementById('btnA').textContent=Answer[0]
    document.getElementById('btnB').textContent=Answer[1]
    document.getElementById('btnC').textContent=Answer[2]
    document.getElementById('btnD').textContent=Answer[3]
}

function nextQuestion(){
 
}







const q1= 'Commonly used data types Do not include:';
const q2='W';
const q3='W';


const a1='strings';
const a2='booleans';
const a3= 'alerts';
const a4= 'numbers';


