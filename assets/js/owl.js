// inedex page banner slider one 
$(document).ready(function(){
    $(".index-page-banner-slider-one").owlCarousel({
        items:1,
        autoplay:true,
        loop:true,
        nav: true,
        dots:false,
        navText: ["<span class='prev'>  <  </span>", "<span class='next'> > </span>"],
        margin_bottom:0,
    });
  });
// inedex page banner slider one 
$(document).ready(function(){
    $(".project_intruducing").owlCarousel({
        items:6,
        autoplay:true,
        loop:true,

        margin_bottom:0,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:6
            }
        }
    });
  });
// inedex page banner slider one 

   // TESTIMONIAL SLIDER about page 
   $('.testimonial_owlCarousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    autoplay:false,   
    smartSpeed: 3000, 
    autoplayTimeout:4000,
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
// testimonial end here 
$(document).ready(function(){
  $(".our_clint_slider").owlCarousel({
      items:6,
      autoplay:true,
      loop:true,
      nav: true,
      dots:false,
      margin:10,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:6
        }
      }
  });
});
// inedex page banner slider one 






 