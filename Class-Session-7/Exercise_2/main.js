const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const { name, age } = person;

console.log(name);
console.log(age);

const fruits = ["apple", "banana", "cherry", "date"];

let [a, b, c, d] = fruits;

console.log(b);
console.log(d);

let {
  address: { city, country },
} = person;

console.log(city);
console.log(country);
