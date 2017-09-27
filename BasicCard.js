var inquirer = require('inquirer');

//function for this.front and this.back
function basicCard(front, back) {
    this.front = front;
    this.back = back;
}
inquirer.prompt([


    // var q1 = new basicCard("Who was the first president of the United States?", "George Washington");

    // // "Who was the first president of the United States?"
    // console.log(q1.front); 

    // // "George Washington"
    // console.log(q1.back); 
    {
        message: "Who was the first president of the United States?",
        name: 'George Washington'
    },

    // var q2 = new basicCard("Who was the first president of the United States?", "George Washington");

    // // "Who was the first president of the United States?"
    // console.log(q2.front); 

    // // "George Washington"
    // console.log(q2.back);
    {
        message: 'How many colonies was the United States originally?',
        name: 'thirteen'
    },

    // var q3 = new basicCard("Who was the first president of the United States?", "George Washington");

    // // "Who was the first president of the United States?"
    // console.log(q3.front); 

    // // "George Washington"
    // console.log(q3.back);
    {
        message: "When was America Founded?",
        name: 'July 4, 1776'
    },

    // var q4 = new basicCard("Who was the first president of the United States?", "George Washington");

    // // "Who was the first president of the United States?"
    // console.log(q4.front); 

    // // "George Washington"
    // console.log(q4.back);
    {
        message: "Which country did America buy the Louisiana Purchase from?",
        name: 'France'
    },

    // var q5 = new basicCard("Who was the first president of the United States?", "George Washington");

    // // "Who was the first president of the United States?"
    // console.log(q5.front); 

    // // "George Washington"
    // console.log(q5.back); 
    {
        message: "Then deadliest war in American history is?",
        name: 'The Civil War'
    }


]);

// module.exports = BasicCard;