// //All of the following functions are for the archive page of the extension

var currentPage = "archivePage.html"

//------------- BACK BUTTON ----------------------
document.getElementById("back-btn").addEventListener('click', function(e){
    if(currentPage != "popup.html"){
      console.log("Back button pressed.")
      window.location = "popup.html";
    }
    else{console.log("Cannot go back.")};
  });
  