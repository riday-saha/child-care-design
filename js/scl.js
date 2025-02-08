$(document).ready(function(){
    $('.one').hover(function(){
        $(this).find('.circle').toggleClass('onebackground');
    });



    $('.class-one').mouseenter(function(){
        $(this).find('.cls-one-img').css({
            'transform':'rotate(8deg) scale(1.3)',
            '-o-transform': 'scale(1.5)',
            '-moz-transform': 'scale(1.5)',
            '-moz-transform': 'scale(1.5)'
        });

        $(this).find('.one-detitle').css('color','#F5890D')
    });

    $('.class-one').mouseleave(function(){
        $(this).find('.cls-one-img').css({
            'transform':'',
            '-o-transform': '',
            '-moz-transform': '',
            '-moz-transform': ''
        });

        $(this).find('.one-detitle').css('color','')
    });

    $('.teacher-socials').hide();

    $('.teacher-two').mouseenter(function(){
        $(this).find('.teacher-socials').fadeIn();
    });

    $('.teacher-two').mouseleave(function(){
        $(this).find('.teacher-socials').fadeOut();
    });

    // owl carousel related 
    $('.caro-one').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    var selector = $('.caro-one');

    $('.my-next-button').click(function() {
    selector.trigger('next.owl.carousel');
    });

    $('.my-prev-button').click(function() {
    selector.trigger('prev.owl.carousel');
    });

    $('.blog-one').mouseenter(function(){
        $(this).find('.blg-one-img').css({
            'transform':'rotate(8deg) scale(1.3)',
            '-o-transform': 'scale(1.5)',
            '-moz-transform': 'scale(1.5)',
            '-moz-transform': 'scale(1.5)'
        });

        $(this).find('.blog-details h4').css('color','#F5890D')
    });

    $('.blog-one').mouseleave(function(){
        $('.blog-img').find('.blg-one-img').css({
            'transform':'',
            '-o-transform': '',
            '-moz-transform': '',
            '-moz-transform': ''
        });

        $(this).find('.blog-details h4').css('color','')
    });


    //second carousel
    $('.second-caro').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });


    //back to top button
     // Back to Top scroll
     $(window).scroll(function() {
        var showAfter = 200;
        if ($(this).scrollTop() >= showAfter) { 
            $('.bcttop').css('visibility', 'visible');
            $('.bcttop').css('opacity', '1');
        } else {
            $('.bcttop').css('visibility', 'hidden');
            $('.bcttop').css('opacity', '0');
        }
    });

    // Click event to scroll to top
    $('.bcttop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    
});
