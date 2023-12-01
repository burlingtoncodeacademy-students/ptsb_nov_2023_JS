// ? Loops
/*
    ? For
        - Takes in 3 parameters
            - initial expression
            - condition
            - increment expression

    Structure:

        for (initial expression; condition; increment expression) {
            * Code to execute if loop condition is satisfied
        }

*/

let i = 5;

//?       1         2      4
for (let i = 1; i <= 10; i++) {
  console.log(i); //? 3
}
console.log("out of loop");
// console.log("final", i);

/*
?   1. Reserving a new variable named (i) to store an initial value
?   2. As long this condition is met, run the following code execution in {}
?   3. Code Executes
?   4. Increase our variable count by 1

        Repeat steps 2-4
*/

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// ! Challenge: using a for loop, count from 10 to 0, going down by 1
for (let i = 10; i >= 0; i--) {
  //   console.log(i);
  if (i == 5) {
    console.log(i);
    // break will allow us to exit the loop
    break;
  }
}

for (let i = 10; i >= 0; i--) console.log(i);

// Display each character of a string
let firstName = "Timmy";

for (let index = 0; index < firstName.length; index++) {
  console.log(firstName[index]);
}

// Add collected sum of numbers
let sum = 0;

for (let i = 1; i <= 50; i++) {
  sum += i;
  console.log(sum);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let folders = ["Documents", "Desktop", "Pictures", "Downloads"];

for (let arrayIndex = 0; arrayIndex < folders.length; arrayIndex++) {
  console.log(folders[arrayIndex]);
}

let student = {
  name: "Peter",
  awesome: true,
  degree: "Javascript",
  week: 1,
};

//? For In
//      - Great to use on objects

console.log(student["awesome"]); // output: true

for (let item in student) {
  //   console.log(student[item]);
  console.log("Key:", item, "Value:", student[item]);
}

let catArray = [
  "tabby",
  "british shorthair",
  "burmese",
  "maine coon",
  "rag doll",
];

for (let cat in catArray) {
  //   console.log(catArray[cat]);
}

//? For of
//      - Great to use on arrays

for (let cat of catArray) {
  //   console.log(cat);
  console.log(`${cat} goes meow!`);
}
