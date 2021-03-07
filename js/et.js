$(document).ready(function () { 
    $('#bg').stop().fadeOut(1000);
    $('#wrap').addClass('load');

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
