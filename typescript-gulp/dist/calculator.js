"use strict";
var calculator_service_1 = require('./calculator.service');
var param1 = Number(process.argv[2]);
var param2 = Number(process.argv[3]);
console.log(calculator_service_1.addition(param1, param2));
