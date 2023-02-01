// alertStringという変数を宣言
let alertString;

// addStringという関数を呼び出し、変数へ格納
// alertStringという変数に引数"WebCamp"のaddString関数を代入
alertString = addString("WebCamp");

//変数の中身をアラートで表示する
alert(alertString);

// 作成した関数
function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}