// Given --> array of tuples [answerTime, grade]
// Goal ---> calculate bot response time ... return 1 for correct, -1 for incorrect, 0 for no answer;

// example -->  [[3,1],[6,1],[4,1],[5,1]] --> 4.5
// example -->  [[4,1],[4,-1],[0,0],[6,1]] --> 5.0   [4,1] [6,1] are the only ones counted
// example -->  [[3,-1],[0,0],[4,-1]] --> 0.0

export function trainerScorekeeper(inputArray: number[][]): number {
  let totalScore = 0;
  let totalQuestions = 0;

  inputArray.forEach((data: number[]) => {
    if (data[1] === 1) {
      totalQuestions += data[0];
      totalScore += data[1];
    }
  });

  return totalQuestions / totalScore || 0;
}

console.log(
  trainerScorekeeper([
    [3, 1],
    [6, 1],
    [4, 1],
    [5, 1],
  ])
);
// --> 4.5
console.log(
  trainerScorekeeper([
    [4, 1],
    [4, -1],
    [0, 0],
    [6, 1],
  ])
);
// --> 5.0
console.log(
  trainerScorekeeper([
    [3, -1],
    [0, 0],
    [4, -1],
  ])
);
// --> 0.0
