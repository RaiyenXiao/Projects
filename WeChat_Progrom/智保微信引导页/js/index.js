//全屏切换
!function(){
    var iwidth = window.innerWidth,
        iheight = window.innerHeight;
    var initSwiper = function(){
        $('#main .swiper-container').height(iheight);
        $('.swiper-slide').height($('body').height());
        var mySwiper = new Swiper ('.swiper-container', {
            effect : 'slide',
            speed:500,
            direction: 'vertical',
            preventClicks : false,
            observer:true,
    		observeParents:true,
            onInit : function(swiper){
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd : function(swiper){
            	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
                var cur = swiper.activeIndex;
				anim(cur);	//开始本页动画
            },
            onTouchEnd: function (swiper) {                  
                swiperAnimate(swiper);
            }
        })
        //页面跳转
		$("#two").click(function(){
			mySwiper.slideTo(1, 500, true);
		})
		$("#three").click(function(){
			mySwiper.slideTo(2, 1000, true);
		})
		$("#five").click(function(){
			mySwiper.slideTo(3, 1000, true);
		})
		$("#six").click(function(){
			mySwiper.slideTo(4, 1000, true);
		})
    };
	initSwiper();
}(window);
//打开二维码
$('.side').click(function(){
	//$('.window-panel').show();
	TweenMax.fromTo('.window-panel',.5,{alpha:0,display:"block"},{alpha:1,ease:Power2.easeInOut})
	TweenMax.fromTo(".wcode-panel", .5,
	{scaleX:0.5,scaleY:0.5,alpha:0},
	{scaleX:1,scaleY:1,alpha:1,ease:Bounce.easeOut,delay:.5},1);
})
$('.close').click(function(){
	TweenMax.to('.wcode-panel',.5,{scaleX:.5,scaleY:.5,alpha:0,ease:Power4.easeIn});
	TweenMax.to('.window-panel',.5,{alpha:0,display:"none",ease:Power2.easeInOut,delay:.5});
})

// 第1屏动画
var tl1 = new TimelineMax({paused:true});
var onoff = true;

tl1.repeat(-1);//无限循环动画
tl1.repeatDelay(2)
tl1.to(".screen-two .finger", .5, {
	right: -15,
	bottom: -64
}, 2);
tl1.to(".screen-two .finger", .5, {
	bottom: -60
}, 3);
tl1.to(".btnshow", .5, {
	alpha: 1
}, 3)
tl1.to(".screen-two .finger", .5, {
	right: -140,
	bottom: -300
}, 4)
tl1.to(".btnshow", .5, {
	alpha:0
}, 4);
tl1.to(".screen2-panel-bg", .5, {
	alpha: 1
}, 4.2);
tl1.fromTo(".screen2-panel", .5,
	{scaleX:0.5,scaleY:0.5,alpha:0},
	{scaleX:1,scaleY:1,alpha:1,ease:Bounce.easeOut},4.5);
	
//第2屏动画
var tl2 = new TimelineMax({paused:true});
var onoff2 = true;
tl2.repeat(-1);//无限循环动画
tl2.repeatDelay(2)
tl2.from(".bottomBorder",.3,{width:0},2)
	.from(".sideBorder",.3,{height:0})
	.from(".topBorder",.3,{width:0})
tl2.fromTo(".screen-three .tip-one",.5,{top: -40,
	left: 30,alpha: 0},{top: -36,
	left: 30,alpha: 1},3)
tl2.to(".bottomBorder",.3,{width:0},4)
	.to(".sideBorder",.3,{height:0})
	.to(".topBorder",.3,{width:0})
	.to(".screen-three .tip-one",.5,{alpha: 0})
tl2.to(".screen-three .finger", .5, {
	right: 30,
	bottom: -74
}, 5);
tl2.to(".screen-three .finger", .5, {
	bottom: -64
}, 6);
tl2.to(".screen-three .contain", .5, {
	alpha: 1
}, 6);
tl2.to(".screen-three .finger", .5, {
	right: -180,
	bottom:-300
}, 7);
tl2.to(".screen-three .contain", .5, {
	alpha: 0
},7);
tl2.to(".screen-three .page3", .5, {
	alpha: 1
},7);
tl2.to(".screen-three .blueborder", .5, {
	alpha: 1
},7.5);
tl2.fromTo(".screen-three .tip-two",.5,{top: -45,
	left: 5,alpha: 0},{top: -40,
	left: 0,alpha: 1},8)
tl2.to(".screen-three .blueborder", .5, {
	alpha: 0
},10);
tl2.to(".screen-three .page4", .5, {
	alpha: 1
},11);
tl2.to(".screen-three .blueborder2", .5, {
	alpha: 1
},11.5);
tl2.fromTo(".screen-three .tip-three",.5,{top: -45,
	left: 45,alpha: 0},{top: -40,
	left: 40,alpha: 1},12)

//第三屏动画
var tl3 = new TimelineMax({paused:true});
var onoff3 = true;
tl3.repeat(-1);//无限循环动画
tl3.repeatDelay(2)
tl3.from(".bottomBorder2",.3,{width:0},2)
	.from(".sideBorder2",.3,{height:0})
	.from(".topBorder2",.3,{width:0})
tl3.fromTo(".screen-four .tip-four",.5,{top: 70,
	left: 40,alpha: 0},{top: 60,
	left: 40,alpha: 1},3)
tl3.to(".bottomBorder2",.3,{width:0},4)
	.to(".sideBorder2",.3,{height:0})
	.to(".topBorder2",.3,{width:0})
	.to(".screen-four .tip-four",.5,{alpha: 0})
tl3.to(".screen-four .contain2", .5, {
	alpha: 1
},6);
tl3.to(".page5", .5, {
	alpha: 1
},7);
tl3.to(".screen-four .blueborder3", .5, {
	alpha: 1
},7.5);
tl3.fromTo(".screen-four .tip-five",.5,{top: -45,
	left: 4,alpha: 0},{top: -40,
	left: 4,alpha: 1},8)
tl3.to(".page6", .5, {
	alpha: 1
},10);
tl3.to(".screen-four .blueborder4", .5, {
	alpha: 1
},11);
tl3.fromTo(".screen-four .tip-six",.5,{top: -45,
	left: 50,alpha: 0},{top: -40,
	left: 50,alpha: 1},12)

//第四屏动画
var tl4 = new TimelineMax({paused:true});
var onoff4 = true;
tl4.repeat(-1);//无限循环动画
tl4.repeatDelay(2)
tl4.to(".screen-five .blueborder", .5, {
	alpha: 1
},2);
tl4.fromTo(".screen-five .tip-one",.5,{top: -45,
	left: 60,alpha: 0},{top: -40,
	left: 60,alpha: 1},3)
tl4.to(".screen-five .blueborder", .5, {alpha: 0},5);
tl4.to(".screen-five .tip-one",.5,{alpha: 0})
tl4.to(".page7", .5, {alpha: 1},6);
tl4.to(".screen-five .blueborder2", .5, {
	alpha: 1
},7);
tl4.fromTo(".screen-five .tip-two",.5,{top: -45,
	left: 30,alpha: 0},{top: -40,
	left: 30,alpha: 1},8)
tl4.to(".screen-five .blueborder2", .5, {alpha: 0},10);
tl4.to(".screen-five .tip-two",.5,{alpha: 0})
tl4.to(".page8", .5, {alpha: 1},11);
tl4.to(".screen-five .blueborder3", .5, {
	alpha: 1
},12);
tl4.fromTo(".screen-five .tip-three",.5,{top: -45,
	left: 60,alpha: 0},{top: -40,
	left: 60,alpha: 1},13)
//第五屏动画	
var tl5 = new TimelineMax({paused:true});
var onoff5 = true;
tl5.repeat(-1);//无限循环动画
tl5.repeatDelay(2)
tl5.to(".screen-seven .blueborder4", .5, {
	alpha: 1
},2);
tl5.fromTo(".screen-seven .tip-four",.5,{top: -45,
	left: 40,alpha: 0},{top: -40,
	left: 40,alpha: 1},3)
tl5.to(".screen-seven .blueborder4", .5, {alpha: 0},5);
tl5.to(".screen-seven .tip-four",.5,{alpha: 0})
tl5.to(".page10", .5, {alpha: 1},6);
tl5.to(".screen-seven .blueborder5", .5, {
	alpha: 1
},7);
tl5.fromTo(".screen-seven .tip-five",.5,{top: -45,
	left: 40,alpha: 0},{top: -40,
	left: 40,alpha: 1},8)
tl5.to(".screen-seven .blueborder5", .5, {alpha: 0},10);
tl5.to(".screen-seven .tip-five",.5,{alpha: 0})
tl5.to(".page11", .5, {alpha: 1},11);
tl5.to(".screen-seven .blueborder6", .5, {
	alpha: 1
},12);
tl5.fromTo(".screen-seven .tip-six",.5,{top: -45,
	left: 40,alpha: 0},{top: -40,
	left: 40,alpha: 1},13)
/*播放场景动画*/
function anim(n){
	switch(n)
	{
		case 0:
		break;
		
		case 1:
		if(onoff){
			tl1.play();
			onoff = false;
		}else{
			tl1.restart();
		}
		  break;
		  
		case 2:
		if(onoff2){
			tl2.play();
			onoff2 = false;
		}else{
			tl2.restart();
		}
		  break;
		  
		 case 3:
		 /*if(onoff3){
			tl3.play();
			onoff3 = false;
		}else{
			tl3.restart();
		}*/
		if(onoff4){
			tl4.play();
			onoff4 = false;
		}else{
			tl4.restart();
		}
		  break;
		case 4:
		 /*if(onoff4){
			tl4.play();
			onoff4 = false;
		}else{
			tl4.restart();
		}*/
		if(onoff5){
			tl5.play();
			onoff5 = false;
		}else{
			tl5.restart();
		}
		break;
		/*case 5:
		 if(onoff5){
			tl5.play();
			onoff5 = false;
		}else{
			tl5.restart();
		}*/
	}
}

