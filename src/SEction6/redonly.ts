export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "neko",
  age: 56,
};

me.age++;

console.log(me); //

type PersonalDAtaType = Readonly<Profile>;

const friend: PersonalDAtaType = {
  name: "Shigeru",
  age: 40,
};

//Readonlyのため値を変更できない
// friend.age++;

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};

type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
