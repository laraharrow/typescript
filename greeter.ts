function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);

/*
 - to compile the code and create the js file:
 - go to the terminal
   # tsc greeter.ts
 - that will create a js file with the same code as the ts file.  
*/


/*
  - Playing with the code:
    1. if we change the value of user on line 5 to something other then a string typeScript will give an error
    2. on the same token if no value is passed as argument of the function greeter on line 7 typeScript will give an error

*/


// using interface
interface Person {
    firstName: string;
    lastName: string;
}

function greeter1(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}

let user1 = { 
  firstName: "Jane",
  lastName: "User"
}

document.body.innerHTML = greeter1(user1);

/*
  interface is making the same process as above code and that is possible 
  because both key value pair inside the interface are strings.
*/


// classes

class Student {
  fullName: string;
  constructor( public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

interface Person1 {
    firstName: string;
    lastName: string;
}

function greeter2(person: Person1) {
  return `Hello ${person.firstName} ${person.lastName}`;
}

let user2 = new Student("Jane", "M", "User");

document.body.innerHTML = greeter2(user2);

/*
  classes and interfaces work together in letting the program decide the right level of abstraction.
  the use of public automatically creates properties with that name.
*/

// ARRAY
// to ad multiple types to an array
let arr: (string | number)[] = [1, 'a'];

// interface

interface LabelValue {
  label: string;
}

function printLabel(labeledObj: LabelValue){
  console.log(labeledObj.label);
}

let myObj = {size: 10, label: "The Label"};
printLabel(myObj) // The Label

/* 
Notice how myObj can have more properties then is described on the LabelValue interfe.
Typescript is only checking the the label property is part of the passed objects. Notice that
typescript don't care about the order in witch the properties exists. 
We can use this interface now to create any other object that should follow this blue print.
*/

// optional property:
interface SquareConfig {
  color?: string;
  width?: number;
}


// readonly property
  // those are immutable properties, meaning the values can't be changed once its initiated.
  // readonly is the const of properties
interface Point {
  readonly x: number;
  readonly y: number;
} 
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!





