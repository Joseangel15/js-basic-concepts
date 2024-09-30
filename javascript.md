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

### Strings

#### Declaring string variables

```javaScript
var myName = "Jose";
var lastName = 'Ortiz'
```

String can be declared with single or double quotes. The rule of thumb is to be consistent with your choice. 

When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a string of undefined.

## Functions

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






