const arr1 = Array.from('hallo welt');

const itr = arr1.entries();

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

for (let e of itr) {
  console.log(e);
}
