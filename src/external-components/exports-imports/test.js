//we can export
// let variables
// const variables
// objects
// functions
// classes

let myLetVar = Math.sqrt(2);

function myFunction(){
    console.log("myFunction() called...");
}

const myConstVar = 1000;

export { myLetVar, myConstVar, myFunction };

const mathValue = Math.PI + Math.sqrt(2);   

export default mathValue;

// two types of exports
// 1.  named exports
// 2 . default exports



