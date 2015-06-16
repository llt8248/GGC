

$(function(){
	size();
});

$(window).resize(function(){
	size();
});

function size(){
	var _width = $(window).width(); 
	if(_width < 1600){
		$(".con_zz div").css("width","20%");
	}
	if(_width >= 1600 && _width < 1920){
	   $(".con_zz div").css("width","16.6%");
	}
	if(_width >= 1920){
	   $(".con_zz div").css("width","14.2%");
	}
};