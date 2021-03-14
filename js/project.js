$(document).ready(function () {
    
        $('#bg1').delay(1000).stop().fadeOut(1000);

        
        var mySwiper = new Swiper('.slide', {
                // Optional parameters
                direction: 'horizontal', //vertical
                loop: true, //처음과 마지막에서 반복 롤링, 기본값 false

                // 하단에 위치한 페이지네이션: 동그라미, 숫자
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets', //기본값 bullets, fraction
                    clickable: true,
                },

                // 접근성 추가 : accessibility
                a11y: {
                    prevSlideMessage: '이전 슬라이드 보기',
                    nextSlideMessage: '다음 슬라이드 보기',
                    firstSlideMessage: '첫번째 슬라이드', //첫번째 슬라이드에 있을때 이전 버튼에 대한 보조기기에 대한 메시지
                    lastSlideMessage: '마지막 슬라이드',
                },

                // 자동실행
                autoplay: {
                    delay: 5000, //1초 1000
                },
            });

            //★ 자동실행, 일시정지 컨트롤 버튼 추가
            $('.slide .play_pause').on('click', function () {
                if ($(this).hasClass('swiper-button-play')) {
                    mySwiper.autoplay.start();
                } else {
                    mySwiper.autoplay.stop();
                }
                $(this).hide().siblings('button').show();
            });
        
 });