
const startButton =document.getElementById('start-btn');
const nextButton=document.getElementById('next-btn');
const submitButton=document.getElementById('submit');

const bigTitle=document.getElementById('big-header');
const description=document.getElementById('descritption');
let displayQuestion=document.getElementById('question');

let buttonA= document.getElementById('btnA');
let buttonB= document.getElementById('btnB');
let buttonC= document.getElementById('btnC');
let buttonD= document.getElementById('btnD');

let score=0;
let question_num=0;
let ans_a=0;
let ans_b=1;
let ans_c=2;
let ans_d=3;
let next_button_times=1; 

let submit_description= document.getElementById('submit-discription');
let high_scores_description=document.getElementById('high-scores-description');

startButton.addEventListener('click',startQuestion);
nextButton.addEventListener('click',nextQuestion);



question=['Commonly used data types Do not include:',
'The condition in an if/else statement is enclosed with______.', 
'Arrays in JavaScript can be used to store_____.',
'String values must be enclosed within _____ when being assigned to variables.',
'A very useful tool used during development and debugging for printing content to the debugger is:'];

Answer=['strings','booleans','alerts','numbers',
'quotes','curly brackets','parenthesis','square brackets',
'numbers and strings','other arrays','booleans','all of the above',
'commas','curly brackets','quotes','parenthesis',
'JavaScript','terminal/bash','for loops','console.log']


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
    nextButton.classList.remove('hide');

    
    document.getElementById('question').textContent=question[0]
    document.getElementById('btnA').textContent=Answer[0]
    document.getElementById('btnB').textContent=Answer[1]
    document.getElementById('btnC').textContent=Answer[2]
    document.getElementById('btnD').textContent=Answer[3]
}

function nextQuestion(){
    
    
    if(next_button_times<=5){
    
    next_button_times++;
    console.log("Clicking Time of the next_button is"+next_button_times);

    question_num++;
    ans_a= ans_a+4;
    ans_b= ans_b+4;
    ans_c= ans_c+4;
    ans_d= ans_d+4;

    document.getElementById('question').textContent=question[question_num]
    document.getElementById('btnA').textContent=Answer[ans_a]
    document.getElementById('btnB').textContent=Answer[ans_b]
    document.getElementById('btnC').textContent=Answer[ans_c]
    document.getElementById('btnD').textContent=Answer[ans_d]
    }

    else{
    console.log("nextButton disabled")
    nextButton.classList.add('hide');
    displayQuestion.classList.add('hide');
    buttonA.classList.add('hide');
    buttonB.classList.add('hide');
    buttonC.classList.add('hide');
    buttonD.classList.add('hide');
    
    submit_description.classList.remove('hide');


    }
}

submitButton.addEventListener('click',afterSubmit);

function afterSubmit(){
    submit_description.classList.add('hide');
    high_scores_description.classList.remove('hide');
}








