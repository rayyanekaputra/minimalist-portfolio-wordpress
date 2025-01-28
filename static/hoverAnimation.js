$(document).ready(function () {
  /**
   * Splits text into characters, words, or lines using jQuery.
   * @param {jQuery} $element - The jQuery element containing the text.
   * @param {string} type - The type of split: 'chars', 'words', 'lines'.
   */
  function splitText($element, type) {
    // Check if the element is a collection of elements
    if ($element.length > 1) {
      //console.log("Multiple elements found, processing each individually...");
      $element.each(function () {
        //console.log("Processing element:", this);
        splitText($(this), type); // Recursively apply the function to each element
      });
      return 0;
    }
  
    const originalText = $element.text();
    const lines = [];
  
    //console.log("Original text:", originalText);
  
    // Helper: Wrap text in a span
    const wrapText = (text, className) =>
      `<span class="${className}">${text}</span>`;
  
    if (type === "chars") {
      //console.log("Processing by characters...");
      $element.html(
        originalText
          .split("")
          .map((char) => {
            //console.log("Character:", char === " " ? "&nbsp;" : char);
            return wrapText(char === " " ? "&nbsp;" : char, "char");
          })
          .join("")
      );
    } else if (type === "words") {
      //console.log("Processing by words...");
      $element.html(
        originalText
          .split(" ")
          .map((word) => {
            //console.log("Word:", word);
            return wrapText(word, "word");
          })
          .join(" ")
      );
    } else if (type === "lines") {
      //console.log("Processing by lines...");
      const words = originalText.split(" ");
      $element.html(words.map((word) => wrapText(word, "word")).join(" "));
  
      const tempLines = [];
      $element.children(".word").each(function () {
        const $word = $(this);
        const top = $word.offset().top;
        //console.log("Word position:", top);
        if (!tempLines.length || tempLines[tempLines.length - 1].top !== top) {
          tempLines.push({ top, words: [] });
        }
        tempLines[tempLines.length - 1].words.push($word[0].outerHTML);
      });
  
      tempLines.forEach((line) => {
        //console.log("Line:", line.words.join(" "));
        lines.push(line.words.join(" "));
      });
  
      $element.html(lines.map((line) => wrapText(line, "line")).join(""));
    }
  }
  
 // Usage
 const $navbarText = $(".navbar-text");
 //console.log($navbarText);
 splitText($navbarText, "words"); // Options: 'chars', 'words', 'lines'

 // Event listeners for the split text (now using 'char' class)
 //$(this) itu jquery object, jadi content domnya adadi $(this)[0] tapi kalau native, cukup this isinya dom
 $(".navbar-text .word").each(function () {
   $(this).on("mouseenter", function () {
     //console.log("you're in: " + $(this).text() + " which is " + this);
     
     gsap.to(this, {
       y: -50,
       duration: 0.5,
     });
   });

   $(this).on("mouseleave", function () {
     //console.log("you're leaving: " + $(this).text());
     gsap.to(this, {
       y: 0,
       duration: 0.5,
     });
   });
 });


  // Usage
  const $textElementRayyan = $(".rayyan");
  //console.log($textElementRayyan);
  splitText($textElementRayyan, "chars"); // Options: 'chars', 'words', 'lines'

  // Event listeners for the split text (now using 'char' class)
  //$(this) itu jquery object, jadi content domnya adadi $(this)[0] tapi kalau native, cukup this isinya dom
  $(".rayyan .char").each(function () {
    $(this).on("mouseenter", function () {
      //console.log("you're in: " + $(this).text() + " which is " + this);
      
      gsap.to(this, {
        y: -80,
        duration: 0.5,
      });
    });

    $(this).on("mouseleave", function () {
      //console.log("you're leaving: " + $(this).text());
      gsap.to(this, {
        y: 0,
        duration: 0.5,
      });
    });
  });



});
