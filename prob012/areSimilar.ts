// goal -- compare two arrays and see if elements are interchangeable

function areSimilar(a: number[], b: number[]): boolean {}

console.log(areSimilar([1, 2, 3], [1, 2, 3])) // should return true
console.log(areSimilar([1, 2, 3], [2, 1, 3])) // should return false
console.log(areSimilar([1, 2, 3], [2, 1, 1])) // should return false
