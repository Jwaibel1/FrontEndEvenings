class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get newAge() {
    return this.age;
  }

  set newAge(value) {
    if (value < 0) {
      console.log("You can't be a negative age!");
    } else {
      this.age = value;
    }
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
const Karen = new Person("Karen", 30);
Jim.greet();
Bill.greet();
Karen.greet();

Person.info();
