export {};

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2)); //3

//返り値を教えてくれる
type ReturnTypeFromAdd = ReturnType<typeof add>;
