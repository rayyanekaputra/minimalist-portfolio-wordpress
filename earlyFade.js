jQuery(document).ready(function ($) {
  var tl = gsap.timeline();


  locoScroll.on("call", (dataScrollCallName, direction) => {
    if (dataScrollCallName.length > 0 && direction === "enter") {
     if (dataScrollCallName === "showHero") {
      console.log("im in hero");
      tl.from(".navbar h2", { opacity: 0, duration: 0.5, stagger: 0.1}, 1);
      tl.from(".hero span", { opacity: 0, duration: 0.5, stagger: 0.1});
      tl.from(".hero p", { opacity: 0, duration: 1, stagger: 1});
    } else if (dataScrollCallName === "showWork") {
      console.log("im in work");
      gsap.from(".boxes", { opacity: 0, duration: 0.5, stagger: 0.1, delay: 1});
    } else if (dataScrollCallName === "showFooter") {
      console.log("im in footer");
    } else {
      console.log("no section detected");
    }
    }
  });
});
