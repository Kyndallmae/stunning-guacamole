var searchBarEL = $('#searchBar');
var locationInput = $('#searchInput');
var cheap = $('#cheap');
var moderate = $('#moderate');
var expensive = $('#expensive');
var customerInput = [];

async function handleFormSubmit(event) {
  event.preventDefault();
  document.getElementById("tacoPlaces").innerHTML = " ";
  customerInput.push(locationInput[0].value);
  savedSearch();
  console.log(locationInput[0].value)
  await gettTacos(locationInput[0].value);
}

function savedSearch() {
  localStorage.setItem("customerInput", JSON.stringify(customerInput));
}

async function gettTacos(location) {
  const requestUrl = 'https://places.googleapis.com/v1/Text:search'
  var request = {
    textQuery: 'tacos in' + location,
    priceLevels: []
  };
  var result = await fetch(requestUrl, {
    method: "POST",
    headers: {
      "X-Goog-FieldMask": "places.displayName,places.formattedAddress,places.priceLevel",
      "X-Goog-Api-Key": "AIzaSyAAZqtqmJTz0JhmnDCq3Pc-xDL5XcsrwAU",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request)
  })
    .catch(err => console.error(err));

  var restaurants = await result.json();
  restaurants.places.forEach(place => createPlaceCard(place));

}

function createPlaceCard(place) {
  var html = '';
  html += '<div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">';
  html += '<h3 class="uk-card-title">' + place.displayName.text + '</h3>';
  html += '<p>' + place.formattedAddress + '</p>';
  html += '</div>';

  document.getElementById("tacoPlaces").innerHTML += html;
}

searchBarEL.on('submit', handleFormSubmit)

document.addEventListener("DOMContentLoaded", () => {
  fetchCatImage()
  btnClick();
})

function fetchCatImage(){
  let image = document.getElementById("cat-image")
  fetch('https://api.thecatapi.com/v1/images/search')
  .then(resp => resp.json())
  .then(json => image.src = json[0].url)
}

function btnClick(){
  let button = document.getElementById("new-cat-btn")
  button.addEventListener("click", fetchCatImage)
}


