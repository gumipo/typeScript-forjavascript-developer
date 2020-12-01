export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

//指定したものの型を継承
type SimpleProfile = Pick<DetailedProfile, "name" | "weight">;

//weight以外の型を継承
type SmallProfile = Omit<DetailedProfile, "weight">;
