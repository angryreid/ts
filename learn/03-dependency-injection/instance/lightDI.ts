import { Injectable, Injector } from '../injector';

class Bar {
  a = 1;
}

@Injectable()
class Foo {
  constructor(private bar: Bar) {
    console.log(this.bar.a);
  }

  foo() {
    console.log('foo: ' + this.bar.a);
  }
}

const foo = Injector.resolve<Foo>(Foo);
foo.foo();