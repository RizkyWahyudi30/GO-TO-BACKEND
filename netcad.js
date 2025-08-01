// // question 1
// const rosePrice = 8;
// const lilyPrice = 10;
// const tulipPrice = 2;

// let quatintyRose = 70;
// let quatintyLily = 50;
// let quatintyTulip = 120;
// // value
// let valueRose = rosePrice * quatintyRose;
// console.log(valueRose);
// let valueLily = lilyPrice * quatintyLily;
// console.log(valueLily);
// let valueTulip = tulipPrice * quatintyTulip;
// console.log(valueTulip);
// // total
// let totalValue = valueRose + valueLily + valueTulip;
// console.log(totalValue);

// let test = 'ini "test" ing';
// console.log(test);

//

let typeObj = {};
console.log(typeof typeObj);

let testObj = {
  typeNum: 123,
  typeStr: "is string",
  typeBool: true,
};
console.log(testObj.typeStr);
console.log(testObj.typeNum);

let user1 = {
  name: "Calvin",
  age: 28,
  status: true,
};

let user2 = {
  name: "Melvin",
  age: 32,
  status: true,
};

console.log(user1.name);
user1.age = 22;
console.log(user1.age);

delete user2.status;
console.log(user2);

let days = [
  "Monday",
  "Sunday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(days[0]);
console.log(days[2]);
console.log(days[1]);
console.log(days[3]);

days[2] = "Tues";
console.log(days[2]);

let animals = [];
animals[0] = "Cat";
animals[2] = "Lion";
animals[3] = "Tiger";

console.log(animals);
// [ 'Cat', <1 empty item>, 'Lion', 'Tiger' ]

let nestedArr = [
  "Wind",
  "Air",
  ["Water", "Dirt", "Wood", "Brick"], // index 2
  ["Glass", "Crystal", ["Alumunium", "Rust"]], // index 3
];
console.log(nestedArr[0]);
console.log(nestedArr[1]);
console.log(nestedArr[2][1]);
console.log(nestedArr[3][2][1]);
