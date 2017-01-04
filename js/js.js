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

// to do: fill with info stored in object
var cityInfo = [
{
  cityName: "New York",
  cityInfo: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
  cityPicture: "https://static.dezeen.com/uploads/2016/11/black-tower-skyscaper-architecture-news-richard-meier-and-partners-new-york-city-usa_dezeen_sq-411x411.jpg"
},
{
  cityName: "Dubai",
  cityInfo: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.",
  cityPicture: "https://media-cdn.tripadvisor.com/media/photo-s/07/bd/a1/8a/downtown-dubai-cityscape.jpg"
}
{
  cityName: "Paris",
  cityInfo: "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
  cityPicture: "https://media-cdn.tripadvisor.com/media/photo-s/07/03/4d/a9/eiffel-tower.jpg"
}
{
  cityName: "London",
  cityInfo: "Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.",
  cityPicture: "https://www.leonardo-hotels.com/Octopus/Upload/images/Pages/london-1-.jpg"
}
{
  cityName: "Amsterdam",
  cityInfo: "",
  cityPicture: "https://s-media-cache-ak0.pinimg.com/originals/25/22/bf/2522bf67f59cd6f36f7e2ad142f5ec6c.jpg"
}
{
  cityName: "Rio de Janeiro",
  cityInfo: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  cityPicture: "http://www.gohouse.com/wp-content/uploads/sites/1055/2015/05/RIO2.jpg"
}
]