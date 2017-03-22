/* ======================================================================
 * @description footer商家滚动 js文件
 * @author Raiyen
 * @time 20160318
 * ======================================================================
 */
$(function(){
	var scroll = 98;//移动距离
    var scrollWidth = $(".scrol").width();
	var leftMax = scrollWidth - 940;
	$(".arrow-right").click(function(e){
		var leftoffset = $(".scrol").position().left;
		if(!$(".partners .scrol").is(":animated")){
			if(leftoffset < -leftMax){
				$(".partners .scrol").stop();
			}else{
				$(".partners .scrol").animate({left : "-=" + scroll +"px"},600);
			}
		}
	});
	$(".arrow-left").click(function(){
		var leftoffset = $(".scrol").position().left;
		if(!$(".partners .scrol").is(":animated")){
			if(leftoffset == 0){
				$(".partners .scrol").stop();
			}else{
				$(".partners .scrol").animate({left : "+=" + scroll +"px"},600);
			}
		}
	});
})