# All JS Concepts 

## Menu

- [Comments](#comments)
- [Variables](#variables)
- [Arrays](#arrays)
- [Objects](#objects)
  - [Promises](#promises)
- [Functions](#functions)
- [JavaScript Algorithms and Data Structures](#javascript-algorithms-and-data-structures)
- [Error Handling](#error-handling)
- [Js Common Conventions](#JsCommonConventions) 

## Comments

### Inline Comments

```javaScript
// this is an inline comment
```

### Multi-line comments

```javaScript
/*
This is 
a multi-line
comment
*/
```

### Data Types

#### Primitive Data Types

- Numbers
- String
- Boolean
- Null
- Undefined
- Symbols

#### Reference Data Types

- Objects
- Functions
- Collections
- Arrays
- Dates
- Other types of objects

## Variables

 - Variables are casse-sensitive.
 - The best practice is to use CamelCase when writing JS variables.

### Variable Declaration 

```javaScript
var ourName;
```

### Variable value assignment

```javaScript
var myVar;
myVar = 5;
```

### Assigning the value of one variable to another

```javaScript
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```

### Declaring multiple variables in one line

```javascript
var name, lastName, dob;

name = "John";
lastName = "Smith";
dob = "01/10/1999";
```

#### Var and Let

With Var, the variable can be re-declared with another value. 

```javaScript
var camper = "James";
var camper = "David";
```

With Let, the variable cannot be redeclared in the same block. This is why Let is also blocked scoped. 

```javaScript
var camper = "James";
var camper = "David";
// ERROR: The symbol "camper" has already been declared
```

#### Const 

Declare a Read-Only Variable with the const keyword

```javaScript
const FAV_PET = "Cats";
FAV_PET = "Dogs";
// ERROR: Cannot assign to "FAV_PET" because it is a constant
```

The console will display an error due to reassigning the value of FAV_PET.

Const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:

It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays).

#### Math operations

```javascript
// Addition
const myVar = 5 + 10;

// Substraction
const myVar = 12 - 6;

// Multiply
const myVar = 13 * 13;

//Divide
const myVar = 16 / 12;

//Remainder
var remainder = 17 % 2; //equals 1
var remainder = 48 % 2; //equals 0

// Increment a Number
var i = 2

i++
// is the equivalent of:
i = i + 1;

//Decrement
i--
```

#### Compound Assignment

```javascript
let myVar = 5
myVar += 5 // 10
// This is equal to 5 + 5 

myVar -= 5; // 0
// This is equal to 5 - 5;

myVar *= 5; // 25
// This is equal to 5 * 5

myVar /= 5 // 1
// This is the same as 5 / 5
```

### Strings

#### Declaring string variables

```javaScript
var myName = "Jose";
var lastName = 'Ortiz'
```

String can be declared with single or double quotes. The rule of thumb is to be consistent with your choice. 

When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a string of undefined.

#### Template Literals (ES6)

A more modern way to create strings, especially for multi-line strings and string interpolation. They are enclosed in backticks () and allow you to embed expressions within the string using

```javascript
let message = `Hello, ${name}! You are ${age} years old.`;
```

#### Escaping Literal Quotes in Strings

```javascript
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```

Escape sequences allow you to use characters you may not otherwise be able to use in a string.

```javascript
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
```

#### String Concatenation

Concatenating strings with the Plus Operator

```javascript
const ourStr = "i come first. " + "I come second.";
```

Concatenating strings with the Plus Equals Operator

```javascript
let ourStr = "I come first. ";
ourStr += "I come second.";
// The new value is "I come first. I come second."
```

Constructing strings with variables

```javascript
const ourName = "Ortiz";
const ourStr = "Hello, my last name is " + ourName + ", how are you?";
// "Hello, my last name is Ortiz, how are you?"
```

#### String Interpolation (ES6)

String interpolation is a programming technique that allows you to embed variables or expressions directly within a string, creating more dynamic and readable text. It's like filling in the blanks in a sentence with values from your code.   

```javascript
name = "Alice";
age = 30;

// Using string interpolation
greeting = `Hello, ${name}! You are ${age} years old.`;
console.log(greeting); // Output: Hello, Alice! You are 30 years old.
```

#### Find the length of a string

```javascript
const favColor = "Blue";
favColor.length // 4
```

Use bracket notation to find the first character in a string

```javascript
const firstName = "Charles";
const firstLetter = firstName[0] // C
```

Use Bracket Notation to Find the Nth Character in a String

```javascript
const firstName = "Ada";
const secondLetterOfFirstName = firstName[1]; // d
```

Use Bracket Notation to Find the Last Character in the String

```javascript
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1]; // a
```

Use Bracket Notation to Find the Nth-to-Last Character in a String

```javascript
const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3]; // s
```

Understand string immutability

For example, the following code will produce an error because the letter B in the string Bob cannot be changed to the letter J:

```javascript
let myStr = "Bob";
myStr[0] = "J";
```

The only way to change myStr would be to assign it with a new value, like this:
```javascript
let myStr = "Bob";
myStr = "Job";
```

## Arrays

Store multiple values in one variable using Javascript arrays

```javascript
const sandwich = ["peanut butter", "jelly", "bread"];
```

Nest one array within another

```javascript
const teams = [["Bulls", 23], ["White Sox", 45]];
```

Access array data with Indexes

```javascript
const array = [50, 60, 70];
console.log(array[0]); // 50
const data = array[1]; // 60
```

Modify array data with indexes

```javascript
const ourArray = [50, 40, 30];
ourArray[0] = 15; // [15, 40, 30]
```

Access Multi-Dimensional Arrays With Indexes

```javascript
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];

const subarray = arr[3]; // [[10, 11, 12], 13, 14]
const nestedSubarray = arr[3][0]; // [10, 11, 12]
const element = arr[3][0][1]; // 11
```

Manipulate Arrays With push Method

```javascript
const arr1 = [1, 2, 3];
arr1.push(4, 5);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]); //["Stimpson", "J", "cat", "happy", "joy"]
```

Manipulate Arrays with Pop Method

```javascript
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown); // 6
console.log(threeArr); // [1, 4]
```

Manipulate Arrays With shift Method

```javascript
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift(); // ["J", ["cat"]]
```

Manipulate Arrays With unshift Method

```javascript
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy"); // ["Happy", "Stimpson", "J", "cat"]
```

## Objects

In JavaScript, an object is a collection of key-value pairs. These key-value pairs are often referred to as "properties" or "attributes." The keys are usually strings, while the values can be of any data type, including other objects.

```javaScript
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};
```

In this example, person is an object. Its properties are name, age, and city, and their corresponding values are "Alice", 30, and "New York", respectively.

Objects can be created in various ways:

- Object literal notation: This is the most common way, as shown in the example above.
- Using the new Object() constructor: const person = new Object(); person.name = "Alice";
- Creating a class and using the new keyword: class Person { ... } const person = new Person();

Objects are fundamental to JavaScript programming. They are used to represent real-world entities, store data, and define behavior.

### Set Objects

A set constructor is a built-in function used to create new Set objects. Sets are collections of unique values, meaning no duplicate elements are allowed. The set constructor takes an iterable object (like an array) as an argument and initializes the set with its elements.

Parameters:

- iterable: An optional iterable object (e.g., array, string, map, set) whose elements will be added to the new set. If omitted, an empty set is created.

```javascript
new Set(iterable);

//example Creating an exmpty set.
const emptySet = new Set();
console.log(emptySet); // Output: Set {}

//Creating a set from an array
const numbers = new Set([1, 2, 3, 2, 4]);
console.log(numbers); // Output: Set { 1, 2, 3, 4 }

//Creating a set from a string
const letters = new Set("hello");
console.log(letters); // Output: Set { 'h', 'e', 'l', 'o' }
```

Key points:

- Sets are unordered collections, meaning the elements don't have a specific order.
- Sets are iterable, allowing you to loop over their elements using a for...of loop.
- Sets have various methods for adding, removing, checking, and iterating over elements.

## Promises

In JavaScript, a Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It's a powerful tool for handling asynchronous operations in a more structured and readable way than traditional callback functions.   

Key Concepts:

1 - States of a Promise:

- Pending: Initial state, neither fulfilled nor rejected.   
- Fulfilled: Operation completed successfully.   
- Rejected: Operation failed.   

2 - The Promise Constructor:

- Creates a new Promise object.   
- Takes an executor function as an argument.
- The executor function receives two functions: resolve and reject.
- To fulfill the promise, call resolve(value).
- To reject the promise, call reject(reason).

3 - Consuming Promises:

- .then(): Attaches callbacks to handle both fulfillment and rejection.   
- .catch(): Attaches a callback to handle rejection only. 
- .finally(): Attaches a callback that executes regardless of fulfillment or rejection.   

Example

```javascript
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

fetchData('https://api.example.com/data')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Parsin JSON Data

In JavaScript, the .json() method is used to parse a JSON string into a JavaScript object. This is commonly used when fetching data from a server, as data is often transmitted in JSON format.

1 - Fetching JSON Data:

- You typically use the fetch() API to retrieve data from a server.
- The response from the server is often a JSON string.   

2 - Parsing the JSON String:

- The .json() method, when called on a Response object, parses the JSON body of the response into a JavaScript object.

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Now 'data' is a JavaScript object
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

Key Points:

- Asynchronous Operation: The fetch() and .json() operations are asynchronous, meaning they don't block the execution of other code.
- Error Handling: The .catch() block is used to handle potential errors during the fetching and parsing process.
- JSON Structure: JSON data is structured in a hierarchical format, similar to JavaScript objects. It consists of key-value pairs enclosed in curly braces {} and arrays enclosed in square brackets [].   

#### The then() Method

The .then() method is a fundamental tool in JavaScript for handling asynchronous operations, especially when working with Promises. It allows you to specify callback functions that will be executed when a Promise is either fulfilled or rejected.

How it Works:

1 - Attaching to a Promise: You attach the .then() method to a Promise object.

2 - Handling Fulfillment: The first argument to .then() is a callback function that will be executed if the Promise is fulfilled. This function receives the resolved value as an argument.

3 - Handling Rejection: The second optional argument to .then() is a callback function that will be executed if the Promise is rejected. This function receives the reason for rejection as an argument.

```javascript
function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching data:', error);
      return Promise.reject(error); // Optionally re-throw the error
    });
}

fetchData('https://api.example.com/data')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error handling data:', error);
  });
```

Key Points:

- Chaining Promises: You can chain multiple .then() methods to create complex asynchronous workflows.
- Error Handling: The .catch() method is often used after .then() to handle potential errors.
- Asynchronous Operations: The .then() method is essential for managing asynchronous operations, such as network requests, file I/O, and timers.

#### The catch() Method

The .catch() method is used to handle errors that may occur in a Promise chain. It's a crucial tool for ensuring that your asynchronous operations are robust and can gracefully recover from unexpected issues.

How it Works:

1 - Attached to a Promise: You attach the .catch() method to a Promise object.

2 - Error Handling: If the Promise is rejected (i.e., an error occurs), the function passed to .catch() is executed.

3 - Error Object: The error object, containing information about the error, is passed as an argument to the .catch() function.

```javascript
function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching data:', error);
      return Promise.reject(error); // Optionally re-throw the error
    });
}

