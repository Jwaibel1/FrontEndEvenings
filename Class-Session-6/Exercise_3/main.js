class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const Jim = new Person("Jim", 20);
const Bill = new Person("Bill", 15);
Jim.greet();
Bill.greet();
