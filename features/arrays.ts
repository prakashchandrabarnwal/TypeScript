const carsMakers: string[] = ['ford', 'toyota'];
const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],
  ['corolla']
];

const cars = carsByMake[0].pop();

const carComp = carsMakers.map(
  (car: string): string => {
    return car
  }
);

const impDates: (Date | string)[] = [new Date(), "2030-10-10"];
impDates.push("2020-7-11");
impDates.push(new Date());