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
