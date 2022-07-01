"use strict";
/*
Instructions
You will create an API that processes a CSV file (users.csv) and turns it into a JSON file upon visiting the endpoint /convert. Additionally, any phone number that is missing should be filled in with the string, "missing data".

Use the csvtojson node module as a library to do the conversion.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = require("fs");
var csvtojson_1 = __importDefault(require("csvtojson"));
var app = (0, express_1.default)();
var port = 3000;
var inputFile = "./users.csv";
var outputFile = "users.json";
// define a route handler for the default home page
app.get("/convert", function (res, req) {
    req.send('converting in process');
    (0, csvtojson_1.default)()
        .fromFile(inputFile)
        .then(function (data) {
        var newData = data.map(function (item) {
            var first = item.first_name;
            var last = item.last_name;
            var phone = item.phone;
            if (item.phone === "") {
                phone = "missing data";
            }
            return { first: first, last: last, phone: phone };
        });
        fs_1.promises.writeFile(outputFile, JSON.stringify(newData));
    });
});
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
