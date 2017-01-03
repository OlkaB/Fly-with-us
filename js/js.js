// --------  MODAL WINDOW FOR GALLERY

var galleryItmsToClick = document.getElementById("destinationsGallery").getElementsByTagName("figure"), galleryItmsToClickLength = galleryItmsToClick.length, closeModalXBttn = document.getElementById("closeModalXBttn").addEventListener("click", toggleModalVisibility);
console.log(galleryItmsToClick);
for (var i=0; i<galleryItmsToClickLength; i++){
  galleryItmsToClick[i].addEventListener("click", toggleModalVisibility);
}




function toggleModalVisibility(){
 var popWindow = document.getElementById("popUpWind");
 console.log(popWindow.style);
 popWindow.style.visibility = popWindow.style.visibility == "visible" ? popWindow.style.visibility = "hidden" : popWindow.style.visibility = "visible";
}

// to do fill with info stored in object