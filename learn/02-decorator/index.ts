import { classEnhancer, factoryEnhancer, propEnhancer } from './decorator/enhancer';
import { Person } from './model/Person';

@classEnhancer
class Worker<T> implements Person<T> {
  // private name: string;
  // private age: number;

  // constructor(name: string, age: number) {
  //   this.name = name;
  //   this.age = age;
  // }

  public say(): void {
    const other = this as any;
    console.log("Name :" + other?.name + " Age :" + other?.age);
  }

  public getType(personType: T): T {
    console.log("My career is " + personType);
    return personType;
  }
}

const worker = new Worker<string>();
worker.getType("worker");
worker.say();

@factoryEnhancer("Emma")
class Student<T> extends Worker<T> {
  // propEnhancer will execute firstly.
  @propEnhancer
  private degree: string = "senior high school student";

  public say(): void {
    super.say();
    console.log("This is a" + this.degree);
  }
}

const student = new Student<string>();
student.getType("student");
student.say();
