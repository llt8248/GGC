

$(function(){
    var p = 0;
    $("#imageShow li").css({"z-index":1,"opacity":0});

    $("#imageShow li").eq(0).css({"z-index":100,"opacity":1});
    $("#scroll_dot span").click(
        function(){
            play($("#scroll_dot span").index(this));
    });

    function play(p){
        $("#scroll_dot span").eq(p).addClass("sel").siblings().removeClass("sel");
        $("#imageShow li").eq(p).animate({'opacity':1},800).css({'z-index':100}).siblings().animate({'opacity':0},800).css({'z-index':1});
    }
    
    function autoplay(){
        p = (p>$("#scroll_dot span").length-2)?0:(p+1);
        play(p);
    }
    var auto = setInterval(function(){ autoplay(p)},6000);
    $("#imageShow").mouseover(function(){clearInterval(auto);})
    $("#imageShow").mouseout (function(){auto = setInterval(function(){ autoplay(p)},6000);})

})

