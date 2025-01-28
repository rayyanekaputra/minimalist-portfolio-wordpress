$(document).ready(function () {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.05,
  });
// //console.log(locoScroll)
$(".navbar a").on("click", function (e) {
  e.preventDefault(); // Prevent default link behavior

  const targetID = $(this).attr("href"); // Get the href attribute of the clicked link

  // Check if the link is an external URL
  if (targetID.startsWith("http") || targetID.startsWith("www")) {
    //console.log("External link clicked:", targetID);
    window.open(targetID, "_blank"); // Open the external link
    return; // Exit the function
  }

  // Check if the link is an internal anchor link (starts with #)
  if (targetID.startsWith("#")) {
    const $target = $(targetID); // Select the target element using the ID

    // Check if the target exists in the DOM
    if ($target.length) {
      // Use Locomotive Scroll to scroll to the target
      $(".navbar a").removeClass("activeLink"); // Remove active class from all links
      $(this).addClass("activeLink"); // Add active class to clicked link
      //console.log("Internal link clicked:", targetID); // Log clicked link
      locoScroll.scrollTo($target[0]); // Scroll to the target
    } else {
      console.error(`Invalid target: ${targetID}`);
    }
  } else {
    console.error(`Invalid link: ${targetID}`);
  }
});

  window.locoScroll = locoScroll;
  
});
