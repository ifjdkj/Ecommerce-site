$(document).ready(function () {
     $('.slider-row').slick({
          autoplay: true,
          dots: true,
          infinite: true,
          speed: 400,
          slidesToShow: 1,
          slidesToScroll: 1
     })

     $('.test-slider').slick({
          dots: true,
          infinite: true,
          autoplay: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
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

     $('.leadership-slider').slick({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
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

     $('.featured-product-slider').slick({
          dots: true,
          infinite: true,
          speed: 800,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
               {
                    breakpoint: 480,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1
                    }
               }
          ]
     })

     $('.blg-nws-slider').slick({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
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

     $('.company-connection-slider').slick({
          dots: false,
          autoplay: true,
          infinite: true,
          speed: 800,
          slidesToShow: 6,
          slidesToScroll: 1,
          responsive: [
               {
                    breakpoint: 480,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1
                    }
               }
          ]
     })

});