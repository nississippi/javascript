// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });

//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });

//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });

//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });

// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });

// $(function(){
//   $('button').on('click', function(){
//     $('ul').children().css('color','red');
//   });
// });

$(function(){
  $('button').on('click', function() {
    $('button').css('background-color','red');
    if ('ul').children().css('color','red'){
      ('ul').children().css('color','black')
    }else{
      ('ul').children().css('color','red');
    };
  });
});
