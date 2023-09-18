class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
    console.log("Added a New Observer");
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
    console.log("Removed an Observer");
  }

  notifyObservers(data) {
    this.observers.forEach((observer) => observer.update());
    console.log("Observers Updated");
  }

  async fetchAndNotify() {
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";

    try {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const res = await data.json();
      console.log("POSTS:", res);
    } catch (err) {
      console.log("error", err);
    }
  }
}

class Observer {
  update(data) {
    console.log("Observer Updated");
  }
}

const subject = new Subject();

const observer = new Observer();
const observer2 = new Observer();

subject.addObserver(observer);
subject.addObserver(observer2);
subject.removeObserver(observer);
subject.notifyObservers();

subject.fetchAndNotify();
