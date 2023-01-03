$(function() {
  $('#back a').on('click',function(event){
    // id="back"内のaタグがクリックされたときに、処理が行われる
    $('body, html').animate({
      // animate() は、アニメーション効果を設定するjQueryの関数
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});