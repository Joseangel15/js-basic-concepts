// All JS concepts 

// COMMENTS

// Inline Comments

// This is an inline comment

// Multi-line comment

/* This is a 
multi-line comment */

// 1- Variables are case-sensitive.
// 2- The best practice is to use CamelCase when writing JS variables

// Variable Declaration

var ourName;

// Storing Values with the Assignment Operator

var myVar;
myVar = 5;

// Assigning the Value of one Variable to Another

var myVar;
myVar = 5;
var myNum;
myNum = myVar;

// Initializing Variables with the Assignment Operator

var age = 36;

// Declare String Variables

var myName = "Jose";

// When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a string of undefined.

// Differences Between Var and Let Keywords

// This is possible
var camper = "James";
var camper = "David";

// This is not possible
let camper = "James";
let camper = "David";

// So unlike var, when you use let, a variable with the same name can only be declared once.

// Declare a Read-Only Variable with the const keyword

// 1- It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). 

const FAV_PET = "Cats";
FAV_PET = "Dogs";

// The console will display an error due to reassigning the value of FAV_PET.

// const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:

// Adding Numbers in JS

const myVar = 5 + 10;

// Subtract Numbers in JS

const myVar = 12 - 6;

// Multiply Numbers in JS

const myVar = 13 * 13;

// Divide Numbers in JS

const myVar = 16 / 12;

// Increment a Number with JS

var i = 2;

i++
// is the equivalent of:
i = i + 1;

// Decrement
i--;

// Create decimal Numbers with JS

// 1- Decimal numbers are sometimes referred to as floating point numbers or floats.

const myDecimal = 5.7;

// Multiply two Decimals

const product = 2.0 * 0.0;

// Divide a Decimal

const quotient = 4.4 / 2.0;

// Finding a Remainder in JS

// 1- The remainder operator % gives the remainder of the division of two numbers.

var remainder = 17 % 2; //equals 1
var remainder2 = 48 % 2; //quals 0

// Compound Assignment With Augmented Addition

myVar += 5;
// Is the same as
myVar = myVar + 5;

// Compound Assignment With Augmented Subtraction

myVar -= 5;
// Is the same as
myVar = myVar - 5;

// Compound Assignment With Augmented Subtraction

myVar *= 5;
// Is the same as
myVar = myVar * 5;

// Compound Assignment With Augmented Division

myVar /= 5;
// Is the same as
myVar = myVar / 5;

// Escaping Literal Quotes in Strings

const sampleStr = "Alan said, \"Peter is learning JavaScript\".";

// Escape Sequences in Strings

// 1- Escape sequences allow you to use characters you may not otherwise be able to use in a string.

// Single Quote
"\'"

// Double Quote
"\""

// Backslash
"\\"

// Newline
"\n"

// Tab
"\t"

// Carriage Return 
"\r"

// Backspace
"\b"

// Form feed
"\f"

// Concatenating Strings with Plus Operator

const ourStr = "I come first. " + "I come second.";

// Concatenating Strings with the Plus Equals Operator

let ourStr = "I come first. ";
ourStr += "I come second.";

// Constructing Strings with Variables

const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";

// Appending Variables to Strings

const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// Find the Length of a String

console.log("Alan Peter".length);

// Use Bracket Notation to Find the First Character in a String

const firstName = "Charles";
const firstLetter = firstName[0];

// Understand String Immutability

// For example, the following code will produce an error because the letter B in the string Bob cannot be changed to the letter J:
let myStr = "Bob";
myStr[0] = "J";

// The only way to change myStr would be to assign it with a new value, like this:
let myStr = "Bob";
myStr = "Job";

// Use Bracket Notation to Find the Nth Character in a String

const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
// secondLetterOfFirstName would have a value of the string d.

// Use Bracket Notation to Find the Last Character in the String

const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
// lastLetter would have a value of the string a.

// Use Bracket Notation to Find the Nth-to-Last Character in a String

const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];

// Store Multiple Values in one Variable using JavaScript Arrays

const sandwich = ["peanut butter", "jelly", "bread"];

// Nest one Array within Another Array

const teams = [["Bulls", 23], ["White Sox", 45]];

// Access Array Data with Indexes

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];

// Modify Array Data With Indexes

const ourArray = [50, 40, 30];
ourArray[0] = 15;

// Access Multi-Dimensional Arrays With Indexes

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];

