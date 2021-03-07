$(document).ready(function () {
  $('#intro').on('mousemove', function (e) {
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    gsap.to('#follow', {
      left: mouseX - 32,
      top: mouseY - 32,
      duration: 0.3
    });
  });
  var txt = 1;
  $('.intro_txt > div .title').attr('tabIndex', 0);
  $('#intro').on('click', txtEffect);
  $('.intro_txt > div .title').on('keydown', function (e) {
    var key = e.keyCode;
    //console.log(key); //enter 12, space bar 32
    if (key === 13 || key === 32) txtEffect('keyboard');
  });

  function txtEffect(type) {
    console.log(txt, type);

    if (txt === 1) {
      $('#intro .intro_txt > div').eq(0).fadeOut(600).next().delay(600).fadeIn(600, function () {
        if (type === 'keyboard') $(this).children().focus();
      });
    } else if (txt === 2) {
      $('#intro .intro_txt > div').eq(1).fadeOut(600).next().delay(600).fadeIn(600, function () {
        if (type === 'keyboard') $(this).children().focus();
        $('body').css({cursor: 'default',color: '#fff'});
      });
    } else if (txt === 3) {
      $('.main_content').animate({
        left: 0}, 600, function () {
        $('#intro').fadeOut(1000);  
      });
    }
    
    // #follow에 숫자 출력
    if (txt < 3) $('#intro #follow').text((txt + 1) + ' / ' + 3);

    txt++;

  };

  $('.preview video').eq(0).addClass('view');
  $('#projects > ul > li > h4 > a').on('mouseenter focus' , function () {
    var idx = $(this).closest('li').index();
    $('.preview video').eq(idx).addClass('view').siblings().removeClass('view');
  });

  
  $('.main_content > .click').on('click' ,function () {
    $('.main_menu').animate({
      left: 0}, 600, function () {
     $('.main_content').fadeOut(1000);
      
    }); 
  });
  

  
});
