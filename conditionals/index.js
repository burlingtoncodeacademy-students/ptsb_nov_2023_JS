/*
    ? Conditionals and Logic Gates
    * conditional statements check if an expression is truthy
    * the expression must always resolve to true
    * if it's truthy, a code within the statement executes
    * if it's falsey, nothing happens unless we specify otherwise


    ? Expressions vs Statements
    * Expression
        - Unprocessed value, grouped using ()
        - Evaluated to be truthy
        - Can also be empty
    ? Expressions evaluate
    * Statements
        - keyword
        - expression
        - {} - code block

    ? Statements evaluate and execute code blocks when invoked
        ! Conditional is an example of a statement
*/

/*
    ? If Statement
    * Checks if something is true and executes the code, if so
*/

if (true) console.log("This will print");

let lightSwitch = "off";

console.log("The value of the lightswitch variable is:", Boolean(lightSwitch));

if (lightSwitch == "on") {
  console.log("the light switch is on");
  //   additional code for switch being on...
}

/*
    ? Else 
    * do the opposite of what our initial expression is checking
    * default case to handle
*/

if (lightSwitch == "on") {
  console.log("the light switch is on");
  //   additional code for switch being on...
} else {
  console.log("something went wrong or the switch is off?");
}

/*
    ? Else If
    * allow us to add additional condition(s) if the one prior has not been satisfied

*/

let temp = 52;

if (temp > 80) {
  console.log("It is very hot outside");
} else if (temp > 70) {
  console.log("it is warm outside");
} else if (temp > 50) {
  console.log("it is decent outside");
} else {
  console.log("something went wrong");
}

/*
    if(conditionIsTrue) {
        execute this code if the above condition has been met
    } else if (conditionIsTrue){
        execute this code if the above condition has been met
    } else {
        if all else fails, run this code block
    }
*/

/*
    ? Logical Operators NOT AND OR
    * OR Operator (||)
        * true if one of the conditions is true
        * ex: I'll be happy if i go to the movies OR eat diner
        * (dinner or movies = true)
        * (no dinner or movies = true)
        * (dinner or no movies = true)
        * (no dinner or no movies = false)
    * AND Operator (&&)
        * true if both conditions are true
        * ex: I'll be happy if i go to the movies and eat diner
        * (dinner AND movies = true)
        * (no dinner AND movies = false)
        * (dinner AND no movies = false)
    * NOT Operator (! or in an expression with !=) 
        * Flip the logical expression 
*/

lightSwitch = 0;
// Flips the eval value
if (!lightSwitch) {
  console.log("log this");
}

lightSwitch = "off";

if (lightSwitch != "on") {
  console.log("the switch is off");
}

// ? AND OR Example

let sensor = "inactive";
let alarm = true;

if (sensor == "inactive" && alarm) {
  console.log("Your sensor may be broken");
} else if (sensor == "active" || alarm) {
  console.log("The alarm may be on");
} else if (sensor == "inactive" && !alarm) {
  console.log("hey alarm is most likely off and sensor as well");
} else {
  console.log("Something went wrong");
}

let myName = "Amit";
let length = 4;
if (myName[0] === "A" && myName.length >= length) {
  console.log(
    `your name starts with an A and it is greater than or equal to ${length} characters `
  );
} else if (myName[0] === "A") {
  console.log("your name starts with an A");
}

/*
  ! Challenge
  * create an age variable with a number between 0-82 
  * check if the age is under 16, if so say they cant drive
  * check if the age between 16 and 18, say they can drive but not drink
  * if the age is between 18 & 21, say they can vote but not drink
  * if over 21, say they can drink
  ! Spicy
    - Handle invalid output ex. "potato"

*/

let age = 45;

// if (age < 16) {
//   console.log("Cannot drive");
// } else if (age < 18) {
//   console.log("Can drive but not drink");
// } else if (age < 21) {
//   console.log("Can vote but not drink");
// } else if (age >= 21) {
//   console.log("Can drink");
// } else {
//   console.log("Invalid output?!?");
// }

if (age < 16) {
  console.log("Cannot drive");
}

if (age < 18) {
  console.log("Can drive but not drink");
}

/*
    ! Important thought 
    * if you want your condition to display ANY possible match, create separate if statements
    * if you want your condition to display ONE exact match, chain your conditional statements

*/

/*
  ? Ternaries
    * an expression
    * quick way to write out if/else conditionals
    * commonly used to check a quick condition 

  ? Syntax

  conditional ? expr if true : expr if false

  ? Chaining syntax

  conditional ? expr if true 
              : else if expr ? expr if true
   
*/

let ignition; //undefined

ignition ? console.log("ignition is on") : console.log("ignition is off");

if (ignition) {
  console.log("ignition is on");
} else {
  console.log("ignition is off");
}

let season = 3;

if (season == 1) {
  console.log("Spring");
} else if (season == 2) {
  console.log("Summer");
} else if (season == 3) {
  console.log("Autumn");
} else if (season == 4) {
  console.log("Winter");
}

season == 1
  ? console.log("Spring")
  : season == 2
  ? console.log("Summer")
  : season == 3
  ? console.log("Autumn")
  : season == 4
  ? console.log("Winter")
  : null;

/*
  ! Challenge WRITE AS TERNARY
  * create an age variable with a number between 15-22 
  * check if the age is under 16, if so say they cant drive
  * check if the age between 16 and 18, say they can drive but not drink
  * if the age is between 18 & 21, say they can vote but not drink
  * if over 21, say they can drink
  ! Spicy
    - Handle invalid output ex. "potato"
*/

age = 21;

age < 16
  ? console.log("cant drive")
  : age < 18
  ? console.log("can drive, cannot drink")
  : age < 21
  ? console.log("can vote, cannot drink")
  : age >= 21
  ? console.log("they can drink")
  : console.log("invalid output");

/*
  ? Switch Statements
  * execute a block of code dependent upon a different case
  */

let x = "dog";

switch (true) {
  case x > 2:
    console.log("x is greater than 2");
    break;
  case x > 3:
    console.log("x is greater than 3");
  default:
    console.log("something went wrong");
}

let month = new Date().getMonth() + 1;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
  default:
    console.log("error getting month");
}

let uprightStaff = "joeschmo";

switch (uprightStaff) {
  case "Paul":
    console.log(`${uprightStaff} is our Program Staff Manager`);
    break;
  case "Amit":
    console.log(`${uprightStaff} is a SD instructor`);
    break;
  case "Max":
    console.log(`${uprightStaff} is our Program Manager`);
    break;
  default:
    console.log("Staff member not found in database");
}