// Manipulate Arrays With push Method

const arr1 = [1, 2, 3];
arr1.push(4, 5);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

// Manipulate Arrays with Pop Method

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

// Manipulate Arrays With shift Method

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

// Manipulate Arrays With unshift Method

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");

// Write Reusable JavaScript with Functions

// This is a function declaration

function functionName() {
    console.log("Hello World");
}

// This is a function expression

var functionName = () => {
    console.log("Hello World");
};

// Passing Values to Functions with Arguments

function testFun(param1, param2) {
    console.log(param1, param2);
};

// Return a Value from a Function with Return

function plusThree(num) {
    return num + 3;
}

const answer = plusThree(5);

// Local Scope and Functions

function myTest() {
    const loc = "foo"; // This variable is in the local scope of the function
    console.log(loc);
}

myTest(); // This will log the variable value
console.log(loc); // This will throw an error because the variable is not global. 

// Global vs. Local Scope in Functions

const someVar = "Hat"; // Variable was declared in global scope

function myFun() {
    const someVar = "Head"; // Variable has reassigned a value in the local scope of function
    return someVar;
}

// Understanding Undefined Value returned from a Function

let sum = 0;

function addSum(num) {
    sum = sum + num;
}

addSum(3); //The function will return undefined because it's not returning a value.  

// Assignment with a Returned Value

ourSum = sum(5, 12);

// Calling the sum function with the arguments of 5 and 12 produces a return value of 17. This return value is assigned to the ourSum variable.

// Use Conditional Logic with If Statements

function test(myCondition) {
    if (myCondition) {
        return "It was true";
    }
    return "It was false";
}

test(true);
test(false);

// Comparison with the Equality Operator

function equalityTest(myVal) {
    if (myVal == 10) {
        return "Equal";
    }
    return "Not Equal";
}

// Comparison with the Strict Equality Operator

// Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

3 === 3  // true
3 === '3' // false

// Comparing different values with typeof

typeof 3 // number
typeof '3' // string

// Comparison with the Inequality Operator

1 != 2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

// Comparison with the Strict Inequality Operator

3 !== 3  // false
3 !== '3' // true
4 !== 3  // true

// Comparison with the Greater Than Operator

5 > 3  // true
7 > '3' // true
2 > 3  // false
'1' > 9  // false

// Comparison with the Greater Than Or Equal To Operator

6 >= 6  // true
7 >= '3' // true
2 >= 3  // false
'7' >= 9  // false

// Comparison with the Less Than Operator

2 < 5 // true
'3' < 7 // true
5 < 5 // false
3 < 2 // false
'8' < 4 // false

// Comparison with the Less Than Or Equal To Operator

4 <= 5 // true
'7' <= 7 // true
5 <= 5 // true
3 <= 2 // false
'8' <= 4 // false

// Comparisons with the Logical And Operator. 

if (num > 5 && num < 10) {
    return "Yes";
}
return "No";

// Comparisons with the Logical Or Operator

if (num > 10 || num < 5) {
    return "No";
}
return "Yes";

// Introducing Else Statements

if (num > 10) {
    return "Bigger than 10";
} else {
    return "10 or Less";
}

// Introducing Else If Statements

if (num > 15) {
    return "Bigger than 15";
} else if (num < 5) {
    return "Smaller than 5";
} else {
    return "Between 5 and 15";
}

// Chaining If Else Statements

if (condition1) {
    statement1
} else if (condition2) {
    statement2
} else if (condition3) {
    statement3
} else {
    statementN
}

// Selecting from Many Options with Switch Statements

switch (fruit) {
    case "apple":
        console.log("The fruit is an apple");
        break;
    case "orange":
        console.log("The fruit is an orange");
        break;
}

// Adding a Default Option in Switch Statements

switch (num) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    default:
        defaultStatement;
        break;
}

// Multiple Identical Options in Switch Statements

let result = "";
switch (val) {
    case 1:
    case 2:
    case 3:
        result = "1, 2, or 3";
        break;
    case 4:
        result = "4 alone";
}

// Returning Boolean Values from Functions

function isEqual(a, b) {
    return a === b;
}

// Return Early Pattern for Functions

// When a return statement is reached, the execution of the current function stops and the control returns to the calling location.

function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
}
myFun();

// Build JavaScript Objects

const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"],
    5: "five"
};

// Accessing Object Properties with Dot Notation

