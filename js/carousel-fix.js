document.addEventListener("DOMContentLoaded", function() {
    var carouselPrev = document.querySelector(".carousel-control-prev");
    var carouselNext = document.querySelector(".carousel-control-next");
  
    if (carouselPrev && carouselNext) {
      carouselPrev.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior
        $("#carousel").carousel("prev"); // Move to previous slide
      });
  
      carouselNext.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior
        $("#carousel").carousel("next"); // Move to next slide
      });
    }
  });
  
  