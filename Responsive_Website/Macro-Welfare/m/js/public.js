/* ======================================================================
 * @description 万家安康js文件
 * @author Raiyen
 * @time 20161220
 * ======================================================================
 */
(function(){
	var html = document.documentElement;
	var hWidth = html.getBoundingClientRect().width;
	html.style.fontSize = hWidth/15 + "px";
})()
$(function(){
	//手机端导航下拉
	$('.nav-open').mousedown(function() {
		$('.head-menu-nav').slideToggle('fast');
	});
})
function tabSys($tabSys_tab,$tabSys_content,activeIndex,action){//通用型标签切换程序
	if(!activeIndex>=0)	activeIndex=0;
	$tabSys_tab.children().eq(activeIndex).attr("active","");
	$tabSys_content.children().css("display","none");
	$tabSys_content.children().eq(activeIndex).fadeIn(100);
	$tabSys_tab.children().on('click',this,function(){
		if($(this).attr("active")==undefined){
			$tabSys_content.children().eq($tabSys_tab.find("[active]").removeAttr("active").index()).fadeOut(100,function(){
				$tabSys_content.children().eq($tabSys_tab.find("[active]").index()).fadeIn(100);
			});
			$(this).attr("active","");
		}
	});
	
};