$(function(){

  var backgroundColors = ['03a9f4','ff4081','03a9f4'];

  let $body = $('body').first();

  $("#welcome").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
    $("#welcome").remove()
  })

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    roundLengths:true,
    // parallax: true,
        speed: 300
  });

  $body.css({'background-color':'#'+backgroundColors[0]});

  // after scroll end
  mySwiper.on('transitionEnd', (swiper) => {

    // change background color
    let color = backgroundColors[swiper.activeIndex];
    console.log(color)
    setTimeout(()=>{
      $body.css({'background':'#'+color});
    },100);


  });

})
