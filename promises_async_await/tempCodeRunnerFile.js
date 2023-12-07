const expensiveFunction = async () => {
  for (let i = 0; i <= 1_000_000_000_000; i++) {
    if (i === 1_000_000_000_000) {
      return i; // Since this function is async, it is returning a Promise object (the data needs to be handled with a resolver)
    }
  }
};

// Doing the loop asynchronously so that the other tasks can continue instead of waiting for the loop to finish

const getLog = async () => {
  console.log("Start"); // "Start" logged before we execute our expensive loop
  let result = await expensiveFunction(); // Expensive or Slow or Boggy task executing...and store result when complete
  console.log("Loops done", result); // Only log this if the await'ed result resolves/completes
};

getLog(); // Executing our function that will handle the task of dealing with something that may take awhile..(the loop in this case)

console.log(
  "Continue doing other tasks.... while we wait for the loop to finish"
);
