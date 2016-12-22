Site = {}

$(document).ready( function(){
  // root size
  Site.root_size = $(window).width() / 76.8;
  $('html').css({ 'font-size': Site.root_size });
  $(window).resize(changeRootFontSize);

  setTimeout(function(){
    $('#cover').addClass('show');
  }, 600)

  $(document).on('scroll', Site.backgroundChange);
})

Site.backgroundChange = function(){
  Site.scroll = $(document).scrollTop() + $(window).height();
  Site.section1 = $('#section1').offset().top + ($(window).height() * 0.6);
  Site.section2 = $('#section2').offset().top + ($(window).height() * 0.6);
  Site.section3 = $('#section3').offset().top + ($(window).height() * 0.6);
  Site.section4 = $('#section4').offset().top + ($(window).height() * 0.6);
  Site.section5 = $('#section5').offset().top + ($(window).height() * 0.6);
  Site.section6 = $('#section6').offset().top + ($(window).height() * 0.6);

  if (Site.scroll >= Site.section1 && Site.scroll < Site.section2 ){
    if($('#section1_background').hasClass('show')){
      return
    }
    $('.background').removeClass('show');
    $('#section1_background').addClass('show');
  }else if (Site.scroll >= Site.section2 && Site.scroll < Site.section3 ){
    if($('#section2_background').hasClass('show')){
      return
    }
    $('.background').removeClass('show');
    $('#section2_background').addClass('show');
  }else if (Site.scroll >= Site.section3 && Site.scroll < Site.section4 ){
    if($('#section3_background').hasClass('show')){
      return
    }
    $('.background').removeClass('show');
    $('#section3_background').addClass('show');
  }else if (Site.scroll >= Site.section4 && Site.scroll < Site.section5){
    if($('#section4_background').hasClass('show')){
      return
    }
    $('.background').removeClass('show');
    $('#section4_background').addClass('show');
  }else if (Site.scroll >= Site.section5 && Site.scroll < Site.section6){
    if($('#section5_background').hasClass('show')){
      return
    }
    $('.background').removeClass('show');
    $('#section5_background').addClass('show');
  }else if (Site.scroll >= Site.section6){
    if($('#section6_background').hasClass('show')){
      return
    }
    $('.background').removeClass('show');
    $('#section6_background').addClass('show');
  } else{
    $('.background').removeClass('show');
  }
}

changeRootFontSize = function() {
  root_size = $(window).width() / 76.8;
  $('html').css({ 'font-size': root_size });
}