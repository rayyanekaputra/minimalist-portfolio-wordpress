$(document).ready(function () {
  let sections = [];

  $.each($("section"), function (indexInArray, valueOfElement) {
    //  //console.log($(valueOfElement).attr('data-scroll-call'))
    sections.push($(valueOfElement).attr("data-scroll-call"));
  });

  locoScroll.on("call", (dataScrollCallName, direction, objElement) => {
    //console.log(dataScrollCallName, direction, objElement)
    if (sections.includes(dataScrollCallName) && direction === "enter") {
      $(objElement.el).find()
    }
  });
});
