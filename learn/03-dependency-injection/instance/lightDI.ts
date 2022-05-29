import { Injectable, Injector } from '../injector';

class Bar {
  a = 1;
}

class Foo {
  b = 2
}

@Injectable()
class FooBar {
  constructor(private bar: Bar, private foo: Foo) {}

  barStuff() {
    console.log('bar: ' + this.bar.a );
  }

  fooStuff() {
    console.log('foo: ' + this.foo.b);
  }
}

const foobar = Injector.resolve<FooBar>(FooBar);
foobar.fooStuff();
foobar.barStuff();