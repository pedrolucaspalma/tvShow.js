// Locating the form input in HTML
const form = document.querySelector('#searchForm');                                 

form.addEventListener('submit', async function(e){
    e.preventDefault();

    // Saving input in constant
    const searchTerm = form.elements.query.value;                                   

    makeSearch(searchTerm);
    // Resetting HTML form value to blank;
    form.elements.query.value = '';                                                 
});

const makeImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
            insertImage(result);
        }
    }
}

const makeSearch = async function (searchTerm) {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
            // Parsing the JSON received to a Javascript Object
            .then(res => res.json())
        
            // Error message if promissed is not resolved                                              
            .catch(()=> console.log("Erro"));
            result[0].show.image.medium;
    makeImages(res);
}

const insertImage = (result) => {
    const img = document.createElement('IMG');
    img.src = result.show.image.medium;
    document.body.append(img);
}
