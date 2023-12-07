//? Scope & Hoisting

/*
    ? Scope
    * Used to determine how information in different code blocks can be accessed
        ? Five scope types:
            * Global/window
            * Block
            * Function
            * Module - if use external files
            * Lexical
        
    In JS, inner scopes can access outer scopes, outer scopes cannot access inner scopes
*/

/*
    ? Global Scope
        * Outer most scope
        * window object when in the client/browser
        * in the js file when in Node
        * accessible from every other scope
*/
// outside
let globalScopedVariable = "This is a global scope variable";

{
  {
    {
      {
        {
          {
            {
              console.log(globalScopedVariable);
              let innerScopedVariable = "This is a inner scoped variable"; //created with inner scope
            }
          }
        }
      }
    }
  }
}

// console.log(innerScopedVariable); //! ERROR: innerScopedVariable is not defined

/*

    ? Function Scope
    * Accessible only inside of the function

*/

function scope() {
  let fxScopeVariable = "This is a function scope variable";
  console.log(fxScopeVariable);
}

scope(); // == "This is a function scope variable"
// console.log(fxScopeVariable); //! ERROR : Reference error

/*
    ? Block Scope
    * Anywhere there are {}
*/

{
  let blockScopeVariable = "Block scope variable";
}

// console.log(blockScopeVariable); //! ERROR : Reference error

/*
    ? Lexical Scope
    * Variables are accessible by their nested position
    * Inner fx scope {} can access outer function scope {}
*/

function outerFx() {
  let ofxv = "Outer fx scope variable";

  function innerFx() {
    let ifxv = "Inner fx scope variable";
    return ifxv;
  }

  return innerFx(); // === "Inner fx scope variable"
}

console.log(outerFx()); // === "Inner fx scope variable"

/*
    ? Hoisting 
    * JS' parsing engine reads top to bottom, left to right
    * JS' interpreter runs the code twice
        - First, it looks for VARiables and fx declarations and hoists them
        - It allocates memory space for those declarations
        - It then executes the code line-by-line
*/

let myDog = "lab";

console.log(myDog);
