//  Given -- year
//  Return -- century that it is in
//
//  centuryFromYear(1700) => 17

function centuryFromYear(year: number): number {
  return Math.ceil(year / 100);
}

console.log(centuryFromYear(1700));
console.log(centuryFromYear(1905));
// should be 17
