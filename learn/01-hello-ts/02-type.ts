// Type of function

function neverStop(): never {
  while (true) {

  }
}

function add({first, second}:{first: number, second: number}): number {
  return first + second;
}

type Person = {
  name: string;
  age: number
}

class Teacher {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const poeple: Person[] = [
  new Teacher('nick', 22),
  {
    name: 'emma',
    age: 20
  }
]