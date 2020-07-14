class Vehicle {
  //color: string;
  constructor(public color: string) {
    this.color = color;
  }
  // public drive(): void {
  //   console.log("fast");
  // }
  protected honk(): void {
    console.log("beep beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vroom");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(12, "white");
//car.drive();
car.startDrivingProcess();
//console.log(car.color);