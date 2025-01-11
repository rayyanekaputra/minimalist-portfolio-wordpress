jQuery(document).ready(function ($) {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.05,
  });
// console.log(locoScroll)
  $(".navbar a").on("click", function (e) {
    e.preventDefault();

    // Get the target ID from the href attribute
    const targetID = $(this).attr("href"); // Example: '#section1'
    const $target = $(targetID); // Select the target element

    // Check if the target exists
    if ($target.length) {
      // Use Locomotive Scroll to scroll to the target
      $(".navbar a").removeClass("activeLink"); // Remove active class from all links
      $(this).addClass("activeLink"); // Add active class to clicked link
      console.log("Link clicked:", $(this).attr("href")); // Log clicked link
      console.log($target);
      locoScroll.scrollTo($target[0]);
    } else {
      console.error(`Invalid target: ${targetID}`);
    }
  });

  window.locoScroll = locoScroll;
  
});
