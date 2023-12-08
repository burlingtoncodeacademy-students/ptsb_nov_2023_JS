/*
    ? IO & Callbacks
    * Process   
        * An event that runs in the background or foreground of your machine
    * NodeJS allows access to to its processes via a process object
    * This allows us to process external input and internal input (I/O)
    * We do this by using process.stdin and process.stdout
*/

// Import Statement
const process = require("process"); //? Importing our module from Node
// console.log(`This is an output. From Node process PID ${process.pid}`);

/*
    ? Callback function
    * fx that is passed as an argument to another fx or method
    * Is a fx that runs when something occurs
        - Anonymous Functions
        ex) function (parameter) {} OR (parameter) => {}
            * Typically used in callbacks
            * Short lived
            * Non reusable
*/

// console.log("Please enter some input");

// ? Anon arrow func
// process.stdin.once("data", (input) => {
//   console.log(input.toString());
// });
// ? Anon Traditional func
// process.stdin.once("data", function (input) {
//   console.log(input.toString());
// });

// const myFunction = (question, callback) => {
//   console.log("Question", question);

//   process.stdin.once("data", (input) => {
//     callback(input.toString().trim());
//   });
// };

// myFunction("What is your name?", (word) => {
//   console.log("logging from the callback", word);
//   process.exit();
// });

//? Passing function by reference

// function handleInput(input) {
//   console.log(input.toString());
// }

// process.stdin.once("data", handleInput)

/*    (1)    (2) (3)  (4)       (5)
    process.stdin.on("data", (input) => console.log(input.toString()))

    * 1. Node's process interface
    * 2. In data stream
    * 3. Event listener method
    * 4. Event that we are listened for
    * 5. Callback fx which runs when the event occurs

*/

// process.stdout.write("What is your username? \n");
// process.stdin.on("data", (input) => {
//   let value = input.toString().trim();
//   console.log(value);
//   value === "Amit123"
//     ? process.stdout.write("Username Recognized")
//     : process.stdout.write("Username not recognized");
//   process.exit();
// });

// ? Readline
const readline = require("readline"); // Import of module

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("What is your favorite color? \n", (input) => {
//   rl.setPrompt(`Your fav color is: ${input}`);
//   rl.prompt();
//   rl.close();
// });

// function ask(questionText) {
//   return new Promise((resolve, reject) => {
//     if (questionText) {
//       rl.question(questionText + "\n", (input) => resolve(input));
//     } else {
//       reject("Provide a question please");
//       rl.close();
//     }
//   });
// }

// const start = async (question) => {
//   try {
//     let response = await ask(question);

//     // Waiting for a valid response before continuing execution below
//     response = response.toString().toLowerCase();

//     if (response.length === 0) {
//       console.log("Please provide an answer!");
//       await start(question);
//     }

//     if (response === "y") {
//       console.log("Yayy, well here's some pie 🥧🥧🥧🥧");
//     } else if (response === "n") {
//       console.log("awwww shucks");
//     }

//     rl.close();
//     // let response = await ask(""); //! Will hit the reject in promise
//   } catch (err) {
//     console.log("Hey you hit an error?", err);
//   }
// };

// start("Do you like pie? (Y/N)");
// start("Do you like animals (Y/N)"); //! Cant ask multiple questions

// console.log("I wonder what your answer will be?"); //? Executes when promise is being handled

async function ask(question) {
  return new Promise((resolve, reject) => {
    rl.question(question + "\n", (userInput) => {
      resolve(userInput);
    });
  });
}
// Using async to allow waiting for our value to be present.
async function start() {
  const firstQAnswer = await ask("What is your name?");
  console.log("Answer to first question is:", firstQAnswer);

  const secondQAnswer = await ask("What is your age?");
  console.log("Answer to second question is:", secondQAnswer);

  rl.close();
}

start();
