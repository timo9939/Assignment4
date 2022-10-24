//definition of the buttons and content
const startButton =document.getElementById('start-btn');
const nextButton=document.getElementById('next-btn');
const submitButton=document.getElementById('submit');
const goBackButton=document.getElementById('go-back');
const clearButton= document.getElementById('clear-high-scores');
let submit_description= document.getElementById('submit-discription');
let high_scores_description=document.getElementById('high-scores-description');
let initial_input=document.getElementById('initial-input');
let submit_button_and_input=document.getElementById('submit-button-and-input');
let highScoreDisplay='';

//get Element from html
const bigTitle=document.getElementById('big-header');
const description=document.getElementById('descritption');
let displayQuestion=document.getElementById('question');

//get element from the buttons
let buttonA= document.getElementById('btnA');
let buttonB= document.getElementById('btnB');
let buttonC= document.getElementById('btnC');
let buttonD= document.getElementById('btnD');

//Define the score and get element from timer
let score=0;
timerDisplay=document.getElementById('time-display');

//Define question number
let question_num=0;
let ans_a=0;
let ans_b=1;
let ans_c=2;
let ans_d=3;
let next_button_times=1; 

//Setting reaction for the button
startButton.addEventListener('click',startQuestion);
nextButton.addEventListener('click',nextQuestion);
submitButton.addEventListener('click',afterSubmit);
goBackButton.addEventListener('click',goBack);
clearButton.addEventListener('click',clearScore);
buttonA.addEventListener('click',nextQuestion);
buttonB.addEventListener('click',nextQuestion);
buttonC.addEventListener('click',nextQuestion);
buttonD.addEventListener('click',nextQuestion);

//Question 
question=['Commonly used data types Do not include:',
'The condition in an if/else statement is enclosed with______.', 
'Arrays in JavaScript can be used to store_____.',
'String values must be enclosed within _____ when being assigned to variables.',
'A very useful tool used during development and debugging for printing content to the debugger is:'];

//Answer
Answer=['strings','booleans','alerts','numbers',
'quotes','curly brackets','parenthesis','square brackets',
'numbers and strings','other arrays','booleans','all of the above',
'commas','curly brackets','quotes','parenthesis',
'JavaScript','terminal/bash','for loops','console.log']

//Correct Answer
correctAns=['alerts','parenthesis','all of the above','quotes','console.log'];

//Function of the timer
function countdown(){

    var timeLeft=90;
    timer2 =setInterval(function(){
        if(timeLeft>=1){
           timerDisplay.textContent='Time: '+ timeLeft;
           timeLeft--;
        }

        else{
            console.log("timer end")
            nextButton.classList.add('hide');
            displayQuestion.classList.add('hide');
            buttonA.classList.add('hide');
            buttonB.classList.add('hide');
            buttonC.classList.add('hide');
            buttonD.classList.add('hide');
        
            submit_description.classList.remove('hide');
            submit_button_and_input.classList.remove('hide');
            submit_description.textContent = "All done \n Your final score is "+score;
            console.log("score: "+score);
            clearInterval(timer2);
            timerDisplay.classList.add('hide');
            
        
        }
       
    },1000);


}

//Function of the start button
function startQuestion(){
    countdown();

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

    
    document.getElementById('question').textContent=question[0];
    document.getElementById('btnA').textContent=Answer[0];
    document.getElementById('btnB').textContent=Answer[1];
    document.getElementById('btnC').textContent=Answer[2];
    document.getElementById('btnD').textContent=Answer[3];

    /*Answer.forEach(function(element,index) {
        element.textContent=Answer[index];
     console.log("Index: "+index+'Value: '+element);*/
    

    buttonC.addEventListener('click',function (){
            console.log('correct');
            score=score+10;} )

    
    
        
}
      


//Function of the next button
function nextQuestion(){
    
    
    if(next_button_times<5){
    
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
    submit_button_and_input.classList.remove('hide');
    submit_description.textContent = "All done \n Your final score is "+score;
    console.log("score: "+score);
    clearInterval(timer2);
    timerDisplay.classList.add('hide');
    


    }
}

//Function of the submit button
function afterSubmit(){
    submit_description.classList.add('hide');
    high_scores_description.classList.remove('hide');
    document.getElementById('high-scores').textContent=document.getElementById('initial-input').value+' - '+score;
    
    submit_button_and_input.classList.add('hide');

    clearInterval(timer2);
    timerDisplay.classList.add('hide');

    localStorage.setItem("initial_input",score);
}


//function of the go back button
function goBack(){
    submit_description.classList.remove('hide');
    submit_button_and_input.classList.remove('hide');
    submit_description.textContent = "All done \n Your final score is "+score+" out of 50";
    console.log("score: "+score);
    
    high_scores_description.classList.add('hide');
}    

//functin of the clear high scores button
function clearScore(){
    localStorage.clear();
    
}





