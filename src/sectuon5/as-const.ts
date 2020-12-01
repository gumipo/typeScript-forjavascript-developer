export {};

let name = "Hideto";

name = "ねこ"; //stringなら書き換えできる

let nickname = "hideto" as const; //hiseto型になる
// nickname = "ami"; //再代入できない

let profile = {
  name: "hideto",
  hight: 175,
} as const; //as const で再代入できない readonlyになる

// profile.name = "猫ちゃん"; //error
// profile.hight = 234;   //error
