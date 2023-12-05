/*
? Parameters & Arguments

                 (1)
    function hi (name) {
        console.log(`Hi, ${name}`)
                            (2)
    }                           

    (3)
    hi("Bruce");
    hi("Amit");

    1. The parameter(s) that the function is accepting or holding.
    2. Using string interpolation, we can refer to the parameter that was given to the function. 
    3. This is where we define what the parameter's value will be.
        - known as an argument

*/

function order(foodItem) {
  console.log(`I exchanged my ticket for a ${foodItem}`);
}

order("cheese pizza");
order("burger");
order("milk shake");

let myFavFood = "pepperoni pizza";

order(myFavFood);

/*
! Challenge
    - Write a function that takes two parameters
        - One parameter for a first name
        - The other parameter for a last name
        - Have them come together in a variable inside the function
        - console.log 'hello, my name is <your name>'
        - call (or invoke) our function
*/

function fullNameFunc(fName, lName) {
  let fullName = fName + " " + lName;
  console.log(`Hello, my name is ${fullName}`);
}

fullNameFunc("Amit", "Mangat");
fullNameFunc("Jon", "Doe");
fullNameFunc("Bruce", "Wayne");

let test = function test1() {
  console.log("hi");
};

test();

let x = 1;

function one() {
  let x = 2;
  console.log("x's value inside of the function is:", x);
}

one();

console.log(x);

function calc(x, y, operator) {
  switch (operator) {
    case "+":
      console.log("Add", x, y);
      return x + y;
    case "*":
      console.log("Multiply", x, y);
      return x * y;
  }
}

console.log(calc(2, 2, "+"));
console.log(calc(5, 5, "*"));

// Can store the return or output value in a variable
let thisSum = calc(1, 9, "+");

console.log(thisSum);

console.log(console);

// let console = 5; //! NEVER make variable called console

// console; // == 5

// A function inside of an object is called a method.

let mockConsoleObject = {
  log: function (text) {
    process.stdout.write(text + "\n");
  },
  add: function (num1, num2) {
    return num1 + num2;
  },
};

mockConsoleObject.log("hey will this display");

mockConsoleObject.add(2, 2); //4

console.log(mockConsoleObject.add(2, 2));
