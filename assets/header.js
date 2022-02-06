var position = $(window).scrollTop();
    if (position > 30) {
      $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header').css('opacity', '1');
    }
    else {
      $('.header--transparent:not(.header--sticky):not(.header--stuck) .nav--desktop .header-menu').addClass('active');
    }
    // Detect Window Position
    var distance = $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header').offset().top,
        $window_loc = $(window);

    // Store HTML
    var searchHTML = $('.header-search__wrapper').html();
    var accountHTML = $('.header-account-link').html();

    $('.header--transparent .nav--desktop').append('<div class="header-search__wrapper">' + searchHTML + '</div>' + '<div class="header-account-link">' + accountHTML + '</div>');
    // Scroll Functions

    $(window).scroll(function(){

        // Detect Scroll Up or Down
        var scroll = $(window).scrollTop();
      
         if ($(window).width() > 1100){
           if (scroll <= 133) {
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header').css('opacity','0'); 
           }
           else {
             $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header').css('opacity','1'); 
             
           }
        if(scroll > position) {

          // Down
          $('.header--transparent:not(.header--sticky):not(.header--stuck) .nav--desktop .header-menu').addClass('active');
          $('.header--transparent:not(.header--sticky):not(.header--stuck) .header-logo img').css('transform','scale(0.8)');

          if ( $window_loc.scrollTop() >= distance ) {
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header').css('top','0');
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header .nav--desktop .mobile-wrapper').css('background-color','#fff');
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header .nav--desktop .header-menu').css('background-color','#fff');
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .icon').css('fill','#0a0909');
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .header-logo img').css('filter','invert(0.9)');
            $('body .header--transparent:not(.header--sticky):not(.header--stuck) .nav--desktop .main-menu>li>a').css('color','#0a0909');
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header .header-account-link, .header--transparent:not(.header--sticky):not(.header--stuck) .site-header .header-search__wrapper, .header--transparent:not(.header--sticky):not(.header--stuck) .site-header .header-cart__wrapper_p').attr('style','opacity: 1;');
          } else {
            // Top of Window
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header').css('top','0');
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header .nav--desktop .mobile-wrapper').css('background-color','#fff');
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header .nav--desktop .header-menu').css('background-color','#fff');
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .icon').css('fill','#fff');
            //$('.header-logo img').css('filter','invert(0)');
            $('body .header--transparent:not(.header--sticky):not(.header--stuck) .nav--desktop .main-menu>li>a').css('color','#000');
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header .header-account-link, .header--transparent:not(.header--sticky):not(.header--stuck) .site-header .header-search__wrapper, .header--transparent:not(.header--sticky):not(.header--stuck) .site-header .header-cart__wrapper_p').attr('style','opacity: 1;');
          }

        } else {

          // Up
          $('.header--transparent:not(.header--sticky):not(.header--stuck) .nav--desktop .header-menu').removeClass('active');
          $('.header--transparent:not(.header--sticky):not(.header--stuck) .header-logo img').css('transform','scale(1)');

          if (scroll < 40) 
			$('.header--transparent:not(.header--sticky):not(.header--stuck) .nav--desktop .header-menu').addClass('active');          
          if ( $window_loc.scrollTop() >= distance ) {
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header').css('top','0');
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header .nav--desktop .mobile-wrapper').css('background-color','#fff');
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header .nav--desktop .header-menu').css('background-color','#fff');
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .icon').css('fill','#0a0909');
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .header-logo img').css('filter','invert(0.9)');
            $('body .header--transparent:not(.header--sticky):not(.header--stuck) .nav--desktop .main-menu>li>a').css('color','#0a0909');
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header .header-account-link, .header--transparent:not(.header--sticky):not(.header--stuck) .site-header .header-search__wrapper, .header--transparent:not(.header--sticky):not(.header--stuck) .site-header .header-cart__wrapper_p').attr('style','opacity: 1;');

          } else {
            // Top of Window
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header').css('top','0');
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header .nav--desktop .mobile-wrapper').css('background-color','#fff');
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header .nav--desktop .header-menu').css('background-color','#fff');
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .icon').css('fill','#fff');
            //$('.header-logo img').css('filter','invert(0)');
            $('body .header--transparent:not(.header--sticky):not(.header--stuck) .nav--desktop .main-menu>li>a').css('color','#000');
            $('.header--transparent:not(.header--sticky):not(.header--stuck) .site-header .header-account-link, .header--transparent:not(.header--sticky):not(.header--stuck) .site-header .header-search__wrapper, .header--transparent:not(.header--sticky):not(.header--stuck) .site-header .header-cart__wrapper_p').attr('style','opacity: 1;');
          }

        }
           
        position = scroll;

         }

    });