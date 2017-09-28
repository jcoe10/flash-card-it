// var inquirer = require('inquirer');
//Question 1
// var card = require("./BasicCard.js");
// var questions = require("./questions.json");

// //Function that asks the Questions
// function askQuestion(){
//     var d = 0;
// if(d == 5){
//     console.log("game is over");
// }else{
 

//     inquirer.prompt([{
        
//                 message: questions[d].front,
//                 name: "question"
        
//             }]).then(function(response){

//                 if(questions[d].back == response.question){
//                     console.log("correct");
//                     d++
//                     askQuestion();
//                 }else{
//                     console.log("wrong");
//                 }
//             })
// }
   
//     //Loop over the array of questions in the other file
//     for (var i = 0; i < questions.length; i++) {
//         var front = questions.front[i];
//         var back = questions.back[i];
//         //Make a new question
//         var q = new basicCard(front, back);
//         //Keep track of the count        
//         var questionCount = 0;
//         questionsCount++;
//         //Ask the user the question
//         if (questionsCount > 5) {
//             console.log("Hey, there are no more Questions");
//         } else {
//             console.log(questions[i]);
//         }
//     }
    

// inquirer.prompt([// {
//     message: q1.front,
//     name: "president"  
// }])// .then (function(result){
//     if(result.president == q1.back){
//         console.log('Correct!')
//     }else{ 
//     console.log('Wrong!!!')
//     }
//     askQuestion();
// })


// //Question 2
// inquirer.prompt([
// {
//     message: q2.front,
//     name: "colonies"
// }])
// .then (function(result){
//     if(result.colonies == q2.back){
//         console.log('Thats right!');
//     }else{
//         console.log('Wrong!!!')   
//     }
// })


// //Question 3
// inquirer.prompt([
// {
//     message: q3.front,
//     name: "found"
// }])
// .then (function(result){
//     if(result.found == q3.back){
//         console.log("Right again!");
//     }else{
//         console.log('Wrong!!!')  
//     }
// })


// //Question 4
// inquirer.prompt([
// {
//     message: q4.front,
//     name: "purchase"
// }])
// .then (function(result){     
//     if(result.purchase == q4.back){
//         console.log("You are acing this!");
//     }else{
//         console.log('Wrong!!!')        
//     }
// })


// //Question 5
// inquirer.prompt([
// {
//     message: q5.front,
//     name: "war"
// }])
// .then (function(result){
//     if(result.war == q5.back){
//         console.log('You are a true Patriot!')    
//     }else{
//         console.log('Wrong!!!')
//     }

// })
//}