/* class Observable {
  constructor() {
    this.subscribers = [];
  }

  subscribe(fn) {
    this.subscribers.push(fn);
  }

  unsubscribe(fn) {
    this.subscribers = this.subscribers.filter((item) => item !== fn);
  }

  broadcast(data) {
    for (let i = 0; i < this.subscribers.length; i++) {
      this.subscribers[i](data);
    }
  }
}

const observer = new Observable();

const fn = (data) => {
  console.log("Callback was executed with data", data);
};

observer.subscribe(fn);

observer.broadcast("Hello from the observable"); */
// ----------------------------------------------------------------------
function createObservable() {
  return {
    subscribers: [],

    subscribe(fn) {
      this.subscribers.push(fn);
    },

    unsubscribe(fn) {
      this.subscribers = this.subscribers.filter((item) => item !== fn);
    },

    broadcast(data) {
      for (let i = 0; i < this.subscribers.length; i++) {
        this.subscribers[i](data);
      }
    },
  };
}

const observer = createObservable();

function callbackFn(count) {
  document.getElementById("count").innerText = count;
}

const fn = (data) => {
  console.log("Callback was executed with data", data);
};

observer.subscribe(callbackFn);

document.getElementById("inc").addEventListener("click", function () {
  observer.broadcast(
    parseInt(document.getElementById("count").innerText, 10) + 1
  );
});

document.getElementById("dec").addEventListener("click", function () {
  observer.broadcast(
    parseInt(document.getElementById("count").innerText, 10) - 1
  );
});

// observer.subscribe(fn);

// observer.broadcast("Hello from the observable");
