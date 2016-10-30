import { addition } from './calculator.service';

let param1 = Number(process.argv[2]);
let param2 = Number(process.argv[3]);

console.log(addition(param1,param2));