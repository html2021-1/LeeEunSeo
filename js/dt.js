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

});
