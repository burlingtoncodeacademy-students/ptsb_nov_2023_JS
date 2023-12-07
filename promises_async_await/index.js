/*
    ? Promises
    * An object that may produce a singular value in the future

    ? Three States
    * Pending (unfinished)
    * Fulfilled (completed with a value)
    * Rejected (error)
    
    * Promises allow other code to execute without having to wait for their completion 
*/

function standard() {
  return "No promises here";
}

console.log(standard());

function getData() {
  setTimeout(() => {
    return "Data";
  }, 3000);
}

let data = getData();
// console.log(data); //? Why undefined?

function promiseFx(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve("data in promise"); // Resolved value can be returned outside of the promise
      } else {
        reject("cannot complete request");
      }
    }, 3000);
  });
}

// console.log(promiseFx()); //? Pending state....

//? In order to get tangible data out of the Promise object, we MUST resolve it

//  .then/.catch syntax

promiseFx(5)
  .then((msg) => {
    // console.log(msg);
    // ... more tasks being done on our retrieved data
    console.log("congrats u have data");
    // ... more logic...
  })
  .catch((err) => {
    console.log(err, "hey you hit an err");
    // error handling,
  });

/*

  ? Asynchronous Functions
  * Introduced in ES7
  * Alternative way to write promises
  * A function that returns a promise object
  * allows us to resolve or reject a promise

  ? Syntax

  async function myFx() {} //? Traditional Function
  const myFx = async function (){} //? Functional Expression
  const myFx = async () => {} //? Arrow Function
*/

async function asyncFx() {
  return "Hello learners"; // Async functions return Promise objects
}

console.log(asyncFx());

//? How do we get values out of async functions?

// 1. Use a resolver
asyncFx().then((val) => console.log(val));

// 2. Use await keyword

async function start() {
  const val = await asyncFx();
  console.log(val);
}

start();

let networkStatus = true;

function promiseEx(networkConnection) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (networkConnection) {
        resolve("This is data, woot woot!! 😛");
      } else {
        reject("😔 Please check your network connection");
      }
    }, 5000);
  });
}

//? Async

async function handlePromiseAsync() {
  try {
    console.log(await promiseEx(networkStatus));
    // code below await, will wait until the above is resolved b4 executing
    console.log("Data received");
  } catch (err) {
    console.log("ERROR:", err);
  }
}

// handlePromiseAsync();

//? .then() Syntax

promiseEx(networkStatus)
  .then((data) => console.log(data))
  .catch((err) => console.log("ERROR:", err));

const expensiveFunction = async () => {
  for (let i = 0; i <= 1_000_000_000; i++) {
    if (i === 1_000_000_000) {
      return i;
    }
  }
};

// Doing the loop asynchronously so that the other tasks can continue instead of waiting for the loop

const getDog = async () => {
  console.log("start");
  let result = await expensiveFunction();
  console.log("Loops done");
};

getDog();

console.log(
  "Continue doing other tasks.... while we wait for the loop to finish"
);
