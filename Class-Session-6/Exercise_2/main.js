class Person {
  name = "Jim";
  age = 20;

  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const Jim = new Person();
const Bill = new Person();
Jim.greet();
Bill.greet();
