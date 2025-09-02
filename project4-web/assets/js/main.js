$(document).ready(function () {

     $('.theme_slider').slick({
          dots: true,
          infinite: true,
          autoplay: true,
          centerMode: false,
          speed: 700,
          slidesToShow: 1,
          slidesToScroll: 1
     });

     $(".menu").click(function () {
          $(".navigation").slideToggle();
     });

     $(".list-btn").click(function () {
          $(".service-items").slideToggle();
     });

}),

     $(document).ready(function () {
          const $arrow = $('.append-arrows');
          $('.house-list-slider').slick({
               appendArrows: $arrow,
               dots: true,
               infinite: true,
               speed: 1000,
               slidesToShow: 4,
               slidesToScroll: 4,
               responsive: [
                    {
                         breakpoint: 480,
                         settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1
                         }
                    }
               ]
          })

          $('.author-slider').slick({
               infinite: true,
               slidesToShow: 1,
               slidesToScroll: 1
          });

     })



