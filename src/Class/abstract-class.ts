export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return "roar";
  }
}

//cryを使ってにためエラーがでる
//メソッド使用忘れの帽子
class Tiger extends Animal {
  cry() {
    return "grrr";
  }
}
