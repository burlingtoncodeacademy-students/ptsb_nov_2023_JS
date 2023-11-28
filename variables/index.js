/*
?   Variables
    - containers that store data in memory
    * declaration
        - allows memory space to be reserved by using an identifier
        - starts with the keywords of (let, var or const)
        - cannot start with a number, other than characters like (_ $)
        - if no value is assigned, it will be 'undefined' by default
    * intialization
        - assignment of a data value
        - can be any value or data type (str, int, arr, fx, class, etc.)
        - can be reassigned (except for the const)
*/

// Variable declaration

let myVar;
console.log(myVar);

// Variable initialization
let myFirstName = "Bob";
let myLastName = "Mangat";

console.log("The value of the firstname is:", myFirstName);
myFirstName = "Amit";
console.log(
  "The value of the firstname is now:",
  myFirstName,
  "after reassignment"
);

// String concatenation
console.log(myFirstName + " " + myLastName);

let userName = "iamagamer10";
// String interpolation
console.log(`Hey, your username is : ${userName}`);
//(a) (b)  (c)  (d)
let address = "123 Main st, Salem, MA";
// a - keyword
// b - variable id
// c - assignment operator
// d - variable value assignment

const ssn = "555-55-5555";
// ssn = "something else"; //! Error Assignment to a const variable

/*
?   Coding practice for variables
    - Be concises (ex: firstName instead of usersFirstBornBlondHairedName)
    - Be specific (ex: item instead i)
    - camelCase (most popular in JS)
    - snake_case
    - PascalCase
    - skewer-case
    - nocase
    - SCREAMING_CASE (used for environment variables)
*/

// ! Challenge
/*
 * Set variables of fName,lName, houseNumber, street, city, state, post code
 * Concatenate or interpolate them together
 * Console log that result
 !  🌶️🌶️🌶️ Spicy challenge 🌶️🌶️🌶️:
 *  Assign the state value to be lowercased, when you console.log it, it should capitalize the state
 */

let fName = "Amit";
let lName = "Mangat";
let houseNum = 123;
let street = "fake st";
let city = "fakesville";
let state = "in";
let postCode = 55555;

console.log(`My name is ${fName} ${lName} \n 
${houseNum} ${street} , ${city}, ${state.toUpperCase()} ${postCode}`);
