function tabSys($tabSys_tab,$tabSys_content,activeIndex){//通用tab切换程序
	if(!activeIndex>=0)	activeIndex=0;
	$tabSys_tab.children().eq(activeIndex).addClass("active");
	$tabSys_content.children().css("display","none");
	$tabSys_content.children().eq(activeIndex).fadeIn(100);		
	$tabSys_tab.children().on("click",this,function(){
		if(!$(this).hasClass("active")){
			$tabSys_content.children().eq($tabSys_tab.find(".active").removeClass("active").index()).fadeOut(100,function(){
				$tabSys_content.children().eq($tabSys_tab.find(".active").index()).fadeIn(100);
			});
			$(this).addClass("active");
			}
	});	
}
