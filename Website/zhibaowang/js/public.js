//全屏切换
!function(){
    var iwidth = window.innerWidth,
        iheight = window.innerHeight;
    var initSwiper = function(){
        $('#main .swiper-container').height(iheight);
        $('.swiper-slide').height($('body').height());
        var mySwiper = new Swiper ('.swiper-container', {
            pagination: '.swiper-pagination',
            effect : 'slide',
            speed:1000,
            slidesPerView: 'auto',
            mousewheelControl : true,
            paginationClickable: true,
            direction: 'vertical',
            keyboardControl : true,
            autoHeight: true,
            onInit : function(swiper){
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画

            },
            mousewheel: {
			    releaseOnEdges: true,
			},
            onSlideChangeEnd : function(swiper){
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            }
        })
    };
	initSwiper();

}(window);
