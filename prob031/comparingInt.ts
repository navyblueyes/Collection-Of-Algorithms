// Given two strings, determine the relationship between first compared to the second ['less', 'greater', 'equal']
//    if given '785', '799'... should respond with 'less'

export function comparingInt(a: string, b: string): string {
  const first = parseInt(a);
  const second = parseInt(b);
  if (a < b) {
    return 'less'
  } if (b < a) {
    return 'greater'
  } else {
    return 'equal'
  }

}

console.log(comparingInt('12', '13'));
console.log(comparingInt('875', '799'));
console.log(comparingInt('1000', '1000'));
