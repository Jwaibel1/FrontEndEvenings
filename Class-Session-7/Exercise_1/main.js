class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(fn) {
    this.observers.push(fn);
  }

  removeObserver(fn) {
    this.observers = this.observers.filter((obs) => obs !== fn);
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update());
  }
}

class Observer {
  update() {
    console.log("Observer updated!");
  }
}

const subject = new Subject();

const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();
const observer4 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);
subject.addObserver(observer4);
subject.removeObserver(observer3);
subject.removeObserver(observer1);

subject.notifyObservers();
