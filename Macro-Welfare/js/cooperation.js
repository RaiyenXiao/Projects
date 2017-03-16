/* ======================================================================
 * @description 万家安康js文件
 * @author Raiyen
 * @time 20161208
 * ======================================================================
 */
$(function(){
	//手机端导航下拉
	$('.nav-open').mousedown(function() {
		$('.head-menu-nav').slideToggle('fast');
	});
})
//全屏切换
!function(){
    var iwight = window.innerWidth,
        iheight = window.innerHeight;
    var oldIndex=0;//s3 屏幕 3个标签切换发现标记
    var initSwiper = function(){
        $('#main').height(iheight);
        $('body,html').height(iheight);
        $('body,html').css({'overflow-y':'hidden','overflow-x':'visible'});
        $('.cooperation-screen-3 .BG').height(iheight);
        $('.cooperation-screen-2 .container,.cooperation-screen-4 .container,.cooperation-screen-5 .container,.footerbox').height(iheight-90);       
        var mySwiper = new Swiper ('.swiper-container', {
            pagination: '.swiper-pagination',
            effect : 'slide',
            speed:1000,
            mousewheelControl : true,
            paginationClickable: true,
            direction: 'vertical',
            keyboardControl : true,
            onInit : function(swiper){
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画

            },
            onSlideChangeEnd : function(swiper){
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            }
        })
    };
	initSwiper();
    
}(window);
