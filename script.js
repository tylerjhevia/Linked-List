var websiteTitleInput = $('.website-title-input');
var websiteURLInput = $('.website-url-input');
var enterButton = document.querySelector('.enter-button');

function countReadBookmarks() {
  var readBookmarks = document.querySelector(".read-bookmarks");
  return readBookmarks.innerHTML = document.querySelectorAll(".right-side .read").length;
  }

function countBookmarks() {
  var bookmarks = document.querySelector(".bookmarks");
  return bookmarks.innerHTML = document.querySelectorAll(".right-side .website-info").length;
}

function countUnreadBookmarks() {
  var totalBookmarks = parseInt(document.querySelectorAll(".website-info").length);
  var readBookmarks = parseInt(document.querySelectorAll(".read").length);
  var unreadBookmarkCount = totalBookmarks - readBookmarks;
  var unreadBookmarks = document.querySelector('.unread-bookmarks');
  return unreadBookmarks.innerHTML = unreadBookmarkCount;
}


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
  var websiteName = websiteTitleInput.val();
  var websiteURL = websiteURLInput.val();
  createBookmark(websiteName, websiteURL);
  // counting bookmarks
  countBookmarks();
  countReadBookmarks();
  countUnreadBookmarks();
  // clearing input fields on click
  changeDisabledState();
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
 countReadBookmarks();
 countUnreadBookmarks();
});

//remove bookmark entirely
$('.right-side').on('click', '.remove-button', function() {
   $(this).parent('.website-info').remove();
  //  removeBookmarks();
   countUnreadBookmarks();
   countReadBookmarks();
   countBookmarks();
});

//remove all read bookmarks
$('.clear-all-button').on('click', function(event){
 event.preventDefault();
 $('.website-info').remove('.backgroundColor');
 countReadBookmarks();
 countUnreadBookmarks();
 countBookmarks();
});

$('#linkedlist').parsley();
