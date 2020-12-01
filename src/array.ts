export {};

let numbers: number[] = [1, 2, 3];
let numbers2: Array<number> = [1, 2, 3];

let strings2: Array<string> = ["東京", "大阪", "名古屋"];

let strings: string[] = ["typescript", "javascript", "Coffeescript"];

let nijingenhairetsu: number[][] = [
  [50, 100],
  [150, 300],
];

//どれかに該当する  供用型
let hairetsu: (number | boolean | string)[] = [1, false, "japan"];
