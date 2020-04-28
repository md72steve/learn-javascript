function isBelowThreshold(currValue) {
  return currValue < this;
}

function bigEnough(x) {
  return x > this;
}

const arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(arr1.every(isBelowThreshold, 300));
console.log(arr1.every(bigEnough, 4));
