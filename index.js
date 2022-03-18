var readlineSync = require('readline-sync');

questionOne = {
  question: "Who is my favorite superhero? ",
  answer: "superman"
}

questionTwo = {
  question: "Which is my favorite sport? ",
  answer: "football"
}

questionThree = {
  question: "Who is my favorite food item? ",
  answer: "biryani"
}

questionFour = {
  question: "Where do I work? ",
  answer: "cisco"
}

var questionsList = [questionOne,questionTwo,questionThree,questionFour];

function quizMe(questions){
  var score = 0;
  
  for(var i=0; i<questions.length; i++){
  
    var ans = readlineSync.question(questions[i].question);
    if(ans.toLowerCase() === questions[i].answer){
      score++;
      console.log("You are right!!🤩");
    }
    else{
      console.log("Oops you got it wrong!!😔");
    }
    
  }
  console.log("score : " + score);
}

quizMe(questionsList);