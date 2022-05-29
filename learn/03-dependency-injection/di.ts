class DICar {
  engine: Engine;
  tire: Tire;

  constructor(engine: Engine, tire: Tire) {
    this.engine = engine;
    this.tire = tire;
  }
}

const engine = new Engine();
const newEngine = new NewEngine('Running faster.');
const tire = new Tire();
const car = new Car();
const diCar = new DICar(engine, tire);
const diCar2 = new DICar(newEngine, tire); // No need to change any code. More flexable

// const diCar3 = Injector.resolve<DICar>(DICar);