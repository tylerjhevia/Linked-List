var websiteTitleInput = document.querySelector('.website-title-input');
var websiteURLInput = document.querySelector('.website-url-input');
var enterButton = document.querySelector('.enter-button');

var websiteName
var urlName


enterButton.addEventListener('click', function()  {
  event.preventDefault();
  console.log ('yo');
   websiteName = websiteTitleInput.value;
   urlName = websiteURLInput.value;
});

$('.enter-button').on('click', function () {     // Appending text from input fields to right side
  websiteName = $('.website-title-input').val();
  urlName = $('.website-url-input').val();
  $('.li-website-title').text(websiteName);
  $('.li-website-url').text(urlName);
  $('.right-side').append($ ('.website-title-input').val() );
  $('.right-side').append($ ('.website-url-input').val() );
});
