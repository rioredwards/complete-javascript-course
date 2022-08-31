/* function describeCountry(country, population, capitalCity) {
  return country + " has " + population + " million people and its capital city is " + capitalCity;
}

const USA = describeCountry('USA', 365, 'DC');
const Uganda = describeCountry('Uganda', 20, 'Kogongo');
const Peru = describeCountry('Peru', 112, 'Lamp');

console.log(USA);
console.log(Uganda);
console.log(Peru);
 */

// // Function Declaration
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// // const chinaPop = 1441;
// // const chinaPercentage = percentageOfWorld1(chinaPop);
// // console.log(chinaPercentage);

// // Function Expression
// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// }

// // const USAPop = 370;
// // const USAPercentage = percentageOfWorld2(USAPop);
// // console.log(USAPercentage);

// // Arrow function (without brackets)
// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// // Arrow function (with brackets)
// const percentageOfWorld4 = (population) => {
//   return (population / 7900) * 100;
// }

// // console.log(percentageOfWorld3(1441));
// // console.log(percentageOfWorld4(1441));

// /* Functions Calling Other Functions */

// // Function Declaration
// function describePopulation_1(country, population) {
//   return `${country} has ${population} people, which is about ${percentageOfWorld1(population)}% of the world!`;
// }

// // Function Expression
// const describePopulation_2 = function (country, population) {
//   return `${country} has ${population} people, which is about ${percentageOfWorld1(population)}% of the world!`;
// }

// // Arrow Function
// const describePopulation_3 = (country, population) => {
//   return `${country} has ${population} people, which is about ${percentageOfWorld1(population)}% of the world!`;
// }

// console.log(describePopulation_1("USA", "2"));
// console.log(describePopulation_2("USA", "2"));
// console.log(describePopulation_3("USA", "2"));

/* Intro to Arrays */
// const populations = [10, 1441, 332, 83];
// console.log(populations.length === 4);
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3])
// ];
// console.log(percentages);

/* basic array operations (methods) */

// const neighbors = ["Mexico", "Canada", "Africa"];
// console.log(neighbors);
// neighbors.push("Utopia");
// console.log(neighbors);
// neighbors.pop();
// console.log(neighbors);

// if (!neighbors.includes("Germany")) {
//   console.log("Probably not a central European country :D");
// }

// neighbors[neighbors.indexOf("Canada")] = "New Zealand";
// console.log(neighbors);

/* Intro to Objects */
// const myCountry = {
//   country: 'Finland',
//   capital: 'Helsinki',
//   language: 'finnish',
//   population: 6,
//   neighbors: ['Norway', 'Sweden', 'Russia']
// };

/* Dot vs. Bracket Notation */
// const string = `${myCountry["country"]} has ${myCountry["population"]} million ${myCountry["language"]}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`
// console.log(string);

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry.population -= 2;
// console.log(myCountry.population);

/* Object Methods */
// const myCountry2 = {
//   country: 'Finland',
//   capital: 'Helsinki',
//   language: 'finnish',
//   population: 6,
//   neighbors: ['Norway', 'Sweden', 'Russia'],

//   describe: function () {
//     console.log(
//       `${this.country}has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`
//     );
//   },

//   checkIsland: function () {
//     this.isIsland = this.neighbors.length === 0 ? true : false;
//     // this.isIsland2 = !Boolean(this.neighbors.length);
//   }
// };

// myCountry2.describe();
// myCountry2.checkIsland();
// console.log(myCountry2);

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}

console.log(john.calcBMI());
console.log(mark.calcBMI());

const higherBMI = (john.calcBMI() > mark.calcBMI()) ? john : mark;
const lowerBMI = !(john.calcBMI() > mark.calcBMI()) ? john : mark;
console.log(
  `${higherBMI.fullName}'s BMI (${higherBMI.BMI.toFixed(2)}) is higher than ${lowerBMI.fullName}'s BMI (${lowerBMI.BMI.toFixed(2)})`
);