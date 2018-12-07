/* ======================================================================
 * @description 万家安康js文件
 * @author Raiyen
 * @time 20161205
 * ======================================================================
 */
$(function(){
	//手机端导航下拉
	$('.nav-open').mousedown(function() {
		$('.head-menu-nav').slideToggle('fast');
	});
})
//初始化计数
var options = {
	  useEasing : true,
	  useGrouping : true,
	  separator : ',',
	  decimal : '.',
	  prefix : '',
	  suffix : ''
	};
var safety = new CountUp("safety-number1", 0, 1000, 0, 2.5, options);
var safety2 = new CountUp("safety-number2", 0, 2000, 0, 2.5, options);
var safety3 = new CountUp("safety-number3", 0, 2500, 0, 2.5, options);
var safety4 = new CountUp("safety-number4", 0, 3520, 0, 2.5, options);
var safety5 = new CountUp("safety-number5", 0, 16000, 0, 2.5, options);
var safety6 = new CountUp("safety-number6", 0, 127100, 0, 2.5, options);
var safety7 = new CountUp("safety-number7", 0, 2500, 0, 2.5, options);
var safety8 = new CountUp("safety-number8", 0, 50, 0, 2.5, options);

function tabSys($tabSys_tab,$tabSys_content,activeIndex,action){//通用型标签切换程序
	if(!activeIndex>=0)	activeIndex=0;
	$tabSys_tab.children().eq(activeIndex).attr("active","");
	$tabSys_content.children().css("display","none");
	$tabSys_content.children().eq(activeIndex).fadeIn(100);
	$tabSys_tab.children().on('click',this,function(){
		var index= $(this).index();
		switch(index){
			case 0:
				safety.start();
			    safety2.start();
				break;
			case 1:
				safety3.start();
			    safety4.start();
			    safety5.start();
				break;
			case 2:
				safety6.start();
			    safety7.start();
			    safety8.start();
				break;
			default:break;
		}
		if($(this).attr("active")==undefined){
			$tabSys_content.children().eq($tabSys_tab.find("[active]").removeAttr("active").index()).fadeOut(100,function(){
				$tabSys_content.children().eq($tabSys_tab.find("[active]").index()).fadeIn(100);
			});
			$(this).attr("active","");
		}
	});
	
}
//全屏切换
!function(){
    var iwight = window.innerWidth,
        iheight = window.innerHeight;
    var oldIndex=0;//s3 屏幕 3个标签切换发现标记
    var initSwiper = function(){
        $('#main').height(iheight);
        $('body,html').height(iheight);
        $('body,html').css({'overflow-y':'hidden','overflow-x':'visible'});
        $('.home-screen-2 .container,.home-screen-6 .container').height(iheight);
        $('.home-screen-3 .screenBg,.home-screen-4 .container,.footerbox').height(iheight-90);
        var mySwiper = new Swiper ('.swiper-container', {
            pagination: '.swiper-pagination',
            effect : 'slide',
            speed:1000,
            mousewheelControl : true,
            paginationClickable: true,
            direction: 'vertical',
            noSwiping : true,
            noSwipingClass : 'stop-swiping',
            keyboardControl : true,
            onInit : function(swiper){
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画

            },
            onSlideChangeStart : function(swiper){
            	if (swiper.activeIndex==3) {
            		safety.start();
            		safety2.start();
            	} 
               /* if(swiper.activeIndex==5){
                    mySwiper.disableMousewheelControl();//禁止swiper鼠标滑轮控制
                    mySwiper.disableKeyboardControl();//禁止swiper键盘控制
                }else {
                    mySwiper.enableMousewheelControl();//开启鼠标滑轮
                    mySwiper.enableKeyboardControl(); //开启键盘控制
                }*/
            },
            onSlideChangeEnd : function(swiper){
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            }
        })
    };
	initSwiper();
    
}(window);
