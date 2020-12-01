export {};

// * owner
//所有者を管理
//初期化時に設定できる
//途中で変更できない
//参照できるもの

//*secretNumber
// 個人番号
// 初期化設定時に設定できる
//途中で変更る
//参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }
  get owner() {
    return this._owner;
  }
  set secretNumber(secretNumber: number) {
    this.secretNumber = secretNumber;
  }
}

let card = new MyNumberCard("ぐみぽ", 123456789);
// card.owner = "Ham";

// card._secretNumber;
