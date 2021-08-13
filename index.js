const form = document.querySelector('#searchForm');                                 // Locating the form input in HTML

form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;                                   // Saving input in constant

    // const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)  // Using STL in URL to fetch the promise
    // .then(res => res.json())                                                        // Parsing the JSON received to a Javascript Object
    // .catch(()=> console.log("Erro"));                                               // Error message if promissed is not resolved

    makeSearch(searchTerm);

    form.elements.query.value = '';                                                 // Resetting HTML form value to blank;
    
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
    
    makeImages(res);
}

const insertImage = (result) => {
    const img = document.createElement('IMG');
    img.src = result.show.image.medium;
    document.body.append(img);
}