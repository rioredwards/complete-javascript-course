/* const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

// const markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI);

if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI (${markBMI.toFixed(
      2
    )}) is higher than John's BMI (${johnBMI.toFixed(2)})!`
  );
} else {
  console.log(
    `John's BMI (${johnBMI.toFixed(
      2
    )}) is higher than Mark's BMI (${markBMI.toFixed(2)})!`
  );
}
 */

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas.
// They compete against each other 3 times.
// The winner with the highest average score wins a trophy!

// Your tasks:
// 1.Calculate the average score for each team, using the test data below
// 2.Compare the team's average scores to determine the winner of the competition, and print it to the console.
// Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
// 3.Bonus1: Include a requirement for a minimum score of 100.
// With this rule, a team only wins if it has a higher score than the other team, and the same time
// a score of at least 100 points.
// Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4.Bonus2: Minimum score also applies to a draw! So a draw only happens when both teams have the same
// score and both have a score greater or equal 100 points. Otherwise, no team wins the trophyTest

// data:Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data Bonus1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 GOOD LUCK 😀

let dolphinsScore;
let koalasScore;

dolphinsScore = (86 + 112 + 101) / 3;
koalasScore = (98 + 95 + 106) / 3;

console.log(`Dolphin's score: ${dolphinsScore.toFixed(2)}`);
console.log(`Koala's score: ${koalasScore.toFixed(2)}`);

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
    console.log(`Dolphins win!`);
} else if (dolphinsScore < koalasScore && koalasScore >= 100) {
    console.log(`Koalas win!`);
} else if (dolphinsScore === koalasScore && dolphinsScore >= 100) {
    console.log(`It's a draw!`);
} else {
    console.log(`Everyone loses!`);
}
