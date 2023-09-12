class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      console.log("You can't be a negative age!");
    } else {
      this._age = value;
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

Jim.greet();
Bill.greet();

const Karen = new Person("Karen", -30);

Person.info();
