export interface Person<T> {
  getType(personType: T): T;
  say(): void;
}