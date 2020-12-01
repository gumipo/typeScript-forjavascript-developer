export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

//新しいtypeを作る　ある型からとりだして一個ずつ
type Optional<T> = { [P in keyof T]?: T[P] | null };

type OptionalProfile = Optional<Profile>;
