var inquirer = require('inquirer');

//function for this.front and this.back
function basicCard(front, back) {
    this.front = front;
    this.back = back;
}

var q1 = new basicCard("Who was the first president of the United States?", "George Washington");


var q2 = new basicCard('How many colonies was the United States originally?', 'thirteen');


var q3 = new basicCard("When was America Founded?", 'July 4, 1776');


var q4 = new basicCard("Which country did America buy the Louisiana Purchase from?", 'France');


var q5 = new basicCard("Then deadliest war in American history is?", 'The Civil War');


// var questions = [];

// //Function that asks the Questions
// function askQuestion(){
//     //Loop over the array of questions in the other file
//     for (var i = 0; i < questions.length; i++) {
//         var front = questions.front[i];
//         var back = questions.back[i];
//         // //Make a new question
//         // var q = new basicCard(front, back);
//         //Keep track of the count
//         var questionCount = questions[i];
//         questionsCount++;
//         //Ask the user the question
//         if (questionsCount > 0) {
//             console.log(cards.q1);
            
//         } else {
//           console.log("Hey, there are no more Questions");  
//         }
//     }


// function foo() {
// 	inquirer.prompt({})
// 	.then(function(ans){
// 		//do something
// 		bar();
// 	});
// }

//Question 1

inquirer.prompt([
{
    message: q1.front,
    name: "president"  
}])
.then (function(result){
    if(result.president == q1.back){
    console.log("Correct!")
    }else{ 
    console.log('Wrong!!!')
    }
})


//Question 2
inquirer.prompt([
{
    message: q2.front,
    name: "colonies"
}])
.then (function(result){
    if(result.colonies == q2.back){
        console.log('Thats right!');
    }else{
        console.log('Wrong!!!')   
    }
})


//Question 3
inquirer.prompt([
{
    message: q3.front,
    name: "found"
}])
.then (function(result){
    if(result.found == q3.back){
        console.log('Right again!');
    }else{
        console.log('Wrong!!!')  
    }
})


//Question 4
inquirer.prompt([
{
    message: q4.front,
    name: "purchase"
}])
.then (function(result){     
    if(result.purchase == q4.back){
        console.log("You are acing this!");
    }else{
        console.log('Wrong!!!')        
    }
})

//Question 5
inquirer.prompt([
{
    message: q5.front,
    name: "war"
}])
.then (function(result){
    if(result.war == q5.back){
        console.log('You are a true Patriot!')    
    }else{
        console.log('Wrong!!!')
    }

})




module.exports = basicCard;