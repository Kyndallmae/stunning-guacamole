var searchBarEL = document.getElementById ('#searchBar');
var locationInput = document.querySelector ('.uk-search-input').value;


console.log(locationInput);

locationInput.addEventListener('click', function () {
    if (locationInput === 0) {
        return
    }
    else (console.log(locationInput))
})

function handleFormSubmit (event) {
    event.preventDefault();

}

//use the url
//fetch request response.then
//create a var with location param 
//var for price param as well
// %2 is an empty space