/*
?   While loop structure

    while (expression) {
        ...code to run if expression is true
    }


    - The main purpose for while loops are when iteration is uncertain
    - Ex) If we wanted to guess a spade from a randomized amount of cards, we can use a while loop to continuously go through until the condition is met
*/

let numArr = [1, 5, 35, -23, 0, 3, 10, 4.34];
let index = 0;
let sum = 0;

while (index < numArr.length) {
  console.log(numArr[index]);
  numArr[index] > 0 && (sum += numArr[index]);
  index++;
}

console.log(`The sum of all the positive integers is: ${sum}`);

let city = [
  "building",
  "sign",
  "window",
  "bridge",
  "lighthouse",
  "light pole",
  "tree",
  "empty street",
];

let structure = city[0];
let pos = 0;

while (structure != "empty street") {
  console.log(`Spiderman swings from the ${structure}`);
  pos++;

  structure = city[pos];
}

console.log(`Spider man is landing in the ${structure}`);
