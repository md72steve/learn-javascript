const arr1 = Array.from('hallo welt!');

function logEach(x) {
  console.log(x.toUpperCase());
}

console.log(arr1.forEach(logEach));
