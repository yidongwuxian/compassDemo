 var focusPlay = function() {
    var indexScroll = $('#index_scroll');
//    console.log(indexScroll)
    indexScroll.mouseenter(function(){
      $(this).find('button').css('opacity', 1 );
    });
    indexScroll.mouseleave(function(){
      $(this).find('button').css('opacity', 0 );
    });
    indexScroll.slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        autoplay: true,
        autoplaySpeed: 5000
    });
  }
 $(function(){
	 focusPlay();
 });