fetchData('https://api.example.com/data')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error handling data:', error);
  });
```

Key Points:

- Error Handling: The .catch() method provides a centralized way to handle errors, preventing them from propagating and causing unexpected behavior.
- Error Propagation: You can re-throw the error from the .catch() block to propagate it further up the Promise chain.
- Chaining: .catch() can be chained with other Promise methods like .then() to create complex asynchronous workflows.
- Best Practices: It's good practice to use .catch() to handle errors gracefully and provide informative error messages to the user.

#### The finally() Method

The .finally() method is used to execute a specific block of code, regardless of whether a Promise is fulfilled or rejected. It's often used for cleanup tasks, such as closing network connections, removing event listeners, or logging final messages.

How it Works:

1 -Attaching to a Promise: You attach the .finally() method to a Promise object.

2 - Execution: The function passed to .finally() will be executed after the Promise is either fulfilled or rejected.

```javascript
function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
    .finally(() => {
      console.log('Fetching complete.');
    });
}
```

Key Points:

- Cleanup Tasks: The .finally() method is ideal for performing cleanup tasks that should always be executed, regardless of the outcome of the Promise.
- Logging: It's often used to log final messages or status updates.
- Chaining: You can chain .finally() with other Promise methods like .then() and .catch().

### Async/await

## Functions

Write Reusable JavaScript with Functions

This is a function declaration:

```javascript
function functionName(){
  console.log("Hello World");
};

