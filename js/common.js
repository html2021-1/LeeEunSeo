$(document).ready(function (){
	// $('#bg2').stop().fadeOut(1000).addClass('load');
	
	var $header = $('#header');
	var $gnb=$("#gnb > ul");
	$gnb.find(" li ul").hide();	

	
	$gnb.find("> li > a").on("mouseenter focus",function  () {
		$gnb.find("> li.on").removeClass("on").children("ul").hide();
		
		$(this).parent().has('ul').closest($header).addClass('active');	
		$(this).next().show().parent().addClass("on");
	});

	$gnb.on("mouseleave",function  () {
		$header.removeClass('active');
		$gnb.find("> li.on").removeClass("on").children("ul").hide();
	});

	$("#gnb a:first , #gnb a:last").on("blur",function  () {
		setTimeout(function  () {
			if ( !$("#gnb a").is(":focus") ) {
				$gnb.mouseleave();
			}1
		}, 10);
	});

	$(window).on("scroll",function  () {
		$(".top_btn").on("click",function  () {
			$("html, body").stop().animate({scrollTop:0});
			return false;
		});
	});
});