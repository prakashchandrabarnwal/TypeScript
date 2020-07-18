"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvReader_1 = require("./CsvReader");
var MatchResult_1 = require("./MatchResult");
var MatchReader_1 = require("./MatchReader");
// create an obj that satisfy the DataReader interface
// create and instance of MatchReader and pass in something a/c DataReader interface
var csvFileReader = new CsvReader_1.CsvReader("football.csv");
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
