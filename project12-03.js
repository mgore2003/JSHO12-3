"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: 
      Date:   

      Filename: project12-03.js
*/
$("article > h2").click( e => {
	var heading = $(this);
	var list = heading.next();
	var headingImage = heading.children("img");
	list.slideToggle(500);
	var src = headingImage.attr("src");
	if (src === "plus.png") {
		headingImage.attr("src", "minus.png");
	} else {
		headingImage.attr("src", "plus.png");
	}
});

