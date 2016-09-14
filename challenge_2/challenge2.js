$(function(){

// The code below answers #3 question by changing every instance of the word "Bacon" with "LASER VISION."
// 3. Change every instance of the word "bacon" on the page to be "LASER VISION"

	var stringToReplace = $('body').html().replace(/Bacon/gi, 'LASER VISION');
  	$('body').html(stringToReplace);

// The code below answers the #1 question to change the color of the title each time it is clicked.
// 1. Any time someone clicks on the title at the top "feed template,"
//      make the color of the "feed template" text change from black to red
//      and then from red to black when clicked again.

	var h1IsRed = false;
  $('h1').css('cursor', 'pointer')
  .on('click', function (event) {
    var changeColor = $(event.target);
    if (!h1IsRed) {
      changeColor.css('color', 'red');
      h1IsRed = true;
    } else {
      changeColor.css('color', 'black');
      h1IsRed = false;
    }
  });

// The code below answers the #2 question which is to hide the odd-numbered section links/menus.
// 2. The links on the side of the page – "section 1," "section 2," etc. –
//      hide every odd-numbered menu wihtout referencing them by id.

	$( "h5:odd" ).hide();

// I found out that there are several codes that can be used to answer the #4 question to delete the last two posts n the middle section.
// The first code below repeats the remove method to do the task. And it is commented out.
//  4. Delete the last two posts in the middle section (they have a CSS class "post"

	 // $('.post:last').remove();
	 // $('.post:last').remove();
	 // $('.post:last').remove();

// This is the second code that can also answer #4 question but it is commented out as well.

  // $('.post').remove(':gt(3)');

// This is the code that I am using to answer #4 question. All of the three codes can accomplish the same thing.

     $('.post:gt(3)').remove();
	
// This is the code to answer #5 question to remove the images in the right column.
// 5. Remove the images in the right column

	$('aside').remove();
	
});