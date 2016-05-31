// Global parameters
window.params = {
  widthFull: 750,
  maxRowHeight: 0,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};

jQuery(document).ready(function($) {

/*---------------------------
                              ADD CLASS ON SCROLL
---------------------------*/
$(function() { 
  var $document = $(document),
      $element = $('.menu-button'),
      $element2 = $('nav'),
      className = 'hasScrolled';

  $document.scroll(function() {
    $element.toggleClass(className, $document.scrollTop() >= 1);
    $element2.toggleClass(className, $document.scrollTop() >= 100);
  });
});


/*---------------------------
                              MENU TOGGLE
---------------------------*/
$('.menu-button').on('click', function(event) {
  event.preventDefault();
  $(this).toggleClass('active');
  $(this).siblings('header').toggleClass('active');
  if ($('header').hasClass('active')) {
      $('body, html').css('overflow', 'hidden');
    } else {
      $('body, html').css('overflow', 'visible');
    }
});


  var $sections = $('section');
  $(window).scroll(function(){
    var currentScroll = $(this).scrollTop();
    var $currentSection;
    var windowHalf = $(window).height() / 1.5;
    
    $sections.each(function(){
      var divPosition = $(this).offset().top - windowHalf;
      
      if( divPosition - 1 < currentScroll ){
        $currentSection = $(this);
      }
    var id = $currentSection.attr('id');
      $('a').removeClass('active');
      $("[href=#"+id+"]").addClass('active');
    })
  });

    $('nav a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
        return false;
    });


/*---------------------------------------------------*/
  $('.magnific').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',
    modal: false,

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  $('.trust__slider').slick({
    dots: false,
    arrows: true,
    lazyLoad: 'ondemand',
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });




});// end of file
