import { CsvReader } from './CsvReader';
import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';

// create an obj that satisfy the DataReader interface
// create and instance of MatchReader and pass in something a/c DataReader interface

const csvFileReader = new CsvReader("football.csv");

const matchReader = new MatchReader(csvFileReader);

matchReader.load();


let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`)