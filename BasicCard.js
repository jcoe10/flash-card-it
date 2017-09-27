var inquirer = require('inquirer');

//function for this.front and this.back
function basicCard(front, back) {
    this.front = front;
    this.back = back;
}

var q1 = new basicCard("Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(q1.front);

// "George Washington"
console.log(q1.back);


var q2 = new basicCard('How many colonies was the United States originally?', 'thirteen');

// 'How many colonies was the United States originally?'
console.log(q2.front);

// 'thirteen'
console.log(q2.back);


var q3 = new basicCard("When was America Founded?", 'July 4, 1776');

// "When was America Founded?"
console.log(q3.front);

// 'July 4, 1776'
console.log(q3.back);


var q4 = new basicCard("Which country did America buy the Louisiana Purchase from?", 'France');

// "Which country did America buy the Louisiana Purchase from?"
console.log(q4.front);

// 'France'
console.log(q4.back);


var q5 = new basicCard("Then deadliest war in American history is?", 'The Civil War');

// "Then deadliest war in American history is?"
console.log(q5.front);

// 'The Civil War'
console.log(q5.back);

module.exports = basicCard;