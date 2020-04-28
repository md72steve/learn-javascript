const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const greaterThan3 = (x) => x > 3;
function greaterThan(x) {
  return x > this;
}

// output: 6
console.log(arr1.find((e) => e > 5));

// output: 4
console.log(arr1.find(greaterThan3));

// output: 8
console.log(arr1.find(greaterThan, 7));
