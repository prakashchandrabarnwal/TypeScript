import { CsvReader } from './CsvReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { Summary } from './summary';
import { HtmlReport } from './reportTargets/HtmlReport';

// create an obj that satisfy the DataReader interface
// create and instance of MatchReader and pass in something a/c DataReader interface

// const csvFileReader = new CsvReader("football.csv");

// const matchReader = new MatchReader(csvFileReader);

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winAnalysisWithHtmlReport("Man United");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);


