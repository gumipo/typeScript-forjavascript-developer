export {};

//引数に入力されなかった時デフォルト引数が使われる
const nextYesrSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYesrSalary(1000));
