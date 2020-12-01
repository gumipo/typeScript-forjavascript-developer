export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

//Partialを使うと新しくオブジェクトを作らなくてもおk
type PartialType = Partial<Profile>;

//全て必須にできる新しく複製できる
type RequiredType = Required<Profile>;
