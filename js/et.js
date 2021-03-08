$(document).ready(function () { 
  // showreel 다음 사라지기
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
});
