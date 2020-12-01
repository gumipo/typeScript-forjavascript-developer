export {};

//オプショナルな引数  ?をつけるとあってもなくても良い引数になる
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.74, 67, true);

// bmi (身長,体重,console.logで出力するかどうか)
//bmi (1.74,67,true)
