export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile("neko", 36);

//引数のみを再利用 parameters
type Profile = Parameters<typeof debugProfile>;

const Profile: Profile = ["gloroia", 78];

debugProfile(...Profile);
