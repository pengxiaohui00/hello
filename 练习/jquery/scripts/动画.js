
$(function(){
    var page =1;
    var i= 4;
    $("span.next").click(function(){
        var $parent = $(this).parents("div.v_show");
        var $v_show = $parent.find("div.v_show");
        var $v_content = $parent.find("div.v_content");
        var v_width = $v_content.width();
        var len = $v_show.find("li").length;
        var page_count = Math.ceil(len/i);
        if( !$v_show.is(":animated") ){
            if( page == page_count){
                $v_show.animate({ left : '0px'},"show");
                page = 1;
            }else{
                $v_show.animate({left:'-='+v_width},"show");
                page++;
            }
            $parent.find("span").eq((page-1)).addClass("current").siblings().removeClass("current");
        }
    });
});