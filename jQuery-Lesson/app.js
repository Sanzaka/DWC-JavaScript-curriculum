//スライドダウン後にスライドアップする処理
//
// $(function(){
//   $(".box1").slideDown(10000,function(){
//     $(".box1").css({
//       "background-color":"#0000FF",
//       "width":"200px",
//       "height":"100px"
//     }).slideUp();
//   })
// })

//マウスオーバー時に適用する処理
$(function(){
  $(".box1").on("click",function(){
    $(".box1").addClass("box1-ext");
  });
  $(".box1").mouseout(function(){
    $(".box1").removeClass("box1-ext");
  });
});