var userInput = "";

//Question 1
var questions = require("./questions.json");
if(questions[0].back == userInput){
    console.log(questions[0].message)
}else{
    console.log("Wrong!")
}


//Function that asks the Questions
function askQuestion(){
    //Loop over the array of questions in the other file
    for (var i = 0; i < questions.length; i++) {
        var front = questions.front[i];
        var back = questions.back[i];
        //Make a new question
        var q = new basicCard(front, back);
        //Keep track of the count
        var questionCount = questions[i];
        questionsCount++;
        //Ask the user the question
        if (questionsCount > 0) {
            console.log
            
        } else {
          console.log("Hey, there are no more Questions");  
        }
    }
    

// inquirer.prompt([
// {
//     message: q1.front,
//     name: "president"  
// }])
// .then (function(result){
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
}