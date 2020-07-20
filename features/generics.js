var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        this.collection = collection;
    }
    ArrayOfNumbers.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumbers;
}());
var ArrayOfStrings = /** @class */ (function () {
    function ArrayOfStrings(collection) {
        this.collection = collection;
    }
    ArrayOfStrings.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfStrings;
}());
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
var a = new ArrayOfAnything(["test"]);
// generics with functions
function printStrings(arr) {
    arr.forEach(function (char) {
        console.log(char);
    });
}
printStrings(["h", "a", "s", "h"]);
function printNumbers(arr) {
    arr.forEach(function (element) {
        console.log(element);
    });
}
printNumbers([1, 2]);
function printAnything(arr) {
    arr.forEach(function (ele) {
        console.log(ele);
    });
}
printAnything(["a"]);
printAnything([7, 8]);
// Genrics constraints
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log("I am a car");
    };
    return Car;
}());
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.print = function () {
        console.log("I am a house");
    };
    return House;
}());
function printHouseOrCar(arr) {
    arr.forEach(function (ele) {
        ele.print();
    });
}
printHouseOrCar([new House(), new Car()]);
//printHouseOrCar<Car>([new Car()]);
