/*=======================================================================
                        popup section
======================================================================*/
$(document).ready(function(){
    setTimeout(function(){
        $('#popUpMain').css('display','block');
    },500);
});
$('.submit').click(function(){
    $('#popUpMain').css('display','none');
});

/*=======================================================================
                        main section
======================================================================*/
$(function() {
    $('#team-members').owlCarousel({
        items:2,
        autoplay:true,
        smartspeed:700,
        loop: true,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0:{
                items:1
            },
            400:{
                items:2
            }
        }
    });
});

$('.form-group').click(function(){
    $('.form-control').css('background','white')
})

// responsive tabs-------------------------------------------
// $(function () {
//     $('#services-tabs').responsiveTabs({
//         startCollapsed: 'accordion'
//     });
// });


// Portfolio--------------------------------------------------
$(window).on('load', function() {
    

    // isotope initiallization
    $("#isotope-container").isotope({
     });
     $("#isotope-filters").on('click','button',function(){
        var filterValue = $(this).attr('data-filter');

        $("#isotope-container").isotope({
            filter: filterVlaue
        });

        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
     });
      
    
});

// Testimonial seactions-----------------------------------------------
$(function(){
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay:false,
        smartspeed:700,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></i>',
                 '<i class="fa fa-angle-right"></i>']
    });
});

//Stats section here-----------------------------------
$(function(){
    $('.counter').counterUp({
        delay:10,
        time: 3000
    });
});

//Clients section--------------------------------------------------- 
$(function(){
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay:false, 
        smartspeed:700,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></i>',
                 '<i class="fa fa-angle-right"></i>'],
        responsive: {
                    0:{
                        items:2
                    },
                    480:{
                        items:3
                    },
                    768:{
                        items:6
                    }
                }
    });
});

// Navigation system------------------------------------------
$(function() {

    showHideNav();

    $(window).scroll(function(){
        showHideNav();
    });

    function showHideNav(){
        if($(window).scrollTop() > 150) {
            //alert("you cross the scroll position");

            $("nav").addClass("white-nav-top");

            // $(".navbar-brand h3").attr("h3","color:grey");

            $("#back-to-top").fadeIn();
        }
        else{
            $("nav").removeClass("white-nav-top");

            $(".navbar-brand h3").attr("src","img/logo/logo.png");
            $("#back-to-top").fadeOut();
        }
    }
});

// smoothe scrolling-----------------------------
$(function() {
    $("a.smooth-scroll").click(function(event) {

        event.preventDefault();

        //get section id
        var section_id = $(this).attr("href");

        $("html,body").animate({
            scrollTop:$(section_id).offset().top-64
        }, 1250 ,"easeInOutExpo");
    });
});

/*=======================================================================
                        Gallery Page
======================================================================*/
$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'All'){
            $('.itembox').show('1000');
        }
        else{
            $('.itembox').not('.'+value).hide('1000');
            $('.itembox').filter('.'+value).show('1000');
            
        }
    });
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});

/*=======================================================================
                        mobile menue Section
======================================================================*/

$(function(){
    //show mobile nav
    $("#mobile-nav-open-btn").click(function(){        
        $("#mobile-nav").css("height","100%");
    });
    //hide mobile nav
    $("#mobile-nav-close-btn,#mobile-nav a").click(function(){        
        $("#mobile-nav").css("height","0%");
        });
});