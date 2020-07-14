const add = (a: number, b: number): number => {
  return a - b;
}

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
  // return undefined; return null;
}

const throwError = (message: string): never => {
  throw new Error(message);
}

const throwError1 = (message: string): void => {
  if (!message) throw new Error(message);
}

const throwError2 = (message: string): string => {
  if (!message) throw new Error(message);
  return message
}

const todayWeather = {
  date: new Date(),
  weather: "sunny"
}

// const logWeather = (forecast: { date: Date, weather: string }) => {
//   const { date, weather } = forecast;
//   console.log(date);
//   console.log(weather);
// }


const logWeather = ({ date, weather }: { date: Date, weather: string }) => {
  console.log(date);
  console.log(weather);
}