const createPlayer = (name, hp, mp, items) => {
  return {
    name,
    hp,
    mp,
    items,
  };
};

const hanSolo = createPlayer("Han Solo", 80, 20, ["Blaster"]);
hanSolo.hp = 100;
console.log(hanSolo);

const darthVader = createPlayer("Darth Vader", 200, 100, ["Light Saber"]);
console.log(darthVader);

// this is better but still has issues
