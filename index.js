$(function(){

  var backgroundColors = ['1e88e5','c51162','d81b60','ff4081','ec407a','1565c0'];

  let $body = $('body').first();

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    roundLengths:true,
    lazyLoading : true,
lazyLoadingInPrevNext : true,
        speed: 500,
       onInit: swiper => {
          // 初始化动画效果
          // 页面加载时候隐藏所有动画元素
          swiperAnimateCache(swiper); //隐藏动画元素
          swiperAnimate(swiper); //初始化完成开始动画

          let bgColor = $(swiper.slides[swiper.activeIndex]).attr('data-background-color');
          $body.css({"background-color":bgColor});
        }
  });

  // after scroll end
  mySwiper.on('slideChangeEnd', (swiper) => {
    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画

    // Change background-color
    let $currentSlide = $(swiper.slides[swiper.activeIndex]);
    let bgColor = $currentSlide.attr('data-background-color');
    $body.css({"background-color":bgColor});

    // let autoplayDelay = $currentSlide.attr('data-autoplay-delay');
    //
    // if(autoplayDelay != undefined)
    // {
    //   setTimeout(()=>{
    //     swiper.slideNext();
    //   }, autoplayDelay);
    // }

  });

})