// function invocation
functionName();
```

This is a function expression

```javascript
const myFunction = function(){
  console.log("Hello world");
};

// function invocation
myfunction();
```

### Chaining Functions

#### Optional chaining (?.)

Optional chaining is a syntax that allows you to access properties of an object without worrying if that object or its property is null or undefined. It helps prevent errors caused by trying to access properties of non-existent objects.

How it works:
- Syntax: object?.property
- Meaning: If object is null or undefined, the expression returns undefined. If object exists, it then tries to access the property. If property is also null or undefined, the expression returns undefined.

```javaScript
const user = {
  name: "Alice",
  address: {
    street: "123 Main St"
  }
};

// Without optional chaining:
const streetName = user.address.street; // If `user` or `user.address` is null/undefined, it throws an error

// With optional chaining:
const streetName = user?.address?.street; // Returns "123 Main St" if user and address exist, otherwise returns undefined
```

### Constructor Functions

#### Classes

In JavaScript, a class is a blueprint for creating objects. It defines the properties and methods that objects of that class will have. Classes are introduced in ECMAScript 6 (ES6) and provide a more structured way to organize code compared to traditional JavaScript prototypes.

Key components of a class:

- Constructor: A special method that is called when an object of the class is created. It initializes the object's properties.
- Methods: Functions that define the behavior of objects of the class.
- Properties: Variables that store data associated with objects of the class.

```javascript
// Example
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name is " + this.name);
  }
}

