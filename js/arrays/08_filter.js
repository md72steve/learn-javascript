const arr1 = ['hello', 'world', 'long-term'];

const longerThan6Characters = (x) => x.length > 6;

function checkLength(x) {
  return x.length > this;
}

console.log(arr1.filter(longerThan6Characters));
console.log(arr1.filter(checkLength, 4));
