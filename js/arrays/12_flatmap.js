const arr1 = [1, 2, 3, 4, 5, 6, 7, [8, [9, 10]]];

console.log(arr1);
console.log(arr1.flat(2).flatMap((x) => [[x * 2]]));
