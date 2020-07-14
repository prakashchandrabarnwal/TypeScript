let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothing: undefined = undefined;
let nothingMuch: null = null;

//built in obj
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green"];

let numbers: number[] = [1, 2, 3, 4];

let truths: boolean[] = [true, false];

// Classes
class Car {

}

let car: Car = new Car();

// object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// when to use annotation
// 1> fn that return 'any' Type

const json = '{"x":10,"y":20}';
const co_or = JSON.parse(json);

//2> declare then intialize

let words = ["red", "green"];
let foundWord: boolean;// = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") foundWord = true;
}

//3> type cannot be inferred correctly

let values = [-10, -1, 12];
let valueAboveZero: boolean | number = false;

for (let i = 0; i < values.length; i++) {
  if (numbers[i] > 0) {
    valueAboveZero = numbers[i];
  }
}


