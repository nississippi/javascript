$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});

// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// 上記の省略形
// $(function(){
//   // jQueryプログラムの内容
// });

// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// $(function(){
//   $('.box1').slideDown();
// });

// $(function(){
//   $('.box1').show();
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// $(function(){
//   $('.box1').slideUp();
// });

// $(function(){
//   $('.box1').hide();
// });