export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  //indexシグネチャー
  [index: string]: string | number | boolean;
}

let profile: Profile = {
  name: "ham",
  underTwenty: false,
};

//How to write index signatures
//{[index:typeForIndex]:typeForValue}

profile.name = "ひでと";
profile.age = 26;
profile.nationality = "Japan";
