# All JS Concepts 

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






