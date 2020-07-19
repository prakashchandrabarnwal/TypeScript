import { CsvReader } from './CsvReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { Summary } from './summary';

// create an obj that satisfy the DataReader interface
// create and instance of MatchReader and pass in something a/c DataReader interface

const csvFileReader = new CsvReader("football.csv");

const matchReader = new MatchReader(csvFileReader);

matchReader.load();

const summary = new Summary(
  new WinAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);


