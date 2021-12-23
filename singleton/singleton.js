let instance;

class Singleton {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  getInstance() {
    return instance;
  }
}

module.exports = Object.freeze(new Singleton());
