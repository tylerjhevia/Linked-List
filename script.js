var websiteTitleInput = document.querySelector('.website-title-input');
var websiteURLInput = document.querySelector('.website-URL-input');
var enterButton = document.querySelector('.enter-button');

//mark button as read
$('.read-button').on('click', function() {
  $(this).toggleClass('read');
});
