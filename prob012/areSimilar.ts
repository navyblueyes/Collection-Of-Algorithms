// goal -- compare two arrays and see if elements are interchangeable

function areSimilar(a: number[], b: number[]): boolean {
  // to pass the first condition
  if (a.toString() === b.toString()) {
    return true;
  }

  // check for reverse case
  const c: number[] = [];
  let d: number[] = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[1]) {
      c.push(a[i]);
      d.push(b[i]);
    }
  }
  d = d.reverse();
  if (c.length === 2 && (c.toString() === d.toString())) {
    return true;
  }

  //
  return false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3])); // should return true
console.log(areSimilar([1, 2, 3], [2, 1, 3])); // should return false
console.log(areSimilar([1, 2, 2], [2, 2, 1])); // should return true
