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
    // console.log(txt, type);

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
      console.log('txt3');
      $('#main_content').css('visibility', 'visible').animate({
        left: 0}, 600, function () {
        $('#intro').fadeOut(1000);  
      });
    }
    
    // #follow에 숫자 출력
    if (txt < 3) $('#intro #follow').text((txt + 1) + ' / ' + 3);

    txt++;
  };

  // 상세 서브페이지에서 프로젝트 리스트로 되돌아가기 처리
  // location.hash => url에 해시값(#에 명시된 값)을 반환
  /* 작업순서
  1) detail.html 상단에 .back_btn>a를 생성하고 href="#main_content" 라고 적어서 주소표시줄에 전달한다
  2) a를 클릭하여 index.html로 이동할때 index.html#main_content 라고 츨력된다
  3) if (location.hash === '#main_content') 를 만족하는 것은 프로젝트 상세페이지에서 인덱스로 되돌아오는 조건식을 만족하면
  4) .darkbg를 #intro 바로 뒤에 동적생성하여 fadeOut()으로 사라져 자연스럽게 보여지도록 하고 사라지고 나면 #main_content가 왼쪽에서 들어온다
  5) 들어오고 나면 동적생성된 .darkbg를 삭제하고, 주소표시줄 해시도 제거해 준다

  css.css에 .darkbg 스타일도 추가해 줍니다.
  모든 페이지에 공통으로 사용되는 css 문서 없이 공통 사항인데도 여러개의 스타일시트에 반복되어 있네요.
  바람직하지 않은 코딩이예요.
  */
  if (location.hash === '#main_content'){
    $('#intro').hide().after('<div class="darkbg"></div>').next().stop().fadeOut(1000, function () {
      $('#main_content').css('visibility', 'visible').animate({left: 0}, 600);
      $(this).remove();
      location.hash = '';
    });

  }

  $('.preview video').eq(0).addClass('view');
  $('#projects > ul > li > h4 > a').on({
    'mouseenter focus': function () {
      var idx = $(this).closest('li').index();
      $('.preview video').eq(idx).addClass('view').siblings().removeClass('view');
    },
    'click': function (e) {
      e.preventDefault();
      var tghref = $(this).attr('href');
      if ($(this).hasClass('notxt')) {
        $('#main_content .mask div').hide();
      }
      $('#main_content .mask').stop().fadeIn(500, function () {
        location.href = tghref;
      });
    }
  });
  
  $('#main_content > .click a').on('click' ,function () {
    $('.contact_mask').fadeIn(600, function () {
      $(this).stop().fadeOut(600).next().css('visibility', 'visible').stop().animate({left: 0}, 600);
    }).prev().css({visibility: 'hidden', left: '-100%'}); 
    
    return false;
  });

  $('#contact_menu > .click a').on('click' ,function () {
    $('#main_content').css({visibility: 'visible', left: '-100%'}).stop().animate({left: 0}, 600, function () {
      $('#contact_menu').css('visibility', 'hidden');
    });
    
    return false;
  });
  

  
});
