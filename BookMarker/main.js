//https://www.youtube.com/watch?v=DIVfDZZeGxM

//Listen for form submit
document.getElementById('myForm').addEventListener('submit',saveBookmark);

//Save Bookmark
function saveBookmark(e){
  // Get form values (ES5. Don't want to set up Babbel)
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;
  
  if (!validateForm(siteName,siteUrl)){
      return false;
      }
  
  var bookmark = {
    name: siteName,
    url: siteUrl
  }
  
  if(localStorage.getItem('bookmarks') === null){
    var bookmarks = [];
    bookmarks.push(bookmark);
    // turn into string
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
  }
  else{
    //turn into json
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    console.log(bookmarks)
    bookmarks.push(bookmark);
    //reset
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
  }

  // Clear
  document.getElementById('myForm').reset();
  
  fetchBookmarks();
  
  // Prevent form from submitting
  e.preventDefault();
}

function deleteBookmark(url){
  //console.log(url);
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  for(var i=0; i<bookmarks.length; i++){
    if(bookmarks[i].url==url){
      bookmarks.splice(i,1);
    }
  }
  localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
  fetchBookmarks();
}

function fetchBookmarks(){
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  //console.log(bookmarks)
  var bookmarksResults = document.getElementById('bookmarksResults');
  bookmarksResults.innerHTML="";
  for(var i=0; i<bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;
    
    bookmarksResults.innerHTML += `<div class="well">`+
                                  '<h3>' + name +
                                  ' <a class="btn btn-secondary" target="_blank" href="'+url+'">Visit</a> '+
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> '
                                  '</h3>' +
                                  '</div>'
  }
}

function validateForm(siteName,siteUrl){
  if(!siteName || !siteUrl){
    alert('Please fill in the form');
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
  
  if(!siteUrl.match(regex)){
    alert("Please use a vaild URL");
    return false;
  }
  return true
}

/* OLD COMMENTS
  //Local Storage test (string only)
  //localStorage.setItem('test','Hello World');
  //var gotten = localStorage.getItem('test');
  
  
  //localStorage.removeItem('test')*/

