/*
? Functions
    - Reusable block of code that performs a particular task
    - Can 'return' data to kick it back outside of the function
    - Simplified program that runs a task when invoked/called
*/

/*
? Function Declaration

    (1)     (2)
    function hi() {
        console.log("hi")
    }

    1. Keyword
    2. Name of the function
*/

function hi() {
  console.log("hi");
}

hi();

/*
? Function Expression

    (1)
    let hey = function hi(){
        console.log("hi")
    }

    1. The variable "hey" is a now a representative of the function hi()

    * They do not get hoisted
*/

function greetings() {
  console.log("Hello!");
}

greetings;
greetings();

// Create a function that, when invoked, lists out the numbers 1-20, name our function "counting".

function counting() {
  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
}

counting();

// Given an array, create a function that lists out the values individually, name the function arrList

let arr = ["This", "is", "really", "cool", true, 1, false];

function arrList() {
  for (let item of arr) {
    console.log(item);
  }
}

arrList();

let dogArray = [
  "husky",
  "shih tzu",
  "corgi",
  "catahoula",
  "shiba inu",
  "golden retriever",
];

function callDogs() {
  for (let dogIndex in dogArray) {
    console.log(dogArray[dogIndex]);
  }
}

callDogs();

let num1 = 1;
let num2 = 2;

function addTwoNumbers() {
  let sum = num1 + num2;
  console.log(sum);
}

addTwoNumbers();

/*
 ? Return keyword
    - Allows the function to stop its execution & output a value
    - Useful for handling logic/computation/calculation and providing a single result
*/

let iHaveCoffee = false;

function returnToMeTheResultOfHavingCoffee() {
  if (iHaveCoffee) {
    return "Amit has had his coffee, and is awake! 0_0";
  }
  return "Sorry, no coffee available";
}

returnToMeTheResultOfHavingCoffee(); // Why doesn't it display the return value....hmmm

// We must console log the return variable/value to actually see it displayed in the console window

let resultOfCoffeeStatus = returnToMeTheResultOfHavingCoffee(); // the function call being assigned here is hanging onto the returned value that we see above

console.log(resultOfCoffeeStatus);
