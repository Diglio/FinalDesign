
$(document).ready(function(){
//Window Scroll Function
  $(window).scroll(function(){
    //Rotates Logo based on scrollTop()
    var wScroll = Math.round($(window).scrollTop() / 5);
    $('.logo').css({transform: 'rotate(' + wScroll + 'deg)' + 'scale(2)'});
    if(wScroll > 300){
      $('.visible').addClass('animateNav');
      $('.visible').removeClass('visible');
    }else{
      $('.animateNav').addClass('visible');
      $('.animateNav').removeClass('animateNav');
    }
  });
  //SmoothScrolling Naviation
  $('.logo').click(function(event){
    event.preventDefault();
    $('.animateNav').toggleClass('visible');
    $('.visible').toggleClass('animateNav');
  });
  $('li a[href="#about"]').click(function(event){
    event.preventDefault();
    $('li a').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
      scrollTop: $('.about').offset().top - 110
    }, 1000);
  });
  $('li a[href="#technologies"]').click(function(event){
    event.preventDefault();
    $('li a').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
      scrollTop: $('.technologies').offset().top - 110
    }, 1000);
  });
  $('li a[href="#portfolio"]').click(function(event){
    event.preventDefault();
    $('li a').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
      scrollTop: $('.portfolio').offset().top - 110
    }, 1000);
  });
  $('li a[href="#production"]').click(function(event){
    event.preventDefault();
    $('li a').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
      scrollTop: $('.production').offset().top - 110
    }, 1000);
  });
  $('li a[href="#setup"]').click(function(event){
    event.preventDefault();
    $('li a').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
      scrollTop: $('.setup').offset().top - 110
    }, 1000);
  });
  $('li a[href="#contact"]').click(function(event){
    event.preventDefault();
    $('li a').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
      scrollTop: $('.contact').offset().top - 110
    }, 1000);
  });
});
