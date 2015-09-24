$(function(){

  var backgroundColors = ['1e88e5','ff4081','d81b60','ff4081'];

  let $body = $('body').first();

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    // roundLengths:true,
    // parallax: true,
    // hashnav: true,
        speed: 500
  });

  $body.css({'background-color':'#'+backgroundColors[0]});

  // after scroll end
  mySwiper.on('slideChangeEnd', (swiper) => {

    // change background color
    let color = backgroundColors[swiper.activeIndex];

    setTimeout(()=>{
      $body.css({'background':'#'+color});
    },100);

    // 添加动画
    let slide =  $('#swiper-wrapper .swiper-slide')[swiper.activeIndex];
    $(slide).find('> *').each((index,item) => {
      let $item = $(item);
      let className = $item.attr('class');
      $item.attr('class', className.replace('animate','animated'));
    });

  });

})
