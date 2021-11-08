$(document).ready(function(){
    $('.slider').slick({
      slidesToShow:4,
      slidesToScroll:1,
      accessibility: true,
      arrows:true,
      dots:false,
      draggable:true,
      infinte:true,
      prevArrow: $('.properties-previous'),
      nextArrow: $('.properties-next'),
    });
  });

  $(document).ready(function(){
    $('.review-slider').slick({
      slidesToShow:1,
      slidesToScroll:1,
      accessibility: true,
      arrows:true,
      dots:false,
      draggable:true,
      infinte:true,
      prevArrow: $('.button-left'),
      nextArrow: $('.button-right'),
    });

  });