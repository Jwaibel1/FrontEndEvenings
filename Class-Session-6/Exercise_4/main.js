class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static info() {
    return console.log("This is a Person class");
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const Jim = new Person("Jim", 20);
const Bill = new Person("Bill", 15);
Jim.greet();
Bill.greet();

Person.info();
// static methods can't be called on instances
