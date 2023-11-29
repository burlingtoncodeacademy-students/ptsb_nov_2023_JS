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

let lightSwitch = "on";

console.log("The value of the lightswitch variable is:", Boolean(lightSwitch));

if (lightSwitch == "on") {
  console.log("the light switch is on");
  //   additional code for switch being on...
}

/*


*/
