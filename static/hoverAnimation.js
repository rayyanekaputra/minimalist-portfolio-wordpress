$(document).ready(function () {
  /**
   * Splits text into characters, words, or lines using jQuery.
   * @param {jQuery} $element - The jQuery element containing the text.
   * @param {string} type - The type of split: 'chars', 'words', 'lines'.
   */
  function splitText($element, type) {
    const originalText = $element.text();
    const lines = [];

    // Helper: Wrap text in a span
    const wrapText = (text, className) =>
      `<span class="${className}">${text}</span>`;

    if (type === "chars") {
      $element.html(
        originalText
          .split("")
          .map((char) => wrapText(char === " " ? "&nbsp;" : char, "char"))
          .join("")
      );
    } else if (type === "words") {
      $element.html(
        originalText
          .split(" ")
          .map((word) => wrapText(word, "word"))
          .join(" ")
      );
    } else if (type === "lines") {
      const words = originalText.split(" ");
      $element.html(words.map((word) => wrapText(word, "word")).join(" "));

      const tempLines = [];
      $element.children(".word").each(function () {
        const $word = $(this);
        const top = $word.offset().top;
        if (!tempLines.length || tempLines[tempLines.length - 1].top !== top) {
          tempLines.push({ top, words: [] });
        }
        tempLines[tempLines.length - 1].words.push($word[0].outerHTML);
      });

      tempLines.forEach((line) => {
        lines.push(line.words.join(" "));
      });

      $element.html(lines.map((line) => wrapText(line, "line")).join(""));
    }
  }

  // Usage
  const $textElementRayyan = $("#rayyan");
  console.log($textElementRayyan);
  splitText($textElementRayyan, "chars"); // Options: 'chars', 'words', 'lines'

  // Event listeners for the split text (now using 'char' class)
  //$(this) itu jquery object, jadi content domnya adadi $(this)[0] tapi kalau native, cukup this isinya dom
  $("#rayyan .char").each(function () {
    $(this).on("mouseenter", function () {
      console.log("you're in: " + $(this).text() + " which is " + this);
      
      gsap.to(this, {
        y: -80,
        duration: 0.5,
      });
    });

    $(this).on("mouseleave", function () {
      console.log("you're leaving: " + $(this).text());
      gsap.to(this, {
        y: 0,
        duration: 0.5,
      });
    });
  });



  // Usage
  const $textElementEka = $("#eka");
  console.log($textElementEka);
  splitText($textElementEka, "chars"); // Options: 'chars', 'words', 'lines'

  // Event listeners for the split text (now using 'char' class)
  $("#eka .char").each(function () {
    $(this).on("mouseenter", function () {
      console.log("you're in: " + $(this).text());
      gsap.to(this, {
        y: -80,
        duration: 0.5,
      });
    });

    $(this).on("mouseleave", function () {
      console.log("you're leaving: " + $(this).text());
      gsap.to(this, {
        y: 0,
        duration: 0.5,
      });
    });
  });
});
