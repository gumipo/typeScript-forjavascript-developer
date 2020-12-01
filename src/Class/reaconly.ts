export {};

class VisaCard {
  constructor(public readonly owner: string) {
    this.owner = owner;
  }
}

let myVisacard = new VisaCard("ねこ");
console.log(myVisacard.owner);
//readonlyのため書き換えできない
// myVisacard.owner = "ぐみぽ";
