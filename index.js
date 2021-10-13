var readLineSync = require('readline-sync');
var name = readLineSync.question("What is your name? ");
console.log(`Let us see how well do you know me..`);
var Questions = [{
  question : "Where do I live? ",
  answer : "Raipur"
},
{
  question : "Where do I work? ",
  answer : "Cognizant"
},
{
  question : "What sport do I like the most? ",
  answer : "Cricket"
},
{
  question : "What movie I like the most? ",
  answer : "Interstellar"
}, 
{
  question : "What is my favourite TV series? ",
  answer : "Sherlock Holmes"
},
{
  question : "What is my birth year? ",
  answer : "1998"
},
{
  question: "Who is my favourite comic character? ",
  answer : "Dr. Strange"
},
{
  question: "What is my special skill? ",
  answer : "Comprehension"
},
{
  question: "When did I graduated from College? ",
  answer : "2020"
},
{
  question: "What mobile phone do I currently own? ",
  answer : "Oppo A7"
}
];
var score = 0;
//High Score List
var highScoreList = [
  {
    name : `First`,
    score: 5
  },
  {
    name : `Second`,
    score : 4
  }, 
  {
    name : `Third`,
    score : 3
  },
  {
    name : `Fourth`,
    score : 2
  },
  {
    name : `Fifth`,
    score : 1
  }
];

// Function to ask question, take response and check it //against the correct answer
function quiz(question, answer){
  var yourAnswer = readLineSync.question(question);
  if(yourAnswer.toUpperCase() === answer.toUpperCase()){
    score++;
    console.log(`You're correct!!`);
  }
  else {
    console.log(`You're Wrong. It's ${answer}`);
  }
}
var length = Questions.length;
for(var i=0;i<length;i++){
  quiz(Questions[i].question, Questions[i].answer);
}
var flag=true;
var index=4;

while(flag && index>0){
  if(score>highScoreList[index].score){
    index--;
  }
  else {
    index++;
    flag=false;
  }
}
console.log(`Your final score is: ${score}`);
if(index<=4){
  console.log(`${name} is ${index+1} in our highscore list. Congratulations!!`);
}
else {
  console.log(`Sorry ${name}, you didn't made it to top 5 in our high score list. Better luck next time!!`);
}