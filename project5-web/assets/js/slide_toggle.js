$(document).ready(function () {
     $(".curr-bar button").click(function () {
          $("ul.part-1").fadeToggle();
          $("ul.part-2").fadeOut();
     });

     $(".lang-bar button").click(function () {
          $("ul.part-2").fadeToggle();
          $("ul.part-1").fadeOut();
     });

     $("i.sear-i-tag-2").click(function () {
          $(".rel-i-search").fadeToggle();

     });

     $(".menu-list i").click(function () {
          $(".nav-link").slideToggle();
          $(".rel-i-search").fadeOut();
     });
});

$(document).ready(function () {
     $(".transport-tut-btn button").click(function () {
          $(".back-work-tut").show();
          $("body").addClass("overlay")
     });
     $(".close-tut i").click(function () {
          $(".back-work-tut").hide();
          $("body").removeClass("overlay")
     });
})