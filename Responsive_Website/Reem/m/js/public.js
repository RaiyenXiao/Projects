$(function(){
	//PC端导航
	function navM(){
		if ($(window).width()>=980) {
			$(".nav li").mouseenter(function(){
				$(this).find("p").fadeIn(200);
				$(this).find(".subItem").fadeIn();
			});
			$(".nav li").mouseleave(function(){
				$(this).find("p").fadeOut();
				$(this).find(".subItem").fadeOut();
			});
		} else if($(window).width()<980){
			$(".nav>li>a>i").on({
				"mousedown":function(){
					if($(this).parent("a").next(".subItem").is(":hidden")){
						$(".subItem").hide();
						$(this).parent("a").next(".subItem").show();
					}else{
						$(this).parent("a").next(".subItem").hide();
					}
				}
			});
			$(".nav>li>a").on("click",">i",function(e){
				e.stopPropagation();
				return false;
			})
		}
		//手机端
		$('.nav-open').mousedown(function() {
			$('.nav').slideToggle('fast');
		});		
	}
	navM();
	//分类
	if ($(window).width()>=980) {		
		$(".tips .others").mouseenter(function(){
			$(this).find(".subItem").slideDown(200);
		});
		$(".tips .others").mouseleave(function(){
			$(this).find(".subItem").slideUp(200);
		});
	}else if($(window).width()<980){
		$(".tips .others").mousedown(function(){
			$(this).find(".subItem").slideToggle(100);
		});
	}
})