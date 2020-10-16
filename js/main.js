function typingEffect(){

    var typed = new Typed(".typing", {
        strings: ['Sam Hendrix', 'A Software Developer', 'A Tech Blogger'],
        smartBackspace: true,
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });

}

function progressBar(){
    var progressElement = document.querySelectorAll('.progress-bar');
    for(var i = 0; i < progressElement.length; i++ ){
        var curval;
        if(i == 0){
            curval = progressElement[i].innerHTML;
            // console.log(curval);
            progressElement[i].style.width = curval;
            progressElement[i].style.transition = 'all 1s';
        }else if(i == 1){
            curval = progressElement[i].innerHTML;
            // console.log(curval);
            progressElement[i].style.width = curval;
            progressElement[i].style.transition = 'all 1.5s';
        }else if(i == 2){
            curval = progressElement[i].innerHTML;
            // console.log(curval);
            progressElement[i].style.width = curval;
            progressElement[i].style.transition = 'all 2s';
        }else if(i == 3){
            curval = progressElement[i].innerHTML;
            // console.log(curval);
            progressElement[i].style.width = curval;
            progressElement[i].style.transition = 'all 2.5s';
        }else if(i == 4){
            curval = progressElement[i].innerHTML;
            // console.log(curval);
            progressElement[i].style.width = curval;
            progressElement[i].style.transition = 'all 3s';
        }
    }
}

function waypointInit(){
    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function(direction) {
        //   console.log('Scrolled to waypoint!');
        progressBar();
        // alert('hi there');
        },
        offset: 200 
    });
}

function hireModalInit(){
    $('#hire-me-btn').on('click', function(){
        $('#hireModal').modal();
    });
}

function testimonialCarouselInit(){
    $('#testimonial-carousel').owlCarousel({
        'items':1,
        'loop':true,
        'autoplay':true,
        'autoplayTimeout': 3000,
        // 'nav':true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                'items':2,
            },
            // breakpoint from 480 up
            480 : {
                'items':3,
            },
            // breakpoint from 768 up
            768 : {
                'items':1,
            }
        }
    });



}

function portfolioGalleryInit(){
    // Filterizer init
    $('.filter-container').filterizr({
        animationDuration: 0.5,
        easing: 'ease-in-out',
        layout: 'sameSize',
    });
    $('.popup').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
          }
      });
}

function preloaderInit(){
    $('.preloader').addClass('complete');
    $('body').removeClass('not-scrollable');
}

function scrollToInnerSection(){
    $('.scrollTo').click(function(e){
        e.preventDefault();
        var getElem = $(this).attr('href');
        var getOffset = $(getElem).offset().top;

        $('html').animate({
            scrollTop:getOffset
        },500);

    });
}

function scrollBackToTop(){
    var winheight = $(window).innerHeight();
    var amountScrolled = winheight;
    $(window).scroll(function(){
        if($(window).scrollTop() > amountScrolled){
            $('a.back-to-top').fadeIn(500);
        }else{
            $('a.back-to-top').fadeOut(500);
        }
    });

    $('a.back-to-top').click(function(e){
        e.preventDefault();
        $('html').animate({
            scrollTop:0
        },500);
    })

}

function stickyHeader(){
    var winheight = $(window).innerHeight();
    var scrollAmount = $(window).scrollTop();
    if(scrollAmount > winheight){
        $('.r-nav').addClass('sticky-header');
    }else{
        $('.r-nav').removeClass('sticky-header');
    }
}

$(document).ready(function(){
    typingEffect();
    // progressBar();
    waypointInit();
    hireModalInit();
    testimonialCarouselInit();
    portfolioGalleryInit();
    scrollToInnerSection();
    scrollBackToTop();
    $(window).on('scroll', function(){
        stickyHeader();
    });
});

$(window).on('load', function(){
    preloaderInit();
});