const myObj = {
    prop1: "val1",
    prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;

// Accessing Object Properties with Bracket Notation

const myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];

// Accessing Object Properties with Variables

const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);

// Updating Object Properties

const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.name = "Happy Camper";
ourDog["name"] = "Happy Camper";

// Add New Properties to a JavaScript Object

const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Delete Properties from a JavaScript Object

const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};

delete ourDog.bark;

// Testing Objects for Properties

function checkForProperty(object, property) {
    return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false

// Manipulating Complex Objects

const ourMusic = [
    {
        "artist": "Daft Punk",
        "title": "Homework",
        "release_year": 1997,
        "formats": [
            "CD",
            "Cassette",
            "LP"
        ],
        "gold": true
    }
];

// Accessing Nested Objects

const ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": {
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;

// Accessing Nested Arrays

const ourPets = [
    {
        animalType: "cat",
        names: [
            "Meowzer",
            "Fluffy",
            "Kit-Cat"
        ]
    },
    {
        animalType: "dog",
        names: [
            "Spot",
            "Bowser",
            "Frankie"
        ]
    }
];

ourPets[0].names[1];
ourPets[1].names[0];

// Iterate with JavaScript While Loops

const ourArray = [];
let i = 0;

while (i < 5) {
    ourArray.push(i);
    i++;
}

// Iterate with JavaScript For Loops

const ourArray = [];

for (let i = 0; i < 5; i++) {
    ourArray.push(i);
}

// Iterate Odd Numbers With a For Loop

const ourArray = [];

for (let i = 0; i < 10; i += 2) {
    ourArray.push(i);
}

// Count Backwards With a For Loop

const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}

// Iterate Through an Array with a For Loop

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Nesting For Loops

const arr = [
    [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

// Iterate with JavaScript Do...While Loops

const ourArray = [];
let i = 0;

do {
    ourArray.push(i);
    i++;
} while (i < 5);

// Iterate with For...of and For...in Loops in arrays

const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
    console.log(i);
}
// "0" "1" "2" "foo"

// For...of only works in iterable objects like arrays. 

for (const i of arr) {
    console.log(i);
}
// Logs: 3 5 7

// Replace Loops using Recursion

function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}

// Use the Conditional (Ternary) Operator

function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
}

// Use Multiple Conditional (Ternary) Operators

function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal"
        : (a > b) ? "a is greater"
            : "b is greater";
}

// Mutate an Array Declared with const

const s = [5, 6, 7];
s = [1, 2, 3]; //This will throw an error
s[2] = 45; //This works fine
console.log(s);

//The contents of the object can be mutated, but the variable cannot be assigned to a different object in memory. 

// Prevent Object Mutation

let obj = {
    name: "FreeCodeCamp",
    review: "Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // This will result in error
obj.newProp = "Test"; // This will also result in error 
console.log(obj);

// Use Arrow Functions to Write Concise Anonymous Functions

// 1- Arrow functions are function expressions. 
// 2- Arrow functions are not hoisted, so you cannot call them before you declare them. 

const myFunc = () => {
    const myVar = "value";
    return myVar;
}

// When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

const myFunc = () => "value";

// Write Arrow Functions with Parameters

const doubler = (item) => item * 2;
doubler(4);

// If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

const doubler = item => item * 2;

// It is possible to pass more than one argument into an arrow function.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);

// Set Default Parameters for Your Functions

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); //Logs "Hello John"
console.log(greeting()); //Logs "Hello Anonymous"

// Use the Rest Parameter with Function Parameters

// In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));

// The rest parameter eliminates the need to use the arguments object and allows us to use array methods on the array of parameters passed to the function howMany.

// Use the Spread Operator to Evaluate Arrays In-Place

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

// Using the spread operator with Objects

const car = {
    tires: 4,
    brand: "Toyota",
    color: "red"
};

const dealer = {
    otherCars: [1, 2, 3],
    ...car
}

// Use Destructuring Assignment to Extract Values from Objects

//ES5 code
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;

//ES6 syntax
const { name, age } = user;

// Use Destructuring Assignment to Assign Variables from Objects

// Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

const user = { name: 'John Doe', age: 34 };

// Here's how you can give new variable names in the assignment:

const { name: userName, age: userAge } = user;

// Use Destructuring Assignment to Assign Variables from Nested Objects

