export {};

//型の名前を変えるstring →　Mohiretsu
type Mojiretsu = string;

//一緒
const fooString: string = "Hello";
const fooMojiretsu: Mojiretsu = "Hello";

const example1 = {
  name: "ham",
  age: 43,
};
type Profile = {
  name: string;
  age: number;
};
const example2: Profile = {
  name: "ham",
  age: 43,
};

//example1と連動して型の設定ができる
type Profile2 = typeof example1;
