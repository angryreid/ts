export function classEnhancer(target: any) {
  target.prototype.name = 'nick';
  target.prototype.age = 22;
}

export function factoryEnhancer(name: string) {
  return function enhancer(target: any) {
    target.prototype.name = name;
    target.prototype.age = 22;
  }
}

export function propEnhancer(target: any, prop: string){
  console.log(target);
  console.log(prop + "----")
}