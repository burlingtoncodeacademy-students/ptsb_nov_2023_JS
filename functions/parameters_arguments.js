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
