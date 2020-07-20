"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var summary_1 = require("./summary");
// create an obj that satisfy the DataReader interface
// create and instance of MatchReader and pass in something a/c DataReader interface
// const csvFileReader = new CsvReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
var summary = summary_1.Summary.winAnalysisWithHtmlReport("Man United");
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
