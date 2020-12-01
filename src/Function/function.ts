export {};

//引数に型指定  &  返り値に型指定
function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.75, 68));
