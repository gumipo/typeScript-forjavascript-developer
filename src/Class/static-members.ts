export {};

class Me {
  //静的メンバーに変更 static
  static isProgramer: boolean = true;
  static firstName: string = "Hideto";
  static lastName: string = "Hayakawa";

  static work() {
    return `Hey guys This is ${this.firstName} Are you interested in Typescript? Lets dive into Typescript`;
  }
}

// let me = new Me()

//静的メンバーへのアクセス
console.log(Me.isProgramer);
console.log(Me.work());
