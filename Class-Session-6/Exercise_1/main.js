function global() {
  console.log("Hello!");
}

global();

const person = {
  firstName: "Joshua",
  lastName: "Waibel",
  age: 26,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());

const animal = {
  name: "Jake",
  species: "Dog",
  breed: "Jack Russell",
  pet: () => {
    return `this is my ${animal.species}, his name is ${animal.name} and he is a ${animal.breed}`;
  },
};

console.log(animal.pet());
