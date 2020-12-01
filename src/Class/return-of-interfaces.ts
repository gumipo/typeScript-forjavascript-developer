export {};
class Mahoutsukai {}

class Souryo {}

//不数クラスの景勝はできない
class Taro extends Mahoutsukai {}

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

//interfaceは複数指定できる
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("ionazun");
  }
  kougeki(): void {
    console.log("kougeki");
  }
}
//インスタンス化してinterfaceを二つ継承できているか確認
const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
