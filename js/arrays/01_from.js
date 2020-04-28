console.log('### Array.from ###########');
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
let characters = Array.from('Hello world!');
let evenNumbers = Array.from(numbers, (x) => 2 * x);
let empty = [];

function mapFn(x) {
  return this * x;
}
let result = Array.from(numbers, mapFn, 5);

console.log('numbers', numbers);
console.log('characters', characters);
console.log('even numbers', evenNumbers);
console.log('empty', empty);
console.log('result', result);
console.log('Array.from');
