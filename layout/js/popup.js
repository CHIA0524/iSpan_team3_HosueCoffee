// 彈跳視窗 js

$(".popupOpen").click(function() {
  let href = $(this).attr("href")
  $(href).fadeIn(250);
  $(".popupBox").removeClass("popupTransformOut").addClass("popupTransformIn").css('display','block');
  event.preventDefault();
});
$(".popupClose").click(function() {
  closeWindow();
});
function closeWindow(){
  $(".popupWrap").fadeOut(200);
  $(".popupBox").removeClass("popupTransformIn").addClass("popupTransformOut");
  event.preventDefault();
}