//  Creating a Variable using var keyword
// var variableName = 10;

//  Creating a Variable using let keyword
// let variableName = 10;

//  Creating a Variable using const keyword
// const variableName = 10;

// var keyword is used to declare a variable that can be reassigned
// let keyword is used to declare a variable that can not be reassigned
// const keyword is used to declare a variable that can not be reassigned and can not be redeclared

// VARIABLE NAMING
// 1. The name should be unique
// 2. The name should not be a reserved word
// 3. The name must start with a Character, _, or a $.

// console.log(variableName);

// DATA TYPES

// STRINGS
// 1. Strings are used to store text
// 2. Strings are enclosed in single or double quotes

// using strings

// const singleQuotedString = 'This is a string';
// const doubleQuotedString = "This is a string";
// const backtickString = `This is a string`;

// console.log(singleQuotedString);
// console.log(doubleQuotedString);
// console.log(backtickString);

// bacticks fuctionalities
// const name = "Oise";
// const age = 12;
// const hieght = 5.10;
// console.log(`my name is ${name} and I am ${age} years old and i am ${hieght} feet tall`);

// mathematical operations

// wont work cause it is a string
// const bacticks2 = `2+2`;
// console.log(bacticks2);

// will work cause it is a number
// const bacticks3 = `${2+2}`;
// console.log(bacticks3);

// type casting features
// const variableName = "This is a string";
// console.log(typeof variableName);

// NUMBERS
// 1. Numbers are used to store numbers
// 2. Numbers are used to perform mathematical operations
// 3. Numbers are used to store dates

// using numbers

// const wholeNumber = 10;
// const decimalNumber = 0.5;

// console.log(wholeNumber);
// console.log(decimalNumber);

// mathematical operations

//  const firstNumber = 20;
//  const secondNumber = 20;

//   const addition = firstNumber + secondNumber;
//   const subtraction = firstNumber - secondNumber;
//   const multiplication = firstNumber * secondNumber;
//   const division = firstNumber / secondNumber;

//   console.log(addition);
//   console.log(subtraction);
//   console.log(multiplication);
//   console.log(division);

// BOOLEANS

// 1. Booleans are used to store true or false values
// 2. Booleans are used to perform logical operations
// 3. Booleans are used to store conditions
// 4. Booleans are used to store decisions

// ie.
// true - yes, correct, 1
// false - no, incorrect, 0

// using booleans

// const  isCool  = true;
// or
// const  isCool  = 1;

// if(isCool){
//     console.log("cool");
// }
// else{
//     console.log("not cool");
// }

// const age = 20;

// console.log(age > 18);

// console.log(age < 18);

// NULL

// 1. Null is used to store no value

// using null

// let nullVariable = null;
// console.log(typeof nullVariable);

// then define it by
// nullVariable = 20;

// UNDEFINED

// 1. Undefined is used to store no value
// 2. Undefined is used to store a variable that has not been declared
// 3. Undefined is used to store a variable that has not been initialized

// using undefined

//  let undefinedVariable;
//  console.log(typeof undefinedVariable);
// then define it by
// undefinedVariable = 20;

// OBJECTS
// 1. Objects are used to store data/variables
// 2. Objects are used to store data/variables in a structured way
// 3. Objects are used to store data/variables inc collections
// 4. Objects are used to group data/variables

// using objects

// const person = {
//     username: "oise",
//     age: 12,
// }

// Dot notation

// console.log(person.username);
// console.log(`my name is ${person.username} and I am ${person.age} years old`);

// Array
// 1. Arrays are used to store other data collections

// using arrays

// const array = [1, 2, 3, 4];

// console.log(array);

// note: 0 represents the index of the first element in the array
// 1 represents the index of the second element in the array
// ...

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);

// //Date array

//  const date = new Date();
//  console.log(date);

// note: javascript is a Dynamicly typed language which means that the type of a variable can change if its reassigned

// OPERATORS

// comparison operators returns true/false

// const firstNumber = 4;
// const secondNumber = 10;

// greater than
// console.log(firstNumber > secondNumber);

// greater than or equal to
// console.log(firstNumber >= secondNumber);

// less than
// console.log(firstNumber < secondNumber);

// less than or equal to
// console.log(firstNumber <= secondNumber);

// equal to
//  console.log(firstNumber == secondNumber);

// not equal to
// console.log(firstNumber != secondNumber);

// Strict equality

// compares VALUES and DATA TYPES
// returns true only if both values are of the same data type and have the same value
//  console.log(2 === "2");
//  console.log(firstNumber === secondNumber);

// Strict inequality

//  console.log(firstNumber == secondNumber);

// Loose equality
// dos`nt compares DATA TYPES just values
// console.log(2 == "2");

// the good ones: ===, !==
// the evil twins: ==, !==
// always use === or strict equality excetp you have a good reason to use 2 or strict inequality

// Logical Operators

// AND && ==> checks if all operands are true then returns true
// console.log(true && true && true);

// OR || ==> checks if any operands are true then returns true
// console.log(true || false);

// NOT ! ==> returns the opposite of the operand
// console.log(!true);

// IF STATEMENT

// const age = 15;

//      if (age > 18) {
//   console.log("You may enter!");
// } else if (age === 18) {
//   console.log("You just turned 18, welcome!");
// }else {
//   console.log("sorry to young!");
// }

// LOOPS

// the "while" loop

// let i = 0;
//  while(i < 10){
// console.log(i);d
// i++;
//  }

// the "for" loop

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// FUNCTIONS

// A block of code that performs a task  

// function declaration(defining a function)
// function square(num) {
//   return num * num;
// }

// funcion call(calling/executing a function)
// const result = square(5);
// console.log(result);

// function declaration

// function name(params) {
//      statements
//     have acsess to "this" keyword
// }

// function expression

// const name = function(params) {
//     // statements
// }

// arrow function

// const name = (params) => {
//     // statements
// }