const user = {
    johnDoe: {
        age: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
};

const { johnDoe: { age, email } } = user;
const { johnDoe: { age: userAge, email: userEmail } } = user; // With different names

// Use Destructuring Assignment to Assign Variables from Arrays

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

// The console will display the values of a and b as 1, 2.

// The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

// Destructuring via rest elements

// The result is similar to Array.prototype.slice(), as shown below:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // 3, 4, 5, 7

// Use Destructuring Assignment to Pass an Object as a Function's Parameters

const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;

}

// This effectively destructures the object sent into the function. This can also be done in-place:

const profileUpdate = ({ name, age, nationality, location }) => {

}

// Example

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Only change the code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change the code above this line

// Create Strings using Template Literals

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;

console.log(greeting);

// Write Concise Object Literal Declarations Using Object Property Shorthand

const getMousePosition = (x, y) => ({
    x: x,
    y: y
});

// getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:

const getMousePosition = (x, y) => ({ x, y });

// Write Concise Declarative Functions with ES6

const person = {
    name: "Taylor",
    sayHello: function () {
        return `Hello! My name is ${this.name}.`;
    }
};

// With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

const person = {
    name: "Taylor",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
};

// Define a Constructor Function

// Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}

// This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively. Constructors follow a few conventions:

// Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// Constructors use the keyword this to set the properties of the object they will create. Inside the constructor, this refers to the new object it will create.
// Constructors define properties and behaviors instead of returning a value as other functions might.

// Use a Constructor to Create Objects

function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}

let blueBird = new Bird();

// NOTE: this inside the constructor always refers to the object being created.

// Extend Constructors to Receive Arguments

function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let cardinal = new Bird("Bruce", "red");

cardinal.name
cardinal.color
cardinal.numLegs

// Verify an Object's Constructor with instanceof

// Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. Here's an example:

let Bird = function (name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // This instanceof method would return true.

// If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor:

let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
};

canary instanceof Bird; //This instanceof method would return false.

// Understand Own Properties

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

// name and numLegs are called own properties because they are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these properties. The following code adds all of the own properties of duck to the array ownProps:

let ownProps = [];

