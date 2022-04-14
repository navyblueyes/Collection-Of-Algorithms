// given ...... a *sorted* integer array that does not contain any duplicates
// return ..... summary of range of numbers contained

// assume ..... given array no longer than 15

// example
//    if given [-1,0,1,2,6,7,9]
//    return ["-1=>2","6=>7","9"]
interface RangeObjectItem {
  start: number,
  end: number
}
interface RangeOfItems extends Array<RangeObjectItem>{}

export function sortedRangeArray(input: number[]): string[] {
  let ranges: RangeOfItems = [{ start: input[0], end: input[0] }];
  let answer: string[] = [];
  for (let i = 1; i < input.length; i++) {
    if (ranges[ranges.length - 1].end + 1 === input[i]) {
      ranges[ranges.length -1].end = input[i];
    } else {
      ranges.push({start: input[i], end: input[i]})
    }
  }

  for (let i = 0; i < ranges.length; i++) {
    if (ranges[i].start !== ranges[i].end) {
      answer.push(`${ranges[i].start}=>${ranges[i].end}`)
    } else {
      answer.push(ranges[i].start.toString())
    }
  }

  return answer
}

console.log(sortedRangeArray([-1, 0, 1, 2, 6, 7, 9])); // should return ["-1=>2","6=>7","9"]
