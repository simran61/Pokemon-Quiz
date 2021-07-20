var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.bold.hex('#DEADED')("Welcome to SIMRAN'S quiz on Pokemon❤️ \n"));

var userName = readlineSync.question(chalk.cyanBright("Please enter your name : \n"));

console.log(chalk.bold.hex('#DEADED')("\nHi " + userName + " ❤️\nEnter a/ b/ c as answers for each question."));
console.log(chalk.black.bold.bgWhite("\nNOTE: For each correct answer you will get 1 point & -1 for every wrong answer.\n"));

console.log(chalk.bold.yellowBright("\n        😍  PIKA-PIKA 😍\n"));


var score = 0;

function play(question, answer) {
  var userAns = readlineSync.question(question);
  if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Congo! You are right :)"));
    score++;
  } else {
    console.log(chalk.bold.red("Oops! You are wrong :("));
    console.log(chalk.yellowBright("The correct answer is "+answer+" :)"));
  }
  console.log(chalk.bold.yellowBright("Your current score is " + score));
  console.log("\n-----------------\n")
  
}


var allQuestions = [{
  question: "1. What is the colour of Raichu’s cheeks?\na.Red\nb.Yellow\nc.Blue\n\n",
  answer: "b"
}, {
  question: "2. Which Pokemon researcher in the series is considered to be the best scientist about Pokemon?\na.Professor Agatha\nb.Professor Oak\nc.Professor\n\n", 
  answer: "b"
}, {
  question: "3. Which is the oldest Pokemon in the game universe?\na. Arceus\nb. Rhydon\nc. Meowth\n\n",
  answer: "a"
}, {
  question: "4. Which electronic device is used to record and provide information about different species of Pokemon?\na. Pokemon encyclopedia\nb. Poke ball\nc. Pokedex\n\n",
  answer: "c"
}, {
  question: "5. Which type of Pokemon is Gyarados?\na. Water and flying\nb. Water and dark\nc. Water and grass\n\n",
  answer: "a"
}, {
  question: "6. Which of the following Pokemon is able to control time?\na. Palkia\nb. Dialga\nc. Darkrai\n\n",
  answer: "b"
}, {
  question: "7. What is the first version of Pokemon video games released in 1996?\na. Pokemon Red and Green\nb. Pokemon Red and Blue\nc. Pokemon Gold and Silver\n\n",
  answer: "a"
}, {
  question: "8. What is the latest version of Pokemon video games released in 2019?\na. Pokemon Sun and Moon\nb. Pokemon Black and White\nc. Pokemon Sword and Shield\n\n",
  answer: "c"
}, {
  question: "9. How many types of Pokemon are there?\na. 15 types\nb. 18 types\nc. 21 types\n\n",
  answer: "b"
}, {
  question: "10. Which Pokemon will Puputar evolve into?\na. Larvitar\nb. Jubitar\nc. Tyranitar\n\n",
  answer: "c"
}];

var highScore=[
  {name:"Simran", topScore:"10"},
  {name:"Manav", topScore:"9"},
  {name:"Mradul", topScore:"8"},
];

for (var i = 0; i < allQuestions.length; i++) {
    var currentQues = allQuestions[i];
    play(currentQues.question, currentQues.answer);
}

console.log(chalk.hex('#DEADED').bold("YAYY! YOUR TOTAL SCORE IS "+score));


 console.log(chalk.keyword('orange').bold("\n***** Check out Scoreboard *****"));
 printScoreBoard(highScore);

var scoreBeaten=false;
var indexInsert=0;
for(var i=0; i<highScore.length; i++){
  if(score>=highScore[i].topScore){
    scoreBeaten=true;
    indexInsert=i;
    highScore.splice(indexInsert, 0, {name:`${userName}`, topScore:`${score}`});
    break;
  }
}
console.log('---------------------------------')

if(scoreBeaten){
  console.log(chalk.bold.keyword('pink')("\nCongratulations "+userName+" , you have beaten the SCORE-BOARD. You seems to be a big fan of POKEMON 😍"));

  console.log(chalk.keyword('orange').bold("\n*** U P D A T E D   S C O R E B O A R D ***"));
  printScoreBoard(highScore);
  console.log("\nSend me the screenshot of your final score so that I can update the actual scoreboard ❤️\n\n");
}

else{
  console.log(chalk.bold.hex('#DEADED')("Sorry "+userName+", you were so close to beat the SCOREBOARD :)\n\n"))
}

function printScoreBoard(highScore){
  for(let i=0; i<highScore.length; i++){
    console.log(chalk.cyan.bold(highScore[i].name+" : " +highScore[i].topScore));
  }
}