for (let property in duck) {
    if (duck.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

console.log(ownProps); //The console would display the value ["name", "numLegs"].

// Use Prototype Properties to Reduce Duplicate Code

// Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs inside each Bird instance.

// This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.

// A better way is to use the prototype of Bird. Properties in the prototype are shared among ALL instances of Bird. Here's how to add numLegs to the Bird prototype:

Bird.prototype.numLegs = 2;

// Now all instances of Bird have the numLegs property.

console.log(duck.numLegs);
console.log(canary.numLegs);

// Iterate Over All Properties

// You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

function Bird(name) {
    this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

// Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
    if (duck.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}

console.log(ownProps); //["name"]
console.log(prototypeProps); //["numLegs"]

// Understand the Constructor Property

// There is a special constructor property located on the object instances duck and beagle that were created in the previous challenges:

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); //True
console.log(beagle.constructor === Dog); //True

// Note that the constructor property is a reference to the constructor function that created the instance. The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:

function joinBirdFraternity(candidate) {
    if (candidate.constructor === Bird) {
        return true;
    } else {
        return false;
    }
}

// Note: Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the instanceof method to check the type of an object.

// Change the Prototype to a New Object

Bird.prototype.numLegs = 2;

Bird.prototype.eat = function () {
    console.log("nom nom nom");
}

Bird.prototype.describe = function () {
    console.log("My name is " + this.name);
}

// A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:

Bird.prototype = {
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

// Remember to Set the Constructor Property when Changing the Prototype

// There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property! This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results:

duck.constructor === Bird; // false
duck.constructor === Object; // true
duck instanceof Bird; // true

// To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:

Bird.prototype = {
    constructor: Bird,
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

// Understand Where an Object’s Prototype Comes From

// Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. For example, here the Bird constructor creates the duck object:

function Bird(name) {
    this.name = name;
}

let duck = new Bird("Donald");

Bird.prototype.isPrototypeOf(duck); // True

// Understand the Prototype Chain

// All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

function Bird(name) {
    this.name = name;
}

typeof Bird.prototype;

// Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);

// How is this useful? You may recall the hasOwnProperty method from a previous challenge:

let duck = new Bird("Donald");
duck.hasOwnProperty("name");

// The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain. In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.

// Use Inheritance So You Don't Repeat Yourself

// There's a principle in programming called Don't Repeat Yourself (DRY). The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.

Bird.prototype = {
    constructor: Bird,
    describe: function () {
        console.log("My name is " + this.name);
    }
};

Dog.prototype = {
    constructor: Dog,
    describe: function () {
        console.log("My name is " + this.name);
    }
};

// The describe method is repeated in two places. The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:

function Animal() { };

Animal.prototype = {
    constructor: Animal,
    describe: function () {
        console.log("My name is " + this.name);
    }
};

// Inherit Behaviors from a Supertype

// In the previous challenge, you created a supertype called Animal that defined behaviors shared by all animals:

function Animal() { }
Animal.prototype.eat = function () {
    console.log("nom nom nom");
};

// This and the next challenge will cover how to reuse the methods of Animal inside Bird and Dog without defining them again. It uses a technique called inheritance. This challenge covers the first step: make an instance of the supertype (or parent). You already know one way to create an instance of Animal using the new operator:

let animal = new Animal();

// There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge. Instead, here's an alternative approach without those disadvantages:

let animal = Object.create(Animal.prototype);

// Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" for creating an object. By setting the prototype of animal to be the prototype of Animal, you are effectively giving the animal instance the same "recipe" as any other instance of Animal.

animal.eat();
animal instanceof Animal;

// The instanceof method here would return true.

// Set the Child's Prototype to an Instance of the Parent

// This challenge covers the next step: set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.

Bird.prototype = Object.create(Animal.prototype);

// Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now includes all the key "ingredients" from Animal.

let duck = new Bird("Donald");
duck.eat();

// duck inherits all of Animal's properties, including the eat method.

// Reset an Inherited Constructor Property

// When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor

// But duck and all instances of Bird should show that they were constructed by Bird and not Animal. To do so, you can manually set the constructor property of Bird to the Bird object:

Bird.prototype.constructor = Bird;
duck.constructor

// Add Methods After Inheritance

// A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.

// For example, Bird is a constructor that inherits its prototype from Animal:

function Animal() { }
Animal.prototype.eat = function () {
    console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

// In addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects. Here, Bird will get a fly() function. Functions are added to Bird's prototype the same way as any constructor function:

Bird.prototype.fly = function () {
    console.log("I'm flying!");
};

// Now instances of Bird will have both eat() and fly() methods:

let duck = new Bird();
duck.eat();
duck.fly();

// duck.eat() would display the string nom nom nom in the console, and duck.fly() would display the string I'm flying!.

// Override Inherited Methods

// In previous lessons, you learned that an object can inherit its behavior (methods) from another object by referencing its prototype object:

ChildObject.prototype = Object.create(ParentObject.prototype);

// Then the ChildObject received its own methods by chaining them onto its prototype:

ChildObject.prototype.methodName = function () { };

// It's possible to override an inherited method. It's done the same way - by adding a method to ChildObject.prototype using the same method name as the one to override. Here's an example of Bird overriding the eat() method inherited from Animal:

function Animal() { }
Animal.prototype.eat = function () {
    return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function () {
    return "peck peck peck";
};

// If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on the prototype chain of duck:

// duck => Is eat() defined here? No.
// Bird => Is eat() defined here? => Yes. Execute it and stop searching.
// Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
// Object => JavaScript stopped searching before reaching this level.

// Use a Mixin to Add Common Behavior Between Unrelated Objects

// As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa.

// For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

let flyMixin = function (obj) {
    obj.fly = function () {
        console.log("Flying, wooosh!");
    }
};

// The flyMixin takes any object and gives it the fly method.

let bird = {
    name: "Donald",
    numLegs: 2
};

let plane = {
    model: "777",
    numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

// Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. Now bird and plane can both fly:

bird.fly();
plane.fly();

// The console would display the string Flying, wooosh! twice, once for each .fly() call.

// Note how the mixin allows for the same fly method to be reused by unrelated objects bird and plane.

// Use Closure to Protect Properties Within an Object from Being Modified Externally

// In the previous challenge, bird had a public property name. It is considered public because it can be accessed and changed outside of bird's definition.

bird.name = "Duffy";

// Therefore, any part of your code can easily change the name of bird to any value. Think about things like passwords and bank accounts being easily changeable by any part of your codebase. That could cause a lot of issues.

// The simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.

function Bird() {
    let hatchedEgg = 10;

    this.getHatchedEggCount = function () {
        return hatchedEgg;
    };
}
let ducky = new Bird();
ducky.getHatchedEggCount();

// Here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg. This is possible because hatchedEgg is declared in the same context as getHatchedEggCount. In JavaScript, a function always has access to the context in which it was created. This is called closure.

// Understand the Immediately Invoked Function Expression (IIFE)

// A common pattern in JavaScript is to execute a function as soon as it is declared:

(function () {
    console.log("Chirp, chirp!");
})();

// This is an anonymous function expression that executes right away, and outputs Chirp, chirp! immediately.

// Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.

// Use class Syntax to Define a Constructor Function

// ES6 provides a new syntax to create objects, using the class keyword.

// In ES5, an object can be created by defining a constructor function and using the new keyword to instantiate the object.

// In ES6, a class declaration has a constructor method that is invoked with the new keyword. If the constructor method is not explicitly defined, then it is implicitly defined with no arguments.

// Explicit constructor
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
    takeOff() {
        console.log("To " + this.targetPlanet + "!");
    }
}

// Implicit constructor 
class Rocket {
    launch() {
        console.log("To the moon!");
    }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();

// It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.

// Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.

// The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.

// Use getters and setters to Control Access to an Object

// You can obtain values from an object and set the value of a property within an object.

// These are classically called getters and setters.

// Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

// Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer); // displays anonymous
novel.writer = 'newAuthor';
console.log(novel.writer); // displays newAuthor

// Notice the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details.

// Note: It is convention to precede the name of a private variable with an underscore (_). However, the practice itself does not make a variable private.

// Create a Module Script

// JavaScript started with a small role to play on an otherwise mostly HTML web. Today, it’s huge, and some websites are built almost entirely with JavaScript. In order to make JavaScript more modular, clean, and maintainable; ES6 introduced a way to easily share code among JavaScript files. This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them. In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module. Here’s an example:

<script type="module" src="filename.js"></script>

// A script that uses this module type can now use the import and export features you will learn about in the upcoming challenges.

// Use export to Share a Code Block

// Imagine a file called math_functions.js that contains several functions related to mathematical operations. One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it.

export const add = (x, y) => {
    return x + y;
}

// The above is a common way to export a single function, but you can achieve the same thing like this:

const add = (x, y) => {
    return x + y;
}

export { add };

// When you export a variable or function, you can import it in another file and use it without having to rewrite the code. You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this:

export { add, subtract };

// Reuse JavaScript Code Using import

// import allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported add from the math_functions.js file. Here's how you can import it to use in another file:

import { add } from './math_functions.js';

// Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest. The ./ tells the import to look for the math_functions.js file in the same folder as the current file. The relative file path (./) and file extension (.js) are required when using import in this way.

import { add, subtract } from './math_functions.js';

// Use * to Import Everything from a File

// Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the import * as syntax. Here's an example where the contents of a file named math_functions.js are imported into a file in the same directory:

import * as myMathModule from "./math_functions.js";

// The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything. The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property. Here's how you can use the add and subtract functions that were imported:

// Create an Export Fallback with export default

// In the export lesson, you learned about the syntax referred to as a named export. This allowed you to make multiple functions and variables available for use in other files.

// There is another export syntax you need to know, known as export default. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

// Below are examples using export default:

export default function add(x, y) {
    return x + y;
}

export default function (x, y) {
    return x + y;
}

// The first is a named function, and the second is an anonymous function.

// Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const

// Import a Default Export

// In the last challenge, you learned about export default and its uses. To import a default export, you need to use a different import syntax. In the following example, add is the default export of the math_functions.js file. Here is how to import it:

import add from "./math_functions.js";

// The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. You can use any name here when importing a default.

// Create a JavaScript Promise

// A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

const myPromise = new Promise((resolve, reject) => {

});

// Complete a Promise with resolve and reject

// A promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.

const myPromise = new Promise((resolve, reject) => {
    if ("condition here") {
        resolve("Promise was fulfilled");
    } else {
        reject("Promise was rejected");
    }
});

// The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object, that you would use data from, to put on your website or elsewhere.

// Handle a Fulfilled Promise with then

// Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:

myPromise.then(result => {

});

// result comes from the argument given to the resolve method.

// Handle a Rejected Promise with catch

// catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:

myPromise.catch(error => {

});

// error is the argument passed in to the reject method.


