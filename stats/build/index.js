"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvReader_1 = require("./CsvReader");
var MatchReader_1 = require("./MatchReader");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var WinAnalysis_1 = require("./analyzers/WinAnalysis");
var summary_1 = require("./summary");
// create an obj that satisfy the DataReader interface
// create and instance of MatchReader and pass in something a/c DataReader interface
var csvFileReader = new CsvReader_1.CsvReader("football.csv");
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new summary_1.Summary(new WinAnalysis_1.WinAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
