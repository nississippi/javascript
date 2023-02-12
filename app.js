const form = document.getElementById("form");
const input = document.getElementById("input")

form.addEventListener("submit",function (event){
  // デフォルトのイベントが発生しなくなる
  event.preventDefault();
  console.log(input.value);
})