const arr1 = [1, 2, 3, 4, 5, 6, 7, [8, 9, 10]];
const arr2 = Array.from('hello world');

const arr3 = [arr1, arr2];

console.log(arr1, arr2, arr3.flat(2));
