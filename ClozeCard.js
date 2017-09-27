//function for this.text and this.cloze
function clozeCard(text, cloze, partial, fullText){
    this.text = text;
    this.cloze = cloze;
    this.partial = partial;
    this.fullText = fullText;
}

//Question 1
var q1 = new clozeCard("George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(q1.cloze); 

// " ... was the first president of the United States.
console.log(q1.partial);

// "George Washington was the first president of the United States.
console.log(q1.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new clozeCard("Error", "Invalid Entry");


//Question 2
var q2 = new clozeCard("There were thirteen colonies the United States.", "thirteen");

// "George Washington"
console.log(q2.cloze); 

// There were ... colonies the United States.".
console.log(q2.partial);

// "There were thirteen colonies the United States."
console.log(q2.fullText);

// Should throw or log an error 
var brokenCloze = new clozeCard("Error", "Invalid Entry");




//Question 3
var q3 = new clozeCard("America was founded on July 4, 1176.", "July 4, 1776");

// "July 4, 1776"
console.log(q3.cloze); 

// "America was founded on ... ."
consoles.log(q3.partial);

// "America was founded on July 4, 1176."
console.log(q3.fullText);

// Should throw or log an error
var brokenCloze = new clozeCard("Error", "Invalid Entry");




// //Question 4
// var q4 = new clozeCard("America bought the Louisiana Purchase from France.", "France");

// // "France"
// console.log(q4.cloze); 

// // "America bought the Louisiana Purchase from ... ."
// console.log(q4.partial);

// // "America bought the Louisiana Purchase from France."
// console.log(q4.fullText);

// // Should throw or log an error 
// var brokenCloze = new clozeCard("Error", "Invalid Entry");





// //Question 5
// var q5 = new clozeCard("The Civil War was the deadliest war in American history.", "The Civil War");

// // "The Civil War"
// console.log(q5.cloze); 

// // " ... was the deadliest war in American history.""
// console.log(q5.partial);

// // "The Civil War was the deadliest war in American history."
// console.log(q5.fullText);

// // Should throw or log an error
// var brokenCloze = new clozeCard("Error", "Invalid Entry");

module.exports = clozeCard;