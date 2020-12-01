export {};

//keyとvalueを自動生成してくれる
enum Months {
  January = 1, //1と設定することで配列番号を1にできる
  Febrary,
  March,
  Aplil,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}
console.log(Months.January);
console.log(Months.Febrary);
console.log(Months.December);

enum COLORS {
  RED = "#FF000",
  WHITE = "#FFFFFF",
  GREEN = "#008000",
  BLUE = "#000FF",
  BLACK = "#00000",
}

let green = COLORS.GREEN;
console.log({ green });

//存在しない

COLORS.YELLOW;

//直前で追加できる
enum COLORS {
  YELLOW = "#FFF00",
  GRAY = "#808080",
}
