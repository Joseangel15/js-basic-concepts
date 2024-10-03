# Js Object Methods

## Menu
- [Object.entries()](#Object.entries())
- [Object.hasOwnProperty()](#Object.hasOwnProperty())
- [Object.keys()](#Object.keys())
- [Object.values()](#Object.values())

### <a id="Object.entries()">Object.entries()</a>

The Object.entries() method in JavaScript returns an array of key-value pairs for all the enumerable properties of a given object.

Parameters:

- obj: The object whose enumerable properties are to be returned as key-value pairs.

Return value:

- An array of arrays, where each inner array contains a key-value pair. The first element of each inner array is the property name (key), and the second element is the corresponding property value.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

const entries = Object.entries(person);
console.log(entries); // Output: [["firstName", "John"], ["lastName", "Doe"], ["age", 30]]
```

Key points:

- The Object.entries() method only returns enumerable properties. Non-enumerable properties are not included in the returned array.
- The order of the key-value pairs in the returned array is not guaranteed.
- The Object.entries() method is often used to iterate over the key-value pairs of an object.

### <a id="Object.hasOwnProperty()">Object.hasOwnProperty()</a>

The hasOwnProperty() method in JavaScript is used to check if an object has a specified property as its own property (not inherited from its prototype chain). It returns a boolean value: true if the property exists, false otherwise.

Parameters:

- property: The name of the property to check.

Return value:

- true if the object has the specified property as its own property, false otherwise.

```javascript
object.hasOwnProperty(property);

// Example
const person = {
  name: "Alice",
  age: 30
};

console.log(person.hasOwnProperty("name")); // Output: true
console.log(person.hasOwnProperty("age")); // Output: true
console.log(person.hasOwnProperty("toString")); // Output: false (inherited from Object.prototype)
```

Key points to remember:

- hasOwnProperty() only checks for properties directly on the object, not properties inherited from its prototype chain.
- It is often used in conjunction with a for...in loop to iterate over only the object's own properties.
- You can use hasOwnProperty() to avoid accidentally modifying inherited properties.

By understanding hasOwnProperty(), you can effectively work with objects in JavaScript and ensure that you're only dealing with their own properties.

### <a id="Object.keys()">Object.keys()</a>

The Object.keys() method in JavaScript returns an array of all the enumerable property names of a given object. These property names are strings.

Parameters:

- obj: The object whose enumerable property names are to be returned.

Return value:

- An array of strings, representing the enumerable property names of the object.

```javascript
Object.keys(obj);

//example
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

const keys = Object.keys(person);
console.log(keys); // Output: ["firstName", "lastName", "age"]
```

Key points:

- The Object.keys() method only returns enumerable properties. Non-enumerable properties are not included in the returned array.
- The order of the property names in the returned array is not guaranteed.
- The Object.keys() method is often used to iterate over the properties of an object.

### <a id="Object.values()">Object.values()</a>

The Object.values() method in JavaScript returns an array of all the enumerable property values of a given object.

Parameters:

- obj: The object whose enumerable property values are to be returned.

Return value:

- An array of the values of the enumerable properties of the object.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

const values = Object.values(person);
console.log(values); // Output: ["John", "Doe", 30]
```

Key points:

- The Object.values() method only returns enumerable property values. Non-enumerable property values are not included in the returned array.
- The order of the values in the returned array is not guaranteed.
- The Object.values() method is often used to iterate over the values of an object.

