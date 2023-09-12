function global() {
  console.log("Hello!");
}

global();

const person = {
  firstName: "Joshua",
  lastName: "Waibel",
  age: 26,
  fullName: function () {
    return console.log(this.firstName + " " + this.lastName);
  },
};

person.fullName();

const animal = {
  name: "Jake",
  species: "Dog",
  breed: "Jack Russell",
  pet: () => {
    return console.log(
      `this is my ${animal.species}, his name is ${animal.name} and he is a ${animal.breed}`
      // this. instead of animal. returns undefined for each
    );
  },
};

animal.pet();
