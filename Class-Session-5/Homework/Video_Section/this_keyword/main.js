// The this keyword is used to reference the object that is executing the current function

/* function test() {
  console.log(this);
}

test(); */
// -------------------------------------------------------------
const user = {
  firstName: "Joshua",
  lastName: "Waibel",
  fullName: function () {
    console.log(this);
    console.log(this.firstName + " " + this.lastName);
  },
};

user.fullName();
// -------------------------------------------------------------
const me = {
  firstName: "Joshua",
  lastName: "Waibel",
  fullName: () => {
    console.log(this);
    console.log(this.firstName + " " + this.lastName);
  },
};

me.fullName(); // undefined undefined, arrow functions don't have their own this scope and will inherit the this scope of the nearest surrounding regular function, in this case there is no surrounding function

// a way to get arround this would be...
const person = {
  firstName: "Joshua",
  lastName: "Waibel",
  fullName: function () {
    const arrowFunction = () => {
      console.log(this);
      console.log(this.firstName + " " + this.lastName);
    };

    arrowFunction();
  },
};

person.fullName();
// -------------------------------------------------------------------
const otherMe = {
  firstName: "Joshua",
  lastName: "Waibel",
  hobbies: ["programming", "gaming"],
  listHobbies: function () {
    this.hobbies.forEach(function (hobby) {
      console.log(hobby);
    });
  },
};

otherMe.listHobbies();
// -------------------------------------------------------------------
function User(name) {
  this.name = name;
  console.log(this);
}

const devsage = new User("DevSage");
const codingphase = new User("CodingPhase");
