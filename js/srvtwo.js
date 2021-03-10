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

    /* poster 포스터 페이지  */

    var sliderWid = $('.slider').width();
    var current = 1;
    var total = $('.slider ul li').length;
    console.log(sliderWid, total);

    $('.slider ul').css({width:total * sliderWid});
    $('slider ul li').css({width:sliderWid});
    $('.sliderControl button').eq(1).addClass('active');

    $('.sliderControl button, .slider li').on('click' , function () {
      current = $(this).index();

      sliderActive(); 
    });

    function sliderActive(){
      $('.slider ul').stop(true, false).animate({left :sliderWid *current * -1}, 500);

      $('.sliderControl button').eq(current).addClass('active').siblings().removeClass('active');
      $('.slider li').eq(current).css({'transform':'scale(1)'});
		  $('.slider li').eq(current).prevAll().css({'transform':'scale(0.8)'});
		  $('.slider li').eq(current).nextAll().css({'transform':'scale(0.8)'});
      
    }

    var timer = senInterval(playSlider, 3000);

    function playSlider(){
      console.log(current);
      current++;
      if(current>=total) current=0;
      sliderActive();
    }

    $('.slider').on({
      mouseenter: function () {
        clearInterval(timer);
      },
      mouseleave: function () {
        timer = setInterval(playSlider , 3000);
      }
    });
    $('.sliderControl').on({
      mouseenter: function () {
        clearInterval(timer);
      },
      mouseleave: function () {
        timer = setInterval(playSlider , 3000);
      }
    });

});
