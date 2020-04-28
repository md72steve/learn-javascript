const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = Array.from('hallo welt. Hello world!');

const isLargerThan5 = (x) => x > 5;
function isLargerThan(x) {
  console.log(x, this);
  return x > this;
}

console.log(arr1.findIndex(isLargerThan5));
console.log(arr2.findIndex(isLargerThan, 'o'));
