// given --> array `arr` and integer `arrLen`
// goal ---> 1) split `arr` into groups of size `arrLen`
//           2) return a 2D array `[[],[]]`

// example --> [a,b,c,d], 2  --> [[a.b],[c,d]]
// example --> [0,1,2,3,4,5] , 4  --> [[0,1,2,3],[4,5]]

export function forced2dArray(arr: any[], arrLen: number): any[][] {
  const chunked = [];
  let count = 0;

  while (count < arr.length) {
    chunked.push(arr.splice(count, count + arrLen));
  }

  return chunked;
}

console.log(forced2dArray(["a", "b", "c", "d"], 2));
console.log(forced2dArray([0, 1, 2, 3, 4, 5], 4));

/*
function forced2dArray(arr: any[], arrLen: number): any[] {
  let newArr = [[][]];
  newArr = [[arr.splice(0, arrLen)][arr.splice(arrLen, arr.length)]];
}

			while (i < copy.length) {
				chunked.push(copy.slice(i, n));

				i = i + integer;
				n = n + integer;
			}

*/
