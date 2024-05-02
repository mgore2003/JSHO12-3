"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: 
      Date:   

      Filename: project12-03.js
*/
// Apply click() method to article > h2 selector
$("article > h2").click(function() {
    // Declare variables
    var heading = $(this);
    var list = heading.next();
    var headingImage = heading.children("img");

    // Alternate between hiding and showing the content of the lists
    list.slideToggle(500);

    // Change the symbol displayed in the headings
    var src = headingImage.attr("src");
    if (src === "plus.png") {
        headingImage.attr("src", "minus.png");
    } else {
        headingImage.attr("src", "plus.png");
    }
});


