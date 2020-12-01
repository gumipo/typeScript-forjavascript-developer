export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person("taro", 30);

type PersonType = typeof Person;
type Profile = ConstructorParameters<PersonType>;

const Profile: Profile = ["ねこ", 56];
const gumipo = new Person(...Profile);
