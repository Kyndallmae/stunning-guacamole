var searchBarEL = $('#searchBar');
var locationInput = $('#searchInput');
var cheap = $('#cheap');
var moderate = $('#moderate');
var expensive = $('#expensive');


function handleFormSubmit (event) {
    event.preventDefault();
    console.log(locationInput[0].value) 
}

function getApi() {
    var requestUrl = ' '
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
    })} 







searchBarEL.on('submit', handleFormSubmit)


getApi();



//use the url
//fetch request response.then
//create a var with location param 
//var for price param as well
// %2 is an empty space