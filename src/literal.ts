export {};

//文字を指定できる
let dayOfTheWeek: "日" | "月" | "火" | "水" | "木" | "金" | "土" = "日";
dayOfTheWeek = "月";

//想定外の文字列にはエラーがでる
// dayOfTheWeek = "32";

let month: 1 | 2 | 3 | 4 | 5 | 6 | 78 | 9 | 10 | 11 | 12 = 1;
month = 12;

let Ture: true | false = true;
