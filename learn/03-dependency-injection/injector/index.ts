// Injector.ts
import 'reflect-metadata';

import { Type } from './type';

export const Injector = new class {
  // resolving instances
  resolve<T>(target: Type<any>): T {
    // tokens are required dependencies, while injections are resolved tokens from the Injector
    let tokens = Reflect.getMetadata('design:paramtypes', target) || [],
        injections = tokens.map((token: Type<any>) => Injector.resolve<any>(token));
    
    return new target(...injections);
  }
};

export const Injectable = (): ClassDecorator => {
  return target => {
    const metadata = Reflect.getMetadata('esign:paramtypes', target);
    console.log(metadata)
  }
}