// varによる再宣言
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// varによる再代入
// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// var str = "webcamp" //グローバルスコープ

// function foo() {
//   console.log(str)
//   var y = "hello" //関数スコープ
//   console.log(y)
// }

var str = "webcamp"

function foo() {
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()

// foo()
// console.log(y)

// letによる再宣言できない
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)

// letによる再代入
// let nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// function foo() {
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//     console.log(y)
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// console.log(i)

// constによる再宣言できない
// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)

// constによる再代入できない
// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)