var websiteTitleInput = $('.website-title-input');
var websiteURLInput = $('.website-url-input');
var enterButton = document.querySelector('.enter-button');
var alertMessage = 'Please enter a website name and a URL';

$(".website-title-input").keyup(function() {
  changeDisabledState();
})
// Can I combine these two?
$(".website-url-input").keyup(function() {
  changeDisabledState();
})

// create new bookmark with inputted title and url
enterButton.addEventListener('click', function() {
  event.preventDefault();
  changeDisabledState();
  var websiteName = websiteTitleInput.val();
  var websiteURL = websiteURLInput.val();
  createBookmark(websiteName, websiteURL);
  // clearing input fields on click
})

function changeDisabledState() {
  if (websiteTitleInput.val() !== "" && websiteURLInput.val() !== "") { return enterButton.disabled = false }
  return enterButton.disabled = true;
}

function clearInputFields() {
  websiteTitleInput.val("");
  websiteURLInput.val("");
}

function createBookmark(name, url) {
  $('.right-side').append(`<div class="website-info">
    <p class="website-name"> ${name} </p><hr>
    <p class="website-url"> ${url} </p><hr>
    <button class="read-button" type="submit" value="Read">Read</button>
    <button class="remove-button" type="submit" value="remove">remove</button>
  </div>`);
  clearInputFields();
}


//remove bookmark entirely
$('.right-side').on('click', '.remove-button', function() {
   $(this).parents('.website-info').remove();
});

// // mark button as read
// $('.right-side').on('click', function() {
//   $(this).toggleClass('read-button');
// });
