$(window).scroll(function() {
  var h = $(window).scrollTop();  //取得捲動的距離(與top的距離)
  if (h > 100) {
    $('.topBTN:hover').css('display', 'block');
  }  //如果距離大於100時 將ui-gotop這個改為 display: block
  else {
    $('.topBTN:hover').css('display', 'none');
  }  //除此之外，也就是小於100時，display: none
})
$('.topBTN:hover').click(function() {
  //點擊ui-gotop之後
  $('html,body').animate({
    scrollTop: 0
  }, 'fast');  //回到0的位置
})