// Create an object of the Person class
const john = new Person("John Doe", 30);

// Access properties and call methods
console.log(john.name); // Output: John Doe
john.greet(); // Output: Hello, my name is John Doe
```

In this example, the Person class defines a constructor that takes name and age as arguments and initializes the corresponding properties of the object. It also defines a greet() method that logs a greeting message to the console.

Key points to remember:

- Classes are defined using the class keyword.
- Constructors are defined using the constructor keyword.
- Methods are defined using the function keyword or as arrow functions.
- Objects of a class are created using the new keyword.
- Properties can be accessed using dot notation (e.g., object.property).
- Methods can be called using dot notation (e.g., object.method()).

Classes provide a more organized and reusable way to structure code in JavaScript, making it easier to write maintainable and scalable applications.

### Asynchronous Functions

#### The await Keyword

The await keyword is used to pause the execution of an asynchronous function until a Promise is resolved or rejected. It's a syntactic sugar that makes asynchronous code look more synchronous, improving readability.

Key Points:

- Asynchronous Functions: await can only be used within an async function.
- Pausing Execution: When await is encountered, the execution of the async function pauses until the Promise is settled.
- Resuming Execution: Once the Promise is settled, the await expression evaluates to the resolved value (if fulfilled) or throws an error (if rejected).
- Cleaner Syntax: await allows you to write asynchronous code in a more sequential and readable manner, avoiding callback hell.

Example:

```javaScript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}

