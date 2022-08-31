'use strict';

/* Destructuring Arrays */
/* 
// Destructuring Arrays:
const arr = [1, 2, 3];
const [a, b, c] = arr; // Destructuring arr to abc 
console.log(a, b, c);

// Destructuring Object Values
const restaurant = {
  name: 'Yum Town',
  drinks: ['milk', 'oj', 'soda'],
  food: ['noodles', 'cake', 'pizza'],

  info: function (drinkNumber, foodNumber) {
    return [this.drinks[drinkNumber], this.food[foodNumber]];
  }
};

// Destructuring restaurant.menu 
const [food1, food2, food3] = restaurant.food;
console.log(food1, food2, food3);

// Only copying 1st and 3rd values (put empty space)
let [item1, , item3] = restaurant.food;
console.log(item1, item3);

// Switching values using destructuring
[item1, item3] = [item3, item1];
console.log(item1, item3);

// Returning multiple values from a function
const [thing1, thing2] = restaurant.info(0, 2);
console.log(thing1, thing2);

// Accessing a nested array
const someNumbers = [1, 2, [3, 4]];
const [i, , j] = someNumbers;
console.log(i, j);

// Nested destructuring
const [l, , [m, n]] = someNumbers;
console.log(l, m, n);

// Default values
const names = ['fred', 'bob'];
const [person1 = '?', person2 = '?', person3 = '?'] = names;
console.log(person1, person2, person3);
 */

/* Destructuring Objects */

const restaurant2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // Destructuring object into parameters
  orderDelivery: function ({ address, mainIndex, time }) {
    return `Order number ${mainIndex} received at ${address}, for ${time}! `;
  },

  orderPasta: function (ing1, ing2, ing3) {
    return `Let's make some pasta! First, ${ing1}, next, ${ing2}, then ${ing3}!`
  },
};

// Passing object literal into function ^^^
const string = restaurant2.orderDelivery({
  time: '10:30',
  address: 'Via Angelo Tavanti 23',
  mainIndex: 10,
});

// Destructuring Object
const { name, openingHours, categories } = restaurant2;

// Renaming Variables while destructuring
const { name: altName, openingHours: altOpeningHours, categories: altCategories } = restaurant2;

// Setting Default values (creates a menu[] property)
const { menu = [], categories: categories2 = [] } = restaurant2;

// Mutating variables
const obj = {
  a: 10,
  b: 2
};

let a = 0;
let b = 0;
({ a, b } = obj);

// Nested objects
const { fri: { open, close } } = openingHours;


/* Spread Operator */
// Passes each value in an array... Great for copying
// Similar to destructuring, but doesn't create new variables
// Only use when you need values separated by commas: Arguments and Array Declarations
const arr = [1, 2, 3];
const newArr = [...arr];
// console.log(newArr);
// console.log(...newArr);
const evenNewerArr = [...newArr, 3, 4, 5];
// console.log(evenNewerArr);

// Copying arrays
const mainMenuCopy = [...restaurant2.mainMenu];
// console.log(mainMenuCopy);

// Join 2 Arrays
const menu2 = [...restaurant2.mainMenu, ...restaurant2.starterMenu];
// console.log(menu2);

// Iterables: Arrays, Strings, Maps, Sets. Not Objects
const string2 = 'Hello';
const letters = [...string2];
// console.log(...string2);
// console.log(letters);

// Passing elements of array into function
const ingredients = [`juice`, `milk`, `cabbage`];
// console.log(`${restaurant2.orderPasta(...ingredients)}`);

// Spread Operator works on Objects even though they aren't iterables
const newRestaurant = { ...restaurant2 };


/* Rest pattern and parameters */
// Spread: Right
const newArr2 = [...arr];

// Rest: Left
const [var1, var2, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(others);

// Copies all elements after the last one specified into an array
const [Pizza, , Risotto, ...otherFood] = [...restaurant2.mainMenu, ...restaurant2.starterMenu];
// console.log(otherFood);

// Rest Pattern with Objects
const { sat, ...weekDays } = restaurant2.openingHours;
// console.log(weekDays);

// Rest & Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const value1 = add(2, 3);
const value2 = add(3, 4, 5, 6);
// console.log(value1);
// console.log(value2);

const x = [2, 3, 4];
const value3 = add(...x);
// console.log(value3);

/* Short-circuiting OR and AND */
restaurant2.numGuests = 24;
// In place of Ternary Operator:
const guests1 = restaurant2.numGuests || 10;
console.log(guests1);




/* ******************************** */

/* 
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
 */
