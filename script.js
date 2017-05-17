var websiteTitleInput = $('.website-title-input');
var websiteURLInput = $('.website-url-input');
var enterButton = document.querySelector('.enter-button');
var bookmarkCount = 0;


  // function validateURL() {if(/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test($("#url").val())){
  //     alert("valid URL");
  // } else {
  //     return alert("invalid URL");
  // }}


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
  // countBookmarks();
  // validateURL();
  var websiteName = websiteTitleInput.val();
  var websiteURL = websiteURLInput.val();
  createBookmark(websiteName, websiteURL);
  changeDisabledState();
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
    <a href="${url}" target="_blank"  class="website-url"> ${url} </a><hr>
    <button class="read-button" type="submit" value="Read">Read</button>
    <button class="remove-button" type="submit" value="remove">Remove</button>
  </div>`);
  clearInputFields();
}

// mark button as read
$('.right-side').on('click', 'button.read-button', function() {
 $(this).toggleClass('read');
 $(this).parent().toggleClass('backgroundColor');
});

//remove bookmark entirely
$('.right-side').on('click', '.remove-button', function() {
    $(this).parent('.website-info').remove();
    countBookmarks();
});

//remove all read bookmarks
$('.clear-all-button').on('click', function(event){
  event.preventDefault();
  $('.website-info').remove('.backgroundColor');
});
