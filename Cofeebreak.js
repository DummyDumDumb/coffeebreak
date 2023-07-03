//This syntax is for the name of the Shop
var coloredText1JS=document.getElementById("coloredText1");
coloredText1JS.style.color="white";
var coloredText2JS=document.getElementById("coloredText2");
coloredText2JS.style.color="gray";
var prev=document.getElementById("carousel-control-prev-icon");
//This syntax here is for the Carousel
$(document).ready(function() {
    var carousel = $(".carousel");
    var width = carousel.width();
    var currentSlide = 0;
    var totalSlides = carousel.children().length;
    function updateCarousel() {
      carousel.css("transform", "translateX(" + -(currentSlide * width) + "px)");
    }
    $(".carousel-container").on("click", ".next", function() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    });
    $(".carousel-container").on("click", ".prev", function() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });
  });