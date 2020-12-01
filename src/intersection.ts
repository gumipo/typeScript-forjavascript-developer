export {};

type Pitcher1 = {
  throwwingSpeed: number;
};
type Batter1 = {
  battingAverage: number;
};

const Daimajinsasaki: Pitcher1 = {
  throwwingSpeed: 154,
};
const Ochiaihiromitsu: Batter1 = {
  battingAverage: 0.367,
};

// type TwoWayplayer = {
//   throwwingSpeed: number;
//   battingAverage: Number;
// };

// 型をあわせることもできる
type TwoWayPlayer = Pitcher1 & Batter1;
const Ootanishouhei: TwoWayPlayer = {
  throwwingSpeed: 160,
  battingAverage: 0.286,
};
