var nav2On = 0;
function navbarAppears(){
	if(nav2On === 0){
    	$("#navbar-appears").css('transform','rotate(360deg)');
    	$("#navbar-appears").css('opacity','1');
    	$(".point-itself").css('background','white');
    	$(".nav-category").css('filter','opacity(1)');	
		nav2On = 1;
	}else{
    	$("#navbar-appears").css('transform','rotate(180deg)');
    	$("#navbar-appears").css('opacity','0');
    	$(".point-itself").css('background','transparent');
    	$(".nav-category").css('filter','opacity(0)');
		nav2On = 0;
	}
}

var aTop = $(window).height();

var navOn = 0;
function rollNavbar(){
	if(navOn === 0){
		$("#main").css('margin-left','50vw');
		$("#navbar-scroll").css('left','calc(50vw - 80px)');
		$('#navbar-appears2').css('transform', 'rotate(180deg)');
		$('.nav-category2').css('filter', 'opacity(1)');
		navOn = 1;
	}else{
		$("#main").css('margin-left','0vw');
		$("#navbar-scroll").css('left','-80px');
		$('#navbar-appears2').css('transform', 'rotate(0deg)');
		$('.nav-category2').css('filter', 'opacity(0)');
		navOn = 0;
		if($(this).scrollTop()<=aTop){
			$("#navbar-scroll").css('opacity','0');
		}
	}
}

function seeMoreHouses1(){
	$('.hidden').css('height','auto');
	$('.hidden').css('opacity','1');
	$('#see-more-houses1').css('display','none');
}


var navMob = 0;
function mobileNav(){
	if(navMob === 0){
		$("#mobile-subnav").css("transition-delay","400ms");
		$("#close-mobile-nav").css("transition-delay","400ms");
		$("#navbar-mobile-appears").css("transition-delay","0ms");
		$("#navbar-mobile-appears").css("width","100vw");
		$("#mobile-subnav").css("opacity","1");
		$("#close-mobile-nav").css("opacity","1");
		navMob = 1;
	}else{
		$("#mobile-subnav").css("transition-delay","0s");
		$("#close-mobile-nav").css("transition-delay","0s");
		$("#navbar-mobile-appears").css("transition-delay","400ms");
		$("#navbar-mobile-appears").css("width","0vw");
		$("#mobile-subnav").css("opacity","0");
		$("#close-mobile-nav").css("opacity","0");
		navMob = 0;
	}
}