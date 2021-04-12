var academy = 'Asia Developer Academy';
// 1) to check length of string.
console.log(academy.length)
// 2) to change string to uppercase.
console.log(academy.toUpperCase());
// 3) to change string to lowercase.
console.log(academy.toLowerCase());
// 4) to return the character at the specified index.
console.log(academy.charAt(6));
console.log(academy.indexOf('ev'));
console.log(academy.lastIndexOf('e'));
console.log(academy.substring(5,14));
// 9) Splits a String object into an array of strings by separating the string into substrings.
console.log(academy.split(" "));

var newNumber = 10.23456789
console.log(newNumber.toFixed(3));
console.log(newNumber.toPrecision(3));

var anotherNumber = 10.3
console.log(Math.round(anotherNumber));
console.log(Math.ceil(anotherNumber));
console.log(Math.floor(anotherNumber));

// This will generate a randome number between 0-1
console.log(Math.random());
// This will generate a randome number between 1 - 100 without integer
console.log(Math.floor(Math.random() * 100) +1);