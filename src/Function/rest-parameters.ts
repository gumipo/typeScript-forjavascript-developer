export {};

//スプレット構文で引数を与えられる

const reducer = (accumulator: number, currentValue: number) => {
  return accumulator + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5)); //15
