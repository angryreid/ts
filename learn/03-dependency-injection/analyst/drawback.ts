class Engine {
  constructor() {}
}

class Tire {
  constructor() {}
}

class NewEngine extends Engine {
  enhancement: string;

  constructor(enhancement: string) {
    super();
    this.enhancement = enhancement;
  }
}

class Car {
  engine: Engine;
  tire: Tire;

  constructor() {
    // this.engine = new Engine();
    this.engine = new NewEngine("Running faster!");// If the engine enhanced, the car will be broken.
    this.tire = new Tire();
  }
}