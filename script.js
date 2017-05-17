var websiteName = $('.website-title-input').val();
var websiteURL = $('.website-url-input').val();
var enterButton = $('.enter-button');
var bookmarks = [];

$('.enter-button').on('click', function() {          // create new bookmark with inputted title and url
  event.preventDefault();
  websiteName = $('.website-title-input').val();
  websiteURL = $('.website-url-input').val();
  console.log("hello");
  $('.right-side').append(`<div class="website-info">
    <p class="website-name"> ${websiteName} </p><hr>
    <a class="website-url" href="${websiteURL}" target="_blank">${websiteURL}</a><hr>
    <button class="read-button" type="submit" value="Read">Read</button>
    <button class="remove-button" type="submit" value="Remove">Remove</button>
  </div>`);
});

//push each new card to an array
var bookmarks = [];
$('.enter-button').on('click', function() {
    bookmarks.push($('.website-title-input').val());
      console.log(bookmarks);
});


//write a counting function- count length of array and show #, run function every time the enter button is clicked
//write a function on removal of card: get title, find title in array, remove from array completely
//run count function again to reestablish length of array
//display number on interface

$('.enter-button').on('click', function() {      // clearing input fields on click
  event.preventDefault();
  websiteName = $('.website-title-input').val('');
  websiteURL = $('.website-url-input').val('');
});

// mark button as read
$('.right-side').on('click', 'button.read-button', function() {
  $(this).toggleClass('read');
  $(this).parent().toggleClass('backgroundColor');
});

//remove bookmark entirely
$('.right-side').on('click', '.remove-button', function() {
    $(this).parent('.website-info').remove();
});
