var searchBarEL = $('#searchBar');
var locationInput = $('#searchInput');


function handleFormSubmit (event) {
    event.preventDefault();
    console.log(locationInput[0].value) 
}

searchBarEL.on('submit', handleFormSubmit
)





//use the url
//fetch request response.then
//create a var with location param 
//var for price param as well
// %2 is an empty space