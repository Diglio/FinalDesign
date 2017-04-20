
$(document).ready(function(){
//Window Scroll Function
  $(window).scroll(function(){
    //Rotates Logo based on scrollTop()
    var wScroll = Math.round($(window).scrollTop() / 5);
    $('.logo').css({transform: 'rotate(' + wScroll + 'deg)' + 'scale(2)'});
    if(wScroll > 100){
      $('.visible').addClass('animateNav');
      $('.visible').removeClass('visible');
    }else{
      $('.animateNav').addClass('visible');
      $('.animateNav').removeClass('animateNav');
    }
  });
  $('.logo').click(function(event){
    event.preventDefault();
    $('.animateNav').toggleClass('visible');
  });
});
