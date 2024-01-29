console.clear();

// Array.isArray() Method

// The Array.isArray() method determines whether the passed value is an Array.

// Parameters
// The value to be checked.

// Example

// const animalArray = ['elephant', 'shark', 'lion', 'zebra'];
// const lottoWinner = 458245;
// const tRexHaiku = 'The T-Rex likes you, But he can’t give you a hug. His arms are too short.';

// console.log(Array.isArray(lottoWinner));

/**********************************************************************/

// forEach Array Method

// The forEach() method executes a provided function once for each array element.

// Parameters
// forEach((element, index, array) => { /* ... */ })

// Example
const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((item, index, arr) => {
//   console.log(`a[${index}] = ${item}`);
//   console.log(arr);
// });

// numbers.forEach(consoleItem);

// function consoleItem(item, index, arr){
//   console.log(`a[${index}] = ${item}`);
// }

/*************************************************************/

// map Array Method

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// Parameters
// Same as forEach

// Example
// console.log(numbers.map(e => e * 2))

// function double(e, i, a){
//   return e * 2;
// };

// const doubledNumbers = numbers.map(double);
// console.log(doubledNumbers);

// Example 2
// const products = [
//   {
//     name: "Fridge",
//     price: 1000,
//     count: 5
//   },
//   {
//     name: "Stove",
//     price: 1500,
//     count: 2
//   },
//   {
//     name: "Microwave",
//     price: 500,
//     count: 8
//   }
// ];

// const totalProductsValue = products.map(item => ({
//   name: item.name,
//   totalValue: item.price * item.count
// }));

// console.log(totalProductsValue);

/**********************************************************************/

// Filter Array Method

// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

// Example: Odds or evens
// Arrow Function

// const even = numbers.filter(val => val % 2 === 0);
// console.log(even);

// const even2 = numbers.filter(isEven);

// function isEven(val){
//   if(val % 2 === 0){
//     return val;
//   }
// }

// console.log(even2);

// Example 2
// const people = [
//   {
//     name: "John",
//     age: 15
//   },
//   {
//     name: "Jacob",
//     age: 22
//   },
//   {
//     name: "Jingleheimer",
//     age: 18
//   }
// ];

// const olderThan18 = people.filter(object => object.age >= 18);
// console.log(olderThan18);

// Example 3
// const duplicatedNumns = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6];

// const numsDuplicated = duplicatedNumns.filter((value, index, arr) => {
//   console.log(arr.indexOf(value), index)
//   return arr.indexOf(value) === index;
// });

// console.log(numsDuplicated);

/**********************************************************************/

// Reduce Array Method

// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// Parameters
// reduce((previousValue, currentValue, currentIndex, array) => { /* … */ } )

// Example: Add all numbers in an array

// const total = numbers.reduce((previousNum, currentNum) => {
//   return previousNum + currentNum;
// });

// console.log(total);

// Example 2: Find the biggest numbers

// const numbers3 = [1, 2, 3, 1, 4, 5, 6, 7];

// const max = numbers3.reduce((prev, curr) => {
//   if(prev > curr){
//     return prev;
//   }else{
//     return curr
//   }
// })

// console.log(max);

// Example 3: Check the inventory total

// const store = [
//   {
//     product: 'apple',
//     value: 3.50,
//     count: 5
//   },
//   {
//     product: 'banana',
//     value: 1.00,
//     count: 20
//   },
//   {
//     product: 'watermelon',
//     value: 5.00,
//     count: 7
//   }
// ];

// const totalValueStore = store.reduce((acc, item) => acc + (item.value * item.count), 0);

// console.log(totalValueStore);

// Example 4: Create a sentence

// const baconHaiku = ['That’s too much bacon.\n', 'Please just bring me some kale chips.\n', 'Said no one ever.'];

// console.log(baconHaiku.reduce((haiku, word) => haiku + word));

// Example 5: Convert array to object

// console.log(store.reduce((acc, cur) => {return {...acc, [cur.product]: cur}}, {}))

/*********************************************************************/

// Slice Array method

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// Parameters
// slice(start, end)

// Example
// const sliceDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// const illCutYou = sliceDays.slice(2, 4);

// console.log(illCutYou);
// console.log(sliceDays);

/**********************************************************************/

// Splice Array Method

// Parameters
// splice(start, deleteCount, item1, item2, item3)

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

// Example: Remove elements

// const spliceDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// const spliced = spliceDays.splice(1, 2);

// console.log(spliced, spliceDays);

// Example 2: Insert elements

// spliceDays.splice(3, 1, 'Sad Day');
// console.log(spliceDays);

/*************************************************************************/

// Sort Array Method

// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// Parameters
// sort((a, b) => { /* … */ } )

// Example: Sort alphabetically

// const sortNames = ['John', 'Jacob', 'Jingleheimer', 'Smidtch'];

// sortNames.sort();

// console.log(sortNames);

// Example 2: Sort numbers

// const sortNumbers = [74, 18, 10, 5, 84, 24, 105];

// sortNumbers.sort((a, b) => a - b);

// console.log(sortNumbers);

// Example 3: Sorting an array of objects

// const sortObjects = [
//   {
//     name: "laptop",
//     price: 1000
//   },
//   {
//     name: 'desktop',
//     price: 1500,
//   },
//   {
//     name: 'phone',
//     price: 500
//   }
// ];

// sortObjects.sort((a, b) => a.price - b.price);
// console.log(sortObjects)

/***********************************************************************/

// Concat Array Method

// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// Parameters
// concat(value0, value1, /* … ,*/ valueN)

// Example

// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const d = [7, 8, 9];

// const c = a.concat(b, d);

// console.log(c);

/**********************************************************************/

// Fill Array Method

// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

// Parameters
// fill(value, start, end)

// Example:

// const fillNumbers = [1, 2, 3, 4, 5];

// const num2 = fillNumbers.fill(0, 1, 4);

// console.log(num2);

// Example 2:

// function fillInNumbers(n){
//   return Array(n).fill(0).map((num, idx) => num + 1);
// }

// console.log(fillInNumbers(10));

/***********************************************************************/

// Includes Array Method

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// Parameters
// includes(searchElement, fromIndex)

// Example: 

// const includesNames = ['Patrick', 'Squidward', 'Spongebob', 'Plankton'];
// const forest = 'I may not be a smart man';

// console.log(includesNames.includes('Sandy'));
// console.log(forest.includes('smart'));

/**********************************************************************/

// Join Array Method

// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

// Parameters
// join(separator)

// Example:

// const joinCountries = ['USA', 'Japan', 'Romania', 'Uganda'];
// const vader = "I am your father";

// console.log(joinCountries.join(' '));

/***********************************************************************/

// Reverse Array Method

// The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

// Parameters
// reverse()

// Example

// const reverseNumbers = [1, 2, 3, 4, 5, 6];

// console.log(reverseNumbers.reverse());

// Example 2: Reverse string

// const reverseString = 'Life is like a box of chocolates';

// const res = reverseString.split('').reverse().join('');
// console.log(res);

/***********************************************************************/

// Every Array Method

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// Parameters
// every((element, index, array) => { /* … */ } )

// Example

// const everyNumbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];

// const evens = everyNumbers.every(e => e % 2 === 0);
// console.log(evens);

// Example 2

// const everyPerson = [
//   {
//     name: 'Legolas'
//   },
//   {
//     name: 'Aragon'
//   },
//   {
//     name: 'Gandalf'
//   }
// ];

// console.log(everyPerson.every(e => e.name !== undefined));

/*********************************************************************/

// Some Array method

// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

// Parameters
// some((element, index, array) => { /* … */ } )

// Example

// const someNumbers = [1,2,3,4,5,6];

// console.log(someNumbers.some(e => e > 4));

/**********************************************************************/

// Find Array Method

// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// Parameters
// find((element, index, array) => { /* … */ } )

// Example:

// const findWaldo = ['Michael', 'Dwight', 'Waldo', 'Pam'];

// console.log(findWaldo.find(e => e === 'Waldo'));

/*************************************************************************/

// FindIndex Array Method

// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// Parameters
// findIndex((element, index, array) => { /* … */ } )

// Example:

// const findIndexNumbers = [5, 78, 15, 65, 99, 124];

// console.log(findIndexNumbers.findIndex(e => e === 15));

/*************************************************************************/

// From Array Method

// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

// Parameters
// Array.from(arrayLike, (element, index) => { /* … */ } )

// Example:

// const str = '1234567';

// console.log(Array.from(str, x => Number(x)));

// Example 2: Remove Duplicates

// const fromNumbers = [1, 2, 3, 3, 2, 1, 4, 4, 3, 2, 1, 5];

// const res = Array.from(new Set(fromNumbers));

// console.log(res)

/************************************************************************/

// Flat Array Method

// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// Parameters
// The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

// Example

// const nestedArray = [1, [2, [3, [4]]]];

// console.log(nestedArray.flat(2));






