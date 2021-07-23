# Sprint Challenge - JavaScript Fundamentals

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in project. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a range of JavaScript problems.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. 

## Introduction

The index.js file contains all of your challenges. Please review it in full before answering the questions. If you complete the stretch goals please leave them in your file but commented out so that they do not affect the MVP tasks 

In meeting the minimum viable product (MVP) specifications listed below, you should have all tests passing. You can console.log to check your work and ensure you are submitting the correct results 

### Commits

Set up codegrade early and commit your code regularly and meaningfully. 

## Interview Questions
### (please edit this file and write your answer below each question.)
Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read.

1. Explain the differences between `.map`, `.reduce` and `.filter` and describe a use case for each. 

-.map converts data based on what follows the return keyword.

-.reduce is used for multiplication and addition problems and returns a single value.

-.filter filters results into a new array based on a true or false statement. this is great for when you want to find all objects with a common item from a large array, because it doesnt have to filter through every single thing without stopping like forEach.

2. Explain the difference between a callback and a higher order function.

-a callback is the parameter and argument that you use in another function. a higher order function is the function that you can pass the callbacks in as a parameter and argument.

example: function higherOrderFunction (callbackCB){
    return callbackCB;
}
console.log(higherOrderFunction(callback));


3. Explain what a closure is.

-a closure is essentially where a child(function/ nested function) hears or sees a word and doenst know what it means (its value) so they go ask their dad (outside of themselves) what that word means (what its value is). if the dad knows (its in the parent) then they tell them and the kid returns to the spot where they heard or saw the word and replaces the word with its definition (or value) to help them make more sense of it. 
if the dad doesnt know what the word means, (the parent function has no value for the word) then the kid goes to ask the grandma (the outside of the parent). They really want to know what this word means! (THEY NEED CLOSURE!!!!)

4. Describe the four principles of the 'this' keyword.

1) Window binding -when we havent given 'this' any context, it comes back with undefined in strict mode, or the entire window in regular mode. we dont want this. its bad practice!!

2) Implicit binding -  when we invoke the object method, it is implied that 'this refers to what is to the left of the dot.

3) Explicit binding - we explicitly tell a function what 'this' should be using 
.call (invoke immediately, pass arguments 1 by 1), 
.apply (invoke immediately, pass arguments as array), or 
.bind (doesnt invoke immediately but returns new funcition to be invoked later, pass arguments 1 by 1). 

4) New binding - when connected to "new" keyword 'this' refers to the new object.

5. Why do we need super() in an extended class?

-super() is used to access and call functions on an objects parent. it goes hand in hand with the extends keyword, and you cannot successfully extend the class without the super() keyword.


You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Set up Project

Using VSCode and Command Line:


1. Fork the repo
2. Clone your forked version of the repo
3. cd into your repo and create a branch with your first and last name
4. open the terminal in your vs code and type `npm install`
5. next type `npm run test` in your terminal
6. Complete your work making regular commits, once you have all your tests passing and you are ready to submit your work please see canvas for instructions on how to submit

### Testing & Debugging

Open a second terminal inside of your project by clicking on the split terminal icon
![alt text](assets/split_terminal.png "Split Terminal")

Inside of your second terminal type `npm start` 
![alt text](assets/npm_start.png "type npm start")

You will be running your tests in one terminal and debugging in the other. As you work on your code you should make use of `console.log` to check your progress and debug.
![alt text](assets/tests_debug_terminal_final.png "your terminal should look like this")

### Task 2: Project Requirements (MVP)

You must complete all tasks inside of `index.js` and answer the questions above.

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Resources
 
 [Sprint Challenge Study Guide](https://www.notion.so/lambdaschool/Unit-1-Sprint-3-Study-Guide-033a9a00659a4ef98c12eb97e49a6110)

## Submission format

Please submit your project via codegrade by following [these instructions](https://www.notion.so/lambdaschool/Submitting-an-assignment-via-Code-Grade-A-Step-by-Step-Walkthrough-07bd65f5f8364e709ecb5064735ce374)

