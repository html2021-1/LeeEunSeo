$(document).ready(function () { 
  // show 다음 사라지기
  $('#bg2').stop().fadeOut(1000).addClass('load');

  $(window).on('scroll' , function () {
      var scrollY = $(this).scrollTop() + $(this).height();
      console.log(scrollY);

      $('.cnt').each(function(idx) {
        console.log($(this).offset().top);
        if (scrollY > $(this).offset().top) {
          $(this).addClass('fade');
        } else {
          $(this).removeClass('fade');
        }
      });
  });

  $(window).trigger('scroll');

  var _slideWrap = $('#content_box #slide_box .slide_wrap'); 
  var oneSize = _slideWrap.children().outerWidth(true); //가로 크기
  var total = _slideWrap.children().length; //슬라이드 개수

  $('#content_box').on('scroll' , function () {
    
  });


  /* 배너 페이지 banner page */

  
  
});






