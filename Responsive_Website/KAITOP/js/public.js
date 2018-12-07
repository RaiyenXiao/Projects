/* ======================================================================
 * @description 江苏开拓js文件
 * @author Raiyen
 * @time 20160920
 * ======================================================================
 */
$(function(){
	var _timera;
	//PC端导航
	function navM(){
		if ($(window).width()>=980) {
			$(".head-menu-nav .submenu").on({
				"mouseenter":function(){
					if($(this).next().is(":hidden")&&!$(".head-menu-nav .sub-dropdown").is(":animated")){
						$(this).next().stop(true).slideDown(100).siblings("ul").stop(true).slideUp(100);
						clearTimeout(_timera);
					}
				},
				"mouseleave":function(){
					_timera = setTimeout('$(".head-menu-nav .sub-dropdown").slideUp(100)',10);
					$(this).next().hover(function(){
						clearTimeout(_timera)
					},function(){
						$(this).attr("style","").stop(true).slideUp(100);
					}	);				
				}
			});
		} else if($(window).width()<980){
			$(".head-menu-nav .submenu a").attr("href","javascript:void(0);")
			$(".head-menu-nav .submenu").on({
				"mousedown":function(){
					if($(this).next().is(":hidden")){
						$(this).next().show().siblings("ul").hide();
					}else{
						$(this).next().hide();
					}
				}
			});	
		}
				
	}
	navM();
	//手机端
	$('.nav-open').mousedown(function() {
		$('.head-menu-nav').slideToggle('fast');
	});
	//固定导航
	$(window).scroll(function(){
	    var scrollHeight = $(window).scrollTop();
	    var topHeight = $(".topbox").height();
		if(scrollHeight > topHeight){
			$("#header").addClass("fixed");
		}else{
			$("#header").removeClass("fixed");
		}
	});
	//内页侧导航
	$("#slidebtn").on("click",function(){
		$(".nav-list").slideToggle();
	})
	//显示登录窗口
	$(".topbox .producter>a").click(function(){
		$("#login").toggle();
		$("#login .user input").focus();
		
	});
	//显示客服
	$('.QQtalk a').click(function(){
		$("#divFloatToolsView").toggle();
	});
})

//收藏本站
var title = document.title
function AddFavorite(title, url) {
 	try {
 		window.external.addFavorite(url, title);

 	} catch(e) {
 		try {
 			window.sidebar.addPanel(title, url, "");
 		} catch(e) {
 			alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
 		}
 	}
 }
