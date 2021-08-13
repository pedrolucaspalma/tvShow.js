//Getting user input from form
const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;

    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    .then(res => res.json())
    .catch(()=> console.log("Erro"));

    // console.log(res[0].show.image.medium)

    const img = document.createElement('IMG');
    img.src = res[0].show.image.medium;

    document.body.append(img);


    // console.log(res[0])

    // setTimeout( () => console.log(response), 5000);
    
});

