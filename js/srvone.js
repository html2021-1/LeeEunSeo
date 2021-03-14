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

  var _itemWrap = $('#verSlider .item_container');
      var current = 0; //현재보여지는 .item의 인덱스 번호
      var total = _itemWrap.children().length; // 전체 item 개수 - 7
      var timerWheel = 0; //mousewheel 이벤트의 실행문 누적을 방지

      var movePos = $(window).height() / 3;

      _itemWrap.children().eq(0).addClass('active');

      $(document).on('keydown', function (e) {
        if (_itemWrap.is(':animated')) return false;

        // keyCode 구하기
        var key = e.keyCode;
        //console.log(key);   

        // 하단방향키 , 상단방향키 제어시 current를 구하기
        if (key === 38 && current > 0) current--;
        else if (key === 40 && current < total - 1) current++;
        // console.log(current);

        sliderActive();
      });

      _itemWrap.on('mousewheel DOMMouseScroll', function (e) {
        clearTimeout(timerWheel);

        timerWheel = setTimeout(function () {
          // 현재 애니메이트(.item_container) 중이면 함수 강제 종료
          if (_itemWrap.is(':animated')) return false;

          // delta값 구하기
          //e.originalEvent.wheelDelta 파이어폭스를 제외한 나머지 브라우저
          //e.originalEvent.detail*-1 파이어폭스 only
          var delta = e.originalEvent.wheelDelta || e.originalEvent.detail * -1;
          //console.log(delta);

          // if : 휠내리기-음수-오른쪽,  else if : 휠올리기-양수-왼쪽 => current
          if (delta < 0 && current < total - 1) current++;
          else if (delta > 0 && current > 0) current--;

          sliderActive();
        }, 200);
      });

      function sliderActive() {
        _itemWrap.stop().animate({
          top: movePos * current * -1 + movePos
        }, 1000); //movePos를 더해주는 이유 : 시작이 상단 ⅓ 아래 위치 
        _itemWrap.children().eq(current).addClass('active').siblings().removeClass('active');

        _itemWrap.prev().find('.photo_wrap').stop().animate({
          top: 360 * current * -1
        }, 1000, 'easeInOutCirc'); //easeInOutCirc, easeInCirc
      }
});







