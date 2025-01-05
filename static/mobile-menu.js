$(document).ready(function () {
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

// //deteksi view
//   $(window).scroll(function () {
//     //isInView funtion to detect inview by checking overlap
//     function isInView(element) {
//       const elementTop = $(element).offset().top;
//       const elementBottom = elementTop + $(element).outerHeight();
//       const viewportTop = $(window).scrollTop();
//       const viewportBottom = viewportTop + $(window).height();

//       return elementBottom > viewportTop && elementTop < viewportBottom;
//     }
//     $("section").each(function () {
//       if (isInView(this)) {
//         console.log($(this).attr("class") + " " + "is in view");
//       }
//     });
//   });

  $(window).scroll(function () { 
    const navbarOffset = $('.navbar').offset().top;
    console.log("navbarOffset = " + navbarOffset)
    console.log("scrollTop = " + $(window).scrollTop())
    if($(window).scrollTop() >= navbarOffset){
        
        $('.navbar').addClass('sticky');
    } else{
        $('.navbar').removeClass('sticky');
    }
    
  });
});
