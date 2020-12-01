export {};

let fooCompatuble: any;
let barCompatible: string = "Typescript";

//any型のためundifinde
console.log(typeof fooCompatuble);

fooCompatuble = barCompatible;

//型が変わる
console.log(typeof fooCompatuble);

let fooInCompatible: string;
let barInCompatible: number = 1;

//stringにnumberが代入できない
// fooInCompatible = barInCompatible;

let fooString: string;
let baeString: string = "string";

fooString = baeString;

let fooStringLiteral: "fooStringLitelal" = "fooStringLitelal";
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}
let me: Animal;

me = new Person(26, "ぐみぽ");
