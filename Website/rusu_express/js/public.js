function tabSys($tabSys_tab,$tabSys_content,activeIndex,action){//通用型标签切换程序
	if(!activeIndex>=0)	activeIndex=0;
	$tabSys_tab.children().eq(activeIndex).attr("active","");
	$tabSys_content.children().css("display","none");
	$tabSys_content.children().eq(activeIndex).fadeIn(100);
	
	if(action == undefined ){
		action = "mouseenter";
	}
	$tabSys_tab.children().on(action,this,function(){
		if($(this).attr("active")==undefined){
			$tabSys_content.children().eq($tabSys_tab.find("[active]").removeAttr("active").index()).fadeOut(100,function(){
				$tabSys_content.children().eq($tabSys_tab.find("[active]").index()).fadeIn(100);
			});
			$(this).attr("active","");
			}
	});

}
//autoplay
	function tab(){
        //当前高亮显示的页签的索引
        var index=0;
        var timer=null;
        //获取所有的页签和要切换的内容
        var lis=$('.adv-tab li');
        var divs=$('.tabcontent>div');
        //遍历每一个页签且给他们绑定事件
        for (var i=0;i<lis.length;i++){
            lis[i].id=i;
            lis[i].onmouseover=function(){
                clearInterval(timer);
                changeOption(this.id);
            }
            lis[i].onmouseout=function(){
                timer=setInterval(autoPlay,2000);
            }
        }
        if (timer){
            clearInterval(timer);
            timer=null;
        }
        //添加定时器，改变当前高亮的索引
        timer=setInterval(autoPlay,2000);
        function autoPlay(){                      //封装函数方便调用
            index++;
            if (index>=lis.length){
                index=0;
            }
            changeOption(index);
        }
        function changeOption(curIndex){           //封装函数方便调用
            for (var j=0;j<lis.length;j++){
                lis[j].className='';
                divs[j].style.display='none';
            }
            //高亮显示当前页签
            lis[curIndex].className='active';
            divs[curIndex].style.display='block';
            index=curIndex;
        }
    }
function windowShow($target,option){//显示小窗口,option:{start:function,end:function}
	if(option&&option.start)option.start.apply($target);
	var $window=$target.find(".window");
	TweenMax.fromTo($target,.5,{alpha:0,display:"block"},{alpha:1,ease:Power2.easeInOut});//,onStart:function(){}
	TweenMax.fromTo($window,.5,{scaleX:1.5,scaleY:1.5,alpha:0},{scaleX:1,scaleY:1,alpha:1,ease:Power4.easeOut,delay:.5,onStart:function(){
		$window.css("top",function(){
			return ($(window).height()-$window.innerHeight())/2*($target.hasClass("panelView")?.6:1);//panelView窗口使用特殊的比例
		});
	},onComplete:function(){
		//$target.find(".window").removeAttr("style");
		$target.removeAttr("style");
		lock=false;
		$window=null;
	}});
	$target.attr("active","");
	if(option&&option.end)option.end.apply($target);
}

function windowHide($target,action){//隐藏小窗口，带2种表现形式
	switch(action){
		case true:
			TweenMax.to($target.find(".window"),.5,{scaleX:.5,scaleY:.5,alpha:0,ease:Power4.easeIn});
			TweenMax.to($target,.5,{alpha:0,ease:Power2.easeInOut,delay:.5,onComplete:function(){
				$target.find(".window").removeAttr("style");
				$target.removeAttr("active").removeAttr("style");
				lock=false;
			}});
			break;
		case false:
			TweenMax.to($target.find(".window"),.5,{scaleX:1.5,scaleY:1.5,alpha:0,ease:Power4.easeIn});
			TweenMax.to($target,.5,{alpha:0,ease:Power2.easeInOut,delay:.5,onComplete:function(){
				$target.find(".window").removeAttr("style");
				$target.removeAttr("active").removeAttr("style");
				lock=false;
			}});
			break;
	}
}
$(function(){
	$("body").on("click",">[class^='window']",function(){
		windowHide($(this),false);
	});
	$("body>[class^='window']").on("click",".btn-close",function(){
		windowHide($(this).parents("[class^='window']"),false);
	});
	$("body>[class^='window']").on("click",".window",function(e){
			e.stopPropagation();
	});
	$(".backtop").click(function(){
		$('html, body').animate({
	      scrollTop: 0
	    });
	})
});