import axios from "axios";

export {};

let url: string =
  "http://udemy-utils.herokuapp.com/api/v1/articles?token=token123";

//interfaceでdata型を設定
axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[];
  data = response.data;
  console.log(data);
});

//any型は極力使わない
//interfaceで細かい型指定をする
