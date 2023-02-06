$(function() {
  // ブルー
  $("#bgBtn1").click(function() {
    // cssで背景色をブルーに変更
    $("#bgBox").css("background-color","skyblue");
  });
  // ピンク
  $("#bgBtn2").click(function() {
    // cssで背景色をピンクに変更
    $("#bgBox").css("background-color","pink");
  });
  // リセット
  $("#bgBtn3").click(function() {
    // cssで背景色をデフォルトに変更
    $("#bgBox").css("background-color","#CCC");
  });
});