fetchData();
```

How it Works:

- The fetchData function is declared as async.
- The fetch function returns a Promise.
- The await keyword pauses the execution until the fetch Promise is resolved.
- Once resolved, the response is assigned to the response variable.
- The response.json() method also returns a Promise.
The await keyword again pauses execution until the response.json() Promise is resolved.
- The parsed JSON data is assigned to the data variable.
- Finally, the data is logged to the console.

Benefits of Using await:

- Improved Readability: Makes asynchronous code look more synchronous.
- Error Handling: Can be used with try-catch blocks to handle errors gracefully.
- Simplified Code: Avoids the need for complex Promise chaining.

## JavaScript Algorithms and Data Structures

### Bubble Sort

- Purpose: Sorts an array of elements by repeatedly comparing adjacent pairs and swapping them if they are in the wrong order.
- Time complexity: O(n^2) in the worst and average cases, making it inefficient for large datasets.
- Space complexity: O(1) as it operates in-place without requiring additional memory.

```javaScript
function bubbleSort(array) {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap elements if they are in the wrong order
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}
```

### Selection Sort

- Purpose: Sorts an array of elements by repeatedly finding the minimum element in the unsorted portion of the array and swapping it with the first element.
- Time complexity: O(n^2) in the worst, average, and best cases, making it inefficient for large datasets.
- Space complexity: O(1) as it operates in-place without requiring additional memory.

```javascript
function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first element of the unsorted portion
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array;
}
```

### Insertion Sort

- Purpose: Sorts an array of elements by repeatedly inserting an element into its correct position in the sorted portion of the array.
- Time complexity: O(n^2) in the worst case, O(n) in the best case (when the array is already sorted), and O(n^2) on average.
- Space complexity: O(1) as it operates in-place without requiring additional memory.

```javascript
function insertionSort(array) {
const length = array.length;

for (let i = 1; i < length; i++) {
const key = array[i]; // Element to be inserted
let j = i - 1;

while (j >= 0 && array[j] > key) {
  array[j + 1] = array[j]; // Shift elements to the right
  j--;
}

array[j + 1] = key; // Insert the element in its correct position
}

return array;
}
```

## Error Handling

### Try-Catch Statements

A try-catch statement in JavaScript is a fundamental error handling mechanism that allows you to gracefully handle exceptions that may occur during code execution. It's composed of two main blocks:

1. Try Block:

- Encloses the code that you want to execute.
- If an error occurs within this block, the execution immediately jumps to the catch block.

2. Catch Block:

- Encloses the code that will be executed if an error is thrown within the try block.
- It typically includes error handling logic, such as logging the error, displaying an error message to the user, or attempting to recover from the error.

Basic syntax:

```javascript
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
}
```

Example:

```javascript
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  } catch (error) {
    console.error("Error:", error.message);
    return 0; // Or handle the error differently
  }
}

const result = divide(10, 0);
console.log(result); // Output: Error: Division by zero
```

Key Points:

- Error Handling: The catch block provides a way to handle errors gracefully and prevent your application from crashing.
- Custom Errors: You can throw custom errors using the throw keyword.
- Error Object: The error object in the catch block contains information about the error, such as its message and stack trace.
- Best Practices: Use try-catch judiciously. Don't overuse it to mask errors that should be fixed.


## <a id="JsCommonConventions">Js Common Conventions</a>

### Naming Conventions

- Variables:
  - Use camelCase for variable names.
  - Use meaningful names that reflect their purpose.
- Functions:
  - Use camelCase for function names.
  - Use verbs or verb phrases that describe the function's action.
- Constants:
  - Use uppercase with underscores (e.g., MY_CONSTANT) for constants.
- Classes:
  - Use PascalCase for class names.

### Function Parameters

- Prefix an unused parameter with an underscore _. You couls also leave the parameter empty like so: (, char1).

### Code Formatting

- Indentation: Use consistent indentation (usually 2 or 4 spaces) to improve code readability.
- Line Length: Limit line length to around 80 characters to prevent horizontal scrolling.
- Whitespace: Use whitespace appropriately to separate logical blocks of code.
- Braces: Place opening braces on the same line as the declaration and closing braces on a new line.

### Best Practices
- Use strict mode: Enables stricter rules and helps catch potential errors.
- Avoid global variables: Use modules or closures to encapsulate variables.
- Write clear and concise code: Use meaningful variable names, comments, and formatting.
- Test your code: Write unit tests to ensure code quality and prevent regressions.
- Use linters and code formatters: Tools like ESLint and Prettier can help enforce coding standards.

### Popular Style Guides
- Airbnb JavaScript Style Guide: A popular style guide with comprehensive rules for JavaScript.
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html): Another well-known style guide with a focus on readability and maintainability.


