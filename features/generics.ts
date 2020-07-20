class ArrayOfNumbers {

  constructor(public collection: number[]) { }

  get(index: number): number {
    return this.collection[index];
  }

}

class ArrayOfStrings {

  constructor(public collection: string[]) { }

  get(index: string): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T>{
  constructor(public collection: T[]) { }

  get(index: number): T {
    return this.collection[index];
  }
}

const a = new ArrayOfAnything(["test"]);

// generics with functions

function printStrings(arr: string[]): void {
  arr.forEach((char: string) => {
    console.log(char);
  })
}

printStrings(["h", "a", "s", "h"]);

function printNumbers(arr: number[]): void {
  arr.forEach((element: number) => {
    console.log(element);
  });
}

printNumbers([1, 2]);

function printAnything<T>(arr: T[]): void {
  arr.forEach((ele: T) => {
    console.log(ele);
  })
}

printAnything<string>(["a"]);
printAnything<number>([7, 8]);


// Genrics constraints

class Car {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

interface Printable {
  print(): void;
}

function printHouseOrCar<T extends Printable>(arr: T[]) {
  arr.forEach((ele: T) => {
    ele.print();
  })
}

printHouseOrCar<House | Car>([new House(), new Car()]);
printHouseOrCar<Car>([new Car()]);
