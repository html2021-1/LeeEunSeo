$(document).ready(function () { 
    // 100% 출력후 사라지기
    var num = 0;
    var timer = setInterval(function () {
      if (num < 100) num++;
      else {
        clearInterval(timer);
        $('#bg1').delay(1000).stop().fadeOut(1000);
      }
      $('#bg1 .count .num').text(num);
    }, 15);

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
