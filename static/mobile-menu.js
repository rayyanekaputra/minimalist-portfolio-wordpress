$(document).ready(function () {

    // Link Visited Navbar
$('.navbar a').on('click', function (e) {
  // e.preventDefault(); // Prevent default link behavior
  $('.navbar a').removeClass('activeLink'); // Remove active class from all links
  $(this).addClass('activeLink'); // Add active class to clicked link
  console.log('Link clicked:', $(this).attr('href')); // Log clicked link
});



  /* 
    
    logikanya kalau mendeteksi dia inview, harus ketemu "element" atau section dengan viewport yang keliatan

    Document:
+----------------------------+
|                            |
|        elementTop          |
|     [ Element ]            |
|        elementBottom       |
|                            |
+----------------------------+

Viewport:
+----------------------------+
|                            |
|       viewportTop          |
|    [ Visible Area ]        |
|      viewportBottom        |
|                            |
+----------------------------+
    
    
    */

  //deteksi view
  $(window).scroll(function () {
    //isInView funtion to detect inview by checking overlap
    function isInView(element) {
      const elementTop = $(element).offset().top;
      const elementBottom = elementTop + $(element).outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();

      return elementBottom > viewportTop && elementTop < viewportBottom;
    }
    $("section").each(function () {
      if (isInView($(this)) && $(this).hasClass("work")) {
        console.log("im here");
        $('.navbar').addClass('sticky');
      } else {
        $('.navbar').removeClass('sticky');
      }
    });
  });

    $(window).scroll(function () {
      if($(window).scrollTop() >= 700){

          $('.navbar').addClass('sticky');
      } else{
          $('.navbar').removeClass('sticky');
      }

    });
});
