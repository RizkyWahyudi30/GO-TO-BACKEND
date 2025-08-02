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

// let typeObj = {};
// console.log(typeof typeObj);

// let testObj = {
//   typeNum: 123,
//   typeStr: "is string",
//   typeBool: true,
// };
// console.log(testObj.typeStr);
// console.log(testObj.typeNum);

// let user1 = {
//   name: "Calvin",
//   age: 28,
//   status: true,
// };

// let user2 = {
//   name: "Melvin",
//   age: 32,
//   status: true,
// };

// console.log(user1.name);
// user1.age = 22;
// console.log(user1.age);

// delete user2.status;
// console.log(user2);

// let days = [
//   "Monday",
//   "Sunday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// console.log(days[0]);
// console.log(days[2]);
// console.log(days[1]);
// console.log(days[3]);

// days[2] = "Tues";
// console.log(days[2]);

// let animals = [];
// animals[0] = "Cat";
// animals[2] = "Lion";
// animals[3] = "Tiger";

// console.log(animals);
// // [ 'Cat', <1 empty item>, 'Lion', 'Tiger' ]

// let nestedArr = [
//   "Wind",
//   "Air",
//   ["Water", "Dirt", "Wood", "Brick"], // index 2
//   ["Glass", "Crystal", ["Alumunium", "Rust"]], // index 3
// ];
// console.log(nestedArr[0]);
// console.log(nestedArr[1]);
// console.log(nestedArr[2][1]);
// console.log(nestedArr[3][2][1]);

let user = [
  {
    name: "Calvin",
    surname: "Hart",
    age: 45,
    email: "CalvinHart@gmail.com",
  },
  {
    name: "Mateus",
    surname: "Pinto",
    age: 34,
    email: "MateusPinto@gmail.com",
  },
];
console.log(user[0].name);
console.log(user[1].email);

user[2] = {
  name: "Irene",
  surname: "Purnell",
  age: 23,
  email: "IrenePurnell@gmail.com",
};
console.log(user[2].surname);

let days = [
  "Monday",
  "Sunday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = "Wednesday";
console.log(typeof days);
console.log(typeof day);

console.log(days instanceof Array);
console.log(day instanceof Array);

let names = ["Rizky", "Zaki", "Heni", "Wahyu"];

console.log(names.length);
console.log(names[2].length);

names[5] = "Krisna";
console.log(names);

console.log(names.indexOf("Zaki"));
console.log(names.indexOf("Rena"));

names.push("Erina");
console.log(names);
console.log(names.length);

names.unshift("Claris");
console.log(names);

names.pop();
names.shift();
console.log(names);

console.log(names.reverse());
// [ 'Krisna', <1 empty item>, 'Wahyu', 'Heni', 'Zaki', 'Rizky' ]

console.log(names.slice(1, 4));
console.log(names.slice(3));
console.log(names.slice(4, 2)); // kosong
