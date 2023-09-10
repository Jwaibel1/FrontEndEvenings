const player = {
  name: "?",
  hp: 100,
  mp: 0,
  items: [],
};

const hanSolo = player;
hanSolo.name = "Han Solo";
hanSolo.hp = 80;
hanSolo.mp = 20;
hanSolo.items = ["Blaster"];

const darthVader = player;

console.log(hanSolo);
console.log(darthVader);

// this is bad because both hanSolo and darthVader are just changing the player object and not creating there own state
