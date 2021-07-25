//thisを用いた指定方法
$(function(){
  $(".box1").on("click",function(){
    $(this).slideUp();
  });
});


//通常の指定方法
//
// $(function(){
//   $(".bg1").on("click",function(){
//     $(".bg1").slideUp();
//   });

//   $(".bg2").on("click",function(){
//     $(".bg2").slideUp();
//   });

//   $(".bg3").on("click",function(){
//     $(".bg3").slideUp();
//   });

//   $(".bg4").on("click",function(){
//     $(".bg4").slideUp();
//   });
// });