export {};

//名前空間で囲うことで重複した名前が使用できる
namespace Japanese {
  export namespace Tokyo {
    //export しないとアクセスできない
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    //export しないとアクセスできない
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person("ぐみぽ");
const meOsaka = new Japanese.Osaka.Person("ぐみぽはん");

const michael = new English.Person("mikaeru", "joseph", "jacson");
