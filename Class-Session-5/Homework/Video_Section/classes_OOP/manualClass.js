class Player {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }

  speak(phrase) {
    console.log(`${this.name} says: ${phrase}`);
  }
}

const hanSolo = new Player("Han Solo", 100, 10, ["Blaster"]);
hanSolo.speak("Never tell me the odds!");
console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));

const Yoda = new Player("Yoda", 50, 200, ["Stick", "Light Saber"]);
Yoda.speak("Do, or do not, there is no try.");
console.log(Yoda);
console.log(Object.getOwnPropertyNames(Yoda));
console.log(Object.getOwnPropertyNames(Yoda.__proto__));

function AnotherPlayer(name, hp, mp, items) {
  this.name = name;
  this.hp = hp;
  this.mp = mp;
  this.items = items;
}

AnotherPlayer.prototype.speak = function (phrase) {
  console.log(`${this.name} says: ${phrase}`);
};

const darthVader = new AnotherPlayer("Darth Vader", 200, 100, ["Light Saber"]);
console.log(darthVader);
darthVader.speak(
  "When I last left you i was but a learner, now I am the master."
);
console.log(Object.getOwnPropertyNames(darthVader));
console.log(Object.getOwnPropertyNames(darthVader.__proto__));

// Correct way to do OOP in JS
